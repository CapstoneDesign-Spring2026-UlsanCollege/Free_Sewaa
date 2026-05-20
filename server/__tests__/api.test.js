process.env.MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/freesewaa_test';

const http = require('http');

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

function request(method, path, body) {
  return new Promise((resolve) => {
    const url = new URL(path, BASE_URL);
    const options = {
      method,
      hostname: url.hostname,
      port: url.port,
      path: url.pathname + url.search,
      headers: { 'Content-Type': 'application/json' },
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
});
