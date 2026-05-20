# Release Notes — Week 11 MVP Verification

**Release date:** May 15, 2026  
**Version:** Week 11 (MVP Verification)

---

## What Is New

### Security
- Passwords are now hashed with bcryptjs before storage (was plaintext before)
- Signup now validates password strength (8–10 chars, mixed case, number required)
- Email domain validation restricts signup to known email providers

### Testing
- Jest + Supertest installed in the server folder
- 3 tests written for health check and auth validation
- Tests run automatically in CI via GitHub Actions
- CI spins up MongoDB 7 service container for test isolation

### Documentation
- Week 11 sprint packet and demo script created
- MVP verification checklist with professor criteria
- Bug list with 10 bugs categorized by priority
- Code coverage guide and accessibility testing notes
- User guide and developer guide added
- API reference and database schema documented
- All docs linked from main README

### Screenshots
- 6 screenshots of core flows: landing, signup, browse, donate, messages, admin
- Saved as evidence of working features

### Infrastructure
- CI workflow updated to run actual tests
- README reorganized with categorized documentation table

---

## Bug Fixes

| ID | Bug | Priority | Status |
|----|-----|----------|--------|
| BUG-001 | Password stored in plaintext | P0 | Fixed |

---

## Known Issues

| ID | Bug | Priority | Owner |
|----|-----|----------|-------|
| BUG-002 | Login requires page restart after signup | P1 | Sujan Tamang |
| BUG-003 | No frontend validation on signup form | P1 | Sujan Tamang |
| BUG-004 | Image upload has no preview | P2 | Mohan Khadka |
| BUG-005 | Search results not accurate | P2 | Mohan Khadka |
| BUG-006 | Backend has no unit tests (started) | P1 | Sujan Shrestha |
| BUG-007 | CI workflow does not run tests (fixed) | P1 | Swarnim Jung Karki |
| BUG-008 | Chat context not passed from item page | P2 | Mohan Khadka |
| BUG-009 | Timestamp shows "Just now" forever | P2 | Swarnim Jung Karki |
| BUG-010 | No error handling in API routes | P2 | Ram Pathak |

---

## How to Verify

1. Open https://free-sewaa-qh05.onrender.com
2. Sign up with a real email
3. Browse, donate, request, and message
4. Check admin panel at /admin_login.html
5. Run `cd server && npm test` to see passing tests
