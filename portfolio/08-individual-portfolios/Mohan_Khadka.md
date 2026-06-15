# Mohan Khadka — Individual Portfolio

## 1. Role Summary

I focused on identifying and fixing bugs, improving stability, and supporting the final stages of the Free Sewaa project. As demo driver and maintenance lead (also project manager in Weeks 5 and 12), my work helped ensure the platform was reliable enough for demonstrations and presentations by addressing critical issues in authentication, navigation, and UI consistency.

## 2. Main Responsibilities

- Bug identification, debugging, and implementing fixes across the full stack
- Issue tracking and maintaining structured bug reports
- Testing authentication flows (admin login, session persistence, JWT token handling)
- Fixing broken navigation links, missing buttons, and UI inconsistencies
- Running manual tests, verifying fixes, and updating QA checklists
- Maintaining the project board with task statuses, priorities, and assignments

## 3. Key Contributions

| Area | Work Completed | Evidence Link |
|------|---------------|---------------|
| Bug Identification | Discovered and documented bugs with reproduction steps in the issues folder | [Bugs Folder](../../docs/ISSUES/BUGS/) |
| Authentication Fixes | Debugged admin login failures, session loss on refresh, and invalid login responses | [Bug 8](../../docs/ISSUES/BUGS/bug8.md), [Bug 9](../../docs/ISSUES/BUGS/bug9.md), [Bug 11](../../docs/ISSUES/BUGS/bug11.md) |
| Navigation & UI Fixes | Corrected broken links, missing buttons, and inconsistent styling across pages | [Bug Reports](../../docs/ISSUES/BUGS/) |
| Testing & QA Support | Assisted in running manual tests, verifying fixes, updating checklists | [Manual Testing Checklist](../../docs/QA/MANUAL_TESTING_CHECKLIST.md) |
| Project Board | Kept project board updated with task statuses, priorities, and assignments | [Project Board](../../docs/PROJECT/PROJECT_BOARD.md) |

## 4. Technical Ownership

I owned the bug tracking and stability improvement domain. The bug reports in `docs/ISSUES/BUGS/` were maintained by me, with detailed reproduction steps, severity classifications, and verification notes. I worked across the full stack — frontend HTML/JS files (`html/`, `js/`), server code (`server/server.js`), and authentication logic — to identify root causes and implement fixes. I also maintained `PROJECT_BOARD.md` to track progress and assignments.

## 5. Evidence of Work

- [Bug 8](../../docs/ISSUES/BUGS/bug8.md) — Admin login error after account creation (authentication flow fix)
- [Bug 9](../../docs/ISSUES/BUGS/bug9.md) — Admin login invalid response (server response handling)
- [Bug 11](../../docs/ISSUES/BUGS/bug11.md) — User session lost after page refresh (localStorage token persistence)
- [Project Board](../../docs/PROJECT/PROJECT_BOARD.md) — Task tracking and maintenance work
- [JavaScript Site File](../../js/site.js) — Login/logout logic and localStorage token handling
- [Admin Login Page](../../html/admin-login.html) — Admin authentication interface
- [QA Checklist](../../docs/QA_CHECKLIST.md) — Quality assurance checklist used for verification
- [Manual Testing Checklist](../../docs/QA/MANUAL_TESTING_CHECKLIST.md) — Test procedures used for manual testing

## 6. AI Usage Reflection

- **AI tools used:** GitHub Copilot
- **How AI helped:** Suggested boilerplate code for error handling (try-catch blocks) and provided ideas for database query structures.
- **What I checked:** Reviewed every AI-generated suggestion to ensure it matched our authentication logic, did not introduce security risks, and used correct field names from the user schema.
- **What I changed:** Rewrote most AI-generated code to fit the project's style and fixed logical errors — for example, cases where AI suggested checking the wrong field or returning an unclear error message. Added proper logging to help debug login attempts.
- **How I verified:** Manually tested the login flow with various inputs (correct password, wrong password, non-existent user) and verified the server responded appropriately. Checked server logs for debugging output.
- **Area to improve:** Want to implement rate limiting on the admin login endpoint to prevent brute-force attacks and add failed-attempt logging for security monitoring.

## 7. Challenges and Solutions

**Challenge 1 — Session Lost After Page Refresh**
Users reported that after logging in, refreshing the page would log them out, requiring them to sign in again. This broke the user experience, especially during demonstrations.
- **Solution:** Traced the issue to the JWT token being stored in a JavaScript variable (in-memory) rather than in persistent storage. Changed the frontend to save the token in `localStorage` upon login and clear it on logout. Users can now refresh the page and remain logged in, as the token is retrieved from `localStorage` on page load.

**Challenge 2 — Admin Login Failures After Account Creation**
Creating a new admin account and immediately trying to log in would fail, returning an unexpected error instead of a success response.
- **Solution:** Debugged the flow between the frontend login form, the API endpoint, and the database. Found that the password comparison logic was not correctly handling the newly created user's credentials. Fixed the comparison logic and added better error messages to distinguish between "wrong password" and "user not found."

**Challenge 3 — Broken Navigation Links Across Pages**
During final testing, several navigation links between pages were broken or pointed to wrong locations, confusing the demo flow.
- **Solution:** Systematically reviewed all HTML navigation elements, fixed relative paths, and verified that every link in the main user flow (landing → signup → browse → donate → messaging → admin) worked correctly.

## 8. What I Learned

I learned how to systematically debug full-stack applications by checking each layer (frontend, API, database) and how small changes in one place — like where a token is stored — can have large effects on user experience. I also gained experience in issue tracking, writing reproducible bug reports, and maintaining project documentation. Debugging real issues taught me that the root cause is often different from the initial assumption.

## 9. Presentation Summary

- I focused on bug fixes, debugging, and stability improvements that made the platform demo-ready
- I can explain the session loss bug: the token was stored in memory instead of localStorage, and I fixed it
- I know the admin login flow and the bugs we fixed in authentication
- The platform is now stable: users can log in, browse, post items, make requests, and refresh without losing their session
- I reviewed the technical defense questions and can answer honestly

## 10. Navigation

- [Back to Individual Portfolios](./README.md)
- [Back to Portfolio Home](../README.md)
- [Back to Repository](../../README.md)
