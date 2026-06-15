# QA Report

## Evidence Standard

This report separates recorded evidence from planned checklists. The team created many QA checklists; only saved logs, committed test files, sprint packets, and linked documents are treated as direct evidence.

## Directly Verifiable Automated Tests

| Evidence | What it supports |
|---|---|
| [`server/__tests__/api.test.js`](../../server/__tests__/api.test.js) | Health endpoint and signup validation cases |
| [Saved test output](../../docs/evidence/week12/logs/test-output.txt) | Preserved command output from QA evidence |
| [Week 11 code coverage notes](../../docs/PROGRESS/week11/CODE_COVERAGE.md) | Historical server-test summary |

Run current tests from the server package:

```bash
cd server
npm install
npm test
```

## Manual QA Evidence

| Evidence | Notes |
|---|---|
| [Manual Testing Checklist](../../docs/QA/MANUAL_TESTING_CHECKLIST.md) | Planned/manual coverage areas |
| [Browser Testing Checklist](../../docs/QA/BROWSER_TESTING_CHECKLIST.md) | Cross-browser checklist |
| [Mobile Testing Checklist](../../docs/QA/MOBILE_TESTING_CHECKLIST.md) | Mobile viewport checklist |
| [Accessibility Checklist](../../docs/QA/ACCESSIBILITY_CHECKLIST.md) | Accessibility review areas |
| [Security Checklist](../../docs/QA/SECURITY_CHECKLIST.md) | Security review areas and known gaps |
| [Week 12 sprint packet](../../docs/sprints/Weekly%20Sprint%20Packet%20%E2%80%94%20Week%2012.md) | Historical QA Day summary |

The portfolio preserves the reported "50+ tests" and "96% pass rate" as historical sprint-record claims. It does not treat those numbers as independently reproducible without the underlying raw execution sheet.

## Current Quality Summary

| Area | Status |
|---|---|
| Core demo flow | Demonstrable with live or local fallback |
| Automated API checks | Present but narrow |
| Manual checklists | Broad coverage plans exist |
| Browser/mobile/accessibility evidence | Documented as checklists and selected notes |
| Security hardening | Incomplete; local-password handling is the highest-risk item |
| Regression confidence | Limited because end-to-end automation is not complete |

## Stabilization Work Completed

- Preserved automated server tests for critical validation behavior.
- Documented manual QA coverage areas.
- Tracked bug reports and limitations.
- Added demo fallback paths and presentation risk notes.
- Reconciled stale security claims with current code behavior.

## Remaining QA Work

- Add end-to-end browser tests for account, browse, post, request, message, and admin flows.
- Capture repeatable Lighthouse/accessibility output.
- Add integration tests using a test database.
- Track bug status with closed/open evidence rather than static tables.
- Add security tests for local-password handling, validation, authorization, and abuse controls.
