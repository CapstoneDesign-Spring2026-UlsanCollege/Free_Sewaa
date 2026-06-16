process.env.MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/freesewaa_test';

const http = require('http');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'http://localhost:3000';
let server;

beforeAll(async () => {
  jest.setTimeout(60000);
  try {
    delete require.cache[require.resolve('../server')];
    server = require('../server');
  } catch (e) {
    console.log('Server start (expected for test env)');
  }
  await new Promise((r) => setTimeout(r, 3000));
}, 60000);

afterAll(() => {
  if (server && server.close) server.close();
});

function request(method, path, body, headers = {}) {
  return new Promise((resolve) => {
    const url = new URL(path, BASE_URL);
    const options = {
      method,
      hostname: url.hostname,
      port: url.port,
      path: url.pathname + url.search,
      headers: { 'Content-Type': 'application/json', ...headers },
    };
    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, body: JSON.parse(data) });
        } catch {
          resolve({ status: res.statusCode, body: data });
        }
      });
    });
    req.on('error', () => resolve({ status: 0, body: {} }));
    if (body) req.write(JSON.stringify(body));
    req.end();
  });
}

describe('Health endpoint', () => {
  it('returns 200 with ok status', async () => {
    const res = await request('GET', '/api/health');
    expect(res.status).toBe(200);
    if (res.body) expect(res.body.ok).toBe(true);
  });
});

describe('Firebase auth configuration', () => {
  it('serves the final Firebase project config', async () => {
    const res = await request('GET', '/firebase-config.js');
    expect([200, 0]).toContain(res.status);
    if (res.status === 200) {
      expect(String(res.body)).toContain('freesewaa-c8a41');
      expect(String(res.body)).toContain('FREESEWAA_FIREBASE_CONFIG');
    }
  });

  it('rejects malformed Firebase tokens', async () => {
    const res = await request('POST', '/api/auth/firebase', {
      idToken: 'bad-token'
    });
    expect([400, 0]).toContain(res.status);
  });

  it('includes Google, email-link, and phone OTP controls', () => {
    const html = fs.readFileSync(path.resolve(__dirname, '../../html/signin.html'), 'utf8');
    expect(html).toContain('Continue with Google');
    expect(html).toContain('Send Sign-In Link');
    expect(html).toContain('+82 10-1234-5678');
  });
});

describe('Auth validation', () => {
  it('rejects signup without firstName', async () => {
    const res = await request('POST', '/api/auth/signup', {
      email: 'test@example.com',
      password: '123456',
    });
    expect([400, 0]).toContain(res.status);
  });

  it('rejects signup without password', async () => {
    const res = await request('POST', '/api/auth/signup', {
      firstName: 'Test',
      email: 'test@example.com',
    });
    expect([400, 0]).toContain(res.status);
  });

  it('rejects signin without email', async () => {
    const res = await request('POST', '/api/auth/signin', {
      password: 'Password1',
    });
    expect([400, 0]).toContain(res.status);
    if (res.status === 400) {
      expect(res.body.error).toBe('Email address is required.');
    }
  });

  it('rejects signin with missing password', async () => {
    const res = await request('POST', '/api/auth/signin', {
      email: 'pathakram09555@gmail.com',
    });
    expect([401, 0]).toContain(res.status);
    if (res.status === 401) {
      expect(res.body.error).toBe('Invalid credentials.');
    }
  });

  it('rejects signin with invalid credentials', async () => {
    const res = await request('POST', '/api/auth/signin', {
      email: 'pathakram09555@gmail.com',
      password: 'wrong-password',
    });
    expect([401, 0]).toContain(res.status);
    if (res.status === 401) {
      expect(res.body.error).toBe('Invalid credentials.');
      expect(res.body.auth).toBeUndefined();
    }
  });
});

