require('dotenv').config();

const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');
const { MongoClient, ObjectId } = require('mongodb');

const PORT = process.env.PORT || 3000;
const ROOT = __dirname;
const PUBLIC_ROOT = path.resolve(__dirname, '..');
const DIST_ROOT = path.resolve(PUBLIC_ROOT, 'dist');
const FIREBASE_PROJECT_ID = process.env.FIREBASE_PROJECT_ID || 'free-sewaa';
const FALLBACK_LISTING_IMAGE = 'https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=900&q=80';
const MAX_INLINE_IMAGE_LENGTH = 180000;

const PUBLIC_PAGE_ALIASES = {
  '/auth-choice.html': 'auth_choice.html',
  '/admin-login.html': 'admin_login.html',
  '/user-panel.html': 'user_panel.html',
  '/security-audit.html': 'security_audit.html'
};
const REACT_PAGE_PATHS = new Set(['/']);

const MONGODB_URI = process.env.MONGODB_URI || process.env.MONGO_URI;
const DB_NAME = process.env.DB_NAME || 'freesewaa';
const SUPER_ADMIN_EMAILS = String(process.env.SUPER_ADMIN_EMAILS || process.env.SUPER_ADMIN_EMAIL || '')
  .split(',')
  .map(email => email.trim().toLowerCase())
  .filter(Boolean);
const SUPER_ADMIN_USER_IDS = String(process.env.SUPER_ADMIN_USER_IDS || process.env.SUPER_ADMIN_USER_ID || '')
  .split(',')
  .map(id => id.trim())
  .filter(Boolean);
const EMAIL_ONLY_MESSAGE = 'Please use a real email address from a recognized email provider.';
const VERIFIED_EMAIL_ONLY_MESSAGE = 'Please sign in with a verified real email account.';
const PASSWORD_POLICY_MESSAGE = 'Password must be 8-10 characters and include uppercase, lowercase, and a number.';
const DEMO_EMAIL_DOMAINS = new Set([
  'demo.com',
  'example.com',
  'example.net',
  'example.org',
  'localhost',
  'test.com'
]);
const RECOGNIZED_EMAIL_DOMAINS = new Set([
    'aol.com',
    'daum.net',
    'freesewaa.local',
    'gmail.com',
    'hanmail.net',
    'hotmail.com',
    'icloud.com',
    'kakao.com',
    'live.com',
    'mac.com',
    'me.com',
    'msn.com',
    'nate.com',
    'naver.com',
    'outlook.com',
    'proton.me',
    'protonmail.com',
    'yahoo.com',
    'yandex.com',
    'zoho.com'
]);

if (!MONGODB_URI) {
  console.error('❌ Missing MongoDB connection string. Set MONGODB_URI (or MONGO_URI) in environment variables.');
  process.exit(1);
}

const client = new MongoClient(MONGODB_URI);

let db;
let usersCollection;
let statesCollection;
let metaCollection;
let listingsCollection;
let requestsCollection;
let conversationsCollection;
let messagesCollection;
let notificationsCollection;
let suggestionsCollection;
let reviewsCollection;

function defaultUserState(user) {
  const name =
    [user.firstName, user.lastName].filter(Boolean).join(' ').trim() ||
    user.name ||
    'Free Sewaa Member';

  const city = user.city || 'Ulsan';
  const region = user.region || 'Nam-gu';

  return {
    user: {
      id: user.id,
      name,
      firstName: user.firstName || name.split(' ')[0] || 'Member',
      lastName: user.lastName || name.split(' ').slice(1).join(' '),
      email: user.email || '',
      phone: user.phone || '',
      city,
      region,
      joinedAt: user.createdAt || new Date().toISOString(),
      bio: 'Community member helping useful items reach the people who need them most.',
      pickupAvailability: 'Weekdays after 6 PM · Weekend afternoon',
      savedListingIds: [],
      requestedListingIds: [],
      drafts: {},
      preferences: {
        theme: 'dark',
        language: 'English',
        notifications: true,
        pickupReminders: true,
        marketing: false
      }
    }
  };
}

function defaultDemoUser() {
  return {
    id: 'user-demo',
    firstName: 'Ram',
    lastName: 'Pathak',
    name: 'Ram Pathak',
    email: 'pathakram09555@gmail.com',
    password: '123456',
    phone: '+8201096646162',
    city: 'Ulsan',
    region: 'Nam-gu',
    role: 'user',
    createdAt: new Date().toISOString()
  };
}

function defaultDemoAdmin() {
  return {
    id: 'admin-demo',
    firstName: 'Admin',
    lastName: 'User',
    name: 'Admin User',
    email: 'admin@freesewaa.local',
    password: 'admin12345',
    city: 'Ulsan',
    region: 'Nam-gu',
    role: 'superadmin',
    createdAt: new Date().toISOString()
  };
}

function safeUser(user) {
  if (!user) return null;
  const { password, _id, ...rest } = user;
  return rest;
}

function isSuperAdminUser(user) {
  if (!user) return false;
  return user.role === 'superadmin';
}

function isConfiguredSuperAdmin(user) {
  if (!user) return false;
  const email = String(user.email || '').trim().toLowerCase();
  const id = String(user.id || '').trim();
  return (
    (email && SUPER_ADMIN_EMAILS.includes(email)) ||
    (id && SUPER_ADMIN_USER_IDS.includes(id))
  );
}

function getUserId(req, url) {
  return (
    url.searchParams.get('userId') ||
    req.headers['x-user-id'] ||
    req.headers['userid'] ||
    null
  );
}

function getUserDisplayName(user) {
  if (!user) return 'Free Sewaa Member';
  return (
    user.name ||
    [user.firstName, user.lastName].filter(Boolean).join(' ').trim() ||
    user.email ||
    user.phone ||
    'Free Sewaa Member'
  );
}

function normalizeDoc(doc) {
  if (!doc) return null;
  const clone = { ...doc };
  if (clone._id) {
    clone._id = String(clone._id);
  }
  return clone;
}

function normalizeListingForClient(listing) {
  const normalized = normalizeDoc(listing);
  if (!normalized) return null;

  if (typeof normalized.image === 'string' && normalized.image.length > MAX_INLINE_IMAGE_LENGTH) {
    normalized.image = FALLBACK_LISTING_IMAGE;
    normalized.imageWasTooLarge = true;
  }

  return normalized;
}

