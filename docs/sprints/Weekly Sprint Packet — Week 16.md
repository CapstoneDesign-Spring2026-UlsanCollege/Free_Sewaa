# Weekly Sprint Packet - Week 16

## MVP Week 16

[MVP Week 16 Final Project Closure](../PROGRESS/MVP_WEEK_16.md)

## Team

**Team Name:** Free Sewaa
**Repository:** https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa
**Sprint:** Week 16 - Final Capstone Closure
**Closure record prepared:** June 12, 2026
**Status:** Final project packet

---

# Final Sprint Purpose

Close the Spring 2026 capstone project with a clear academic MVP boundary,
repeatable evidence, presentation guidance, honest limitations, and a
post-capstone handoff.

This packet is final for the capstone submission. Later maintenance commits are
post-capstone enhancements and do not rewrite the semester record.

---

# Final Demo

**Primary demo:** https://free-sewaa-qh05.onrender.com
**Evidence hub:** [Final Portfolio](../../portfolio/README.md)

### Final Demo Script

1. Introduce Free Sewaa and the donation-access problem.
2. Show account access and navigation.
3. Browse and filter available donations.
4. Post a donation item.
5. Request the item or contact the donor.
6. Show messaging, user activity, and administration interfaces.
7. Show backend/API, database, test, and CI evidence.
8. Open the final portfolio and individual contribution evidence.
9. Close with known limitations and prioritized future work.

### Technical Defense Prompts

- Why does the repository contain both static and React frontend work?
- Which backend paths require MongoDB configuration?
- What exactly does the current test suite verify?
- Which authentication paths exist, and what risks remain?
- How are team claims separated from individual commit evidence?
- Which features were intentionally cut from the final MVP?

### Backup Plan

- Use local setup with Node.js 18+ and the required environment variables.
- Use saved screenshots and test output when network services fail.
- Walk through source files and request/response behavior.
- Use the portfolio evidence map for questions about ownership or scope.
- State environmental failures honestly instead of improvising completion claims.

---

# Final Board Snapshot

**Board:** [Free Sewaa - Final Grading Evidence Board](https://github.com/orgs/CapstoneDesign-Spring2026-UlsanCollege/projects/30)

### Evidence Ready

- Final portfolio audit
- Final presentation package
- Core MVP issue and PR evidence
- Backend/API and frontend evidence
- QA, CI, test, and ownership evidence

### Needs Final Check

- Confirm public demo response before presentation
- Confirm local fallback and environment configuration
- Confirm each presenter can explain one owned technical area

### Open Risk

- Issue #95 remains open for centralized validation.
- Issue #96 remains open for broader API tests.
- Issue #101 remains open for environment/configuration cleanup.
- Production security and operations hardening are incomplete.

### Future Work

- Harden local authentication
- Consolidate the frontend architecture
- Add rate limiting and abuse controls
- Complete password recovery
- Add email notifications and receipts
- Add end-to-end browser tests

---

# Final Definition of Done

The capstone project is closed when:

- [x] The working academic MVP and its boundaries are documented.
- [x] The final portfolio covers overview, journey, planning, product, QA, AI use, and presentation.
- [x] Individual contribution pages remain available for commit-based grading.
- [x] The core demo flow has a public path and a documented fallback.
- [x] The server test command and CI workflow are documented.
- [x] Known limitations are included in the presentation and portfolio.
- [x] Open issues are not represented as completed work.
- [x] Future features are separated from semester deliverables.
- [x] Final Week 15 and Week 16 progress reports and sprint packets are indexed.

---

# Final Deliverables

| Deliverable | Evidence |
|---|---|
| Project overview and scope | [Project Overview](../../portfolio/01-project-overview/README.md) |
| Semester evidence | [Semester Journey](../../portfolio/02-semester-journey/README.md) |
| Design and planning | [Design and Planning](../../portfolio/03-design-and-planning/README.md) |
| Final product | [Final Product](../../portfolio/04-final-product/README.md) |
| QA and limitations | [QA and Stabilization](../../portfolio/05-qa-and-stabilization/README.md) |
| AI use and ownership | [AI and Code Ownership](../../portfolio/06-ai-and-code-ownership/README.md) |
| Presentation and defense | [Final Presentation](../../portfolio/07-final-presentation/README.md) |
| Individual evidence | [Individual Portfolios](../../portfolio/08-individual-portfolios/README.md) |
| Final audit | [Final Portfolio Audit](../../portfolio/FINAL_PORTFOLIO_AUDIT.md) |

---

# Final Engineering Evidence

## Current Architecture

- Browser frontend served with the project assets
- Node.js server in `server/server.js`
- MongoDB-backed API paths when `MONGODB_URI` or `MONGO_URI` is configured
- Firebase-related authentication/configuration paths
- Render public deployment
- GitHub Actions CI with a MongoDB service container

## Automated Verification

Run:

```bash
cd server
npm test
```

Current verified scope:

- One Jest test suite
- Three focused tests
- Health endpoint success
- Signup validation for missing first name
- Signup validation for missing password

The final packet does not claim unrecorded coverage percentages, performance
benchmarks, production traffic, or a larger automated suite.

## Evidence Links

- [Server tests](../../server/__tests__/api.test.js)
- [CI workflow](../../.github/workflows/ci.yml)
- [Saved test output](../evidence/week12/logs/test-output.txt)
- [Final MVP scope](../../portfolio/01-project-overview/FINAL_MVP_SCOPE.md)
- [Bugs and limitations](../../portfolio/05-qa-and-stabilization/BUGS_AND_LIMITATIONS.md)

---

# AI Use and Ownership

AI assistance may be used for drafting, code suggestions, structure, or review.
The final defense standard is human understanding:

- Every technical claim must be traceable to evidence.
- Every presenter must explain the work they claim.
- AI-generated text is reviewed for invented facts and stale architecture.
- Individual grading should use commit, PR, issue, and portfolio evidence.

The team portfolio summarizes the project. It does not replace each person's
individual contribution history.

---

# Final Risks Accepted

| Accepted limitation | Reason for closure | Post-capstone action |
|---|---|---|
| Local password path is not production-safe | Academic demo scope | Hash or remove local credentials |
| Validation is incomplete | Core flow remains demonstrable | Centralize schemas and errors |
| Automated tests are narrow | Critical checks exist | Add integration and browser suites |
| Frontend architecture is mixed | Working demo was prioritized | Complete one migration path |
| Password recovery/email are incomplete | Outside final MVP boundary | Add provider-backed workflows |
| Rate limiting/monitoring are incomplete | Production operations were not the semester target | Add throttling and observability |

---

# Contribution Evidence Rule

No new contribution is credited merely because a name appears in this packet.
The professor can verify individual work through:

- GitHub commit history
- Pull requests and issues
- Individual portfolio evidence
- Explainable technical ownership during the defense

---

# Final Project Outcome

Free Sewaa is complete as a Spring 2026 academic capstone MVP. The final
submission demonstrates a coherent donation-sharing flow, a full-stack
implementation, documented QA evidence, a public demo path, and a professional
portfolio.

The project is closed with known limitations recorded honestly. Future work is
preserved as a backlog rather than presented as finished semester work.

**Final capstone status: Closed and submitted.**
