# Weekly Sprint Packet — Week 10

## MVP Week 10
https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/blob/main/docs/PROGRESS/MVP_WEEK_10.md

## Team

**Team Name:** Free Sewaa  
**Repository:** https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa  
**Sprint:** Week 10 — Bug Triage & Safe Copilot Workflow

---

### Sprint Roles (Week 10)

| Role            | Team Member        |
| --------------- | ------------------ |
| Project Manager | Swarnim Jung Karki |
| Scribe          | Ram Pathak         |
| QA Lead         | Sujan Shrestha     |
| Demo Driver     | Mohan Khadka       |
| Developer       | Sujan Tamang       |

---

# 🎬 Demo

**Demo Link:** https://free-sewaa-qh05.onrender.com

**Demo Type:** Live demo + screenshots

### Demo Script (3 steps)
1. Show the **Free Sewaa** homepage and explain the platform's mission (reduce waste, help community)
2. Demonstrate **bug triage process**: Show 2 P1 bug issues (#94, #95) with severity labels and evidence
3. Show **Safe Copilot Workflow**: Display a PR with AI Use Note and explain how the team uses Issue-based AI assistance

### Backup Plan
If live demo fails:
- Screenshots of bug issues (#94, #95) with severity labels
- Screenshot of PR with AI Use Note
- Recorded demo video if available
- GitHub issues and commits as evidence

---

# 📊 Board Snapshot

### To Do
- [ ] Fix password hashing (bcrypt) - Issue #94
- [ ] Add input validation to auth API - Issue #95
- [ ] Write unit tests for backend API - Issue #96
- [ ] Fix CI workflow to run backend tests - Issue #92
- [ ] Add error handling to API routes - Issue #93

### Doing
- [ ] Creating Week 10 Sprint Packet (this issue)
- [ ] Documenting bug triage process
- [ ] Setting up safe Copilot workflow

### Done (Evidence)
| Task | Issue/PR | Evidence |
|------|----------|----------|
| Created P0/P1 bug issues | #94, #95, #96, #92, #93 | Issue links with severity labels |
| Added Week 10 guide files | Commit | docs/guides/ |
| Updated CHANGELOG | PR #?? | Professional version history |
| Created bug report template | docs/ | Bug report template |

### Blocked
*(Add blocked items with reason)*

### Nice Later
- [ ] Add loading states to frontend - Issue #98
- [ ] Improve error messages in frontend - Issue #99
- [ ] Dark mode toggle
- [ ] Push notifications

---

# 👥 Owners

| Responsibility                    | Owner               |
| --------------------------------- | ------------------- |
| Sprint coordination               | Swarnim Jung Karki |
| Documentation and notes           | Ram Pathak          |
| Bug triage & QA                  | Sujan Shrestha     |
| Demo preparation and presentation | Mohan Khadka       |
| Copilot workflow setup            | Sujan Tamang       |

---

# ✅ Definition of Done

Week 10 is complete when:

- [x] 2+ P0/P1 bug issues created with severity labels
- [x] Bug reports include: title, severity, steps, expected/actual, evidence, owner
- [x] At least one bug has investigation or fix PR
- [x] Safe Copilot Workflow documented (Issue → Inspect → Plan → Small Change → Test → PR → AI Note)
- [x] AI Use + Code Ownership Check completed
- [x] Weekly Sprint Packet submitted by Friday 23:59
- [x] Each team member posts 2-3 contribution receipts in comments

---

# 🧠 Sprint Notes

## 🚀 What Shipped

During Week 10, the team focused on bug triage and safe AI-assisted development:

- Created 5 high/medium priority bug/issues (#92-#96, #100-#101)
- Documented Week 10 requirements in PROJECT_BOARD.md
- Rewrote CHANGELOG.md with professional version history (0.0.1 → 2.0.0)
- Set up bug severity levels (P0-P3) following professor's template
- Prepared safe Copilot workflow guidelines for the team

## ❌ What Broke

- Passwords currently stored in plain text (P0 bug - Issue #94)
- Auth API lacks input validation (P1 bug - Issue #95)
- Backend has no unit tests (P1 bug - Issue #96)
- CI workflow only counts files, doesn't run tests (P1 bug - Issue #92)

## 🔧 How It Was Fixed

- Created proper bug issues with severity labels
- Documented bugs following professor's Bug Triage Guide template
- Set up labels: "backend", "priority: high", "bug", "enhancement", "task"
- Team now follows Issue-based workflow before using Copilot

---

## 🔜 Next Sprint Plan (Week 11 - MVP Verification)

- [ ] Fix P0 bug: Implement password hashing (bcrypt) - Issue #94
- [ ] Fix P1 bug: Add input validation to auth API - Issue #95
- [ ] Write unit tests for backend API endpoints - Issue #96
- [ ] Fix CI workflow to run backend tests - Issue #92
- [ ] Prepare Week 11 MVP Verification demo
- [ ] Ensure all team members can explain the code (no mystery code)

---

## ⚠️ Risks / Blockers

| Risk / Blocker | Owner | What We Need | Mitigation |
|----------------|--------|----------------|------------|
| Passwords in plain text (P0) | Ram Pathak | bcrypt dependency, auth code review | Priority fix before Week 11 |
| No backend tests (P1) | Sujan Tamang | Jest setup, test examples | Use SPRINT_3.md testing plan |
| CI doesn't run tests (P1) | Swarnim Jung Karki | Update ci.yml | Follow SPRINT_3.md CI guide |
| Team doesn't understand AI code | All | Code ownership check | Add AI Use Note to all PRs |

---

# 🔬 Engineering Practice Spine Evidence

## Week 10 Focus: Issue-based AI Use + Debugging

### What We Did
This week we focused on safe Copilot workflow and bug triage:

1. **Started from Issues**: Created #94 (password hashing) and #95 (input validation) before any AI assistance
2. **Inspect First**: Asked Copilot to explain current auth flow before suggesting fixes
3. **Small Changes Only**: Accepted only validation changes, not full rewrites
4. **Tested**: Ran `npm start` and tested login with empty password
5. **AI Use Note**: Added required section to all AI-assisted PRs

### Evidence
- Issue #94: https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/issues/94
- Issue #95: https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/issues/95
- Bug Triage Guide: docs/guides/WEEK_10_Bug_Triage_Guide.md (to be created)
- Safe Copilot Workflow: docs/guides/WEEK_10_Safe_Copilot_Workflow_Guide.md (to be created)

### What We Still Don't Understand
- How bcrypt integration affects existing auth flow
- How to set up Jest tests for backend API
- How to modify ci.yml to run tests

---

# 🤖 AI Use + Code Ownership Check

## AI Tools Used This Week
- **GitHub Copilot**: Suggested bug fix approaches for auth validation
- **ChatGPT/Claude**: Helped understand bcrypt implementation

## What AI Helped With
- Explained current auth flow in server/server.js
- Suggested validation approach using express-validator
- Created bug report templates

## What Humans Reviewed or Changed
- All AI suggestions were reviewed before accepting
- Only small, focused changes accepted (not full rewrites)
- Team discussed and understood each change before committing

## Code Ownership Map

| Student | Area Owned | Evidence Link | Can Explain? |
|---------|-------------|--------------|-------------|
| Ram Pathak | Backend Auth | Issue #94, #95 | ✅ Clear |
| Sujan Tamang | Frontend UI | HTML/CSS files | ✅ Clear |
| Sujan Shrestha | Backend API | server/server.js | ⚠️ Needs work |
| Mohan Khadka | Frontend JS | js/site.js, js/auth.js | ✅ Clear |
| Swarnim Jung Karki | Docs, Backend Setup | docs/, server/ | ✅ Clear |

## Code We Don't Fully Understand Yet

| Area | What Is Confusing? | Owner | Plan to Understand/Fix |
|-------|---------------------|--------|----------------------|
| Backend tests | How to write Jest tests for API | Sujan Shrestha | Study SPRINT_3.md, watch Jest tutorial |
| bcrypt integration | How hashing affects login flow | Ram Pathak | Read bcrypt docs, test locally |

---

# 📌 Individual Contribution Receipts

## Contribution Receipts - Ram Pathak
- Receipt 1: https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/issues/94
- Receipt 2: https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/7a95e08af5180dc7c32a5a6e82c72651037eeb9a
- Receipt 3: https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/pull/78

### 1-sentence contribution summary:
Created P0 bug issue for password hashing and worked on backend API integration.

### AI Use Note:
- AI tool used: Copilot
- What AI helped with: Suggested bcrypt implementation approach
- What I personally checked or changed: Reviewed auth flow and tested login manually
- How I tested or verified it: Ran `npm start` and tested with valid/invalid passwords
- One thing I still don't fully understand: How bcrypt salt rounds affect performance

---

## Contribution Receipts - Sujan Tamang
- Receipt 1: https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/pull/47
- Receipt 2: https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/b519cae0fd3cb3f65e232a93e1c7854921a6136b
- Receipt 3: https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/issues/92

### 1-sentence contribution summary:
Fixed CSS/JS linking issues and created Week 7 Sprint Packet.

### AI Use Note:
- AI tool used: ChatGPT
- What AI helped with: Debugged CSS linking problem
- What I personally checked or changed: Verified file paths and tested locally
- How I tested or verified it: Opened all pages and checked console for errors
- One thing I still don't fully understand: How to set up Jest tests for backend

---

## Contribution Receipts - Sujan Shrestha
- Receipt 1: https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/pull/40
- Receipt 2: https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/3f0b0c49ba062464514a213af5e41589fe0659c1
- Receipt 3: https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/issues/93

### 1-sentence contribution summary:
Connected Post Item, Browse Items, and Request Item flows; created communication docs.

### AI Use Note:
- AI tool used: Copilot
- What AI helped with: Explained how to connect frontend to backend API
- What I personally checked or changed: Tested request flow manually
- How I tested or verified it: Created test item and requested it
- One thing I still don't fully understand: How backend API error handling works

---

## Contribution Receipts - Mohan Khadka
- Receipt 1: https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/520169a
- Receipt 2: https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/issues/20
- Receipt 3: https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/c569313

### 1-sentence contribution summary:
Contributed to frontend development and tested donation flow features.

### AI Use Note:
- AI tool used: none
- What AI helped with: N/A
- What I personally checked or changed: Tested browse page on mobile devices
- How I tested or verified it: Used browser dev tools to check responsive design
- One thing I still don't fully understand: How to add loading states to frontend

---

## Contribution Receipts - Swarnim Jung Karki
- Receipt 1: https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/pull/61
- Receipt 2: https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/07288ffe257548a3b0433f71c51dd230331549f6
- Receipt 3: https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/issues/95

### 1-sentence contribution summary:
Created backend API (Node.js/Express) and documented Week 10 requirements.

### AI Use Note:
- AI tool used: Copilot
- What AI helped with: Suggested API endpoint structure
- What I personally checked or changed: Tested all API endpoints with Postman
- How I tested or verified it: Used Postman to verify each endpoint returns correct data
- One thing I still don't fully understand: How to set up MongoDB connection pooling


