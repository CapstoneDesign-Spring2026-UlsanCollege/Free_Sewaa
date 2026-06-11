# Final Presentation Script

**Target time:** 15 minutes

## 1. Project Story - 2 minutes

"Free Sewaa is our community donation platform. The problem is that usable items are wasted while people nearby may need them. Our MVP focuses on a simple donation journey: create an account, browse or post an item, request it, communicate, and track activity."

"We intentionally kept the scope focused on donation exchange rather than payments, shipping, or a full marketplace."

## 2. Live Demo - 5 minutes

Use [Render](https://free-sewaa-qh05.onrender.com) first. Use [Vercel](https://free-sewaa.vercel.app), localhost, or screenshots if needed.

Demo sequence:

1. Landing page and navigation
2. Account access with a non-sensitive demo user
3. Browse donations and filters
4. Post a donation
5. Request an item
6. Messaging or communication path
7. User panel and administration view

If a step fails, say what failed and switch to saved evidence. Do not claim a failed live step worked.

## 3. Semester Journey - 2 minutes

"Our semester moved through setup, scope decisions, frontend and backend development, deployment, QA, UI polish, partial React migration, and final portfolio organization."

Key evidence:

- Weeks 1-12 formal sprint packets
- Weeks 13-16 commit and documentation evidence
- Five sprint summaries
- Final MVP scope and limitations

## 4. QA and Stabilization - 2 minutes

"We used a hybrid QA approach. The strongest direct evidence is the committed server tests, saved test output, manual checklists, sprint packets, and bug records. Some broad manual metrics are preserved as historical sprint claims rather than independently reproducible raw data."

Mention:

- Server tests for health and signup validation
- Manual QA checklists for core flows, browser, mobile, accessibility, and security
- Known limitations: local-password hardening, validation, rate limiting, and partial frontend migration

## 5. AI and Code Ownership - 1 minute

"AI was used as an assistant for drafts, debugging ideas, documentation, and code suggestions. It did not decide scope, completion, security acceptance, or grading evidence. Claims in this portfolio are tied to repository files, commits, PRs, issues, and saved test evidence."

## 6. Technical Defense - 3 minutes

Be ready to explain:

- Current native Node.js HTTP server
- MongoDB driver and application collections
- Local and Firebase authentication boundaries
- Post -> browse -> request -> message flow
- Deployment on Render and Vercel
- Why the app is an academic MVP, not production-hardened
- Which areas each member can explain

Close with the next technical improvements: harden local passwords, centralize validation, add end-to-end tests, finish the frontend architecture decision, and add production security controls.
