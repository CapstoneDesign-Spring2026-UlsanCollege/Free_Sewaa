require('dotenv').config();

const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');
const { MongoClient, ObjectId } = require('mongodb');

const PORT = process.env.PORT || 3000;
const ROOT = __dirname;
const PUBLIC_ROOT = path.resolve(__dirname, '..');
const FIREBASE_PROJECT_ID = process.env.FIREBASE_PROJECT_ID || 'free-sewaa';
const FALLBACK_LISTING_IMAGE = 'https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=900&q=80';
const MAX_INLINE_IMAGE_LENGTH = 180000;

const PUBLIC_PAGE_ALIASES = {
  '/auth-choice.html': 'auth_choice.html',
  '/admin-login.html': 'admin_login.html',
  '/user-panel.html': 'user_panel.html',
  '/security-audit.html': 'security_audit.html'
};

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
    email: 'ram@example.com',
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
    role: 'admin',
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
  const normalizedPhone = String(phone || '').replace(/\s+/g, '');

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

  if (existingUser && !existingUser.role) {
    await usersCollection.updateOne({ id: existingUser.id }, { $set: { role: 'user' } });
    existingUser.role = 'user';
  }

  let existingAdmin = await usersCollection.findOne({ id: 'admin-demo' });
  if (!existingAdmin) {
    const demoAdmin = defaultDemoAdmin();
    await usersCollection.insertOne(demoAdmin);
    existingAdmin = demoAdmin;
  }

  if (existingAdmin && !existingAdmin.role) {
    await usersCollection.updateOne({ id: existingAdmin.id }, { $set: { role: 'admin' } });
    existingAdmin.role = 'admin';
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
        title: 'Study Desk',
        category: 'Home',
        condition: 'Used',
        location: `${city}, Sinjeong-dong`,
        distanceKm: 14,
        pickup: 'Pickup only',
        pickupWindow: 'Sunday afternoon',
        description: 'Simple desk for study or laptop work.',
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

  const requestsCount = await requestsCollection.countDocuments();
  if (requestsCount === 0) {
    await requestsCollection.insertOne({
      id: 'req-205',
      listingId: 'listing-205',
      requesterId: existingUser.id,
      requesterName: existingUser.name,
      ownerId: 'community-3',
      status: 'pending',
      requestedAt: new Date(Date.now() - 2 * 3600000).toISOString(),
      note: 'Can pick up this weekend.'
    });
  }

  const convCount = await conversationsCollection.countDocuments();
  if (convCount === 0) {
    await conversationsCollection.insertMany([
      {
        id: 'conv-201-sarah',
        listingId: 'listing-201',
        participantIds: [existingUser.id, 'community-sarah'],
        participantNames: [existingUser.name, 'Sarah Kim'],
        participant: 'Sarah Kim',
        participantCity: existingUser.city || 'Ulsan',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 'conv-205-ana',
        listingId: 'listing-205',
        participantIds: [existingUser.id, 'community-3'],
        participantNames: [existingUser.name, 'Ana Lopez'],
        participant: 'Ana Lopez',
        participantCity: existingUser.city || 'Ulsan',
        createdAt: new Date(Date.now() - 2 * 3600000).toISOString(),
        updatedAt: new Date(Date.now() - 2 * 3600000).toISOString()
      }
    ]);
  }

  const messageCount = await messagesCollection.countDocuments();
  if (messageCount === 0) {
    await messagesCollection.insertMany([
      {
        conversationId: 'conv-201-sarah',
        senderId: 'community-sarah',
        senderName: 'Sarah Kim',
        text: 'Hi! Is your jacket listing still available?',
        type: 'received',
        createdAt: new Date(Date.now() - 10 * 60000).toISOString()
      },
      {
        conversationId: 'conv-201-sarah',
        senderId: existingUser.id,
        senderName: 'You',
        text: 'Yes, pickup is possible this evening.',
        type: 'sent',
        createdAt: new Date(Date.now() - 8 * 60000).toISOString()
      },
      {
        conversationId: 'conv-205-ana',
        senderId: existingUser.id,
        senderName: 'You',
        text: "Hi, I'm interested in your desk. Is it still available?",
        type: 'sent',
        createdAt: new Date(Date.now() - 2 * 3600000).toISOString()
      },
      {
        conversationId: 'conv-205-ana',
        senderId: 'community-3',
        senderName: 'Ana Lopez',
        text: 'Yes, weekend pickup works best.',
        type: 'received',
        createdAt: new Date(Date.now() - 118 * 60000).toISOString()
      }
    ]);
  }

  const notifCount = await notificationsCollection.countDocuments();
  if (notifCount === 0) {
    await notificationsCollection.insertMany([
      {
        id: 'n1',
        userId: existingUser.id,
        text: 'Sarah Kim requested your Winter Jacket listing.',
        type: 'request',
        read: false,
        createdAt: new Date().toISOString()
      },
      {
        id: 'n2',
        userId: existingUser.id,
        text: 'Ana Lopez replied to your desk request.',
        type: 'message',
        read: false,
        createdAt: new Date(Date.now() - 2 * 3600000).toISOString()
      }
    ]);
  }

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

/**
 * Get user application state by userId.
 * @param {string} userId - The user ID.
 * @returns {Object|null} User state object or null.
 */
async function getUserState(userId) {
  return statesCollection.findOne({ userId });
}

/**
 * Set or update user application state.
 * @param {string} userId - The user ID.
 * @param {Object} state - The state object to save.
 * @returns {Object} Result of the update operation.
 */
async function setUserState(userId, state) {
  await statesCollection.updateOne(
    { userId },
    {
      $set: {
        userId,
        state
      }
    },
    { upsert: true }
  );

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

async function ensureStateForUser(user) {
  let existing = await getUserState(user.id);
  if (!existing) {
    const state = defaultUserState(user);
    await setUserState(user.id, state);
    existing = { userId: user.id, state };
  }
  return existing.state;
}

function sendJson(res, statusCode, payload) {
  const body = JSON.stringify(payload);
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, x-user-id, Authorization'
  });
  res.end(body);
}

