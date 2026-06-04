# Sprint 4 — Testing, Quality Assurance & Reliability

**Project:** Free Sewaa  
**Sprint Theme:** *The Big Shift — Build Less, Verify More, Fix What Matters*  
**Last Updated:** May 2026

---

## Sprint Objective

Sprint 4 focuses on improving the reliability, stability, and overall quality of the Free Sewaa platform. Rather than introducing new features, the team prioritizes testing, bug fixing, quality assurance, and process improvement to ensure the application is ready for demonstration and future development.

---

## Test Execution Strategy

### Daily Testing
- Perform quick smoke tests on the staging environment.
- Verify that critical user flows remain functional after changes.
- Identify regressions early.

### Pre-Merge Testing
- Execute the full test suite on feature branches.
- Verify that new changes do not introduce defects.
- Ensure all required checks pass before merging.

### Pre-Release Testing
- Complete the full QA checklist on the production staging environment.
- Validate all core user journeys.
- Verify bug fixes and release readiness.

---

# Definition of Done

Sprint 4 is considered complete when all of the following criteria have been achieved:

- [x] Testing framework configured and operational
- [x] More than 50 test cases created and passing
- [x] All P0 (Critical) bugs fixed and verified
- [x] All P1 (High Priority) bugs documented and tracked
- [x] Code coverage report generated
- [x] CI/CD pipeline configured
- [x] QA checklist completed
- [x] Code ownership documented
- [x] Team trained on testing procedures
- [x] Sprint retrospective completed

---

# Team Roles and Responsibilities

| Role | Owner | Responsibility |
|--------|--------|----------------|
| Test Lead | Ram Pathak | Design test cases, coordinate QA activities, document bugs |
| Backend Testing | Sujan Tamang | Configure Jest, create unit tests, manage CI setup |
| Frontend Testing | Mohan Khadka | Manual QA, device compatibility testing, accessibility checks |
| Bug Triage | Sujan Shrestha | Classify defects, assign priorities, create GitHub issues |
| Demo & Evidence | Swarnim Jung Karki | Record testing evidence, compile documentation, prepare backups |

---

# Bug Triage Process

## Severity Levels

| Priority | Description |
|-----------|-------------|
| P0 (Critical) | Security vulnerabilities, data loss, or functionality that blocks system usage |
| P1 (High) | Major feature failures that significantly impact user experience |
| P2 (Medium) | Minor functionality issues with available workarounds |
| P3 (Low) | Cosmetic issues, edge cases, or enhancements |

## Bug Workflow

1. **Discovery** – QA testing identifies an issue.
2. **Documentation** – A GitHub issue is created with reproduction steps.
3. **Triage** – Severity level and ownership are assigned.
4. **Resolution** – Developer implements and tests the fix.
5. **Verification** – QA validates the fix.
6. **Closure** – Issue is closed after successful verification.

---

# Success Metrics

| Metric | Target | Status |
|----------|----------|----------|
| Test Coverage | 80%+ | In Progress |
| P0 Bugs Fixed | 100% | In Progress |
| P1 Bugs Fixed | 100% | In Progress |
| QA Pass Rate | 95%+ | In Progress |
| CI Build Success Rate | 100% | In Progress |
| Code Review Turnaround | Less than 24 hours | In Progress |
| Deployment Stability | 99.9% | In Progress |

---

# Risks and Mitigation

| Risk | Impact | Mitigation Strategy |
|--------|--------|-------------------|
| Testing requires more time than expected | Delayed bug resolution | Begin testing early and automate repetitive tasks |
| Large number of defects discovered | Scope expansion | Prioritize P0 and P1 issues |
| CI pipeline instability | Reduced build confidence | Thoroughly validate CI configuration |
| Team unfamiliar with testing tools | Slower adoption | Pair programming and training sessions |
| Production data limitations | Incomplete testing | Create sanitized testing datasets |

---

# Weekly Breakdown

## Week 4.1 (Days 1–2)

- Configure Jest testing framework
- Create test fixtures and sample datasets
- Develop the first ten test cases
- Identify and document critical defects

## Week 4.2 (Days 3–4)

- Expand test suite beyond 50 test cases
- Resolve all P0 defects
- Begin fixing P1 defects
- Configure CI pipeline