function sanitizeListingImage(image) {
  const value = String(image || '').trim();
  if (!value) return FALLBACK_LISTING_IMAGE;
  if (value.length > MAX_INLINE_IMAGE_LENGTH) return FALLBACK_LISTING_IMAGE;
  return value;
}

function buildAuthQuery(email = '', phone = '') {
  const normalizedEmail = String(email || '').trim().toLowerCase();
  const normalizedPhone = normalizeUserPhone(phone);

  const query = [];
  if (normalizedEmail) query.push({ email: normalizedEmail });
  if (normalizedPhone) query.push({ phone: normalizedPhone });

  return {
    normalizedEmail,
    normalizedPhone,
    query
  };
}

function decodeBase64UrlJson(value = '') {
  const normalized = String(value).replace(/-/g, '+').replace(/_/g, '/');
  const padded = normalized.padEnd(normalized.length + ((4 - (normalized.length % 4)) % 4), '=');
  return JSON.parse(Buffer.from(padded, 'base64').toString('utf8'));
}

function decodeFirebaseToken(idToken = '') {
  const parts = String(idToken || '').split('.');
  if (parts.length < 2) {
    throw new Error('Invalid Firebase token.');
  }

  return decodeBase64UrlJson(parts[1]);
}

function isExpectedFirebaseToken(claims) {
  const now = Math.floor(Date.now() / 1000);
  return (
    claims &&
    claims.aud === FIREBASE_PROJECT_ID &&
    claims.iss === `https://securetoken.google.com/${FIREBASE_PROJECT_ID}` &&
    Number(claims.exp || 0) > now
  );
}

function getNameParts({ firstName = '', lastName = '', displayName = '', email = '' } = {}) {
  const cleanFirst = String(firstName || '').trim();
  const cleanLast = String(lastName || '').trim();
  if (cleanFirst || cleanLast) {
    return { firstName: cleanFirst || 'Member', lastName: cleanLast };
  }

  const fallbackName =
    String(displayName || '').trim() ||
    String(email || '').split('@')[0].replace(/[._-]+/g, ' ').trim() ||
    'Free Sewaa Member';
  const parts = fallbackName.split(/\s+/).filter(Boolean);

  return {
    firstName: parts[0] || 'Member',
    lastName: parts.slice(1).join(' ')
  };
}

async function ensureIndexes() {
  await usersCollection.createIndex({ email: 1 }, { unique: true, sparse: true });
  await usersCollection.createIndex({ phone: 1 }, { unique: true, sparse: true });
  await usersCollection.createIndex({ id: 1 }, { unique: true });

  await statesCollection.createIndex({ userId: 1 }, { unique: true });

  await listingsCollection.createIndex({ id: 1 }, { unique: true });
  await listingsCollection.createIndex({ ownerId: 1 });
  await listingsCollection.createIndex({ status: 1 });
  await listingsCollection.createIndex({ category: 1 });

  await requestsCollection.createIndex({ id: 1 }, { unique: true });
  await requestsCollection.createIndex({ listingId: 1 });
  await requestsCollection.createIndex({ requesterId: 1 });
  await requestsCollection.createIndex({ ownerId: 1 });

  await conversationsCollection.createIndex({ id: 1 }, { unique: true });
  await conversationsCollection.createIndex({ participantIds: 1 });

  await messagesCollection.createIndex({ conversationId: 1 });
  await messagesCollection.createIndex({ createdAt: 1 });

  await notificationsCollection.createIndex({ id: 1 }, { unique: true });
  await notificationsCollection.createIndex({ userId: 1 });
  await notificationsCollection.createIndex({ read: 1 });

  await suggestionsCollection.createIndex({ id: 1 }, { unique: true });
  await suggestionsCollection.createIndex({ userId: 1 });
  await suggestionsCollection.createIndex({ createdAt: -1 });

  await reviewsCollection.createIndex({ id: 1 }, { unique: true });
  await reviewsCollection.createIndex({ createdAt: -1 });
  await reviewsCollection.createIndex({ rating: 1 });
}

/**
 * Seed demo user, admin, and sample data if they don't exist.
 */