function sendJavaScript(res, body) {
  res.writeHead(200, {
    'Content-Type': 'application/javascript; charset=utf-8',
    'Cache-Control': 'no-store'
  });
  res.end(body);
}

function getFirebaseWebConfig() {
  const projectId = process.env.FIREBASE_PROJECT_ID || 'free-sewaa';
  const authDomain = process.env.FIREBASE_AUTH_DOMAIN || `${projectId}.firebaseapp.com`;

  if (!process.env.FIREBASE_API_KEY) {
    return null;
  }

  return {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain,
    projectId,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET || `${projectId}.appspot.com`,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || '',
    appId: process.env.FIREBASE_APP_ID || ''
  };
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
    res.writeHead(200, { 'Content-Type': contentTypes[ext] || 'application/octet-stream' });
    res.end(data);
  });
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

  const activeListings = await listingsCollection
    .find({ status: 'active' })
    .sort({ urgent: -1, createdAt: -1 })
    .limit(8)
    .toArray();

  const categories = [...new Set(activeListings.map(item => item.category).filter(Boolean))];
  const urgentListings = activeListings.filter(item => item.urgent);

  if (/\b(hi|hello|hey|namaste)\b/.test(lower)) {
    return 'Hi! I am the Free Sewaa helper. I can help you find free items, donate something, understand pickup, or manage requests.';
  }

  if (/\b(donate|give|post|upload|share)\b/.test(lower)) {
    return 'To donate an item, go to Donate, add the title, category, condition, pickup window, notes, and a clear photo. After publishing, people can request it from Browse.';
  }

  if (/\b(find|browse|available|items?|listings?|need|search)\b/.test(lower)) {
    return createListingSummary(activeListings);
  }

  if (/\b(food|rice|pantry|clothing|jacket|books?|desk|home|furniture|category|categories)\b/.test(lower)) {
    const matched = activeListings.filter(listing => {
      const haystack = `${listing.title} ${listing.category} ${listing.description}`.toLowerCase();
      return lower.split(/\W+/).some(word => word.length > 2 && haystack.includes(word));
    });

    if (matched.length) {
      return createListingSummary(matched);
    }

    return categories.length
      ? `Current active categories include ${categories.join(', ')}. You can filter by category on Browse.`
      : 'Categories will appear after active listings are published.';
  }

  if (/\b(urgent|asap|emergency|soon|today)\b/.test(lower)) {
    return urgentListings.length
      ? createListingSummary(urgentListings)
      : 'I do not see urgent active listings right now. Browse still has regular active donations you can request.';
  }

  if (/\b(request|reserve|claim|interested)\b/.test(lower)) {
    return 'Open an item on Browse and choose Request. Add a short note with your pickup availability, then check Messages for the conversation.';
  }

  if (/\b(message|chat|reply|conversation|contact)\b/.test(lower)) {
    return 'Use Messages to continue conversations after a request is created. Keep pickup details clear and avoid sharing sensitive information.';
  }

  if (/\b(pickup|collect|delivery|meet|location|where)\b/.test(lower)) {
    return 'Pickup details are set by the donor. Check the item location and pickup window, then confirm the exact time in Messages.';
  }

  if (/\b(account|login|signin|sign in|signup|profile|dashboard)\b/.test(lower)) {
    return 'Use your Dashboard for profile details, active listings, saved items, and requests. If you are signed out, use Sign In or Sign Up from the home page.';
  }

  if (/\b(admin|moderation|block|review)\b/.test(lower)) {
    return 'Admins can use the Admin panel to review users, listings, platform activity, and moderation actions.';
  }

  if (/\b(thanks|thank you)\b/.test(lower)) {
    return 'You are welcome. I am here whenever you need help using Free Sewaa.';
  }

  return 'I can help with donating items, finding active listings, pickup, requests, messages, profile, and admin basics. Try asking "what items are available?" or "how do I donate?"';
}

