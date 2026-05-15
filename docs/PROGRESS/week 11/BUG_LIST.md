# Bug List — Week 11

**Priority Scale:**
- **P0** — Demo cannot work
- **P1** — Core feature broken
- **P2** — Workaround exists
- **P3** — Polish / nice improvement

---

## All Bugs

| ID | Priority | Title | Status | Owner |
|----|----------|-------|--------|-------|
| BUG-001 | P0 | Password stored in plaintext (no bcrypt) | Open | Swarnim Jung Karki |
| BUG-002 | P1 | Login requires page restart after signup | Open | Sujan Tamang |
| BUG-003 | P1 | No validation on signup form (empty fields accepted) | Open | Sujan Tamang |
| BUG-004 | P2 | Image upload has no preview | Open | Mohan Khadka |
| BUG-005 | P2 | Search results not accurate | Open | Mohan Khadka |
| BUG-006 | P1 | Backend has no unit tests | Open | Sujan Shrestha |
| BUG-007 | P1 | CI workflow does not run tests | Open | Swarnim Jung Karki |
| BUG-008 | P2 | Chat context not passed from item page | Open | Mohan Khadka |
| BUG-009 | P2 | Timestamp shows "Just now" forever | Open | Swarnim Jung Karki |
| BUG-010 | P2 | No error handling in API routes | Open | Ram Pathak |

---

## P0 Bugs (Critical — Demo Cannot Work)

| ID | Description | Impact |
|----|-------------|--------|
| BUG-001 | Password stored in plaintext | Security risk, professor will notice |

## P1 Bugs (Core Feature Broken)

| ID | Description | Impact |
|----|-------------|--------|
| BUG-002 | Login requires page restart after signup | Bad user experience |
| BUG-003 | No validation on signup form | Users can submit empty forms |
| BUG-006 | Backend has no unit tests | Cannot verify backend reliability |
| BUG-007 | CI workflow does not run tests | Cannot catch regressions |

## P2 Bugs (Workaround Exists)

| ID | Description | Workaround |
|----|-------------|------------|
| BUG-004 | Image upload has no preview | Upload and check after submit |
| BUG-005 | Search results not accurate | Scroll through all items |
| BUG-008 | Chat context not passed | Manually mention item in chat |
| BUG-009 | Timestamp shows "Just now" forever | Refresh page to see real time |
| BUG-010 | No error handling in API routes | Check server logs manually |

## P3 Bugs (Polish)

None identified yet.

---

## Bug Tracking Links

- GitHub Issues: [View all issues](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/issues)
- Bug Reports Folder: [docs/bugs/](../../bugs/)
- Create new issue: [New issue](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/issues/new/choose)

## Status Legend

| Status | Meaning |
|--------|---------|
| Open | Bug identified and documented, not yet fixed |
| In Progress | Someone is working on a fix |
| Fixed | Fix has been applied and verified |
| Won't Fix | Accepted as known limitation |
