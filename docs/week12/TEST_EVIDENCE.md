# Test Evidence — Week 12

## Automated Test Results

**Command:** `cd server && npm test`

**Output:**

```
PASS __tests__/api.test.js
  Health endpoint
    ✓ returns 200 with ok status (19 ms)
  Auth validation
    ✓ rejects signup without firstName (4 ms)
    ✓ rejects signup without password (3 ms)

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
```

Full output: [logs/test-output.txt](../evidence/week12/logs/test-output.txt)

---

## Screenshots

| Screenshot | Description | File |
|------------|-------------|------|
| Test run | Terminal showing 3/3 passing Jest tests | [screenshots/test-run.png](../evidence/week12/screenshots/test-run.png) |
| Landing page | Live site home page | [screenshots/landing.png](../evidence/week12/screenshots/landing.png) |
| Signup form | User registration page | [screenshots/signup.png](../evidence/week12/screenshots/signup.png) |
| Browse page | Items grid with search and filter | [screenshots/browse.png](../evidence/week12/screenshots/browse.png) |
| Donate form | Post a new donation item | [screenshots/donate.png](../evidence/week12/screenshots/donate.png) |
| Messages | User messaging interface | [screenshots/messages.png](../evidence/week12/screenshots/messages.png) |
| Admin panel | Dashboard with platform stats | [screenshots/admin.png](../evidence/week12/screenshots/admin.png) |

---

## CI Results

GitHub Actions workflow: [View on GitHub](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/actions)

The CI pipeline runs on every push to main. It starts a MongoDB 7 service container, installs dependencies, and runs `npm test`. The workflow file is at `.github/workflows/ci.yml`.

---

## Demo Video

A short walkthrough video of the 7-step MVP flow is in [evidence/week12/videos/](../evidence/week12/videos/).

---

## Test Coverage

Current: 3 tests in 1 file.
Target: 10+ tests covering all major endpoints.

Coverage has not been run yet. See [CODE_COVERAGE.md](../PROGRESS/week11/CODE_COVERAGE.md) for setup instructions.
