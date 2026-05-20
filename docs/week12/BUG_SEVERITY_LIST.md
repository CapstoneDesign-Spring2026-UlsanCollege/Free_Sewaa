# Bug Severity List — Week 12

## Severity Levels

- **P0** — Final demo cannot work
- **P1** — Core feature broken
- **P2** — Workaround exists
- **P3** — Polish / nice improvement

---

## Failed Tests from QA Checklist

| Bug ID | Severity | Title | Owner | Status | Steps to Reproduce | Expected | Actual | Evidence | GitHub Issue | Next Step |
|--------|----------|-------|-------|--------|-------------------|----------|--------|----------|-------------|-----------|
| BUG-012 | P2 | Server requires MONGODB_URI to start without tests | Swarnim Jung Karki | Open | Run `node server.js` without MONGO_URI | Server starts on port 3000 | "Missing MongoDB connection string" error | [log](../evidence/week12/logs/test-output.txt) | #101 | Move demo credentials to .env |
| BUG-013 | P1 | No test for valid signup flow | Sujan Shrestha | Open | POST /api/auth/signup with valid fields | Returns 200 with user | Not tested | [test-output.txt](../evidence/week12/logs/test-output.txt) | #96 | Write signup integration test |
| BUG-014 | P1 | No test for login validation | Sujan Shrestha | Open | POST /api/auth/signin with missing password | Returns 400 | Not tested | [test-output.txt](../evidence/week12/logs/test-output.txt) | #95 | Write signin validation test |
| BUG-015 | P1 | No test for browse items | Mohan Khadka | Open | GET /api/listings | Returns items array | Not tested | — | #96 | Write items endpoint test |
| BUG-016 | P1 | No test for donate item | Sujan Tamang | Open | POST /api/listings with valid data | Returns created item | Not tested | — | #96 | Write listing creation test |
| BUG-017 | P1 | No test for request item flow | Mohan Khadka | Open | POST /api/requests | Returns created request | Not tested | — | #21, #66 | Write request endpoint test |
| BUG-018 | P2 | No test for empty state | Sujan Shrestha | Open | Browse page with no items | Shows "No items found" | Not tested | — | — | Add empty state handling |
| BUG-019 | P2 | Signup accepts weak password in frontend | Sujan Tamang | Open | Submit signup form with "123" as password | Frontend rejects weak password | No frontend validation | — | — | Add frontend validation |

---

## P0 Bugs

None identified. The app runs and the demo flow works end to end.

## P1 Bugs (4)

| ID | Description | Impact |
|----|-------------|--------|
| BUG-013 | No valid signup test | Cannot verify signup works via automation |
| BUG-014 | No login validation test | Cannot verify login rejects bad input |
| BUG-015 | No browse items test | Cannot verify listing endpoint |
| BUG-016 | No donate item test | Cannot verify item creation |
| BUG-017 | No request item test | Cannot verify request flow |

## P2 Bugs (3)

| ID | Description | Workaround |
|----|-------------|------------|
| BUG-012 | Server env config | Run via `npm test` or set MONGO_URI |
| BUG-018 | No empty state test | Manual check |
| BUG-019 | No frontend validation | Server-side validation catches it |

## P3 Bugs

None identified.
