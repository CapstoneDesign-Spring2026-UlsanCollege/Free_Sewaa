# Risk Register

**Project:** Free Sewaa — Capstone Design, Spring 2026

---

## Risk Matrix

| Level | Score | Response |
|-------|-------|----------|
| Critical | 5 | Must mitigate immediately |
| High | 4 | Active mitigation plan |
| Medium | 3 | Monitor and plan |
| Low | 2 | Accept or minor action |

---

## Risk List

### Technical Risks

| ID | Risk | Likelihood | Impact | Score | Mitigation | Owner |
|----|------|------------|--------|-------|------------|-------|
| R-001 | MongoDB connection fails in production | Medium | High | 4 | Pre-deploy connection test, IP whitelist, fallback to JSON | Swarnim |
| R-002 | Browser localStorage cleared | Medium | High | 4 | Add server-side session fallback, warn users | Sujan T. |
| R-003 | Image upload fails or is too slow | Medium | Medium | 3 | Compress before upload, show progress indicator | Mohan |
| R-004 | API breaks after code change | Medium | High | 4 | Add unit tests, CI pipeline must run tests | Sujan S. |
| R-005 | No password hashing (P0 bug) | High | Critical | 5 | Implement bcrypt before production | Swarnim |

### Project Risks

| ID | Risk | Likelihood | Impact | Score | Mitigation | Owner |
|----|------|------------|--------|-------|------------|-------|
| R-006 | Team member unavailable for demo | Low | High | 3 | Cross-train, every member knows core flow | Ram |
| R-007 | Demo fails on classroom computer | Medium | Critical | 4 | Test on lab PC before demo, have screenshots ready | Mohan |
| R-008 | Professor asks a question no one can answer | Medium | Medium | 3 | Prepare Q&A document, review as team | Ram |
| R-009 | Sprint packet incomplete by deadline | Low | High | 3 | Set internal deadline 24h before class | Swarnim |
| R-010 | GitHub merge conflict blocks push | Medium | Medium | 3 | Pull and rebase before pushing, communicate changes | All |

### Documentation Risks

| ID | Risk | Likelihood | Impact | Score | Mitigation | Owner |
|----|------|------------|--------|-------|------------|-------|
| R-011 | Evidence not linked in sprint packet | Low | Medium | 2 | Maintain evidence checklist, review before submit | Swarnim |
| R-012 | Screenshots missing or outdated | Medium | Medium | 3 | Regenerate screenshots each week | Mohan |
| R-013 | Bug list not updated | Low | Medium | 2 | Update after each bug discovery | Sujan S. |

---

## Top 3 Risks to Watch

| Rank | Risk | Why |
|------|------|-----|
| 1 | R-005 — No password hashing | Security issue, professor will notice in demo |
| 2 | R-001 — MongoDB connection | Without DB, app features break in demo |
| 3 | R-007 — Demo fails on classroom PC | Core flow cannot be shown |

---

## Risk Response Plan

| Response Type | Meaning | Example |
|---------------|---------|---------|
| Avoid | Remove the risk entirely | Use JSON fallback instead of MongoDB |
| Mitigate | Reduce likelihood or impact | Test on classroom PC before demo |
| Transfer | Move risk to another party | N/A in this course |
| Accept | Acknowledge and proceed | Low-severity cosmetic bugs |
