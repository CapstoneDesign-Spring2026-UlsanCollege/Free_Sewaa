# Mohan Khadka — Bug Fixes and Stability

I kept Free Sewaa running smoothly by finding and fixing bugs across the entire platform. When something broke — an auth redirect, a broken link, a UI glitch — I tracked down the root cause and made sure it got fixed. My work ensured the platform was stable enough for live demos.

## 1. My Role

- **Name:** Mohan Khadka
- **Team:** Capstone Design — Spring 2026, Ulsan College
- **Project:** Free Sewaa
- **Main responsibilities:** Bug identification, debugging, issue tracking, stability improvements, demo support
- **Role during the semester:** Demo Driver, Project Manager (Weeks 5, 12), Maintenance Lead

## 2. My Strongest Contributions

| Contribution | What I personally did | Evidence |
|---|---|---|
| Bug triage | Identified and documented bugs with severity levels across frontend and backend | [Bug Triage](../../docs/PROJECT/BUG_TRIAGE.md) |
| Auth fix | Debugged admin login error after account creation — timing issue with account initialization | [Bug 8](../../docs/ISSUES/BUGS/bug8.md) |
| Stability | Found root cause of multiple P1 bugs: session loss, chat button context, item timestamp | [Bug 11](../../docs/ISSUES/BUGS/bug11.md) |
| Demo support | Prepared demo environment, tested flow, verified credentials before each presentation | [Demo Script](../../DEMO_SCRIPT.md) |
| Issue tracking | Maintained project board with all tasks organized by status and priority | [Project Board](../../PROJECT_BOARD.md) |

## 3. One Area I Can Explain Clearly

- **Area:** Systematic Bug Diagnosis Across Frontend and Backend
- **File/folder/doc:** [Bug Reports](../../docs/ISSUES/BUGS/), [Bug Triage Guide](../../docs/PROJECT/BUG_TRIAGE.md)
- **What it does:** Identifies, reproduces, and resolves issues in a structured way
- **How it works:** Start by reproducing the bug with clear steps. Check browser console for JS errors. Check network tab for API response codes. Check server logs for backend errors. Isolate the layer (frontend, API, database) and drill down.
- **How it was tested:** After fixing, re-test the failing scenario. Then run related test cases to ensure no regression.
- **One limitation:** We lack automated regression tests — every bug fix requires manual re-testing of related features
- **Evidence:** [Test Checklist](../../docs/PROJECT/TEST_CHECKLIST.md), [Testing Log](../../docs/PROGRESS/TESTING_LOG.md)

## 4. My AI Use and Review

- **AI tools used:** GitHub Copilot
- **What AI helped with:** Analyzing error messages, suggesting potential root causes, generating debug log statements
- **What I personally checked:** Confirmed AI suggestions against actual code behavior, verified fixes don't break other features
- **What I personally changed:** AI often suggested complex fixes when the real problem was simple — I simplified solutions and removed unnecessary code changes
- **How I tested or verified it:** Manual reproduction of the bug, applied fix, confirmed bug is resolved, tested related features
- **One area I still need to improve:** Writing automated tests for bug fixes so regressions are caught automatically

## 5. One Problem I Helped Solve

- **Problem:** Admin login showed an error after account creation — the admin account wasn't fully initialized before the login attempt
- **Why it mattered:** Without working admin login, the team could not manage users or moderate content during the demo
- **What I did:** Traced the issue to a race condition where the admin account creation and login processes overlapped. Added initialization check before allowing login.
- **What changed:** Admin login now works reliably — create account, wait for confirmation, then log in without errors
- **Evidence:** [Bug 8 — Admin login error](../../docs/ISSUES/BUGS/bug8.md), [Bug 9 — Admin login invalid response](../../docs/ISSUES/BUGS/bug9.md)

## 6. Reflection

### What I learned
Systematic debugging techniques — how to trace issues across frontend, API, and database layers — taught me more than any lecture. I learned that the simplest fix is often the correct one.

### What I am proud of
My bug fix contributions improved platform stability significantly from Sprint 8 onwards. The difference in reliability between midterm and final demo is visible.

### What I should have done better
Documented bug fixes more thoroughly with before/after evidence and test cases that verify the fix. Some fixes were applied without enough documentation.

### What I would improve next
Create a structured bug tracking and resolution workflow with automated regression tests for every fixed bug.

### One skill I want to continue developing
Debugging complex full-stack applications — especially performance profiling and memory leak detection.

## 7. Presentation Readiness

- [x] I can explain my main contribution: bug fixes and platform stability
- [x] I can explain one technical area clearly: systematic bug diagnosis across frontend and backend
- [x] I know the final MVP demo flow (landing → signup → browse → donate → request → messages → admin)
- [x] I know at least one bug or limitation: admin login race condition (fixed) / no automated regression tests
- [x] I reviewed the technical defense questions
- [x] I can answer honestly if I do not know something

## 8. My Best Evidence Links

1. [Bug Reports](../../docs/ISSUES/BUGS/) — All 20 structured bug reports
2. [Bug Triage Guide](../../docs/PROJECT/BUG_TRIAGE.md) — Severity levels and priority guide
3. [Project Board](../../PROJECT_BOARD.md) — Task tracking and issue management
4. [Demo Script](../../DEMO_SCRIPT.md) — Demo flow preparation
5. [AI Code Ownership Audit](../../docs/AI_CODE_OWNERSHIP_AUDIT.md) — Team ownership evidence

---
[Back to Individual Portfolios](./README.md) | [Back to Portfolio Home](../README.md)
