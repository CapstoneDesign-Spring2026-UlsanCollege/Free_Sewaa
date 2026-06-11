# Scope Decisions

## 1. Donation Platform Instead of Marketplace

The team prioritized posting, browsing, requesting, and messaging over payments, auctions, shipping, and seller tooling. This kept the semester MVP centered on community reuse.

**Evidence:** [Project pitch](../../docs/PROJECT/PROJECT_IDEA_PITCH.md), [initial design](../../docs/DESIGN/DESIGN_DOC-V1.md)

## 2. JavaScript Across the Application

The repository uses browser JavaScript, React/Vite assets, and a Node.js server. The current server is a native HTTP implementation using the MongoDB driver; earlier historical documents and commits also show Express/Mongoose architecture work.

**Evidence:** [`package.json`](../../package.json), [`server/server.js`](../../server/server.js), [architecture history](../03-design-and-planning/architecture/README.md)

## 3. Mixed Authentication During MVP Evolution

The final repository supports Firebase identity-token integration alongside local account endpoints. This enabled multiple demonstration paths but increased security and consistency risk. The local password path requires further hardening.

**Evidence:** [`server/server.js`](../../server/server.js), [authentication documentation](../../docs/AUTHENTICATION.md)

## 4. Preserve Static Pages During React Work

React/Vite work was introduced without deleting the established static frontend. Preserving both reduced migration risk during the semester, but left two frontend structures to maintain.

**Evidence:** [frontend guide](../../docs/FRONTEND_GUIDE.md), [Week 14](../02-semester-journey/weekly-sprints/WEEK_14.md)

## 5. Two Public Demo Targets

Render remains the primary documented environment because the repository contains `render.yaml`. A public Vercel deployment provides an additional demonstration route.

**Evidence:** [`render.yaml`](../../render.yaml), [deployment plan](../04-final-product/DEPLOYMENT_AND_DEMO_PLAN.md)

## 6. Evidence-First Testing Claims

The portfolio distinguishes test plans and checklists from recorded execution. Automated server tests and saved logs are presented as direct evidence; broader manual metrics are labeled as historical reports when raw results are incomplete.

**Evidence:** [`server/__tests__/api.test.js`](../../server/__tests__/api.test.js), [saved test output](../../docs/evidence/week12/logs/test-output.txt), [QA report](../05-qa-and-stabilization/QA_REPORT.md)

## 7. AI Assistance Requires Human Ownership

AI tools could assist with drafts, debugging, code, tests, and documentation, but repository evidence and human explanation remain the basis for grading.

**Evidence:** [AI use summary](../06-ai-and-code-ownership/AI_USE_SUMMARY.md), [ownership audit](../06-ai-and-code-ownership/AI_CODE_OWNERSHIP_AUDIT.md)