async function ensureSeedData() {
  let existingUser = await usersCollection.findOne({ id: 'user-demo' });

  if (!existingUser) {
    const demoUser = defaultDemoUser();
    await usersCollection.insertOne(demoUser);
    existingUser = demoUser;
  }

  if (existingUser) {
    if (existingUser.role !== 'user') {
      await usersCollection.updateOne({ id: existingUser.id }, { $set: { role: 'user', updatedAt: new Date().toISOString() } });
      existingUser.role = 'user';
    }
  }

  let existingAdmin = await usersCollection.findOne({ id: 'admin-demo' });
  if (!existingAdmin) {
    const demoAdmin = defaultDemoAdmin();
    await usersCollection.insertOne(demoAdmin);
    existingAdmin = demoAdmin;
  }

  if (existingAdmin) {
    if (existingAdmin.role !== 'superadmin') {
      await usersCollection.updateOne({ id: existingAdmin.id }, { $set: { role: 'superadmin', updatedAt: new Date().toISOString() } });
      existingAdmin.role = 'superadmin';
    }
  }

  if (SUPER_ADMIN_EMAILS.length || SUPER_ADMIN_USER_IDS.length) {
    const superAdminQuery = [];
    if (SUPER_ADMIN_EMAILS.length) superAdminQuery.push({ email: { $in: SUPER_ADMIN_EMAILS } });
    if (SUPER_ADMIN_USER_IDS.length) superAdminQuery.push({ id: { $in: SUPER_ADMIN_USER_IDS } });

    if (superAdminQuery.length) {
      await usersCollection.updateMany(
        { $or: superAdminQuery },
        { $set: { role: 'superadmin', updatedAt: new Date().toISOString() } }
      );
    }
  }

  const existingState = await statesCollection.findOne({ userId: existingUser.id });
  if (!existingState) {
    await statesCollection.insertOne({
      userId: existingUser.id,
      state: defaultUserState(existingUser)
    });
  }

  const existingAdminState = await statesCollection.findOne({ userId: existingAdmin.id });
  if (!existingAdminState) {
    await statesCollection.insertOne({
      userId: existingAdmin.id,
      state: defaultUserState(existingAdmin)
    });
  }

  const listingsCount = await listingsCollection.countDocuments();
  if (listingsCount === 0) {
    const name = existingUser.name;
    const city = existingUser.city || 'Ulsan';

    const seedListings = [
      {
        id: 'listing-201',
        ownerId: existingUser.id,
        ownerName: name,
        title: 'Winter Jacket',
        category: 'Clothing',
        condition: 'Good',
        location: `${city}, Samsan-dong`,
        distanceKm: 4,
        pickup: 'Pickup only',
        pickupWindow: 'Today after 6 PM',
        description: 'Warm, clean, and wearable right away. Best fit for teen or adult.',
        notes: 'Near the main road pickup point.',
        image: 'https://images.unsplash.com/photo-1548883354-94bcfe321cbb?auto=format&fit=crop&w=900&q=80',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        requestCount: 2,
        saveCount: 6,
        urgent: false,
        status: 'active'
      },
      {
        id: 'listing-202',
        ownerId: existingUser.id,
        ownerName: name,
        title: "Children's Story Books Set",
        category: 'Books',
        condition: 'Like new',
        location: `${city}, Dal-dong`,
        distanceKm: 7,
        pickup: 'Flexible',
        pickupWindow: 'Weekend mornings',
        description: "Colorful children's books in clean condition.",
        notes: 'Can bundle with crayons if needed.',
        image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80',
        createdAt: new Date(Date.now() - 86400000).toISOString(),
        updatedAt: new Date(Date.now() - 86400000).toISOString(),
        requestCount: 1,
        saveCount: 9,
        urgent: false,
        status: 'reserved'
      },
      {
        id: 'listing-203',
        ownerId: 'community-1',
        ownerName: 'Mina Park',
        title: 'Compact Storage Shelf',
        category: 'Home',
        condition: 'Good',
        location: `${city}, Seongnam-dong`,
        distanceKm: 10,
        pickup: 'Pickup only',
        pickupWindow: 'Saturday afternoon',
        description: 'A small but sturdy shelf for home organization.',
        notes: 'Top edge has a minor scratch.',
        image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
        createdAt: new Date(Date.now() - 2 * 86400000).toISOString(),
        updatedAt: new Date(Date.now() - 2 * 86400000).toISOString(),
        requestCount: 2,
        saveCount: 8,
        urgent: false,
        status: 'active'
      },
      {
        id: 'listing-204',
        ownerId: 'community-2',
        ownerName: 'Joon Lee',
        title: 'Rice & Pantry Bundle',
        category: 'Food',
        condition: 'New',
        location: `${city}, Ok-dong`,
        distanceKm: 5,
        pickup: 'Flexible',
        pickupWindow: 'Tonight before 8 PM',
        description: 'Unopened rice, ramen, canned food, and pantry basics.',
        notes: 'Please message only if you can collect within two days.',
        image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80',
        createdAt: new Date(Date.now() - 3 * 3600000).toISOString(),
        updatedAt: new Date(Date.now() - 3 * 3600000).toISOString(),
        requestCount: 6,
        saveCount: 13,
        urgent: true,
        status: 'active'
      },
      {
        id: 'listing-205',
        ownerId: 'community-3',
        ownerName: 'Ana Lopez',
        title: 'Laptop Study Desk',
        category: 'Home',
        condition: 'Used',
        location: `${city}, Sinjeong-dong`,
        distanceKm: 12,
        pickup: 'Pickup only',
        pickupWindow: 'Sunday afternoon',
        description: 'Simple desk for study or laptop work. Stable and usable.',
        notes: 'Disassembles into two parts for transport.',
        image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',
        createdAt: new Date(Date.now() - 4 * 86400000).toISOString(),
        updatedAt: new Date(Date.now() - 4 * 86400000).toISOString(),
        requestCount: 3,
        saveCount: 5,
        urgent: false,
        status: 'active'
      }
    ];

    await listingsCollection.insertMany(seedListings);
  }

  const meta = await metaCollection.findOne({ key: 'app-meta' });
  if (!meta) {
    await metaCollection.insertOne({
      key: 'app-meta',
      lastUpdatedAt: new Date().toISOString()
    });
  }
}

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'no-store'
  });
  res.end(JSON.stringify(payload));
}

function sendJavaScript(res, content) {
  res.writeHead(200, {
    'Content-Type': 'application/javascript; charset=utf-8',
    'Cache-Control': 'no-store'
  });
  res.end(content);
}

function sendFile(res, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const contentTypes = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.webp': 'image/webp',
    '.ico': 'image/x-icon',
    '.txt': 'text/plain; charset=utf-8'
  };

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Not found');
      return;
    }
    const headers = { 'Content-Type': contentTypes[ext] || 'application/octet-stream' };
    if (['.html', '.css', '.js'].includes(ext)) {
      headers['Cache-Control'] = 'no-store';
    }
    res.writeHead(200, headers);
    res.end(data);
  });
}

function sendBuiltReactAsset(res, requestPath) {
  const relativePath = requestPath.replace(/^\/+/, '') || 'index.html';
  const filePath = path.resolve(DIST_ROOT, relativePath);

  if (!filePath.startsWith(DIST_ROOT)) return false;
  if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) return false;

  sendFile(res, filePath);
  return true;
}

