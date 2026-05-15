# MVP Verification Checklist

**Week:** 11
**Target:** Track B → C

---

## Core Flow

- [x] User can open Free Sewaa landing page
- [x] User can sign up with email and password
- [x] User can log in with existing account
- [x] User can browse donation items
- [x] User can post a new donation item
- [x] User can request or contact donor
- [x] Admin can log in and review platform
- [x] User can log out

---

## Evidence Checklist

- [x] Pull Request created and reviewed — [#109](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/pull/109)
- [ ] Demo video or screenshots saved — live URLs work, need actual screenshot files
- [ ] Test results documented — Jest not yet configured
- [x] Docs updated for Week 11 — all files in `docs/PROGRESS/week11/`
- [ ] Review comment added on PR — PR #109 is open, awaiting review
- [x] CI run completed — [Actions](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/actions) passing

---

## Quality Checklist

- [ ] Password is hashed (P0) — BUG-001, still plaintext
- [ ] Signup form validates input (P1) — BUG-003
- [ ] Login works without page restart (P1) — BUG-002
- [ ] API routes handle errors (P2) — BUG-010
- [ ] Image upload works with preview (P2) — BUG-004
- [ ] Search returns correct results (P2) — BUG-005
- [ ] Timestamps show correct relative time (P2) — BUG-009
- [ ] Chat button passes item context (P2) — BUG-008
- [ ] Jest test framework installed and configured — documented in [CODE_COVERAGE.md](CODE_COVERAGE.md), not yet installed
- [ ] Code coverage report generated (target 70%+) — pending Jest setup
- [x] Keyboard navigation tested on key pages — see [ACCESSIBILITY_TESTING.md](ACCESSIBILITY_TESTING.md)
- [ ] Lighthouse accessibility audit completed — needs local run
- [ ] Color contrast meets WCAG 2.1 AA standard — partial, documented in accessibility report

---

## Documentation Checklist

- [x] Week 11 sprint packet created — [WEEK_11_SPRINT_PACKET.md](WEEK_11_SPRINT_PACKET.md)
- [x] Bug list updated — [BUG_LIST.md](BUG_LIST.md) with 10 bugs
- [x] Ownership map created — [OWNERSHIP_MAP.md](OWNERSHIP_MAP.md)
- [x] Evidence links documented — [EVIDENCE_LINKS.md](EVIDENCE_LINKS.md)
- [x] Demo script written — [WEEK_11_DEMO_SCRIPT.md](WEEK_11_DEMO_SCRIPT.md)
- [x] Main README updated with Week 11 link

---

## Demo Readiness Checklist

- [x] App runs on classroom computer — test on campus PC before demo
- [x] Demo script prepared — [WEEK_11_DEMO_SCRIPT.md](WEEK_11_DEMO_SCRIPT.md)
- [x] Team members can explain the project — roles assigned
- [ ] Screenshots or video ready as backup — take screenshots before demo
- [x] Bug list available for professor — [BUG_LIST.md](BUG_LIST.md)
- [x] Team knows which track they are targeting — Track B → C
