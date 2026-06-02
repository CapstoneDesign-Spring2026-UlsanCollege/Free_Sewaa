# Sujan Tamang — Testing and Documentation

I made sure Free Sewaa actually works. I created the QA checklists, ran the manual tests, wrote the bug reports, and coordinated the Week 12 QA Day that achieved a 96% pass rate. My work gives the team confidence that the platform is stable enough to demonstrate.

## 1. My Role

- **Name:** Sujan Tamang
- **Team:** Capstone Design — Spring 2026, Ulsan College
- **Project:** Free Sewaa
- **Main responsibilities:** QA strategy, manual testing, bug documentation, testing evidence
- **Role during the semester:** Lead Developer, Project Manager (Weeks 4, 7, 11), Testing Lead

## 2. My Strongest Contributions

| Contribution | What I personally did | Evidence |
|---|---|---|
| QA checklists | Created 10 specialized checklists covering all features | [Manual Checklist](../../MANUAL_TESTING_CHECKLIST.md) |
| Manual testing | Executed 50+ test cases across auth, browse, donate, messages, admin | [QA Checklist](../../docs/QA_CHECKLIST.md) |
| Bug reports | Wrote 20 structured bug reports with severity, steps, and screenshots | [Bug Reports](../../docs/ISSUES/BUGS/) |
| QA Day (Week 12) | Coordinated final QA session — 96% pass rate, 0 P0 bugs | [Week 12 Sprint](../../docs/sprints/Weekly%20Sprint%20Packet%20%E2%80%94%20Week%2012.md) |
| Testing strategy | Documented 5-level testing approach (unit, integration, manual, a11y, regression) | [Testing Strategy](../../docs/TESTING_STRATEGY.md) |

## 3. One Area I Can Explain Clearly

- **Area:** QA Checklist Structure and Test Coverage
- **File/folder/doc:** [QA Checklist](../../docs/QA_CHECKLIST.md), [Testing Plan](../../docs/TESTING_PLAN.md)
- **What it does:** Ensures every feature is tested before each release
- **How it works:** Checklists are organized by feature area (auth, dashboard, items, requests, messages, admin). Each test has a clear pass/fail criterion. Tests are executed manually and results are recorded.
- **How it was tested:** Executed all checklist items in Week 12 QA Day; 3 Jest tests run automatically on server
- **One limitation:** Most tests are manual — automated regression testing is limited to 3 backend tests
- **Evidence:** [Testing Log](../../docs/PROGRESS/TESTING_LOG.md), [Test Checklist](../../docs/PROJECT/TEST_CHECKLIST.md)

## 4. My AI Use and Review

- **AI tools used:** GitHub Copilot
- **What AI helped with:** Generating test case templates, test data samples, checklist formatting
- **What I personally checked:** Every test case against actual application behavior, verified reproduction steps for bugs
- **What I personally changed:** Customized test scenarios to match Free Sewaa's specific features, added edge cases AI missed
- **How I tested or verified it:** Ran every test case manually, documented pass/fail results, captured screenshots for evidence
- **One area I still need to improve:** Automated test coverage — relying primarily on manual testing made regression testing slow

## 5. One Problem I Helped Solve

- **Problem:** During QA Day, we discovered 9 P0/P1 bugs including missing password recovery and broken navigation links
- **Why it mattered:** These bugs would have made the platform unusable or insecure in a live demo
- **What I did:** Created structured bug reports with reproduction steps for each bug, assigned severity levels, and tracked fixes
- **What changed:** All P0 bugs were documented with clear reproduction steps. Critical issues were prioritized for immediate fix.
- **Evidence:** [Bug 12 — Password recovery](../../docs/ISSUES/BUGS/bug12.md), [Bug 13 — Broken nav links](../../docs/ISSUES/BUGS/bug13.md), [Bug 18 — Accessibility failure](../../docs/ISSUES/BUGS/bug18.md)

## 6. Reflection

### What I learned
Creating structured test plans and writing clear bug reports with reproduction steps taught me how professional QA works. I learned the importance of testing edge cases, not just the happy path.

### What I am proud of
The 10 specialized QA checklists give the team confidence that every feature has been verified. The Week 12 QA Day result — 96% pass rate with 0 P0 bugs — was the strongest evidence of our platform's stability.

### What I should have done better
Started automated test writing earlier. Manual testing gave us broad coverage but made regression testing slow and labor-intensive.

### What I would improve next
Increase automated test coverage to 80%+, implement CI/CD test pipeline that runs on every push, and create end-to-end test scripts for the full user flow.

### One skill I want to continue developing
Automated testing frameworks like Jest and Supertest, and test-driven development practices.

## 7. Presentation Readiness

- [x] I can explain my main contribution: QA checklists, testing, bug reports
- [x] I can explain one technical area clearly: QA checklist structure and test coverage
- [x] I know the final MVP demo flow (landing → signup → browse → donate → request → messages → admin)
- [x] I know at least one bug or limitation: 9 P0/P1 bugs identified during QA Day
- [x] I reviewed the technical defense questions
- [x] I can answer honestly if I do not know something

## 8. My Best Evidence Links

1. [Testing Strategy](../../docs/TESTING_STRATEGY.md) — 5-level testing methodology
2. [QA Checklist](../../docs/QA_CHECKLIST.md) — Pre-release QA checklist
3. [Bug Reports](../../docs/ISSUES/BUGS/) — All 20 structured bug reports
4. [Manual Testing Checklist](../../MANUAL_TESTING_CHECKLIST.md) — 44 test cases for all features
5. [Testing Log](../../docs/PROGRESS/TESTING_LOG.md) — Test execution history

---
[Back to Individual Portfolios](./README.md) | [Back to Portfolio Home](../README.md)