function normalizeReactHeadHref(href = '') {
  if (/^(https?:)?\/\//i.test(href)) return href;
  return href.replace(/^\.\.\//, '/').replace(/^\.\//, '/').replace(/^([^/])/, '/$1');
}

function getReactPageHeadLinks(requestPath) {
  const normalizedPath = requestPath === '/' ? '/index.html' : requestPath;
  const aliasTarget = PUBLIC_PAGE_ALIASES[normalizedPath.toLowerCase()];
  const relativePath = (aliasTarget || normalizedPath).replace(/^\/+/, '');
  const pagePath = path.resolve(PUBLIC_ROOT, 'html', relativePath);

  if (!pagePath.startsWith(path.resolve(PUBLIC_ROOT, 'html'))) return '';
  if (!fs.existsSync(pagePath) || !fs.statSync(pagePath).isFile()) return '';

  const pageHtml = fs.readFileSync(pagePath, 'utf8');
  return (pageHtml.match(/<link\b[^>]*>/gi) || [])
    .filter(tag => /\brel=["']stylesheet["']/i.test(tag))
    .map(tag =>
      tag
        .replace(/\s*\/?>$/, ' data-react-server-asset="true" />')
        .replace(/\bhref=(["'])(.*?)\1/i, (_match, quote, href) => `href=${quote}${normalizeReactHeadHref(href)}${quote}`)
    )
    .join('\n');
}

function getReactRootFallback() {
  return `
      <main class="boot-fallback">
        <div class="boot-fallback__panel">
          <h1>Free Sewaa</h1>
          <p>Give what you can. Find what you need.</p>
          <p>The app is loading. If this message stays on screen, open the home page again.</p>
          <a href="/app.html">Open Free Sewaa Home</a>
        </div>
      </main>`;
}

function getReactFallbackStyle() {
  return `<style data-react-server-fallback="true">
.boot-fallback{min-height:100vh;display:grid;place-items:center;padding:24px;font-family:Inter,system-ui,sans-serif;color:#f4fffb;background:linear-gradient(180deg,#071219 0%,#0d2530 52%,#091820 100%)}
.boot-fallback__panel{width:min(680px,100%)}
.boot-fallback h1{margin:0 0 16px;font-size:clamp(2.4rem,7vw,5rem);line-height:1}
.boot-fallback p{color:rgba(244,255,251,.78);line-height:1.7}
.boot-fallback a{display:inline-flex;margin-top:12px;padding:12px 16px;border-radius:8px;color:#052027;background:linear-gradient(135deg,#b8f4e4 0%,#35c7aa 48%,#2bb9d6 100%);font-weight:800;text-decoration:none}
</style>`;
}

function addReactRootFallback(html) {
  return html
    .replace('</head>', `${getReactFallbackStyle()}\n</head>`)
    .replace('<div id="root"></div>', `<div id="root">${getReactRootFallback()}\n    </div>`);
}

function sendBuiltReactApp(res, requestPath = '/') {
  const indexPath = path.resolve(DIST_ROOT, 'index.html');
  if (!fs.existsSync(indexPath) || !fs.statSync(indexPath).isFile()) return false;

  fs.readFile(indexPath, 'utf8', (err, html) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Not found');
      return;
    }

    const headLinks = getReactPageHeadLinks(requestPath);
    const withFallback = addReactRootFallback(html);
    const body = headLinks ? withFallback.replace('</head>', `${headLinks}\n</head>`) : withFallback;
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store'
    });
    res.end(body);
  });
  return true;
}

function readRequestBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
      if (body.length > 10 * 1024 * 1024) {
        reject(new Error('Payload too large'));
        req.destroy();
      }
    });
    req.on('end', () => {
      if (!body) return resolve({});
      try {
        resolve(JSON.parse(body));
      } catch (error) {
        reject(new Error('Invalid JSON body'));
      }
    });
    req.on('error', reject);
  });
}

async function touchMeta() {
  await metaCollection.updateOne(
    { key: 'app-meta' },
    {
      $set: {
        key: 'app-meta',
        lastUpdatedAt: new Date().toISOString()
      }
    },
    { upsert: true }
  );
}

function getListingFlags(listing) {
  const flags = [];
  if (listing.urgent) flags.push('Urgent');
  if ((listing.requestCount || 0) >= 4) flags.push('High demand');
  if (!listing.reviewed && (listing.urgent || (listing.requestCount || 0) >= 2)) flags.push('Needs review');
  if (listing.status === 'hidden') flags.push('Hidden');
  return flags;
}

function normalizeChatText(value) {
  return String(value || '').trim().replace(/\s+/g, ' ');
}

function createListingSummary(listings) {
  if (!listings.length) {
    return 'I could not find active listings right now. Try checking Browse again in a moment or start a new donation post.';
  }

  const topListings = listings
    .slice(0, 4)
    .map(listing => `${listing.title} (${listing.category}, ${listing.location})`)
    .join('; ');

  return `Here are a few active items: ${topListings}. Open Browse to view details or send a request.`;
}

async function buildChatbotReply(message) {
  const text = normalizeChatText(message);
  const lower = text.toLowerCase();

  if (!text) {
    return 'Ask me about donating, browsing items, requests, pickup, messages, or your account.';
  }

  if (/\b(hello|hi|hey)\b/.test(lower)) {
    return 'Hi! I can help you donate items, browse free support, understand pickup, or manage requests and messages.';
  }

  if (/\b(donate|give|post|share)\b/.test(lower)) {
    return 'To donate, open Donate, add a clear title, category, condition, pickup window, location, and photo. Keep pickup details respectful and safe.';
  }

  if (/\b(browse|item|listing|available|find|need)\b/.test(lower)) {
    const listings = await listingsCollection.find({ status: 'active' }).sort({ createdAt: -1 }).limit(6).toArray();
    return createListingSummary(listings);
  }

  if (/\b(request|ask|reserve)\b/.test(lower)) {
    return 'Open a listing and choose Request. Free Sewaa will create a request and help you continue through Messages.';
  }

  if (/\b(message|chat|reply|conversation)\b/.test(lower)) {
    return 'Use Messages to coordinate pickup time, location, and any questions. Keep personal details minimal until pickup is confirmed.';
  }

  if (/\b(pickup|collect|meet|location)\b/.test(lower)) {
    return 'For pickup, agree on a public or comfortable location, confirm timing, and update the request if plans change.';
  }

  if (/\b(event|volunteer|community)\b/.test(lower)) {
    return 'Open Events to find community support days, volunteer opportunities, and local donation drives.';
  }

  if (/\b(account|profile|saved|order|posts)\b/.test(lower)) {
    return 'Your settings menu links to profile, saved items, posts, requests, orders, region, and premium plans.';
  }

  return 'I can help with donating, browsing listings, sending requests, pickup coordination, events, messages, and account settings. Try asking about one of those.';
}

function resolveListingOwner(listing) {
  return listing.ownerId || listing.userId || null;
}

