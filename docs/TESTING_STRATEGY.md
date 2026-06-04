# Testing Strategy

## Project Testing Plan (Track B → C: MVP Stabilization to MVP Plus)

### Overview

The purpose of this testing strategy is to ensure that the Free Sewaa platform remains reliable, secure, accessible, and user-friendly throughout development. Testing activities are designed to identify defects early, validate core functionality, and improve overall software quality before each sprint review and final demonstration.

---

## 1. Unit Testing

### Objective
Verify that individual backend API endpoints function correctly and return the expected responses under both normal and error conditions.

### Tools
- Jest
- Supertest

### Location
`server/__tests__/`

### Coverage Goal
Minimum 70% backend test coverage.

| Endpoint | Priority | Current Status |
|-----------|-----------|---------------|
| POST /api/auth/signup | High | Not Started |
| POST /api/auth/signin | High | Not Started |
| POST /api/auth/logout | Medium | Not Started |
| GET /api/health | Low | Not Started |

### Supporting Documentation
See [CODE_COVERAGE.md](../docs/PROGRESS/week11/CODE_COVERAGE.md) for implementation and coverage guidelines.

---

## 2. Integration Testing

### Objective
Ensure that multiple system components work together correctly and maintain data consistency throughout user workflows.

### Key Scenarios
- User Registration → Login → Browse Items → Donate Item
- Session and authentication persistence across requests
- Validation and handling of invalid inputs
- Communication between frontend and backend services

### Expected Outcome
All connected features should function seamlessly without breaking user workflows or producing unexpected system behavior.

---

## 3. Manual User Interface Testing

### Objective
Validate the complete user experience by testing major application workflows before each sprint review and project demonstration.

### Testing Schedule
Manual testing is performed during every sprint cycle and prior to major demonstrations.

| User Flow | Assigned Tester | Frequency |
|------------|----------------|-----------|
| Signup and Login | Sujan T. | Every Sprint |
| Browse and Filter Items | Mohan | Every Sprint |
| Post Donation and Request Item | Mohan | Every Sprint |
| Messaging System | Sujan S. | Every Sprint |
| Administration Panel | Ram | Every Sprint |
| Dark Mode and UI Features | Entire Team | As Needed |

### Testing Records
Detailed execution records are maintained in [TESTING_LOG.md](PROGRESS/TESTING_LOG.md).

---

## 4. Accessibility Testing

### Objective
Ensure that the application is usable by individuals with diverse accessibility needs and complies with recognized accessibility standards.

### Tools
- Chrome Lighthouse
- Manual Keyboard Navigation Testing
- WAVE Accessibility Checker

### Standard
WCAG 2.1 Level AA

### Areas Evaluated
- Keyboard navigation
- Color contrast compliance
- Screen reader compatibility
- Form accessibility
- Responsive design behavior

### Supporting Documentation
See [ACCESSIBILITY_TESTING.md](../docs/PROGRESS/week11/ACCESSIBILITY_TESTING.md).

---

## 5. Regression Testing

### Objective
Confirm that previously working functionality remains stable after new features, bug fixes, or system updates are introduced.

### Core MVP Validation Checklist

Before every demonstration, the following user journey must be verified:

1. Access the landing page
2. Sign up or sign in successfully
3. Browse available items
4. Create a donation listing
5. Request an item or contact a donor
6. Complete administrative review processes
7. Demonstrate supporting project evidence

### Success Criteria
All core workflows must execute successfully without critical defects.

---

## 6. Continuous Integration (CI)

### Current Status
A GitHub Actions pipeline is configured and operational; however, automated test execution has not yet been integrated.

### Future Goal
Automatically run tests and generate coverage reports on every push and pull request.

Example CI Workflow:

```yaml
name: CI

on:
  [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - uses: actions/setup-node@v3
        with:
          node-version: 18

      - run: npm install
      - run: npm test
      - run: npm run coverage
```

### Expected Benefits
- Early defect detection
- Improved code quality
- Reduced regression risks
- Faster development feedback cycles

---

## 7. Bug Management Process

To ensure issues are addressed efficiently, bugs are categorized according to severity and response requirements.

| Priority | Response Requirement | Resolution Target |
|-----------|---------------------|------------------|
| P0 (Critical) | Immediate Action | Before Next Demo |
| P1 (High) | Within One Sprint | Within One Week |
| P2 (Medium) | Within Two Sprints | Within Two Weeks |
| P3 (Low) | As Time Permits | Backlog |

### Bug Tracking Records
Complete issue documentation is available in [BUG_LIST.md](PROGRESS/week11/BUG_LIST.md).

---

## 8. Testing Tools Summary

| Tool | Purpose | Status |
|--------|---------|---------|
| Jest | Unit Testing Framework | Planned |
| Supertest | API and HTTP Assertions | Planned |
| Chrome Lighthouse | Accessibility and Performance Auditing | Planned |
| WAVE | Accessibility Validation | Planned |
| GitHub Actions | Continuous Integration Pipeline | Active |
| Manual Testing Checklists | Functional UI Verification | Active |

---

## Conclusion

This testing strategy provides a structured approach to maintaining software quality throughout the development lifecycle of Free Sewaa. By combining manual testing, accessibility validation, integration testing, future automated testing, and continuous integration practices, the team aims to deliver a stable, secure, and user-centered platform for the final project release.
