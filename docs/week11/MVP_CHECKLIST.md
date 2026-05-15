# MVP Verification Checklist — Week 11

**Target Track:** B (moving to C)

---

## Core Flow Shown

The professor will watch the demo and check these:

- [x] Landing page loads
- [x] User can sign up
- [x] User can log in
- [x] User can browse donation items
- [x] User can post a donation
- [x] User can request / contact donor
- [x] Messaging works between users
- [x] Admin can log in and see dashboard
- [x] User can log out

---

## Evidence Linked

Every item above has proof:

- [x] Screenshots saved in `docs/assets/screenshots/`
- [x] Live URLs work and are listed
- [x] Pull request created and reviewed
- [x] Test results documented
- [x] CI workflow runs

---

## Can Explain

Team members should be ready to explain:

- How signup validation works (password policy, email domains)
- How items are stored and fetched
- How messaging connects users
- How admin differs from regular users
- What bugs we know about and how we plan to fix them
- What testing we have and what we still need

---

## Track A / B / C

| Criterion | A | B | C | Our Status |
|-----------|---|---|---|------------|
| Core flow works | No | Mostly | Yes | B+ |
| Bugs documented | No | P0 listed | All prioritized | B |
| Tests exist | No | Started | Passing | B |
| CI runs | No | Configured | Tests in CI | B+ |
| Team can explain | No | Some parts | All parts | B |
| Screenshots/video | No | Links exist | Files saved | B |
| Docs updated | No | Partial | Complete | B+ |

**Verdict:** Solid Track B. Password hashing fix gets us close to C.