async function buildAdminDashboardData() {
  const [users, listings, requests, notifications, suggestions, conversations, meta] = await Promise.all([
    usersCollection.find({}).sort({ createdAt: -1 }).toArray(),
    listingsCollection.find({}).sort({ createdAt: -1 }).toArray(),
    requestsCollection.find({}).sort({ requestedAt: -1 }).toArray(),
    notificationsCollection.find({}).sort({ createdAt: -1 }).limit(20).toArray(),
    suggestionsCollection.find({}).sort({ createdAt: -1 }).limit(20).toArray(),
    conversationsCollection.find({}).sort({ updatedAt: -1 }).limit(20).toArray(),
    metaCollection.findOne({ key: 'app-meta' })
  ]);

  const normalizedUsers = users.map(user => ({
    ...safeUser(user),
    status: user.isBlocked ? 'blocked' : 'active',
    isAdmin: user.role === 'admin' || user.role === 'superadmin'
  }));

  const normalizedListings = listings.map(listing => ({
    ...normalizeListingForClient(listing),
    ownerId: resolveListingOwner(listing),
    ownerName: listing.ownerName || listing.donorName || 'Community Member'
  }));

  const moderationQueue = normalizedListings.filter(item => item.urgent || item.status === 'hidden' || !item.reviewed).slice(0, 12);

  const summary = {
    users: normalizedUsers.length,
    activeUsers: normalizedUsers.filter(user => user.status !== 'blocked').length,
    blockedUsers: normalizedUsers.filter(user => user.status === 'blocked').length,
    listings: normalizedListings.length,
    activeListings: normalizedListings.filter(item => item.status === 'active').length,
    donatedListings: normalizedListings.filter(item => item.status === 'donated').length,
    reservedListings: normalizedListings.filter(item => item.status === 'reserved').length,
    featuredListings: normalizedListings.filter(item => item.featured).length,
    flaggedListings: moderationQueue.length,
    unreadNotifications: notifications.filter(item => !item.read).length,
    suggestions: suggestions.length,
    conversations: conversations.length,
    openRisks: moderationQueue.filter(item => item.urgent || item.status === 'hidden' || !item.reviewed).length,
    healthScore: Math.max(0, 100 - (users.filter(user => user.isBlocked).length * 12) - (moderationQueue.length * 4) - Math.min(20, notifications.filter(item => !item.read).length)),
    lastUpdatedAt: meta?.lastUpdatedAt || new Date().toISOString()
  };

  const activity = [
    ...notifications.slice(0, 4).map(item => ({
      title: item.type === 'message' ? 'Message update' : item.type === 'request' ? 'Request update' : 'Notification',
      detail: item.text || 'No details available.',
      createdAt: item.createdAt || new Date().toISOString()
    })),
    ...requests.slice(0, 3).map(item => ({
      title: `Request ${item.status || 'updated'}`,
      detail: `${item.requesterName || 'A user'} requested listing ${item.listingId}.`,
      createdAt: item.requestedAt || new Date().toISOString()
    })),
    ...normalizedListings.slice(0, 3).map(item => ({
      title: `Listing ${item.status || 'updated'}`,
      detail: `${item.title || 'Listing'} is currently ${item.status || 'active'}.`,
      createdAt: item.updatedAt || item.createdAt || new Date().toISOString()
    }))
  ]
    .sort((left, right) => String(right.createdAt || '').localeCompare(String(left.createdAt || '')))
    .slice(0, 10);

  return {
    summary,
    users: normalizedUsers,
    listings: normalizedListings.map(normalizeListingForClient),
    moderationQueue,
    suggestions: suggestions.map(normalizeDoc),
    activity
  };
}

function isRealEmailAddress(email = '') {
  const value = String(email || '').trim().toLowerCase();
  const domain = value.split('@')[1] || '';
  const hasValidFormat = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(value);
  const isRecognizedDomain =
    RECOGNIZED_EMAIL_DOMAINS.has(domain) ||
    domain.endsWith('.edu') ||
    domain.endsWith('.edu.kr') ||
    domain.endsWith('.ac.kr');

  return hasValidFormat && isRecognizedDomain && !DEMO_EMAIL_DOMAINS.has(domain);
}

function normalizeUserPhone(phone = '') {
  return String(phone || '').trim().replace(/[\s().-]+/g, '');
}

function isValidPhoneInput(phone = '') {
  return /^\+?[0-9][0-9\s().-]{6,19}$/.test(String(phone || '').trim());
}

function hasValidUserIdentifier(user = {}) {
  return isRealEmailAddress(user.email || '') || Boolean(normalizeUserPhone(user.phone || ''));
}

function isStrongPassword(password = '') {
  const value = String(password || '');
  return (
    value.length >= 8 &&
    value.length <= 10 &&
    /[a-z]/.test(value) &&
    /[A-Z]/.test(value) &&
    /\d/.test(value)
  );
}

async function requireAdminUser(req, url) {
  const userId = getUserId(req, url);
  if (!userId) {
    return { error: 'Super admin access required.' };
  }

  const user = await usersCollection.findOne({ id: userId });
  if (!isSuperAdminUser(user)) {
    return { error: 'Super admin access required.' };
  }

  return { user };
}

async function requireSuperAdminUser(req, url) {
  return requireAdminUser(req, url);
}

async function applyAdminUserAction(targetUserId, action, actor) {
  const targetUser = await usersCollection.findOne({ id: targetUserId });
  if (!targetUser) {
    throw new Error('Target user not found.');
  }

  if (!isSuperAdminUser(actor)) {
    throw new Error('Super admin access required for user management.');
  }

  if (isSuperAdminUser(targetUser) && targetUser.id !== actor.id) {
    throw new Error('Another super admin cannot be changed from this panel.');
  }

  if (targetUser.id === actor.id && ['block', 'remove-admin', 'delete-user'].includes(action)) {
    throw new Error('You cannot block, demote, or delete your own super admin account.');
  }

  if (action === 'block') {
    await usersCollection.updateOne({ id: targetUserId }, { $set: { isBlocked: true } });
    await touchMeta();
    return buildAdminDashboardData();
  }

  if (action === 'unblock') {
    await usersCollection.updateOne({ id: targetUserId }, { $unset: { isBlocked: '' } });
    await touchMeta();
    return buildAdminDashboardData();
  }

  if (action === 'make-admin') {
    await usersCollection.updateOne({ id: targetUserId }, { $set: { role: 'admin' } });
    await touchMeta();
    return buildAdminDashboardData();
  }

  if (action === 'remove-admin') {
    await usersCollection.updateOne({ id: targetUserId }, { $set: { role: 'user' } });
    await touchMeta();
    return buildAdminDashboardData();
  }

  if (action === 'delete-user') {
    const ownedListings = await listingsCollection.find({ ownerId: targetUserId }).toArray();
    const ownedListingIds = ownedListings.map(listing => listing.id);
    const ownedConversations = await conversationsCollection.find({ participantIds: targetUserId }).toArray();
    const ownedConversationIds = ownedConversations.map(conversation => conversation.id);

    await Promise.all([
      usersCollection.deleteOne({ id: targetUserId }),
      statesCollection.deleteOne({ userId: targetUserId }),
      listingsCollection.deleteMany({ ownerId: targetUserId }),
      requestsCollection.deleteMany({
        $or: [
          { requesterId: targetUserId },
          { ownerId: targetUserId },
          { listingId: { $in: ownedListingIds } }
        ]
      }),
      notificationsCollection.deleteMany({ userId: targetUserId }),
      conversationsCollection.deleteMany({
        $or: [
          { participantIds: targetUserId },
          { listingId: { $in: ownedListingIds } }
        ]
      }),
      messagesCollection.deleteMany({ conversationId: { $in: ownedConversationIds } })
    ]);

    await touchMeta();
    return buildAdminDashboardData();
  }

  throw new Error('Unsupported user action.');
}

