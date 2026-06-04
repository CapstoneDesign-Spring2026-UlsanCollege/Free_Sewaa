# Scope Decisions

This document captures key decisions made during the project that affected scope, technology, and deliverables.

## 1. MVP Focus Decision (Sprint 2)

**Decision:** Build a functional donation platform (MVP Option B) rather than a full marketplace.

**Context:** During Sprint 2, the team evaluated two MVP options. Option A was a broader marketplace; Option B focused specifically on item donation and request flows.

**Evidence:**
- [Sprint 2 Packet](../../docs/sprints/SPRINT_2.md) — "MVP Features Decision"
- [DESIGN_DOC-V1.md](../../docs/DESIGN/DESIGN_DOC-V1.md) — Initial scope definition

**Impact:** Narrower scope allowed the team to deliver working core features (post, browse, request, message) within the semester.

## 2. Technology Stack

**Decision:** Node.js + Express + MongoDB + JWT for backend; vanilla HTML/CSS/JS with React migration for frontend.

**Context:** Team familiarity with JavaScript, free-tier hosting options, and academic requirements.

**Evidence:**
- [Backend Plan](../../docs/DESIGN/BACKEND_PLAN.md)
- [Frontend Design](../../docs/DESIGN/Frontend_DESIGN.md)
- [DESIGN_DOC-V1.md](../../docs/DESIGN/DESIGN_DOC-V1.md)

**Impact:** JavaScript across the stack reduced context switching. MongoDB free tier on Atlas enabled zero-cost deployment.

## 3. React Migration (Week 14+)

**Decision:** Begin converting static HTML pages to React components.

**Context:** Post-MVP, the team decided to modernize the frontend using React + Vite for better maintainability.

**Evidence:**
- [React migration commits](../../README.md) — `7dc196f`, `b38c79d`, `9614646`
- [Frontend Guide](../../docs/FRONTEND_GUIDE.md) — Updated for React
- `vite.config.js` — Vite build configuration (archived in commit `c57d2ab` before cleanup)

**Impact:** Improved code organization but introduced migration work that continued through the final weeks.

## 4. Deployment on Render (Free Tier)

**Decision:** Deploy on Render using free tier with automatic deploys from GitHub.

**Context:** Render offered free tier with GitHub integration, suitable for the project's scale.

**Evidence:**
- [render.yaml](../../render.yaml)
- [Deployment Guide](../../docs/DEPLOYMENT_GUIDE.md)
- [Deployment Checklist](../../DEPLOYMENT_CHECKLIST.md)

**Impact:** Live demo available at all times. Cold start (~30s) is a known limitation.

## 5. Testing Strategy: Manual + Automated

**Decision:** Focus on manual QA checklists for comprehensive coverage, with Jest automated tests for critical backend paths.

**Context:** Limited time for full test automation. Manual testing provided broader coverage across 50+ test cases.

**Evidence:**
- [Testing Strategy](../../docs/TESTING_STRATEGY.md)
- [Testing Plan](../../docs/TESTING_PLAN.md)
- [QA Checklist](../../docs/QA_CHECKLIST.md)

**Impact:** High manual test coverage (96% pass rate in Week 12 QA Day) with 3 automated backend tests.

## 6. AI-Assisted Development

**Decision:** Allow AI-assisted code generation with mandatory human review and testing.

**Context:** Team agreed to use GitHub Copilot and AI tools for productivity, with all AI code reviewed.

**Evidence:**
- [AI Code Ownership Audit](../../docs/AI_CODE_OWNERSHIP_AUDIT.md)
- [Team Agreement](../../docs/PROJECT/TEAM_AGREEMENT.md)

**Impact:** Accelerated development of boilerplate code, but required careful review of auth and security logic.

## 7. Security Trade-offs (Known)

**Decision:** Ship with known security gaps documented, prioritize functionality.

**Context:** Passwords stored in plain text (bcrypt installed but not integrated), CORS wide open, demo credentials in README.

**Evidence:**
- [Security Checklist](../../SECURITY_CHECKLIST.md)
- [Bug Triage](../../docs/PROJECT/BUG_TRIAGE.md)
- [BUGS_AND_LIMITATIONS.md](../05-qa-and-stabilization/BUGS_AND_LIMITATIONS.md)

**Impact:** Functionality delivered on time; security hardening identified as post-semester priority.
