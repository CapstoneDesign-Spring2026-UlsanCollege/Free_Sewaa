# Sujan Tamang — Testing, Integration & Documentation

## Short Summary

I focused on testing, documentation, and ensuring the different parts of Free Sewaa worked together correctly. My work helped improve the reliability of the platform by creating test plans, writing bug reports, and organizing evidence for the final demo.

## 1. My Role

- **Name:** Sujan Tamang
- **Team:** Free Sewaa
- **Project:** Free Sewaa
- **Main responsibilities:** Developing testing strategies, writing test cases, documenting bugs, maintaining project documentation, and supporting integration between frontend and backend components.
- **Role during the semester:** Testing lead and documentation support; also served as project manager in Weeks 4, 7, and 11.

## 2. My Strongest Contributions

| Contribution | What I personally did | Evidence |
|---|---|---|
| Testing strategy and plans | Developed the overall testing approach (unit, integration, manual, accessibility, regression) and wrote detailed test plans for features like authentication, item posting, and messaging. | [Testing strategy](../../../docs/TESTING_STRATEGY.md), [Testing plan](../../../docs/TESTING_PLAN.md) |
| QA checklists | Created specialized checklists for manual testing of auth, browse, donate, requests, messages, admin panel, mobile, and form validation. | [Manual testing checklist](../../../MANUAL_TESTING_CHECKLIST.md), [Form validation checklist](../../../FORM_VALIDATION_CHECKLIST.md) |
| Bug reporting and tracking | Wrote 20 structured bug reports with clear steps to reproduce, severity levels, and expected vs actual behavior; maintained them in the issues folder. | [Bug reports folder](../../../docs/ISSUES/BUGS/) |
| Documentation support | Helped organize and update key documents like the project roadmap, API reference, and contribution records to keep them accurate and useful. | [Roadmap](../../../ROADMAP.md), [API reference](../../../docs/DESIGN/API_REFERENCE.md), [Team contributions](../../../docs/PROJECT/TEAM_CONTRIBUTIONS.md) |

## 3. One Area I Can Explain Clearly

- **Area:** How the manual testing checklist for authentication works
- **File/folder/doc:** [Manual testing checklist](../../../MANUAL_TESTING_CHECKLIST.md) (authentication section)
- **What it does:** Provides a step-by-step procedure to verify that user signup, login, session management, and access control are working correctly.
- **How it works:** The checklist instructs the tester to: 1) Sign up a new user with valid data, 2) Log in with those credentials, 3) Access a protected page like the dashboard, 4) Try to access a protected route without logging in (should redirect), 5) Log out and verify the session is cleared. Each step has a clear pass/fail criterion.
- **How it was tested:** I followed the checklist myself during sprint testing and Week 12 QA Day, noting any deviations. I also compared the checklist steps to the actual behavior in the application to ensure they were accurate and achievable.
- **One limitation:** The checklist relies on manual execution, which can be inconsistent if steps are skipped or misinterpreted. Automated tests would provide more consistent verification.
- **Evidence:** [Manual testing checklist](../../../MANUAL_TESTING_CHECKLIST.md), [Test log](../../../docs/PROGRESS/TESTING_LOG.md) (shows when checklists were executed)

## 4. My AI Use and Review

- **AI tools used:** GitHub Copilot
- **What AI helped with:** Suggesting boilerplate text for test cases (e.g., “Test that signup fails with missing email”) and helping format the checklist items in markdown.
- **What I personally checked:** I reviewed every AI-generated test suggestion to ensure it matched a real feature of Free Sewaa and that the steps were actually possible to perform. I also verified that the expected results were correct based on the current implementation.
- **What I personally changed:** I rewrote most of the AI-generated content to reflect the actual user flow of our platform—for example, adjusting test steps to match our specific form fields and validation rules. I also added edge cases that the AI missed, like testing with special characters in passwords.
- **How I tested or verified it:** I manually executed each test case from the checklist and recorded whether it passed or failed. I also had another team member review some of the checklists to catch any unclear instructions.
- **One area I still need to improve:** I would like to convert more of these manual test cases into automated tests (e.g., using Cypress or Playwright) so they can be run quickly and consistently on every code change.

## 5. One Problem I Helped Solve

- **Problem:** During early testing, we discovered that the authentication flow had a critical flaw: users could access protected pages like the dashboard without logging in by directly entering the URL.
- **Why it mattered:** This was a serious security vulnerability (broken access control) that would allow anyone to view or modify other users’ data, making the platform unsafe for real use.
- **What I did:** I identified the missing middleware protection on certain routes, worked with the backend team to add the authentication check to all relevant endpoints, and verified the fix by attempting to access those URLs without logging in.
- **What changed:** Routes like `/dashboard.html` and `/api/items` now properly redirect unauthenticated users to the login page or return a 401 error, preventing unauthorized access.
- **Evidence:** [Authentication docs](../../../docs/AUTHENTICATION.md), [Server code](../../../server/server.js) (look for auth middleware), [Bug report on auth redirect] (if exists; otherwise note: verified via manual testing)

## 6. Reflection

### What I learned
I learned how to design a comprehensive testing strategy that covers not just functionality but also security, usability, and performance. I also gained experience in writing clear, reproducible bug reports and organizing documentation so that it remains useful over time.

### What I am proud of
The testing evidence we collected—including the checklists, bug reports, and test logs—gave the team confidence that the platform was stable enough for the final demo. The Week 12 QA Day result (96% pass rate, no P0 bugs) was a direct outcome of this effort.

### What I should have done better
I should have started integrating automated testing earlier in the semester. Relying primarily on manual testing meant we spent a lot of time repeating the same checks, and we had fewer safeguards against regressions when code changed.

### What I would improve next
I would implement a continuous integration pipeline that runs automated tests on every push, prioritize writing unit and integration tests for critical flows like auth and item posting, and use the manual checklists for exploratory and usability testing rather than regression testing.

### One skill I want to continue developing
Test automation and test-driven development (TDD), particularly how to write effective tests that drive better code design and catch issues early.

## 7. Presentation Readiness

- [x] I can explain my main contribution: testing strategy, QA checklists, and bug reporting
- [x] I can explain one technical area clearly: how the manual authentication testing checklist works
- [x] I know the final MVP demo flow (landing → sign up → browse → post item → request item → send message → admin panel)
- [x] I know at least one bug or limitation: manual testing relies on human execution; automated test coverage is limited
- [x] I reviewed the technical defense questions
- [x] I can answer honestly if I do not know something

## 8. My Best Evidence Links

1. [Testing strategy](../../../docs/TESTING_STRATEGY.md) — Overall approach to testing
2. [Manual testing checklist](../../../MANUAL_TESTING_CHECKLIST.md) — Auth and feature-specific test steps
3. [Bug reports folder](../../../docs/ISSUES/BUGS/) — Structured bug reports with reproduction steps
4. [Roadmap](../../../ROADMAP.md) — Shows how testing fits into the project timeline
5. [Team contributions](../../../docs/PROJECT/TEAM_CONTRIBUTIONS.md) — Shows documentation and testing responsibilities

---
[Back to Individual Portfolios](./README.md) | [Back to Portfolio Home](../README.md)