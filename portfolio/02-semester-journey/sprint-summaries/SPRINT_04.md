# Sprint 04 — Testing & QA

## Sprint Goal
Shift focus from building to verification: test all features, fix critical bugs, and document evidence.

## What We Planned
- Comprehensive QA testing across all features
- Bug triage (P0–P3 severity levels)
- Create structured bug reports
- CI/CD pipeline configuration
- Test automation with Jest

## What We Completed
- [QA Checklist](../../../docs/QA_CHECKLIST.md) — Pre-release checklist for all features
- [Testing Strategy](../../../docs/TESTING_STRATEGY.md) — 5 testing levels defined
- [Testing Plan](../../../docs/TESTING_PLAN.md) — Unit, integration, E2E tests
- [3 Jest tests](../../../server/__tests__/) — Health, signup validation, weak password
- [Bug reports 1–11](../../../docs/ISSUES/BUGS/bug1.md) — Structured bug reports created
- [Bug Triage Guide](../../../docs/PROJECT/BUG_TRIAGE.md) — Severity level definitions
- [Project Board](../../../docs/PROJECT/PROJECT_BOARD.md) — All tasks tracked

## What Is Still Incomplete
- 80% test coverage target (achieved ~60%)
- Full E2E test suite — manual testing used instead for broader coverage

## Scope Changes
- Testing approach shifted: heavy manual (50+ test cases) + light automated (3 Jest tests)
- Added root-level QA checklists for better visibility

## Strongest Evidence Links
- [Sprint 4 Packet](../../../docs/sprints/SPRINT_4.md) — "The Big Shift" sprint theme
- [Week 10 Stability Packet](../../../docs/PROJECT/WEEK10_STABILITY_PACKET.md)
- [Test Checklist](../../../docs/PROJECT/TEST_CHECKLIST.md) — 12 test cases with pass/fail
- [Testing Log](../../../docs/PROGRESS/TESTING_LOG.md)

## Bugs and Risks
- P0: Password recovery missing
- P0: Broken navigation links
- P0: Accessibility regression after deployment
- P1: Session lost after refresh
- P1: Browse page items not rendering

## What Moved Into the Next Sprint
- P0/P1 bug fixes (bcrypt, Jest, CI)
- AI Code Ownership Audit
- MVP deployment verification