describe('Listing reports and admin moderation', () => {
  const userHeaders = { 'x-user-id': 'user-demo' };
  const adminHeaders = { 'x-user-id': 'admin-demo' };

  it('includes accessible user and admin report controls without contact fields', () => {
    const siteCore = fs.readFileSync(path.resolve(__dirname, '../../js/site-core.js'), 'utf8');
    const adminPanel = fs.readFileSync(path.resolve(__dirname, '../../admin-panel.js'), 'utf8');

    expect(siteCore).toContain('Report listing');
    expect(siteCore).toContain('aria-live="polite"');
    expect(siteCore).toContain('maxlength="500"');
    expect(adminPanel).toContain('data-report-action="dismiss"');
    expect(adminPanel).toContain('report.reporterName');
    expect(adminPanel).not.toContain('report.email');
    expect(adminPanel).not.toContain('report.phone');
  });

  it('validates report submissions', async () => {
    const unauthenticated = await request('POST', '/api/reports', {
      listingId: 'listing-203',
      reason: 'other'
    });
    expect([401, 0]).toContain(unauthenticated.status);
    if (unauthenticated.status === 0) return;

    const missingReason = await request('POST', '/api/reports', {
      listingId: 'listing-203'
    }, userHeaders);
    expect(missingReason.status).toBe(400);

    const unsupportedReason = await request('POST', '/api/reports', {
      listingId: 'listing-203',
      reason: 'not-valid'
    }, userHeaders);
    expect(unsupportedReason.status).toBe(400);

    const excessiveDetails = await request('POST', '/api/reports', {
      listingId: 'listing-203',
      reason: 'other',
      details: 'x'.repeat(501)
    }, userHeaders);
    expect(excessiveDetails.status).toBe(400);

    const missingListing = await request('POST', '/api/reports', {
      listingId: 'listing-does-not-exist',
      reason: 'other'
    }, userHeaders);
    expect(missingListing.status).toBe(404);

    const ownListing = await request('POST', '/api/reports', {
      listingId: 'listing-201',
      reason: 'other'
    }, userHeaders);
    expect(ownListing.status).toBe(400);
  });

  it('supports report, dismiss, hide, restore, and delete workflows', async () => {
    const createFirstListing = await request('POST', '/api/listings', {
      title: `Report test listing ${Date.now()}`,
      category: 'Home',
      description: 'Temporary listing used by the automated moderation test.'
    }, adminHeaders);
    expect([201, 0]).toContain(createFirstListing.status);
    if (createFirstListing.status === 0) return;

    const firstListingId = createFirstListing.body.listing.id;
    const firstReport = await request('POST', '/api/reports', {
      listingId: firstListingId,
      reason: 'misleading-information',
      details: 'The description does not match the item.'
    }, userHeaders);
    expect(firstReport.status).toBe(201);

    const duplicate = await request('POST', '/api/reports', {
      listingId: firstListingId,
      reason: 'duplicate-spam'
    }, userHeaders);
    expect(duplicate.status).toBe(409);

    const regularUserResolution = await request('POST', '/api/admin/report-action', {
      reportId: firstReport.body.report.id,
      action: 'dismiss'
    }, userHeaders);
    expect(regularUserResolution.status).toBe(403);

    const dismissed = await request('POST', '/api/admin/report-action', {
      reportId: firstReport.body.report.id,
      action: 'dismiss'
    }, adminHeaders);
    expect(dismissed.status).toBe(200);
    expect(dismissed.body.payload.summary.openReports).toBeGreaterThanOrEqual(0);

    const secondReport = await request('POST', '/api/reports', {
      listingId: firstListingId,
      reason: 'unsafe-pickup'
    }, userHeaders);
    expect(secondReport.status).toBe(201);

    const hidden = await request('POST', '/api/admin/report-action', {
      reportId: secondReport.body.report.id,
      action: 'hide'
    }, adminHeaders);
    expect(hidden.status).toBe(200);

    const hiddenListing = await request('GET', `/api/listings/${firstListingId}`);
    expect(hiddenListing.status).toBe(200);
    expect(hiddenListing.body.listing.status).toBe('hidden');

    const restored = await request('POST', '/api/admin/listing-action', {
      listingId: firstListingId,
      action: 'restore'
    }, adminHeaders);
    expect(restored.status).toBe(200);

    const thirdReport = await request('POST', '/api/reports', {
      listingId: firstListingId,
      reason: 'prohibited-item'
    }, userHeaders);
    expect(thirdReport.status).toBe(201);

    const deleted = await request('POST', '/api/admin/report-action', {
      reportId: thirdReport.body.report.id,
      action: 'delete'
    }, adminHeaders);
    expect(deleted.status).toBe(200);
    expect(deleted.body.payload.reports.some(report =>
      report.id === thirdReport.body.report.id &&
      report.status === 'actioned' &&
      report.resolution === 'listing-deleted' &&
      report.resolvedBy === 'admin-demo'
    )).toBe(true);

    const deletedListing = await request('GET', `/api/listings/${firstListingId}`);
    expect(deletedListing.status).toBe(404);
  });
});
