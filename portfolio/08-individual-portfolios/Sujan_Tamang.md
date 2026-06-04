# Individual Portfolio — Sujan Tamang

## 1. My Role

* **Name:** Sujan Tamang
* **Team:** Free Sewaa
* **Project:** Free Sewaa
* **Main responsibilities:** Developing testing strategies, writing test cases, documenting bugs, maintaining project documentation, and supporting integration between frontend and backend components.
* **Roles held during the semester:** Testing Lead, Documentation Support, and Project Manager (Weeks 4, 7, and 11)

## 2. My Strongest Contributions

| Contribution                  | What I personally did                                                                                                                                                                                    | Evidence link                                                                      |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Testing Strategy and Planning | Developed the overall testing approach including unit, integration, manual, accessibility, and regression testing. Created detailed test plans for authentication, item posting, and messaging features. | `https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/blob/6cb02b7db2cf544184323dfd88075d84606acf19/docs/TESTING_STRATEGY.md`, `docs/TESTING_PLAN.md`                                 |
| QA Checklists                 | Created manual testing checklists for authentication, browse, donate, requests, messaging, admin panel, mobile responsiveness, and form validation.                                                      | `docs/TESTING_STRATEGY.md`, `FORM_VALIDATION_CHECKLIST.md`                      |
| Bug Reporting and Tracking    | Wrote and maintained structured bug reports with reproduction steps, severity levels, expected results, and actual results.                                                                              | `docs/ISSUES/BUGS/`                                                                |
| Documentation Support         | Organized and updated project roadmap, API reference documentation, and contribution records to ensure project information remained accurate.                                                            | `ROADMAP.md`, `docs/DESIGN/API_REFERENCE.md`, `docs/PROJECT/TEAM_CONTRIBUTIONS.md` |

## 3. One Area I Can Explain Clearly

* **Area:** Manual Authentication Testing Checklist
* **File, folder, Issue, PR, or doc:** `MANUAL_TESTING_CHECKLIST.md` (Authentication Section)
* **What it does:** Provides step-by-step procedures to verify user signup, login, session management, and access control functionality.
* **How it works:** The tester creates a new account, logs in, accesses protected pages, attempts unauthorized access, and verifies logout functionality. Each step includes pass/fail criteria.
* **How it was tested:** I executed the checklist during sprint testing and Week 12 QA testing, recording results and verifying that each step matched actual system behavior.
* **One possible failure or limitation:** Because the checklist is manually executed, human error may occur if steps are skipped or interpreted differently. Automated testing would improve consistency.
* **Evidence link:** `MANUAL_TESTING_CHECKLIST.md`, `docs/PROGRESS/TESTING_LOG.md`

## 4. My AI Use

* **AI tools used:** GitHub Copilot
* **What AI helped with:** Generating initial test case ideas, suggesting checklist formats, and creating boilerplate testing documentation.
* **What I personally checked:** Verified that every AI-generated suggestion matched an actual feature of Free Sewaa and that expected outcomes were correct.
* **What I personally changed:** Rewrote test cases to match the real user workflow, updated validation requirements, and added missing edge cases such as password special-character testing.
* **How I tested or verified it:** Executed all test cases manually and compared expected outcomes with actual application behavior. Also requested peer review from team members.
* **One part I still do not fully understand:** Advanced automated testing frameworks such as Playwright and Cypress, particularly integrating them into a continuous integration pipeline.

## 5. One Problem I Helped Solve

* **Problem:** Users could access protected pages such as the dashboard without authentication by entering URLs directly.
* **Why it mattered:** This created a serious security issue because unauthorized users could potentially view or modify protected information.
* **What I did:** Identified missing authentication middleware, worked with the backend team to secure protected routes, and verified the fix through manual testing.
* **What changed:** Protected routes now redirect unauthenticated users to the login page or return authorization errors, preventing unauthorized access.
* **Evidence link:** `docs/AUTHENTICATION.md`, `server/server.js`, authentication testing records

## 6. Reflection

### What I learned

* I learned how to create comprehensive testing strategies covering functionality, security, usability, and performance.
* I gained experience writing reproducible bug reports and maintaining project documentation.

### What I am most proud of

* Helping achieve a stable and reliable final MVP through testing, bug reporting, and quality assurance activities.
* Contributing to the successful Week 12 QA results with a high pass rate and no critical bugs.

### What I should have done better

* I should have introduced automated testing earlier instead of relying mostly on manual testing.
* More automated coverage would have reduced repetitive testing effort.

### What I would improve next

* Implement automated testing using Playwright or Cypress.
* Create a continuous integration pipeline that runs tests automatically on every code update.
* Increase unit and integration test coverage for critical features.

### One skill I want to continue developing

* Test automation and Test-Driven Development (TDD).

## 7. My Best Evidence Links

1. `docs/TESTING_STRATEGY.md`
2. `MANUAL_TESTING_CHECKLIST.md`
3. `docs/ISSUES/BUGS/`
4. `ROADMAP.md`
5. `docs/PROJECT/TEAM_CONTRIBUTIONS.md`
