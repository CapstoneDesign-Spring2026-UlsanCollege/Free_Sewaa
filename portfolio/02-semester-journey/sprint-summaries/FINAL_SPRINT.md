# Final Sprint - Stabilization, QA, and Portfolio

## Sprint Goal

Stabilize the academic MVP, document test evidence and limitations, organize the final portfolio, and prepare a reliable presentation path.

## What We Planned

- Resolve the highest-priority defects that could block the demo.
- Improve validation and automated API checks.
- Complete manual QA and preserve evidence.
- Organize technical, AI-use, and individual contribution documentation.
- Prepare the live demo, local fallback, and technical defense.

## What We Completed

- Added server API tests for health and signup validation.
- Expanded QA, accessibility, security, mobile, and browser checklists.
- Recorded structured bug reports and final review notes.
- Added Figma-oriented interface updates and React/Vite migration work.
- Organized the numbered portfolio and presentation documentation.
- Maintained public Render and Vercel demonstration targets.

## What Is Still Incomplete

- The React migration remains mixed with the static frontend.
- Automated regression coverage remains narrow.
- The local password path is not production-safe.
- Password recovery, email notifications, comprehensive validation, rate limiting, and production monitoring remain future work.
- Some historical QA metrics are documented in sprint records without complete raw execution artifacts.

## Scope Changes

| Feature or task | Decision | Why |
|---|---|---|
| Full marketplace functions | Cut | The semester MVP stayed focused on donation exchange |
| React conversion | Carryover | Preserving working static pages reduced final-demo risk |
| Firebase authentication | Included / partial | Added identity-provider support, with environment-specific setup |
| Broad automated suite | Nice Later | Critical server cases were prioritized within available time |
| Portfolio evidence audit | Included | Required for grading and technical defense |

## Strongest Evidence Links

1. [Week 11 sprint packet](../../../docs/PROGRESS/week11/WEEK_11_SPRINT_PACKET.md)
2. [Week 12 sprint packet](../../../docs/PROGRESS/week12/WEEK_12_SPRINT_PACKET.md)
3. [Server API tests](../../../server/__tests__/api.test.js)
4. [Saved test output](../../../docs/evidence/week12/logs/test-output.txt)
5. [Final review notes](../../../FINAL_REVIEW_NOTES.md)

## Bugs and Risks

| Risk | Severity | Evidence | Next step |
|---|---|---|---|
| Local passwords are directly stored/compared | P1 security | [`server/server.js`](../../../server/server.js) | Hash existing and new credentials or remove local auth |
| Mixed frontend architectures | P2 maintainability | [Frontend guide](../../../docs/FRONTEND_GUIDE.md) | Select and complete one migration path |
| Limited automated coverage | P2 quality | [QA report](../../05-qa-and-stabilization/QA_REPORT.md) | Add integration and browser tests |
| Environment-dependent identity providers | P2 demo | [Deployment plan](../../04-final-product/DEPLOYMENT_AND_DEMO_PLAN.md) | Verify configuration before presenting |

## What Moved Into the Next Sprint

The semester ends with an academic MVP. Security hardening, frontend consolidation, broader automated testing, notification delivery, password recovery, and production operations move to future development.
