# Weekly Sprint Packet - Week 15

## MVP Week 15

[MVP Week 15 Progress Report](../PROGRESS/MVP_WEEK_15.md)

## Team

**Team Name:** Free Sewaa
**Repository:** https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa
**Sprint:** Week 15 - Final Stabilization, Evidence Reconciliation, and Presentation Readiness

### Sprint Roles

The final sprint used shared team ownership. Individual work is attributed only
through linked commits, pull requests, issues, and individual portfolio
evidence.

| Responsibility | Evidence location |
|---|---|
| Scope and product review | [Project Overview](../../portfolio/01-project-overview/README.md) |
| QA and risk review | [QA and Stabilization](../../portfolio/05-qa-and-stabilization/README.md) |
| AI use and ownership review | [AI and Code Ownership](../../portfolio/06-ai-and-code-ownership/README.md) |
| Demo and defense preparation | [Final Presentation](../../portfolio/07-final-presentation/README.md) |
| Individual attribution | [Individual Portfolios](../../portfolio/08-individual-portfolios/README.md) |

---

# Demo

**Primary demo:** https://free-sewaa-qh05.onrender.com
**Demo type:** Final MVP flow, evidence review, and limitation disclosure

### Demo Script

1. Explain the donation-sharing problem and target users.
2. Demonstrate account access and responsive navigation.
3. Browse, search, and filter donation items.
4. Post a donation and demonstrate the request/contact flow.
5. Show messages, activity, and administration views.
6. Open the test evidence, portfolio, and commit history.
7. State the known limitations and future-work boundary.

### Backup Plan

If the public deployment is unavailable or cold-starting:

- Use the documented local setup.
- Show the saved Week 12 screenshots and test output.
- Walk through the repository files supporting the core flow.
- Use the final portfolio as the evidence index.
- Do not claim a live behavior that cannot be demonstrated.

---

# Board Snapshot

The final grading board is
[GitHub Project #30](https://github.com/orgs/CapstoneDesign-Spring2026-UlsanCollege/projects/30).

### Evidence Ready

- Final portfolio and presentation package
- Core Post -> Browse -> Request flow evidence
- Backend/API and database evidence
- Frontend and responsive UI evidence
- QA, CI, and test evidence
- AI-use and ownership documentation

### Needs Final Check

- Public demo availability before the presentation
- Firebase authorized-domain and environment configuration
- Local fallback instructions and presentation credentials
- Final spoken disclosure of known limitations

### Open Risk

- Issue #95 - centralized signup/auth validation
- Issue #96 - broader backend API tests
- Issue #101 - environment handling for demo configuration
- Local password handling is not production-hardened
- Static and React frontend structures remain mixed

### Future Work

- Complete frontend consolidation
- Add rate limiting and abuse controls
- Implement password recovery
- Deliver production email notifications
- Add end-to-end browser tests

### Archived / Duplicate

Stale sprint-management cards and duplicate planning items are kept out of the
final evidence path.

---

# Owners

| Responsibility | Owner |
|---|---|
| Final evidence accuracy | Team |
| Demo readiness | Team |
| QA and limitation disclosure | Team |
| Portfolio navigation | Team |
| Individual contribution explanation | Each team member |

---

# Definition of Done

Week 15 is complete when:

- [x] Final MVP scope separates included, partial, cut, and future work.
- [x] Executed tests are separated from planned test checklists.
- [x] Security and quality limitations are documented without hiding them.
- [x] Final product setup and deployment paths match the current repository.
- [x] Team portfolio sections 01-07 are organized for grading.
- [x] Individual portfolio files remain separate and attributable.
- [x] Final presentation includes a live path and a backup path.
- [x] High-value issues, PRs, commits, and repository files are linked.
- [x] No unsupported coverage, uptime, user-count, or performance claim is added.

---

# Sprint Notes

## What Shipped

- A professional team portfolio front door and numbered evidence sections
- A corrected final MVP scope and scope-decision record
- A semester journey with 16 weekly evidence pages
- Standardized sprint summaries
- Current final-product setup, architecture, and deployment documentation
- Reconciled QA evidence and known limitations
- AI-use, code-ownership, and technical-defense documentation
- A final presentation script, demo path, and backup plan
- A final portfolio audit

## Engineering Practice Evidence

| Practice | Evidence |
|---|---|
| Automated API checks | [`server/__tests__/api.test.js`](../../server/__tests__/api.test.js) |
| CI configuration | [`.github/workflows/ci.yml`](../../.github/workflows/ci.yml) |
| Saved test result | [`docs/evidence/week12/logs/test-output.txt`](../evidence/week12/logs/test-output.txt) |
| Current server | [`server/server.js`](../../server/server.js) |
| Final architecture | [System Architecture](../../portfolio/04-final-product/ARCHITECTURE_FINAL.md) |
| QA interpretation | [QA Report](../../portfolio/05-qa-and-stabilization/QA_REPORT.md) |

The automated suite contains three focused Jest checks. No 75% coverage,
150-test suite, Redis cache, rate limiter, or measured performance improvement
is claimed without matching repository evidence.

## What Remains Incomplete

- Broad API and browser automation
- Centralized request validation
- Production-safe local password handling
- Password recovery and email delivery
- Rate limiting and abuse monitoring
- A completed static-to-React frontend consolidation

---

# AI Use and Code Ownership Check

AI tools supported drafting, organization, link checking, and review. Human
review remains responsible for:

- Checking claims against repository evidence
- Running tests and reviewing output
- Verifying links and deployment paths
- Explaining owned technical areas without relying on generated text
- Rejecting invented metrics, commits, PRs, and completed-feature claims

Individual contribution receipts are maintained in the
[individual portfolio section](../../portfolio/08-individual-portfolios/README.md).
This packet does not invent equal ownership or substitute team documentation
for individual commit history.

---

# Risks and Mitigation

| Risk | Impact | Mitigation |
|---|---|---|
| Render cold start | Demo delay | Open early and keep local fallback ready |
| Environment-dependent authentication | Login failure | Verify authorized domains and explain fallback |
| Narrow automated coverage | Regression risk | Demonstrate existing tests and state the gap |
| Unsupported historical claims | Grading credibility | Use final portfolio audit as the current truth |
| Mixed frontend architecture | Maintenance cost | Preserve the working demo and document consolidation as future work |

---

# Week 15 Outcome

The sprint closes with a demonstrable academic MVP and a much stronger evidence
trail. Remaining work is visible and prioritized instead of being mislabeled as
complete.

# Next Step

Week 16 is the final project-closure packet. It freezes the capstone MVP
boundary, records final verification, and hands remaining risks to future work.