/**
 * Build admin dashboard data with users, listings, requests, and notifications.
 * @returns {Object} Dashboard data with summary, users, listings, moderationQueue, activity.
 */
async function buildAdminDashboardData() {
  const [users, listings, requests, conversations, notifications, meta] = await Promise.all([
    usersCollection.find({}).toArray(),
    listingsCollection.find({}).toArray(),
    requestsCollection.find({}).toArray(),
    conversationsCollection.find({}).toArray(),
    notificationsCollection.find({}).toArray(),
    metaCollection.findOne({ key: 'app-meta' })
  ]);

  const listingCounts = listings.reduce((map, listing) => {
    const key = String(listing.ownerId || '');
    map.set(key, (map.get(key) || 0) + 1);
    return map;
  }, new Map());

  const normalizedUsers = users
    .map(user => {
      const safe = safeUser(user) || {};
      const id = String(safe.id || user.id || user._id || '');

      return {
        ...safe,
        id,
        listingCount: listingCounts.get(id) || 0
      };
    })
    .sort((left, right) => String(left.name || '').localeCompare(String(right.name || '')));

  const normalizedListings = listings
    .map(listing => {
      const normalized = normalizeDoc(listing) || {};
      const reviewed = Boolean(normalized.reviewed);

      return {
        ...normalized,
        reviewed,
        flags: getListingFlags({ ...normalized, reviewed })
      };
    })
    .sort((left, right) => String(right.createdAt || '').localeCompare(String(left.createdAt || '')));

  const moderationQueue = normalizedListings.filter(item => item.flags.length || item.urgent || item.status === 'hidden' || !item.reviewed);

  const summary = {
    users: normalizedUsers.length,
    admins: users.filter(user => user.role === 'admin').length,
    superadmins: users.filter(user => user.role === 'superadmin').length,
    blockedUsers: users.filter(user => user.isBlocked).length,
    listings: normalizedListings.length,
    activeListings: normalizedListings.filter(item => item.status === 'active').length,
    reservedListings: normalizedListings.filter(item => item.status === 'reserved').length,
    donatedListings: normalizedListings.filter(item => item.status === 'donated').length,
    featuredListings: normalizedListings.filter(item => item.featured).length,
    flaggedListings: moderationQueue.length,
    unreadNotifications: notifications.filter(item => !item.read).length,
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
    activity
  };
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
      const user = await usersCollection.findOne({ id: 'user-demo' });
      if (!user) {
        return sendJson(res, 404, { error: 'Demo user not found.' });
      }
      await ensureStateForUser(user);
      return sendJson(res, 200, {
        user: safeUser(user),
        auth: { userId: user.id, isAuthenticated: true }
      });
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
      const tokenPhone = String(claims.phone_number || phone || '').replace(/\s+/g, '');
      const authProvider = String(provider || claims.firebase?.sign_in_provider || 'firebase').trim() || 'firebase';

      if (!firebaseUid) {
        return sendJson(res, 400, { error: 'Firebase token is missing a user id.' });
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
      const { firstName = '', lastName = '', email = '', password = '', phone = '' } = await readRequestBody(req);

      if ((!email && !phone) || !password || !firstName.trim()) {
        return sendJson(res, 400, {
          error: 'First name, password, and either email or phone are required.'
        });
      }

      const { normalizedEmail, normalizedPhone, query } = buildAuthQuery(email, phone);

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
      const { email = '', password = '', phone = '' } = await readRequestBody(req);

      const { query } = buildAuthQuery(email, phone);

      if (!query.length) {
        return sendJson(res, 400, { error: 'Email or phone is required.' });
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
      const { email = '', password = '', phone = '' } = await readRequestBody(req);

      const { query } = buildAuthQuery(email, phone);

      if (!query.length) {
        return sendJson(res, 400, { error: 'Email or phone is required.' });
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
      };

      await listingsCollection.insertOne(listing);
      await touchMeta();

      return sendJson(res, 201, { listing: normalizeListingForClient(listing) });
    }

    if (pathname.match(/^\/api\/listings\/[^/]+$/) && req.method === 'PUT') {
      const id = pathname.split('/').pop();
      const userId = getUserId(req, url);

      if (!userId) {
        return sendJson(res, 400, { error: 'userId is required.' });
      }

      const listing = await listingsCollection.findOne({ id });
      if (!listing) {
        return sendJson(res, 404, { error: 'Listing not found.' });
      }

      if (listing.ownerId !== userId) {
        return sendJson(res, 403, { error: 'You can only update your own listing.' });
      }

      const body = await readRequestBody(req);

      const updates = {
        ...(body.title !== undefined ? { title: String(body.title).trim() } : {}),
        ...(body.category !== undefined ? { category: body.category } : {}),
        ...(body.condition !== undefined ? { condition: body.condition } : {}),
        ...(body.location !== undefined ? { location: body.location } : {}),
        ...(body.distanceKm !== undefined ? { distanceKm: Number(body.distanceKm) } : {}),
        ...(body.pickup !== undefined ? { pickup: body.pickup } : {}),
        ...(body.pickupWindow !== undefined ? { pickupWindow: body.pickupWindow } : {}),
        ...(body.description !== undefined ? { description: body.description } : {}),
        ...(body.notes !== undefined ? { notes: body.notes } : {}),
        ...(body.image !== undefined ? { image: sanitizeListingImage(body.image) } : {}),
        ...(body.urgent !== undefined ? { urgent: Boolean(body.urgent) } : {}),
        ...(body.status !== undefined ? { status: body.status } : {}),
        updatedAt: new Date().toISOString()
      };

      await listingsCollection.updateOne({ id }, { $set: updates });
      const updated = await listingsCollection.findOne({ id });

      await touchMeta();
      return sendJson(res, 200, { listing: normalizeListingForClient(updated) });
    }

    if (pathname.match(/^\/api\/listings\/[^/]+$/) && req.method === 'DELETE') {
      const id = pathname.split('/').pop();
      const userId = getUserId(req, url);

      if (!userId) {
        return sendJson(res, 400, { error: 'userId is required.' });
      }

      const listing = await listingsCollection.findOne({ id });
      if (!listing) {
        return sendJson(res, 404, { error: 'Listing not found.' });
      }

      if (listing.ownerId !== userId) {
        return sendJson(res, 403, { error: 'You can only delete your own listing.' });
      }

      await listingsCollection.deleteOne({ id });
      await touchMeta();

      return sendJson(res, 200, { ok: true });
    }

    if (pathname === '/api/requests/mine' && req.method === 'GET') {
      const userId = getUserId(req, url);
      if (!userId) {
        return sendJson(res, 400, { error: 'userId is required.' });
      }

      const requests = await requestsCollection
        .find({ requesterId: userId })
        .sort({ requestedAt: -1 })
        .toArray();

      return sendJson(res, 200, { requests: requests.map(normalizeDoc) });
    }

    if (pathname === '/api/requests' && req.method === 'POST') {
      const userId = getUserId(req, url);
      if (!userId) {
        return sendJson(res, 400, { error: 'userId is required.' });
      }

      const user = await usersCollection.findOne({ id: userId });
      if (!user) {
        return sendJson(res, 404, { error: 'User not found.' });
      }

      const { listingId, note = '' } = await readRequestBody(req);
      if (!listingId) {
        return sendJson(res, 400, { error: 'listingId is required.' });
      }

      const listing = await listingsCollection.findOne({ id: listingId });
      if (!listing) {
        return sendJson(res, 404, { error: 'Listing not found.' });
      }

      if (listing.ownerId === userId) {
        return sendJson(res, 400, { error: 'You cannot request your own listing.' });
      }

      const existing = await requestsCollection.findOne({ listingId, requesterId: userId });
      if (existing) {
        const existingConversation = await conversationsCollection.findOne({
          listingId,
          participantIds: { $all: [userId, listing.ownerId] }
        });
        return sendJson(res, 200, {
          request: normalizeDoc(existing),
          conversation: existingConversation ? normalizeDoc(existingConversation) : null
        });
      }

      const requestDoc = {
        id: `req-${Date.now()}`,
        listingId,
        requesterId: user.id,
        requesterName: getUserDisplayName(user),
        ownerId: listing.ownerId,
        status: 'pending',
        requestedAt: new Date().toISOString(),
        note: String(note)
      };

      const owner = await usersCollection.findOne({ id: listing.ownerId });
      const ownerName = listing.ownerName || getUserDisplayName(owner);
      const conversation = {
        id: `conv-${Date.now()}`,
        listingId,
        participantIds: [user.id, listing.ownerId],
        participantNames: {
          [user.id]: requestDoc.requesterName,
          [listing.ownerId]: ownerName
        },
        participantCities: {
          [user.id]: user.city || 'Ulsan',
          [listing.ownerId]: owner?.city || String(listing.location || '').split(',')[0] || 'Ulsan'
        },
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      const introText = String(note || `Hi! I am interested in your ${listing.title}. Is it still available?`).trim();
      const firstMessage = {
        conversationId: conversation.id,
        senderId: user.id,
        senderName: requestDoc.requesterName,
        text: introText,
        type: 'sent',
        createdAt: new Date().toISOString()
      };

      await Promise.all([
        requestsCollection.insertOne(requestDoc),
        conversationsCollection.insertOne(conversation),
        messagesCollection.insertOne(firstMessage),
        listingsCollection.updateOne(
          { id: listingId },
          { $inc: { requestCount: 1 }, $set: { updatedAt: new Date().toISOString() } }
        )
      ]);

      await notificationsCollection.insertOne({
        id: `notif-${Date.now()}`,
        userId: listing.ownerId,
        conversationId: conversation.id,
        text: `${requestDoc.requesterName} requested your ${listing.title} listing.`,
        type: 'message',
        read: false,
        createdAt: new Date().toISOString()
      });

      await touchMeta();
      return sendJson(res, 201, {
        request: normalizeDoc(requestDoc),
        conversation: normalizeDoc(conversation),
        message: normalizeDoc(firstMessage)
      });
    }

    if (pathname.match(/^\/api\/requests\/[^/]+\/status$/) && req.method === 'PATCH') {
      const id = pathname.split('/')[3];
      const userId = getUserId(req, url);

      if (!userId) {
        return sendJson(res, 400, { error: 'userId is required.' });
      }

      const requestDoc = await requestsCollection.findOne({ id });
      if (!requestDoc) {
        return sendJson(res, 404, { error: 'Request not found.' });
      }

      if (requestDoc.ownerId !== userId) {
        return sendJson(res, 403, { error: 'Only the listing owner can update request status.' });
      }

      const { status } = await readRequestBody(req);
      if (!['pending', 'accepted', 'declined', 'completed'].includes(status)) {
        return sendJson(res, 400, { error: 'Invalid status.' });
      }

      await requestsCollection.updateOne({ id }, { $set: { status } });

      await notificationsCollection.insertOne({
        id: `notif-${Date.now()}`,
        userId: requestDoc.requesterId,
        text: `Your request status was updated to "${status}".`,
        type: 'request',
        read: false,
        createdAt: new Date().toISOString()
      });

      await touchMeta();

      const updated = await requestsCollection.findOne({ id });
      return sendJson(res, 200, { request: normalizeDoc(updated) });
    }

    if (pathname === '/api/notifications' && req.method === 'GET') {
      const userId = getUserId(req, url);
      if (!userId) {
        return sendJson(res, 400, { error: 'userId is required.' });
      }

      const notifications = await notificationsCollection
        .find({ userId })
        .sort({ createdAt: -1 })
        .toArray();

      return sendJson(res, 200, { notifications: notifications.map(normalizeDoc) });
    }

    if (pathname === '/api/notifications/read' && req.method === 'PATCH') {
      const userId = getUserId(req, url);
      if (!userId) {
        return sendJson(res, 400, { error: 'userId is required.' });
      }

      const body = await readRequestBody(req);
      const notificationIds = Array.isArray(body.notificationIds) ? body.notificationIds : null;

      if (notificationIds && notificationIds.length > 0) {
        await notificationsCollection.updateMany(
          { userId, id: { $in: notificationIds } },
          { $set: { read: true } }
        );
      } else {
        await notificationsCollection.updateMany(
          { userId, read: false },
          { $set: { read: true } }
        );
      }

      await touchMeta();
      return sendJson(res, 200, { ok: true });
    }

    if (pathname === '/api/messages/conversations' && req.method === 'GET') {
      const userId = getUserId(req, url);
      if (!userId) {
        return sendJson(res, 400, { error: 'userId is required.' });
      }

      const conversations = await conversationsCollection
        .find({ participantIds: userId })
        .sort({ updatedAt: -1 })
        .toArray();

      const enriched = [];
      for (const conv of conversations) {
        const lastMessage = await messagesCollection.find({ conversationId: conv.id }).sort({ createdAt: -1 }).limit(1).toArray();
        const unreadCount = await notificationsCollection.countDocuments({
          userId,
          conversationId: conv.id,
          type: 'message',
          read: false
        });
        const listing = conv.listingId ? await listingsCollection.findOne({ id: conv.listingId }) : null;
        const otherUserId = (conv.participantIds || []).find(id => id !== userId);
        const otherUser = otherUserId ? await usersCollection.findOne({ id: otherUserId }) : null;
        const participantNames = conv.participantNames && typeof conv.participantNames === 'object' && !Array.isArray(conv.participantNames)
          ? conv.participantNames
          : {};

        enriched.push({
          ...normalizeDoc(conv),
          participantId: otherUserId || '',
          participant: participantNames[otherUserId] || conv.participant || getUserDisplayName(otherUser),
          participantCity: conv.participantCities?.[otherUserId] || otherUser?.city || 'Ulsan',
          unread: unreadCount,
          listing: listing ? normalizeListingForClient(listing) : null,
          lastMessage: lastMessage[0] ? normalizeDoc(lastMessage[0]) : null
        });
      }

      return sendJson(res, 200, { conversations: enriched });
    }

    if (pathname === '/api/messages/conversations' && req.method === 'POST') {
      const userId = getUserId(req, url);
      if (!userId) {
        return sendJson(res, 400, { error: 'userId is required.' });
      }

      const { participantId = '', participantName = '', listingId = null } = await readRequestBody(req);
      const listing = listingId ? await listingsCollection.findOne({ id: listingId }) : null;
      const resolvedParticipantId = participantId || listing?.ownerId || '';
      if (!resolvedParticipantId) {
        return sendJson(res, 400, { error: 'participantId or listingId is required.' });
      }
      if (resolvedParticipantId === userId) {
        return sendJson(res, 400, { error: 'You cannot start a conversation with yourself.' });
      }

      const currentUser = await usersCollection.findOne({ id: userId });
      const participantUser = await usersCollection.findOne({ id: resolvedParticipantId });
      if (!currentUser || !participantUser) {
        return sendJson(res, 404, { error: 'Conversation participant not found.' });
      }

      const existing = await conversationsCollection.findOne({
        listingId,
        participantIds: { $all: [userId, resolvedParticipantId] }
      });

      if (existing) {
        return sendJson(res, 200, { conversation: normalizeDoc(existing) });
      }

      const conversation = {
        id: `conv-${Date.now()}`,
        listingId,
        participantIds: [userId, resolvedParticipantId],
        participantNames: {
          [userId]: getUserDisplayName(currentUser),
          [resolvedParticipantId]: participantName || getUserDisplayName(participantUser)
        },
        participantCities: {
          [userId]: currentUser.city || 'Ulsan',
          [resolvedParticipantId]: participantUser.city || String(listing?.location || '').split(',')[0] || 'Ulsan'
        },
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      await conversationsCollection.insertOne(conversation);
      await touchMeta();

      return sendJson(res, 201, { conversation: normalizeDoc(conversation) });
    }

    if (pathname.match(/^\/api\/messages\/conversations\/[^/]+\/messages$/) && req.method === 'GET') {
      const conversationId = pathname.split('/')[4];
      const userId = getUserId(req, url);
      const conversation = await conversationsCollection.findOne({ id: conversationId });
      if (!conversation) {
        return sendJson(res, 404, { error: 'Conversation not found.' });
      }
      if (userId && !(conversation.participantIds || []).includes(userId)) {
        return sendJson(res, 403, { error: 'You are not part of this conversation.' });
      }
      const messages = await messagesCollection
        .find({ conversationId })
        .sort({ createdAt: 1 })
        .toArray();

      if (userId) {
        await notificationsCollection.updateMany(
          { userId, conversationId, type: 'message', read: false },
          { $set: { read: true } }
        );
      }

      return sendJson(res, 200, { messages: messages.map(normalizeDoc) });
    }

    if (pathname.match(/^\/api\/messages\/conversations\/[^/]+\/messages$/) && req.method === 'POST') {
      const conversationId = pathname.split('/')[4];
      const userId = getUserId(req, url);

      if (!userId) {
        return sendJson(res, 400, { error: 'userId is required.' });
      }

      const user = await usersCollection.findOne({ id: userId });
      if (!user) {
        return sendJson(res, 404, { error: 'User not found.' });
      }

      const conversation = await conversationsCollection.findOne({ id: conversationId });
      if (!conversation) {
        return sendJson(res, 404, { error: 'Conversation not found.' });
      }
      if (!(conversation.participantIds || []).includes(userId)) {
        return sendJson(res, 403, { error: 'You are not part of this conversation.' });
      }

      const { text = '' } = await readRequestBody(req);
      if (!String(text).trim()) {
        return sendJson(res, 400, { error: 'Message text is required.' });
      }

      const messageText = String(text).trim();
      const duplicateWindow = new Date(Date.now() - 8000).toISOString();
      const recentDuplicate = await messagesCollection.findOne({
        conversationId,
        senderId: userId,
        text: messageText,
        createdAt: { $gte: duplicateWindow }
      });

      if (recentDuplicate) {
        return sendJson(res, 200, { message: normalizeDoc(recentDuplicate), duplicate: true });
      }

      const message = {
        conversationId,
        senderId: userId,
        senderName: user.name || user.firstName || 'You',
        text: messageText,
        type: 'sent',
        createdAt: new Date().toISOString()
      };

      await messagesCollection.insertOne(message);
      await conversationsCollection.updateOne(
        { id: conversationId },
        { $set: { updatedAt: new Date().toISOString() } }
      );

      const recipientId = conversation.participantIds.find(id => id !== userId);
      if (recipientId) {
        await notificationsCollection.insertOne({
          id: `notif-${Date.now()}`,
          userId: recipientId,
          conversationId,
          text: `${message.senderName} sent you a new message.`,
          type: 'message',
          read: false,
          createdAt: new Date().toISOString()
        });
      }

      await touchMeta();
      return sendJson(res, 201, { message: normalizeDoc(message) });
    }

    if (pathname.startsWith('/api/')) {
      return sendJson(res, 404, { error: 'API route not found.' });
    }

    const normalizedPath = pathname === '/' ? '/index.html' : pathname;
    const aliasTarget = PUBLIC_PAGE_ALIASES[normalizedPath.toLowerCase()];
    const relativePath = (aliasTarget || normalizedPath).replace(/^\/+/, '');

    let filePath = path.resolve(PUBLIC_ROOT, relativePath);
    if (!filePath.startsWith(PUBLIC_ROOT)) {
      return sendJson(res, 403, { error: 'Forbidden' });
    }

    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      return sendFile(res, filePath);
    }

    const pagePath = path.resolve(PUBLIC_ROOT, 'html', relativePath);
    if (
      pagePath.startsWith(path.resolve(PUBLIC_ROOT, 'html')) &&
      fs.existsSync(pagePath) &&
      fs.statSync(pagePath).isFile()
    ) {
      return sendFile(res, pagePath);
    }

    return sendFile(res, path.resolve(PUBLIC_ROOT, 'html', 'index.html'));
  } catch (error) {
    console.error(error);
    return sendJson(res, 500, { error: error.message || 'Server error' });
  }
});

async function startServer() {
  try {
    await client.connect();
    db = client.db(DB_NAME);

    usersCollection = db.collection('users');
    statesCollection = db.collection('states');
    metaCollection = db.collection('meta');
    listingsCollection = db.collection('listings');
    requestsCollection = db.collection('requests');
    conversationsCollection = db.collection('conversations');
    messagesCollection = db.collection('messages');
    notificationsCollection = db.collection('notifications');

    await ensureIndexes();
    await ensureSeedData();

    console.log('✅ MongoDB connected');

    server.listen(PORT, () => {
      console.log(`✅ Free Sewaa running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
}

startServer();