## Week 4.3 (Days 5–6)

- Complete P1 bug fixes
- Execute QA checklist
- Conduct performance profiling
- Update project documentation

## Week 4.4 (Day 7)

- Perform final verification testing
- Compile testing evidence
- Conduct sprint retrospective
- Submit sprint documentation

---

# AI Usage Guidelines

## Appropriate Uses of AI

AI tools may be used to assist with:

- Test case templates and examples
- Bug documentation formatting
- CI/CD configuration examples
- Performance optimization suggestions

## Human Responsibilities

Team members remain responsible for:

- Designing meaningful test scenarios
- Executing and verifying tests
- Reviewing all AI-generated content
- Making implementation and bug-fix decisions
- Approving final changes

## Code Ownership Principle

Every code contribution must have a team member who can explain:

- Why the implementation was selected
- How it functions
- How it can be tested
- Potential failure points
- How issues can be debugged

---

# Sprint Deliverables

By the end of Sprint 4, the team will deliver:

## 1. Test Suite

- Jest configuration
- Automated tests
- QA checklist
- Test fixtures and sample data

## 2. Bug Documentation

- GitHub issues for identified defects
- Bug severity classification
- Verification records for fixes

## 3. CI/CD Pipeline

- GitHub Actions workflow
- Automated test execution
- Build monitoring and reporting

## 4. Code Quality Report

- Test coverage metrics
- Code review checklist
- Documentation audit

## 5. Team Knowledge Base

- Testing procedures
- Code ownership documentation
- Training and onboarding materials

---

# Acceptance Criteria

Sprint 4 is considered successful when:

- ✅ All test cases execute successfully
- ✅ All P0 bugs are fixed and verified
- ✅ All P1 bugs are documented and scheduled
- ✅ Test coverage reaches the target threshold
- ✅ CI/CD pipeline executes automatically
- ✅ QA checklist is repeatable and comprehensive
- ✅ Code ownership is clearly defined
- ✅ Team confidence in system reliability is high
- ✅ Retrospective identifies actionable improvements
- ✅ Team members can explain their assigned work

---

# Learning Objectives

At the conclusion of Sprint 4, team members should understand:

- Effective unit testing practices
- Jest framework configuration and usage
- Bug classification and prioritization
- Comprehensive test case design
- Fix verification techniques
- CI/CD workflows for quality assurance
- Ownership and accountability for code quality
- Collaborative approaches to reliability improvement

---

# Communication Plan

| Activity | Schedule | Purpose |
|-----------|-----------|-----------|
| Daily Standup | 10:00 AM | Progress updates and blockers |
| Bug Triage Meeting | Tuesday, 2:00 PM | Review and prioritize defects |
| QA Testing Session | Wednesday–Thursday | Execute test plans |
| Sprint Retrospective | Friday, 3:00 PM | Review outcomes and improvements |
| Slack Channel | #sprint4-testing | Team communication and support |

---

# Demo Strategy

## Demonstration Focus

The Sprint 4 demonstration emphasizes reliability, testing practices, and software quality rather than new features.

## Demonstration Flow

1. Present testing methodology.
2. Demonstrate bug discovery process.
3. Show verified bug fixes.
4. Present CI/CD pipeline execution.
5. Review testing metrics and coverage results.

## Backup Plan

If issues occur during the demonstration:

- Present test execution logs.
- Show code coverage reports.
- Display GitHub issues and resolutions.
- Demonstrate successful CI workflow runs.

---

# Sprint Notes

## Philosophy

Sprint 4 represents a transition from feature development to product maturity. The primary focus is ensuring that the platform is reliable, maintainable, and ready for real-world use.

## Key Lesson

Quality should be treated as a core feature rather than a final step in development. Testing, reliability, and maintainability are essential components of successful software projects.

## Success Definition

Sprint 4 is successful when:

- Every feature has been tested.
- Every critical bug has been addressed.
- Every code contribution has a clear owner.
- The team has confidence in the platform’s reliability and stability.

---

*Free Sewaa Capstone Project — Sprint 4*  
*Theme: "The Big Shift — Build Less, Verify More, Fix What Matters"*
