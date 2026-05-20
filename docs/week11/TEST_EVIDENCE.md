# Test Evidence — Week 11

We set up Jest tests for the backend API. Here is what we tested and the results.

---

## Test Results

| Test | Endpoint | Expected | Result |
|------|----------|----------|--------|
| Health check returns OK | GET /api/health | 200, `{ ok: true }` | ✅ Pass |
| Signup requires first name | POST /api/auth/signup | 400 with error | ✅ Pass |
| Signup requires password | POST /api/auth/signup | 400 with error | ✅ Pass |

All 3 tests pass. Run them yourself:

```bash
cd server
npm test
```

---

## Screenshots

| Screenshot | Description | File |
|------------|-------------|------|
| Landing page | Shows hero section and featured items | `screenshot-landing.png` |
| Signup page | Registration form with validation | `screenshot-signup.png` |
| Browse items | Grid of available donations | `screenshot-browse.png` |
| Donate form | Form to post a new item | `screenshot-donate.png` |
| Messaging | Conversation between donor and requester | `screenshot-messages.png` |
| Admin panel | Dashboard with overview stats | `screenshot-admin.png` |
| Test output | Terminal showing 3 passing tests | `screenshot-tests.png` |

Screenshots are in `docs/assets/screenshots/`.

---

## Coverage

We have not run coverage yet. The plan is:
1. Add more tests (items, messages, admin endpoints)
2. Run `npm test -- --coverage`
3. Check `server/coverage/lcov-report/index.html`
4. Target: 70%+ coverage

---

## CI

GitHub Actions workflow runs tests on every push to main. It starts a MongoDB container and runs the Jest suite. Check the Actions tab for results.
