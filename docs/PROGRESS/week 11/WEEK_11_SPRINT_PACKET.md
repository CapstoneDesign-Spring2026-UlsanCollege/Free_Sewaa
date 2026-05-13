# Week 11 Sprint Packet — MVP Verification

**Week:** 11
**Theme:** MVP Verification
**Target Track:** B (moving toward C)

---

## Verified Evidence

| Evidence Type | Status | Link |
|--------------|--------|------|
| Pull Request | ✅ Done | [#109](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/pull/109) |
| Demo screenshots | ✅ Done | [Live site](https://free-sewaa-qh05.onrender.com) |
| Test result | ❌ Not yet | [Needs implementation] |
| Docs update | ✅ Done | [docs/PROGRESS/week 11/](.) |
| Review comment | ✅ Done | [#109 review](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/pull/109) |
| CI run | ✅ Done | [Actions](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/actions) |

---

## Bug List

| ID | Priority | Description | Status |
|----|----------|-------------|--------|
| BUG-001 | P0 | Password stored in plaintext | Open |
| BUG-002 | P1 | Login requires page restart after signup | Open |
| BUG-003 | P1 | No validation on signup form | Open |
| BUG-004 | P2 | Image upload has no preview | Open |
| BUG-005 | P2 | Search results not accurate | Open |
| BUG-006 | P1 | Backend has no unit tests | Open |
| BUG-007 | P1 | CI workflow does not run tests | Open |
| BUG-008 | P2 | Chat context not passed from item page | Open |
| BUG-009 | P2 | Timestamp shows "Just now" forever | Open |
| BUG-010 | P2 | No error handling in API routes | Open |

Full details: [BUG_LIST.md](BUG_LIST.md)

---

## Ownership Map

| Name | Role | Key Files |
|------|------|-----------|
| Ram Pathak | Project Management | Project board, sprint planning |
| Sujan Tamang | Frontend | HTML, CSS, JS pages |
| Mohan Khadka | Demo | Demo script, live demo |
| Sujan Shrestha | Testing / QA | Test results, bug verification |
| Swarnim Jung Karki | Documentation / Repo Management | Docs, evidence, repo structure |

Full details: [OWNERSHIP_MAP.md](OWNERSHIP_MAP.md)

---

## Next Steps

1. Fix P0 bug (password hashing)
2. Add unit tests for backend API
3. Update CI to run tests automatically
4. Add image upload preview
5. Improve search accuracy
6. Prepare for Track C (polish phase)
