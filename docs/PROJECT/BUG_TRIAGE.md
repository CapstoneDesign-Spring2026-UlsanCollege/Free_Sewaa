# Bug Triage - Free Sewaa

## Bug Severity Guide

| Severity | Meaning |
|------|---------|
| P0 | Final demo cannot work. App cannot run, deployment is broken, or login is impossible. |
| P1 | Core feature broken. Main MVP flow fails or data does not save. |
| P2 | Workaround exists. Feature is unreliable but demo can continue. |
| P3 | Polish or nice improvement. UI, wording, or small visual issue. |

---
 
## Bug List

| Bug Title | Severity | Owner | Status | Steps to Reproduce | Expected Result | Actual Result | Evidence Link | Definition of Done |
|-----------|----------|--------|--------|-------------------|-----------------|--------------|---------------|---------------------|
| Password hashing not done | P0 | Ram Pathak, Sujan Shrestha | Open | 1. Sign up new user 2. Check database | Password should be hashed | Password stored in plain text | [Issue #68](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/issues/68) | Implement bcrypt, test login with hashed password |
| No input validation on donate form | P1 | Sujan Shrestha, Mohan Khadka | Open | 1. Go to donate page 2. Submit empty form | Show clear error messages | Form may submit with empty fields | *[To be created]* | Add validation, test with invalid inputs |
| No unit tests for backend | P1 | Ram Pathak | Open | 1. Run test suite | All API endpoints have tests | No tests exist | *[To be created]* | Write tests for all API endpoints, CI passes |
| Session timeout not configured | P1 | Ram Pathak | Open | 1. Login 2. Wait long time | Session expires, user logged out | Session never expires | - | Add session config, test timeout |
| No error handling on API routes | P2 | Ram Pathak | Open | 1. Send invalid request to API | Clear error response | Server crashes or generic error | - | Add try/catch, return proper status codes |
| README wrong commands | P2 | Swarnim Jung Karki | Fixed | 1. Follow README setup 2. Run commands | Commands work correctly | Commands missing `cd server` | [Commits](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commits/main) | Commands corrected, tested |
| Demo credentials in code | P3 | Ram Pathak | Open | 1. Check server.js 2. Look for hardcoded creds | No credentials in code | Demo creds visible in code | - | Move to .env file |
| No MongoDB local setup guide | P3 | Ram Pathak | Open | 1. Try local setup 2. Follow README | Clear MongoDB setup steps | Missing local setup guide | [MONGODB_SETUP.md](docs/DESIGN/MONGODB_SETUP.md) | Add local MongoDB guide to docs |
| Invalid input shows unclear error | P2 | Sujan Shrestha | Partial | 1. Submit form with bad data | Clear error messages | Errors not user-friendly | [auth.js](js/auth.js) | Improve error UX, test all forms |

---

## Notes

Use this file to make bugs visible instead of hiding them. Bugs are normal, but hidden bugs are dangerous.

During Week 10 triage meeting, we identified 9 bugs (2 P0/P1, 4 P2, 3 P3). All P0/P1 bugs must be documented with evidence before Friday.

---

*Last Updated: Week 10 — Bug Triage Meeting*
