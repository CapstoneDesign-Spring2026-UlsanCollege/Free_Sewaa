# Testing Strategy

**Target:** Track B → C (MVP Stabilization → MVP Plus)

---

## Testing Levels

### 1. Unit Tests — Backend API

**Tool:** Jest + Supertest
**Location:** `server/__tests__/`
**Target coverage:** 70%+

| Endpoint | Priority | Status |
|----------|----------|--------|
| POST /api/auth/signup | High | ❌ Not started |
| POST /api/auth/signin | High | ❌ Not started |
| POST /api/auth/logout | Medium | ❌ Not started |
| GET /api/health | Low | ❌ Not started |

Setup guide: [CODE_COVERAGE.md](../docs/PROGRESS/week11/CODE_COVERAGE.md)

### 2. Integration Tests — API + State

Check that endpoints work together:
- Signup → Signin → Browse → Donate flow
- State persistence across requests
- Error responses for invalid input

### 3. Manual UI Tests

Performed each sprint before demo. See [TESTING_LOG.md](PROGRESS/TESTING_LOG.md).

| Flow | Tester | Frequency |
|------|--------|-----------|
| Signup → Signin | Sujan T. | Every sprint |
| Browse → Filter | Mohan | Every sprint |
| Post item → Request | Mohan | Every sprint |
| Messages | Sujan S. | Every sprint |
| Admin panel | Ram | Every sprint |
| Dark mode | All | Ad hoc |

### 4. Accessibility Testing

**Tool:** Chrome Lighthouse, manual keyboard test
**Standard:** WCAG 2.1 Level AA
**Details:** [ACCESSIBILITY_TESTING.md](../docs/PROGRESS/week11/ACCESSIBILITY_TESTING.md)

### 5. Regression Testing

Before each demo, verify all 7 core MVP flow steps still work:
1. Open landing page
2. Sign up or sign in
3. Browse items
4. Post a donation
5. Request or contact donor
6. Admin review
7. Show evidence

---

## CI Pipeline

**Current state:** CI runs but does NOT execute tests

**Target state:**

```yaml
# .github/workflows/ci.yml
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm test           # ← currently missing
      - run: npm run coverage   # ← planned
```

---

## Bug Tracking

| Priority | Response Time | Fix Target |
|----------|---------------|------------|
| P0 | Immediate | Before next demo |
| P1 | Within 1 sprint | 1 week |
| P2 | Within 2 sprints | 2 weeks |
| P3 | When time permits | Backlog |

Full bug list: [BUG_LIST.md](PROGRESS/week11/BUG_LIST.md)

---

## Tools Summary

| Tool | Purpose | Used? |
|------|---------|-------|
| Jest | Unit testing | ❌ Not yet |
| Supertest | HTTP assertions | ❌ Not yet |
| Chrome Lighthouse | Accessibility audit | ❌ Not yet |
| WAVE | Accessibility checker | ❌ Not yet |
| GitHub Actions | CI pipeline | ✅ Running (no tests) |
| Manual checklist | UI verification | ✅ Every sprint |
