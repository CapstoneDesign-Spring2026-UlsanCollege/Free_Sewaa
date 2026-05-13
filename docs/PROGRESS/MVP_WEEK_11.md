# MVP Week 11 Progress — MVP Verification

## Week 11 Goal
Validate the MVP core flow end to end. Show evidence, list bugs, map ownership, and prepare the sprint packet for the demo.

---

## Core MVP Flow

1. User opens Free Sewaa landing page
2. User signs up or logs in
3. User browses donation items
4. User posts a donation item
5. Another user requests or contacts donor
6. Admin reviews the platform
7. Team shows proof (screenshots, PRs, test results, docs, reviews, CI)

---

## What We Verified

- Signup and login work with demo accounts
- Browse page shows available items with search and filter
- Donate form accepts new item posts
- Messages page shows chat inbox
- Admin login and panel are accessible
- All 7 core flow steps are functional

---

## Evidence Links

| Type | Link |
|------|------|
| Full Week 11 Overview | [docs/week11/README.md](../week11/README.md) |
| Sprint Packet | [docs/week11/WEEK_11_SPRINT_PACKET.md](../week11/WEEK_11_SPRINT_PACKET.md) |
| MVP Checklist | [docs/week11/MVP_VERIFICATION_CHECKLIST.md](../week11/MVP_VERIFICATION_CHECKLIST.md) |
| Demo Script | [docs/week11/WEEK_11_DEMO_SCRIPT.md](../week11/WEEK_11_DEMO_SCRIPT.md) |
| Bug List | [docs/week11/BUG_LIST.md](../week11/BUG_LIST.md) |
| Ownership Map | [docs/week11/OWNERSHIP_MAP.md](../week11/OWNERSHIP_MAP.md) |
| Evidence Links | [docs/week11/EVIDENCE_LINKS.md](../week11/EVIDENCE_LINKS.md) |
| Week 11 Screenshots | [docs/evidence/week11/README.md](../evidence/week11/README.md) |

---

## Bug List Summary

| Priority | Count | Examples |
|----------|-------|----------|
| P0 | 1 | Password stored in plaintext |
| P1 | 4 | Login restart needed, no validation, no unit tests, CI not testing |
| P2 | 5 | No image preview, bad search, chat context missing, timestamp bug, no error handling |

Full list: [BUG_LIST.md](../week11/BUG_LIST.md)

---

## Ownership Map

| Name | Role |
|------|------|
| Ram Pathak | Project Management |
| Sujan Tamang | Frontend |
| Mohan Khadka | Demo |
| Sujan Shrestha | Testing / QA |
| Swarnim Jung Karki | Documentation / Repo Management |

Full map: [OWNERSHIP_MAP.md](../week11/OWNERSHIP_MAP.md)

---

## Demo Plan

| Segment | Time | Who |
|---------|------|-----|
| PM update / what improved | 45 sec | Ram Pathak |
| Demo MVP core flow | 2 min | Mohan Khadka |
| QA evidence and test results | 1 min | Sujan Shrestha |
| Random team member explains one part | 1 min | Any member |

Full script: [WEEK_11_DEMO_SCRIPT.md](../week11/WEEK_11_DEMO_SCRIPT.md)

---

## Current Track

**Track B — MVP Stabilization**

Reason: The app mostly works, but we still need stronger evidence, bug tracking, documentation, and tests.

Goal: Move toward Track C — MVP Plus (app works well, team understands it, ready for polish).

---

## Next Steps

1. Fix P0 bug (password hashing with bcrypt)
2. Add unit tests for backend API
3. Update CI to run tests automatically
4. Add image upload preview
5. Improve search accuracy
6. Fix chat context and timestamp bugs
7. Close evidence gaps with screenshots and test results
