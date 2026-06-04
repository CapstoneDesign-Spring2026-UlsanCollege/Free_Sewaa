# Technical Defense Preparation

## Q&A Preparation by Topic

---

### Authentication

**Q: How does your authentication system work?**
A: We use JWT (JSON Web Tokens) for authentication. When a user signs up or signs in, the server returns a JWT token that is stored in the browser. Subsequent API requests include this token in the Authorization header for verification.

**Q: Is password hashing implemented?**
A: bcrypt is installed as a dependency but not yet fully integrated for password hashing. Passwords are currently stored in plain text — this is a known P1 issue documented in our security checklist and bug tracker.

**Q: What happens when a user refreshes the page?**
A: Currently, the session may be lost on page refresh. This is a known P1 bug (bug11) — we need to implement persistent session storage.

**Evidence:** [Authentication docs](../../docs/AUTHENTICATION.md), [Security Checklist](../../SECURITY_CHECKLIST.md), [Bug 11](../../docs/ISSUES/BUGS/bug11.md)

---

### Backend/API

**Q: What framework did you use and why?**
A: We used Express.js running on Node.js. We chose it because the team was familiar with JavaScript, it's lightweight and flexible, and it integrates well with MongoDB via Mongoose.

**Q: How many API endpoints do you have?**
A: We have RESTful endpoints for auth (signup, signin, logout), items (CRUD), requests (create, list), messages (send, receive), and users (list, manage). Full documentation is in the API Reference.

**Q: How is error handling implemented?**
A: We have try-catch blocks in route handlers with appropriate HTTP status codes. However, error responses are not fully consistent — this is an area for improvement.

**Evidence:** [API Reference](../../docs/DESIGN/API_REFERENCE.md), [Backend Guide](../../docs/BACKEND_GUIDE.md), [server/routes/](../../server/)

---

### MongoDB / Database Design

**Q: What database are you using and why?**
A: MongoDB Atlas (free tier). We chose MongoDB for its flexibility with document-based schemas, easy scaling, and free cloud hosting.

**Q: What collections do you have?**
A: Four main collections: `users` (accounts), `items` (donation listings), `requests` (item requests), `messages` (user communications).

**Q: How do you handle database connections?**
A: Mongoose ODM manages connections via a connection string in the `.env` file. The server connects on startup and handles reconnection automatically.

**Evidence:** [Database Schema](../../docs/DESIGN/DATABASE_SCHEMA.md), [Database Design](../../docs/DATABASE_DESIGN.md), [server/models/](../../server/)

---

### Frontend / Routing

**Q: How many pages does your application have?**
A: 18+ pages including landing, signin, signup, browse, donate, item detail, dashboard, profile, messages, requests, saved items, admin login, admin dashboard, and more.

**Q: Is the frontend responsive?**
A: Yes. We implemented responsive design with CSS media queries, viewport-based sizing, and touch-target minimums. Tested on mobile viewports (390×844) and multiple browsers.

**Q: Tell us about the React migration.**
A: We started migrating from static HTML to React components using Vite. The migration is in progress — some pages are React components while others remain as static HTML.

**Evidence:** [Frontend Guide](../../docs/FRONTEND_GUIDE.md), [UI Flow](../../docs/DESIGN/UI_FLOW.md), [Mobile Testing Checklist](../../MOBILE_TESTING_CHECKLIST.md)

---

### Admin Panel

**Q: What can admins do on the platform?**
A: Admins can log in through a separate admin portal, view the dashboard with platform statistics, manage user accounts, moderate item listings, and review requests.

**Q: How is admin access secured?**
A: Admin login uses a separate authentication flow with dedicated credentials. The admin panel is not accessible from the main user interface.

**Evidence:** [Admin Guide](../../docs/ADMIN_GUIDE.md), [Admin Review Checklist](../../ADMIN_REVIEW_CHECKLIST.md), [admin-panel.js](../../admin-panel.js)

---

### Security Limitations

**Q: What are the main security issues?**
A: Three known issues: (1) passwords stored in plain text — bcrypt installed but not integrated, (2) CORS configured with wildcard `*` allowing any origin, (3) demo credentials visible in README. All documented with severity levels.

**Q: How do you handle CORS?**
A: Currently configured with `app.use(cors())` which allows all origins. This should be restricted to specific domains.

**Evidence:** [Security Checklist](../../SECURITY_CHECKLIST.md), [Bug Triage](../../docs/PROJECT/BUG_TRIAGE.md), [server/server.js](../../server/server.js)

---

### Testing Strategy

**Q: How did you test the application?**
A: We used a hybrid approach: (1) manual testing with 50+ test cases across specialized checklists, (2) automated testing with 3 Jest tests for backend endpoints, (3) cross-browser testing, (4) mobile viewport testing, (5) accessibility testing.

**Q: What was your QA Day result?**
A: 50+ tests executed with 96% pass rate. 0 P0 bugs remaining. Performance: homepage 1.8s, API 280ms, DB 85ms.

**Evidence:** [Testing Strategy](../../docs/TESTING_STRATEGY.md), [QA Report](../05-qa-and-stabilization/QA_REPORT.md), checklists

---

### Deployment on Render

**Q: How is the application deployed?**
A: Deployed on Render's free tier with automatic deploys from the main branch. Configured via `render.yaml` with build and start commands.

**Q: What are the limitations of your deployment?**
A: Free tier cold starts (~30 seconds), limited to 750 hours/month, 512 MB RAM. Uses Render subdomain (no custom domain).

**Evidence:** [render.yaml](../../render.yaml), [Deployment Guide](../../docs/DEPLOYMENT_GUIDE.md), [Deployment Checklist](../../DEPLOYMENT_CHECKLIST.md)

---

### Known Bugs

**Q: What are the most critical bugs?**
A: P0 bugs: password recovery missing (bug12), broken navigation links (bug13), accessibility regression (bug18). All documented with reproduction steps.

**Q: What is the plan to fix them?**
A: P0 bugs are prioritized for immediate fix. P1-P2 bugs scheduled for post-semester work.

**Evidence:** [BUGS_AND_LIMITATIONS.md](../05-qa-and-stabilization/BUGS_AND_LIMITATIONS.md), [docs/ISSUES/BUGS/](../../docs/ISSUES/BUGS/)

---

### Future Improvements

**Q: What would you improve next?**
A: (1) Integrate bcrypt password hashing, (2) Restrict CORS configuration, (3) Add rate limiting, (4) Complete React migration, (5) Implement password recovery, (6) Add email notifications, (7) Improve test automation coverage, (8) Add custom domain.

**Evidence:** [FINAL_REVIEW_NOTES.md](../../FINAL_REVIEW_NOTES.md), [Future Enhancements](../../docs/FUTURE_ENHANCEMENTS.md), [ROADMAP.md](../../ROADMAP.md)
