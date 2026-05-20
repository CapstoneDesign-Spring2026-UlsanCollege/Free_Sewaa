# QA Checklist — Week 12

## Core MVP Flow

1. User signs up
2. User logs in
3. User browses donation items
4. User posts a donation item
5. Another user requests the item
6. User/admin verifies saved data or request status

---

## Test Results

| ID | Area | Test Case | Steps | Expected Result | Actual Result | Pass/Fail | Evidence Link | Issue Link | Owner |
|----|------|-----------|-------|-----------------|---------------|-----------|---------------|------------|-------|
| TC-01 | Environment | Server starts without errors | `cd server && node server.js` | Server starts on port 3000 | Server needs MONGODB_URI env var to start fully; test runner works | ❌ FAIL | [server-log.txt](../evidence/week12/logs/test-output.txt) | #101 | Swarnim Jung Karki |
| TC-02 | Signup | Backend accepts valid signup | POST /api/auth/signup with firstName, lastName, email, password | Returns 200 with user object | Not tested via API (Jest tests only check validation rejects) | ❌ FAIL | [test-output.txt](../evidence/week12/logs/test-output.txt) | #96 | Sujan Shrestha |
| TC-03 | Login | Backend rejects missing password | POST /api/auth/signin with email only | Returns 400 | Test exists for signup validation but not for signin | ❌ FAIL | [test-output.txt](../evidence/week12/logs/test-output.txt) | #95 | Sujan Shrestha |
| TC-04 | Browse | Browse page loads items | Navigate to /browse.html | Items grid displays | Manual test needed — no automated browse test | ❌ FAIL | — | #96 | Mohan Khadka |
| TC-05 | Donate | Post item form submits | Fill donate form and submit | Item appears in browse | Manual test only — no automated test | ❌ FAIL | — | #96 | Sujan Tamang |
| TC-06 | Request | Request button sends request | Click "Request" on an item | Request saved in DB | Manual test only — no automated test | ❌ FAIL | — | #21, #66 | Mohan Khadka |
| TC-07 | Empty state | Browse page with no items | Clear all items or use empty DB | Shows "No items found" | Not tested | ❌ FAIL | — | — | Sujan Shrestha |
| TC-08 | Error/input | Signup rejects empty firstName | POST /api/auth/signup without firstName | Returns 400 | ✅ PASS — test returns 400 | ✅ PASS | [test-output.txt](../evidence/week12/logs/test-output.txt) | — | Swarnim Jung Karki |
| TC-09 | Data save | Health endpoint returns ok | GET /api/health | Returns 200 with ok:true | ✅ PASS | ✅ PASS | [test-output.txt](../evidence/week12/logs/test-output.txt) | — | Swarnim Jung Karki |
| TC-10 | Deployment | Live site loads in browser | Go to https://free-sewaa-qh05.onrender.com | Landing page renders | ✅ PASS — site is live | ✅ PASS | [live site](https://free-sewaa-qh05.onrender.com) | — | Ram Pathak |

### Summary

- **Passed:** 3 (TC-08, TC-09, TC-10)
- **Failed:** 7 (TC-01 through TC-07)
- **Total:** 10

### Notes

- TC-01 fails because the server requires MONGODB_URI to start standalone. The Jest test suite works because it starts the server internally. Documented in issue #101.
- TC-02 through TC-07 fail because we do not have automated tests for these flows yet. Only 3 Jest tests exist. Issue #96 tracks adding more tests.
- TC-10 passes — the live Render deployment is operational.
