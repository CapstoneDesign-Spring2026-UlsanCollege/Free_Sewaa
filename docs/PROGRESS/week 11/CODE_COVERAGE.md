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

| Metric | Target | Current | Action Needed |
|--------|--------|---------|---------------|
| Lines | 70% | ❌ Not run | Install Jest, write tests, run coverage |
| Functions | 70% | ❌ Not run | Cover all API endpoint handler functions |
| Branches | 60% | ❌ Not run | Test if/else conditions in server logic |
| Statements | 70% | ❌ Not run | Ensure every line of code is reached by tests |

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

## Progress Status

| Step | Status | Completed | Notes |
|------|--------|-----------|-------|
| Jest installed | ❌ Not done | — | `npm install --save-dev jest` in server/ |
| Package.json script added | ❌ Not done | — | Add `"test": "jest --coverage"` |
| Test files created | ❌ Not done | — | Create `__tests__/` with auth.test.js, items.test.js |
| Tests passing | ❌ Not done | — | Run `npm test` |
| Coverage ≥ 70% | ❌ Not done | — | Check lcov-report/index.html |
| CI runs tests | ❌ Not done | — | Update `.github/workflows/ci.yml` |

## RAG Status

| Area | Status |
|------|--------|
| Code coverage | 🔴 Red — not started |
| Unit tests | 🔴 Red — no test files exist |
| CI integration | 🟡 Amber — CI exists but does not run tests |
| Documentation | 🟢 Green — setup guide written |

---

## Links
- Jest Docs: https://jestjs.io/docs/getting-started
- Coverage Guide: https://jestjs.io/docs/cli#--coverage
- Our Testing Log: [TESTING_LOG.md](../../PROGRESS/TESTING_LOG.md)
- CI Workflow: [View on GitHub](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/actions)