async function applyAdminListingAction(listingId, action) {
  const listing = await listingsCollection.findOne({ id: listingId });
  if (!listing) {
    throw new Error('Listing not found.');
  }

  if (action === 'feature') {
    await listingsCollection.updateOne({ id: listingId }, { $set: { featured: true, updatedAt: new Date().toISOString() } });
  } else if (action === 'unfeature') {
    await listingsCollection.updateOne({ id: listingId }, { $unset: { featured: '' }, $set: { updatedAt: new Date().toISOString() } });
  } else if (action === 'review') {
    await listingsCollection.updateOne({ id: listingId }, { $set: { reviewed: true, updatedAt: new Date().toISOString() } });
  } else if (action === 'hide') {
    await listingsCollection.updateOne({ id: listingId }, { $set: { status: 'hidden', updatedAt: new Date().toISOString() } });
  } else if (action === 'restore') {
    await listingsCollection.updateOne({ id: listingId }, { $set: { status: 'active', updatedAt: new Date().toISOString() } });
  } else if (action === 'delete') {
    const relatedConversations = await conversationsCollection.find({ listingId }).toArray();
    const relatedConversationIds = relatedConversations.map(conversation => conversation.id);

    await Promise.all([
      listingsCollection.deleteOne({ id: listingId }),
      requestsCollection.deleteMany({ listingId }),
      conversationsCollection.deleteMany({ listingId }),
      messagesCollection.deleteMany({ conversationId: { $in: relatedConversationIds } })
    ]);
  } else {
    throw new Error('Unsupported listing action.');
  }

  await touchMeta();
  return buildAdminDashboardData();
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathname = decodeURIComponent(url.pathname);

  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, x-user-id, Authorization'
    });
    return res.end();
  }

  try {
    if (pathname === '/api/health' && req.method === 'GET') {
      return sendJson(res, 200, { ok: true, service: 'freesewaa-backend-mongodb' });
    }

    if (pathname === '/firebase-config.js' && req.method === 'GET') {
      const config = getFirebaseWebConfig();
      return sendJavaScript(
        res,
        `(function () {\n  window.FREESEWAA_FIREBASE_CONFIG = ${JSON.stringify(config)};\n})();\n`
      );
    }

    if (pathname === '/api/auth/google-demo' && req.method === 'POST') {
      return sendJson(res, 410, { error: 'Demo login is disabled. Please sign in with a real email account.' });
    }

    if (pathname === '/api/auth/firebase' && req.method === 'POST') {
      const { idToken = '', provider = 'firebase', firstName = '', lastName = '', phone = '' } = await readRequestBody(req);

      if (!idToken) {
        return sendJson(res, 400, { error: 'Firebase token is required.' });
      }

      let claims;
      try {
        claims = decodeFirebaseToken(idToken);
      } catch (error) {
        return sendJson(res, 400, { error: 'Invalid Firebase token.' });
      }

      if (!isExpectedFirebaseToken(claims)) {
        return sendJson(res, 401, { error: 'Firebase token is expired or does not belong to this app.' });
      }

      const firebaseUid = String(claims.user_id || claims.sub || '').trim();
      const email = String(claims.email || '').trim().toLowerCase();
      const tokenPhone = normalizeUserPhone(claims.phone_number || phone || '');
      const authProvider = String(provider || claims.firebase?.sign_in_provider || 'firebase').trim() || 'firebase';
      const emailVerified = claims.email_verified === true || claims.email_verified === 'true';

      if (!firebaseUid) {
        return sendJson(res, 400, { error: 'Firebase token is missing a user id.' });
      }

      const isPhoneProvider = authProvider === 'phone' || claims.firebase?.sign_in_provider === 'phone';

      if (isPhoneProvider) {
        if (!tokenPhone) {
          return sendJson(res, 403, { error: 'Please verify a real phone number.' });
        }
      } else if (!email || !isRealEmailAddress(email) || !emailVerified) {
        return sendJson(res, 403, { error: VERIFIED_EMAIL_ONLY_MESSAGE });
      }

      const lookup = [{ firebaseUid }];
      if (email) lookup.push({ email });
      if (tokenPhone) lookup.push({ phone: tokenPhone });

      let user = await usersCollection.findOne({ $or: lookup });
      const nameParts = getNameParts({
        firstName,
        lastName,
        displayName: claims.name || '',
        email
      });

      if (user?.isBlocked) {
        return sendJson(res, 403, { error: 'This account is blocked.' });
      }

      if (!user) {
        user = {
          id: `user-${Date.now()}`,
          firebaseUid,
          provider: authProvider,
          firstName: nameParts.firstName,
          lastName: nameParts.lastName,
          name: `${nameParts.firstName} ${nameParts.lastName}`.trim(),
          city: 'Ulsan',
          region: 'Nam-gu',
          role: 'user',
          createdAt: new Date().toISOString()
        };

        if (email) user.email = email;
        if (tokenPhone) user.phone = tokenPhone;

        await usersCollection.insertOne(user);
        await setUserState(user.id, defaultUserState(user));
      } else {
        const updates = {
          firebaseUid,
          provider: user.provider || authProvider,
          updatedAt: new Date().toISOString()
        };

        if (!user.firstName && nameParts.firstName) updates.firstName = nameParts.firstName;
        if (!user.lastName && nameParts.lastName) updates.lastName = nameParts.lastName;
        if (!user.name) updates.name = `${nameParts.firstName} ${nameParts.lastName}`.trim();
        if (email && !user.email) updates.email = email;
        if (tokenPhone && !user.phone) updates.phone = tokenPhone;

        await usersCollection.updateOne({ id: user.id }, { $set: updates });
        user = { ...user, ...updates };
        await ensureStateForUser(user);
      }

      const role = isConfiguredSuperAdmin(user) ? 'superadmin' : user.role || 'user';
      if (role !== user.role) {
        await usersCollection.updateOne({ id: user.id }, { $set: { role, updatedAt: new Date().toISOString() } });
        user.role = role;
      }

      return sendJson(res, 200, {
        user: safeUser(user),
        auth: { userId: user.id, isAuthenticated: true, role }
      });
    }

    if (pathname === '/api/auth/logout' && req.method === 'POST') {
      return sendJson(res, 200, { ok: true });
    }

    if (pathname === '/api/auth/session' && req.method === 'GET') {
      const userId = getUserId(req, url);
      if (!userId) {
        return sendJson(res, 401, { error: 'Authentication required.' });
      }

      const user = await usersCollection.findOne({ id: userId });
      if (!user) {
        return sendJson(res, 401, { error: 'User session not found.' });
      }

      if (user.isBlocked) {
        return sendJson(res, 403, { error: 'This account is blocked.' });
      }

      const role = isConfiguredSuperAdmin(user) ? 'superadmin' : user.role || 'user';
      if (role !== 'superadmin' && !hasValidUserIdentifier(user)) {
        return sendJson(res, 403, { error: VERIFIED_EMAIL_ONLY_MESSAGE });
      }

      if (role !== user.role) {
        await usersCollection.updateOne({ id: user.id }, { $set: { role, updatedAt: new Date().toISOString() } });
        user.role = role;
      }

      return sendJson(res, 200, {
        user: safeUser(user),
        auth: {
          userId: user.id,
          isAuthenticated: true,
          role
        }
      });
    }

    if (pathname === '/api/auth/signup' && req.method === 'POST') {
      const { firstName = '', lastName = '', email = '', phone = '', password = '' } = await readRequestBody(req);

      if (!email || !password || !firstName.trim()) {
        return sendJson(res, 400, {
          error: 'First name, email address, and password are required.'
        });
      }

      const { normalizedEmail, normalizedPhone, query } = buildAuthQuery(email, phone);

      if (!isRealEmailAddress(normalizedEmail)) {
        return sendJson(res, 400, { error: EMAIL_ONLY_MESSAGE });
      }

      if (phone && !isValidPhoneInput(phone)) {
        return sendJson(res, 400, { error: 'Please enter a valid phone number.' });
      }

      if (!isStrongPassword(password)) {
        return sendJson(res, 400, { error: PASSWORD_POLICY_MESSAGE });
      }

      const existing = query.length
        ? await usersCollection.findOne({ $or: query })
        : null;

      if (existing) {
        return sendJson(res, 409, {
          error: 'An account with that email or phone already exists.'
        });
      }

      const user = {
        id: `user-${Date.now()}`,
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        name: `${firstName.trim()} ${lastName.trim()}`.trim(),
        password,
        city: 'Ulsan',
        region: 'Nam-gu',
        role: 'user',
        createdAt: new Date().toISOString()
      };

      if (normalizedEmail) user.email = normalizedEmail;
      if (normalizedPhone) user.phone = normalizedPhone;

      await usersCollection.insertOne(user);
      await setUserState(user.id, defaultUserState(user));

      return sendJson(res, 201, {
        user: safeUser(user),
        auth: { userId: user.id, isAuthenticated: true }
      });
    }

    if (pathname === '/api/auth/signin' && req.method === 'POST') {
      const { email = '', password = '' } = await readRequestBody(req);

      const { normalizedEmail, query } = buildAuthQuery(email, '');

      if (!normalizedEmail) {
        return sendJson(res, 400, { error: 'Email address is required.' });
      }

      if (!isRealEmailAddress(normalizedEmail)) {
        return sendJson(res, 400, { error: EMAIL_ONLY_MESSAGE });
      }

      const user = await usersCollection.findOne({ $or: query });

      if (!user || user.password !== password) {
        return sendJson(res, 401, { error: 'Invalid credentials.' });
      }

      if (user.isBlocked) {
        return sendJson(res, 403, { error: 'This account is blocked.' });
      }

      const role = isConfiguredSuperAdmin(user) ? 'superadmin' : user.role || 'user';
      if (role !== user.role) {
        await usersCollection.updateOne({ id: user.id }, { $set: { role, updatedAt: new Date().toISOString() } });
        user.role = role;
      }

      await ensureStateForUser(user);

      return sendJson(res, 200, {
        user: safeUser(user),
        auth: { userId: user.id, isAuthenticated: true, role }
      });
    }

    if (pathname === '/api/auth/admin/signin' && req.method === 'POST') {
      const { email = '', password = '' } = await readRequestBody(req);

      const { normalizedEmail, query } = buildAuthQuery(email, '');

      if (!normalizedEmail) {
        return sendJson(res, 400, { error: 'Admin email address is required.' });
      }

      if (!isRealEmailAddress(normalizedEmail)) {
        return sendJson(res, 400, { error: EMAIL_ONLY_MESSAGE });
      }

      const user = await usersCollection.findOne({ $or: query });

      if (!user || user.password !== password) {
        return sendJson(res, 401, { error: 'Invalid credentials.' });
      }

      const role = isConfiguredSuperAdmin(user) ? 'superadmin' : user.role || 'user';
      if (role !== 'superadmin') {
        return sendJson(res, 403, { error: 'Super admin access required.' });
      }

      if (user.isBlocked) {
        return sendJson(res, 403, { error: 'This account is blocked.' });
      }

      if (role !== user.role) {
        await usersCollection.updateOne({ id: user.id }, { $set: { role, updatedAt: new Date().toISOString() } });
        user.role = role;
      }

      await ensureStateForUser(user);

      return sendJson(res, 200, {
        user: safeUser(user),
        auth: { userId: user.id, isAuthenticated: true, role }
      });
    }

    if (pathname === '/api/admin/overview' && req.method === 'GET') {
      const admin = await requireAdminUser(req, url);
      if (admin.error) {
        return sendJson(res, 403, { error: admin.error });
      }

      return sendJson(res, 200, await buildAdminDashboardData());
    }

    if (pathname === '/api/audits' && req.method === 'GET') {
      const admin = await requireAdminUser(req, url);
      if (admin.error) {
        return sendJson(res, 403, { error: admin.error });
      }

      const dashboard = await buildAdminDashboardData();
      const blockedUsers = dashboard.summary.blockedUsers || 0;
      const flaggedListings = dashboard.summary.flaggedListings || 0;

      return sendJson(res, 200, {
        security: [
          {
            status: blockedUsers > 0 ? 'attention' : 'good',
            title: blockedUsers > 0 ? 'Blocked accounts need review' : 'No blocked accounts detected',
            detail: blockedUsers > 0
              ? `${blockedUsers} blocked account${blockedUsers === 1 ? '' : 's'} are currently inactive.`
              : 'No user accounts are currently blocked.'
          }
        ],
        accessibility: [
          {
            status: flaggedListings > 0 ? 'attention' : 'good',
            title: 'Admin dashboard wiring is active',
            detail: 'Signup, signin, admin login, and admin moderation pages all resolve through the same local server.'
          }
        ]
      });
    }

    if (pathname === '/api/chatbot' && req.method === 'POST') {
      const { message = '' } = await readRequestBody(req);
      const cleanMessage = normalizeChatText(message);

      if (cleanMessage.length > 600) {
        return sendJson(res, 400, { error: 'Please keep chatbot messages under 600 characters.' });
      }
   
      
      const reply = await buildChatbotReply(cleanMessage);
      return sendJson(res, 200, {
        reply,
        source: 'free-sewaa-assistant',
        createdAt: new Date().toISOString()
      });
    }

    if (pathname === '/api/admin/user-action' && req.method === 'POST') {
      const admin = await requireSuperAdminUser(req, url);
      if (admin.error) {
        return sendJson(res, 403, { error: admin.error });
      }

      const { targetUserId = '', action = '' } = await readRequestBody(req);
      if (!targetUserId || !action) {
        return sendJson(res, 400, { error: 'targetUserId and action are required.' });
      }

      const payload = await applyAdminUserAction(targetUserId, action, admin.user);
      return sendJson(res, 200, { payload });
    }

    if (pathname === '/api/admin/listing-action' && req.method === 'POST') {
      const admin = await requireAdminUser(req, url);
      if (admin.error) {
        return sendJson(res, 403, { error: admin.error });
      }

      const { listingId = '', action = '' } = await readRequestBody(req);
      if (!listingId || !action) {
        return sendJson(res, 400, { error: 'listingId and action are required.' });
      }

      const payload = await applyAdminListingAction(listingId, action);
      return sendJson(res, 200, { payload });
    }

    if (pathname === '/api/state' && req.method === 'GET') {
      const userId = url.searchParams.get('userId');
      if (!userId) {
        return sendJson(res, 400, { error: 'userId is required.' });
      }

      const record = await getUserState(userId);
      if (!record) {
        return sendJson(res, 404, { error: 'User state not found.' });
      }

      return sendJson(res, 200, { state: record.state });
    }

    if (pathname === '/api/state' && req.method === 'PUT') {
      const userId = url.searchParams.get('userId');
      if (!userId) {
        return sendJson(res, 400, { error: 'userId is required.' });
      }

      const payload = await readRequestBody(req);
      if (!payload || typeof payload !== 'object') {
        return sendJson(res, 400, { error: 'State payload is required.' });
      }

      await setUserState(userId, payload);
      return sendJson(res, 200, { ok: true });
    }

    if (pathname === '/api/listings' && req.method === 'GET') {
      const owner = url.searchParams.get('owner');
      const status = url.searchParams.get('status');
      const category = url.searchParams.get('category');
      const userId = getUserId(req, url);

      const query = {};

      if (owner === 'me') {
        if (!userId) return sendJson(res, 400, { error: 'userId is required for owner=me.' });
        query.ownerId = userId;
      }

      if (status && status !== 'all') {
        query.status = status;
      }

      if (!status && owner !== 'me') {
        query.status = 'active';
      }

      if (category && category !== 'all') {
        query.category = category;
      }

      const listings = await listingsCollection
        .find(query)
        .sort({ createdAt: -1 })
        .toArray();

      return sendJson(res, 200, { listings: listings.map(normalizeListingForClient) });
    }

    if (pathname.match(/^\/api\/listings\/[^/]+$/) && req.method === 'GET') {
      const id = pathname.split('/').pop();
      const listing = await listingsCollection.findOne({ id });
      if (!listing) {
        return sendJson(res, 404, { error: 'Listing not found.' });
      }
      return sendJson(res, 200, { listing: normalizeListingForClient(listing) });
    }

    if (pathname === '/api/listings' && req.method === 'POST') {
      const userId = getUserId(req, url);
      if (!userId) {
        return sendJson(res, 400, { error: 'userId is required.' });
      }

      const user = await usersCollection.findOne({ id: userId });
      if (!user) {
        return sendJson(res, 404, { error: 'User not found.' });
      }

      const body = await readRequestBody(req);

      if (!body.title || !body.category) {
        return sendJson(res, 400, { error: 'title and category are required.' });
      }

      const listing = {
        id: `listing-${Date.now()}`,
        ownerId: user.id,
        ownerName: user.name || `${user.firstName || ''} ${user.lastName || ''}`.trim(),
        title: String(body.title).trim(),
        category: String(body.category).trim(),
        condition: body.condition || 'Good',
        location: body.location || `${user.city || 'Ulsan'}, ${user.region || 'Nam-gu'}`,
        distanceKm: Number(body.distanceKm || 0),
        pickup: body.pickup || 'Flexible',
        pickupWindow: body.pickupWindow || '',
        description: body.description || '',
        notes: body.notes || '',
        image: sanitizeListingImage(body.image),
        requestCount: 0,
        saveCount: 0,
        urgent: Boolean(body.urgent),
        status: body.status || 'active',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }