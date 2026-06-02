# QA Report

## Testing Summary

Free Sewaa underwent comprehensive QA testing throughout the semester, culminating in a dedicated QA Day in Week 12.

### Week 12 QA Day Results

| Metric | Result |
|--------|--------|
| Test cases executed | 50+ |
| Pass rate | 96% |
| P0 bugs | 0 remaining |
| P1 bugs | 2 remaining |
| P2 bugs | 3 remaining |
| P3 bugs | 5 remaining |

### Performance Testing

| Metric | Result |
|--------|--------|
| Homepage load time | 1.8 seconds |
| API response time | 280ms |
| Database query time | 85ms |

### Automated Tests

| Test | Status |
|------|--------|
| Health endpoint | ✅ Passing |
| Signup missing firstName | ✅ Passing |
| Signup weak password | ✅ Passing |

## Testing Approach

### Levels of Testing

From [Testing Strategy](../../docs/TESTING_STRATEGY.md):

1. **Unit Testing** — Jest + Supertest for backend endpoints
2. **Integration Testing** — End-to-end flow: signup → signin → browse → donate
3. **Manual UI Testing** — Per-sprint verification of all features
4. **Accessibility Testing** — Lighthouse and keyboard navigation
5. **Regression Testing** — Re-test after each deployment

### Testing Coverage

- **Manual:** 50+ test cases across all features via specialized checklists
- **Automated:** 3 Jest tests for critical backend paths
- **Mobile:** Tested on 5+ device sizes (390×844 viewport standard)
- **Browser:** Chrome, Firefox, Safari, Edge
- **Form validation:** Signup, login, donate, request, admin forms

## QA Checklist Documents

### Root-Level Checklists (Linked from repository root)

| Checklist | Description |
|-----------|-------------|
| [Manual Testing Checklist](../../MANUAL_TESTING_CHECKLIST.md) | Auth (10), Browse (7), Donate (5), Requests (6), Messages (6), Admin (6), Mobile (4) |
| [Browser Testing Checklist](../../BROWSER_TESTING_CHECKLIST.md) | Chrome, Firefox, Safari, Edge for all core flows |
| [Mobile Testing Checklist](../../MOBILE_TESTING_CHECKLIST.md) | iPhone 14 viewport (390×844): Layout, Forms, Browse, Admin |
| [Form Validation Checklist](../../FORM_VALIDATION_CHECKLIST.md) | Signup, Login, Donate, Request, Admin form rules |
| [Admin Review Checklist](../../ADMIN_REVIEW_CHECKLIST.md) | Admin login, Dashboard, User management, Listings |
| [Accessibility Checklist](../../ACCESSIBILITY_CHECKLIST.md) | Screen readers, Color/contrast, Forms, Navigation |
| [Security Checklist](../../SECURITY_CHECKLIST.md) | Auth, Data protection, Known gaps |

### Docs-Level QA Documents

| Document | Description |
|----------|-------------|
| [QA Checklist](../../docs/QA_CHECKLIST.md) | Pre-release checklist: Auth (5), Dashboard (5), Items (4), Requests (3), Messages (3), Admin (4), Mobile (4), Security (3) |
| [Testing Plan](../../docs/TESTING_PLAN.md) | E2E > Integration > Unit hierarchy, test cases |
| [Testing Strategy](../../docs/TESTING_STRATEGY.md) | 5 testing levels with methodology |
| [Audit Checklist](../../docs/AUDIT_CHECKLIST.md) | Security, accessibility, performance audit |
| [Best Practice Audit](../../docs/BEST_PRACTICE_AUDIT.md) | Pre-release best practice review |
| [Test Checklist](../../docs/PROJECT/TEST_CHECKLIST.md) | Week 10 stability checks, 12 test cases |

## Bug Reports

20 structured bug reports are documented:
- [Bug Reports 1-11](../../docs/ISSUES/BUGS/) — Initial bugs found during development
- [Bug Reports 12-20](../../docs/ISSUES/BUGS/) — Additional bugs documented in Weeks 14-15

## Evidence

- [Testing Log](../../docs/PROGRESS/TESTING_LOG.md) — Historical test execution log
- [Week 11 Code Coverage](../../docs/PROGRESS/week11/CODE_COVERAGE.md) — Jest coverage report
- [Week 11 Bug List](../../docs/PROGRESS/week11/BUG_LIST.md) — Critical bugs resolved in Week 11
- [Week 12 Sprint Packet](../../docs/sprints/Weekly%20Sprint%20Packet%20%E2%80%94%20Week%2012.md) — QA Day results
