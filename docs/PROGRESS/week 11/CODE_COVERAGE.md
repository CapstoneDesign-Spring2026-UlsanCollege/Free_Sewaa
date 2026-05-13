# Code Coverage Testing — Week 11

## What Is Code Coverage?
Code coverage measures how much of our code is tested by automated tests. It shows which lines, functions, and branches are covered and which are not.

## Our Goal
Set up Jest testing with coverage reporting for the backend API. Target: 70%+ coverage.

---

## Setup Instructions

### 1. Install Jest
```bash
cd server
npm install --save-dev jest
```

### 2. Add Test Script to `server/package.json`
```json
"scripts": {
  "test": "jest --coverage",
  "test:watch": "jest --watch"
}
```

### 3. Folder Structure for Tests
```
server/
├── __tests__/
│   ├── auth.test.js
│   ├── items.test.js
│   └── health.test.js
├── server.js
└── package.json
```

### 4. Run Tests
```bash
npm test
```

Coverage report will be in `server/coverage/` folder. Open `server/coverage/lcov-report/index.html` in browser to see the visual report.

---

## What to Test

### Auth Endpoints
| Test | What It Checks |
|------|----------------|
| POST /api/auth/signup | Creates user, returns success |
| POST /api/auth/signin | Valid credentials, returns token |
| POST /api/auth/signin | Invalid credentials, returns error |
| POST /api/auth/logout | Clears session |

### Items Endpoints
| Test | What It Checks |
|------|----------------|
| GET /api/items | Returns list of items |
| POST /api/items | Creates new item |
| GET /api/items/:id | Returns single item |
| DELETE /api/items/:id | Removes item |

### Health Endpoint
| Test | What It Checks |
|------|----------------|
| GET /api/health | Returns status OK |

---

## Coverage Targets

| Metric | Target | Current |
|--------|--------|---------|
| Lines | 70% | ❌ Not yet |
| Functions | 70% | ❌ Not yet |
| Branches | 60% | ❌ Not yet |
| Statements | 70% | ❌ Not yet |

---

## How to View Coverage Report

1. Run `npm test` in `server/` folder
2. Open `server/coverage/lcov-report/index.html` in browser
3. Check which files are covered and which are not
4. Add tests for uncovered files

---

## Example Test (auth.test.js)

```javascript
const request = require('supertest');
const app = require('../server');

describe('POST /api/auth/signup', () => {
  it('should create a new user', async () => {
    const res = await request(app)
      .post('/api/auth/signup')
      .send({
        firstName: 'Test',
        lastName: 'User',
        email: 'test@example.com',
        password: 'password123'
      });
    expect(res.statusCode).toBe(200);
  });
});
```

---

## Links
- Jest Docs: https://jestjs.io/docs/getting-started
- Coverage Guide: https://jestjs.io/docs/cli#--coverage
- Our Testing Log: [TESTING_LOG.md](../../PROGRESS/TESTING_LOG.md)
