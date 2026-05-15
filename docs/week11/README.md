# Week 11 — MVP Verification

**Theme:** Capstone Design MVP Verification  
**Goal:** Show the professor that our app works end to end and we understand what we built.

---

## What We Did This Week

We focused on verifying our MVP core flow. That means:
- Making sure signup, login, browse, donate, request, and admin all work
- Taking screenshots as proof
- Writing down bugs we know about
- Setting up Jest tests for the backend
- Updating CI to actually run those tests

---

## Core MVP Flow

1. User opens Free Sewaa landing page
2. User signs up or logs in
3. User browses available donation items
4. User posts a new item for donation
5. Another user requests or contacts the donor
6. Admin logs in and reviews the platform
7. Team shows proof: screenshots, test results, docs

---

## Track We Are Targeting

| Track | What It Means |
|-------|---------------|
| A — MVP Recovery | App is broken or team cannot explain it |
| B — MVP Stabilization | App mostly works, some bugs and docs missing |
| C — MVP Plus | App works well, team knows it, ready for polish |

**Our target:** Track B → C

---

## What We Delivered

| Item | Status |
|------|--------|
| Password hashing with bcrypt | Fixed |
| Jest tests for health + auth endpoints | Passing |
| CI workflow with MongoDB service | Configured |
| 6 screenshots of core flows | Taken |
| 10 bugs documented | Listed with priorities |
| Demo script ready | Written |

---

## Key Links

| Document | Link |
|----------|------|
| Sprint Packet | [WEEK_11_SPRINT_PACKET.md](WEEK_11_SPRINT_PACKET.md) |
| Demo Script | [DEMO_SCRIPT.md](DEMO_SCRIPT.md) |
| MVP Checklist | [MVP_CHECKLIST.md](MVP_CHECKLIST.md) |
| Test Evidence | [TEST_EVIDENCE.md](TEST_EVIDENCE.md) |
| Bug List | [docs/PROGRESS/week11/BUG_LIST.md](../PROGRESS/week11/BUG_LIST.md) |
| Screenshots | [docs/assets/screenshots/](../assets/screenshots/) |
| Live Site | https://free-sewaa-qh05.onrender.com |
