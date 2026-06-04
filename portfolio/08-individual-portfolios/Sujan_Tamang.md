# Sujan Tamang — Individual Portfolio

## 1. Role Summary

I focused on developing testing strategies, writing test cases, documenting bugs, maintaining project documentation, and supporting integration between frontend and backend components. As Testing Lead, Documentation Support, and Project Manager (Weeks 4, 7, and 11), I worked to ensure the platform was reliable, well-documented, and ready for demonstration.

## 2. Main Responsibilities

- Developing the overall testing approach including unit, integration, manual, accessibility, and regression testing
- Creating detailed test plans for authentication, item posting, and messaging features
- Writing and maintaining structured bug reports with reproduction steps and severity levels
- Creating manual testing checklists for authentication, browse, donate, requests, messaging, and admin panel
- Organizing and updating project roadmap, API documentation, and team contribution records

## 3. Key Contributions

| Area | Work Completed | Evidence Link |
|------|---------------|---------------|
| Testing Strategy | Developed overall testing approach including unit, integration, manual, accessibility, and regression testing | [Testing Strategy](../../docs/TESTING_STRATEGY.md) |
| Testing Plan | Created detailed test plans for authentication, item posting, and messaging features | [Testing Plan](../../docs/TESTING_PLAN.md) |
| QA Checklists | Created manual testing checklists for all features including mobile responsiveness and form validation | [Manual Testing Checklist](../../MANUAL_TESTING_CHECKLIST.md) |
| Bug Reporting | Wrote structured bug reports with reproduction steps, severity levels, and expected vs actual results | [Bug Reports](../../docs/ISSUES/BUGS/) |
| Documentation | Organized project roadmap, API reference, and team contribution records | [Roadmap](../../ROADMAP.md) |

## 4. Technical Ownership

I owned the testing and quality assurance domain for the project. This includes the testing strategy documents (`docs/TESTING_STRATEGY.md`, `docs/TESTING_PLAN.md`), the manual testing checklists (`MANUAL_TESTING_CHECKLIST.md`, `FORM_VALIDATION_CHECKLIST.md`), and the bug tracking system (`docs/ISSUES/BUGS/`). I also contributed to project-wide documentation by maintaining the roadmap (`ROADMAP.md`), API reference (`docs/DESIGN/API_REFERENCE.md`), and team contributions log (`docs/PROJECT/TEAM_CONTRIBUTIONS.md`).

## 5. Evidence of Work

- [Testing Strategy](../../docs/TESTING_STRATEGY.md) — Complete testing approach covering all test types
- [Testing Plan](../../docs/TESTING_PLAN.md) — Detailed test plans for core features
- [Manual Testing Checklist](../../MANUAL_TESTING_CHECKLIST.md) — Step-by-step manual test procedures
- [Bug Reports](../../docs/ISSUES/BUGS/) — Collection of structured bug reports with reproduction steps
- [Testing Log](../../docs/PROGRESS/TESTING_LOG.md) — Record of test execution results
- [Form Validation Checklist](../../FORM_VALIDATION_CHECKLIST.md) — Form validation test cases
- [Roadmap](../../ROADMAP.md) — Project timeline and milestone tracking
- [API Reference](../../docs/DESIGN/API_REFERENCE.md) — Backend endpoint documentation

## 6. AI Usage Reflection

- **AI tools used:** GitHub Copilot
- **How AI helped:** Generated initial test case ideas, suggested checklist formats, and created boilerplate testing documentation.
- **What I checked:** Verified that every AI-generated suggestion matched an actual feature of Free Sewaa and that expected outcomes were correct.
- **What I changed:** Rewrote test cases to match real user workflows, updated validation requirements, and added missing edge cases such as password special-character testing.
- **How I verified:** Executed all test cases manually and compared expected outcomes with actual application behavior. Also requested peer review from team members.
- **Area to improve:** Want to learn advanced automated testing frameworks (Playwright, Cypress) and integrate them into a CI pipeline.

## 7. Challenges and Solutions

**Challenge 1 — Unauthenticated Access to Protected Pages**
Users could access protected pages like the dashboard by entering URLs directly, bypassing the login requirement.
- **Solution:** Identified missing authentication middleware, worked with the backend team to secure protected routes, and verified the fix through manual testing. Protected routes now redirect unauthenticated users to the login page.

**Challenge 2 — Inconsistent Bug Reporting Format**
Early bug reports varied in format and detail, making it difficult to prioritize and reproduce issues.
- **Solution:** Created a standardized bug report template with fields for reproduction steps, severity, expected vs actual results, and environment details. Applied this template to all new bug reports in `docs/ISSUES/BUGS/`.

**Challenge 3 — Manual Testing Was Time-Consuming**
Running the full test suite manually before each sprint review took significant time and was prone to human error.
- **Solution:** Organized test cases into focused checklists by feature area so that team members could run targeted tests. Documented the need for future automated testing in the testing strategy.

## 8. What I Learned

I learned how to create comprehensive testing strategies covering functionality, security, usability, and performance. I gained experience writing reproducible bug reports and maintaining project documentation. Working closely with both frontend and backend teams taught me how integration testing differs from unit testing, and why clear communication about test results is essential for a smooth development workflow.

## 9. Presentation Summary

- I developed the testing strategy, QA checklists, and bug tracking system that ensured the platform's reliability
- I can explain the manual authentication testing checklist and how we verified the login/signup flow
- I helped identify and document a critical security issue: unauthenticated access to protected pages was fixed through our testing process
- I know the final MVP demo flow and can explain how each feature was tested
- I reviewed the technical defense questions and can answer honestly

## 10. Navigation

- [Back to Individual Portfolios](./README.md)
- [Back to Portfolio Home](../README.md)
- [Back to Repository](../../README.md)
