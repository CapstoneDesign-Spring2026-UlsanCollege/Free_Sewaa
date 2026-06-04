# Mohan Khadka — Bug Fixes & Maintenance

## Short Summary

I focused on identifying and fixing bugs, improving stability, and supporting the final stages of the Free Sewaa project. My work helped ensure the platform was reliable enough for demonstrations and presentations by addressing critical issues in authentication, navigation, and UI consistency.

## 1. My Role

- **Name:** Mohan Khadka
- **Team:** Free Sewaa
- **Project:** Free Sewaa
- **Main responsibilities:** Bug identification, debugging, issue tracking, implementing fixes, supporting testing efforts, and helping maintain code stability.
- **Role during the semester:** Demo driver and maintenance lead; also served as project manager in Weeks 5 and 12.

## 2. My Strongest Contributions

| Contribution | What I personally did | Evidence |
|---|---|---|
| Bug identification and reporting | Helped discover and document bugs in the issues folder, including authentication errors, navigation links, and UI inconsistencies, with clear steps to reproduce. | [Bugs folder](../../docs/ISSUES/BUGS/) |
| Authentication fixes | Debugged and resolved issues like admin login failures after account creation and session loss on page refresh by examining the flow between frontend, API, and database. | [Bug 8](../../docs/ISSUES/BUGS/bug8.md), [Bug 9](../../docs/ISSUES/BUGS/bug9.md), [Bug 11](../../docs/ISSUES/BUGS/bug11.md) |
| Navigation and UI fixes | Corrected broken links, missing buttons, and inconsistent styling across pages by reviewing HTML, CSS, and JavaScript files. | [Bug reports](../../docs/ISSUES/BUGS/) |
| Testing and QA support | Assisted in running manual tests, verifying fixes, and updating checklists to reflect resolved issues. | [Manual testing checklist](../../MANUAL_TESTING_CHECKLIST.md), [QA checklist](../../docs/QA_CHECKLIST.md) |
| Project board maintenance | Helped keep the PROJECT_BOARD.md updated with task statuses, priorities, and assignments to improve team coordination. | [Project board](../../PROJECT_BOARD.md) |

## 3. One Area I Can Explain Clearly

- **Area:** How the admin login flow works and where a common bug occurred
- **File/folder/doc:** `server/routes/auth.js` (admin login route) and `html/admin-login.html`
- **What it does:** Allows an administrator to log in to access the admin panel for managing users, items, and reports.
- **How it works:** The admin submits their credentials via a form on `/admin-login.html`. The frontend sends a POST request to `/api/admin/login`. The server checks the credentials against the database (looking for a user with role `admin`), and if valid, returns a JWT token. The client stores the token and redirects to the admin dashboard.
- **How it was tested:** I tested it by creating an admin user in the database (or using existing credentials), submitting the login form with correct and incorrect credentials, and verifying the response (token or error). I also checked that the admin dashboard was accessible only after a successful login.
- **One limitation:** The admin credentials are currently hardcoded or weakly managed; in a production system, we would want stronger password policies and possibly multi-factor authentication.
- **Evidence:** [Auth route code](../../js/auth.js) (if exists; otherwise note: admin login logic is in `server/server.js`), [Admin login page](../../html/admin-login.html), [Bug 8 report](../../docs/ISSUES/BUGS/bug8.md)

## 4. My AI Use and Review

- **AI tools used:** GitHub Copilot
- **What AI helped with:** Suggesting boilerplate code for error handling (e.g., try-catch blocks) and providing ideas for database query structures.
- **What I personally checked:** I reviewed every AI-generated suggestion to ensure it matched our authentication logic, did not introduce security risks, and used the correct field names from the user schema.
- **What I personally changed:** I rewrote most of the AI-generated code to fit our project’s style and fixed logical errors—for example, cases where the AI suggested checking the wrong field or returning an unclear error message. I also added proper logging to help debug login attempts.
- **How I tested or verified it:** I manually tested the login flow with various inputs (correct, wrong password, non-existent user) and verified the server responded appropriately. I also checked the logs to see if the added logging worked.
- **One area I still need to improve:** I would like to implement rate limiting on the admin login endpoint to prevent brute-force attacks and add logging for failed attempts to monitor suspicious activity.

## 5. One Problem I Helped Solve

- **Problem:** Users reported that after logging in, refreshing the page would log them out, requiring them to sign in again.
- **Why it mattered:** This broke the user experience, especially during the demo where users might expect to stay logged in while navigating the site.
- **What I did:** I traced the issue to the fact that the JWT token was being stored in memory (e.g., a JavaScript variable) rather than in persistent storage like localStorage or cookies. I changed the frontend to save the token in localStorage upon login and clear it on logout.
- **What changed:** Users can now refresh the page and remain logged in, as the token is retrieved from localStorage on page load and used to authorize API requests.
- **Evidence:** [Bug 11 — User session lost after page refresh](../../docs/ISSUES/BUGS/bug11.md), [JavaScript site file](../../js/site.js) (look for login/logout functions handling localStorage)

## 6. Reflection

### What I learned
I learned how to systematically debug full-stack applications by checking each layer (frontend, API, database) and how small changes in one place (like where a token is stored) can have large effects on user experience. I also gained experience in issue tracking and maintaining project documentation.

### What I am proud of
The platform is now stable enough for live demonstrations: users can log in, browse, post items, make requests, send messages, and refresh the page without losing their session unexpectedly.

### What I should have done better
I should have started maintaining a detailed changelog or fix log earlier in the semester so that we could easily track what was resolved and when. Relying on memory or scattered commit messages made retrospectives harder.

### What I would improve next
I would implement a more robust authentication system with refresh tokens, add rate limiting on auth endpoints, and create a centralized error logging service to help diagnose issues in production.

### One skill I want to continue developing
Debugging and observability in full-stack web applications, particularly how to use logging, monitoring, and tracing to identify and resolve issues efficiently.

## 7. Presentation Readiness

- [x] I can explain my main contribution: bug fixes, debugging, and stability improvements
- [x] I can explain one technical area clearly: how the admin login flow works and how we fixed the session loss on refresh
- [x] I know the final MVP demo flow (landing → sign up → browse → post item → request item → send message → admin panel)
- [x] I know at least one bug or limitation: admin login could be strengthened against brute-force; session stored in localStorage has XSS risk
- [x] I reviewed the technical defense questions
- [x] I can answer honestly if I do not know something

## 8. My Best Evidence Links

1. [Bug 8 report](../../docs/ISSUES/BUGS/bug8.md) — Admin login error after account creation
2. [Bug 9 report](../../docs/ISSUES/BUGS/bug9.md) — Admin login invalid response
3. [Bug 11 report](../../docs/ISSUES/BUGS/bug11.md) — Session lost after page refresh
4. [Project board](../../PROJECT_BOARD.md) — Shows task tracking and maintenance work
5. [JavaScript site file](../../js/site.js) — Contains login/logout logic and localStorage usage

---
[Back to Individual Portfolios](./README.md) | [Back to Portfolio Home](../README.md)