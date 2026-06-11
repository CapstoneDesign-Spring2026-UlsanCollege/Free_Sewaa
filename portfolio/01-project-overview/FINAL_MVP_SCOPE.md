# Final MVP Scope

Status here reflects the current repository and demonstrable academic MVP. A page existing is not, by itself, proof that every production behavior behind it is complete.

## Included Core Flow

| Capability | Status | Evidence and boundary |
|---|---|---|
| Landing and navigation | Included | Application entry points and responsive navigation are present |
| Account access | Included with limitations | Local and Firebase-related flows exist; security limitations remain |
| Browse donations | Included | Listings, categories, search/filter interfaces, and item views exist |
| Post a donation | Included | Donation form and item API behavior exist |
| Request an item | Included | Request UI and API behavior support the main vertical slice |
| Messaging | Included | Messaging interfaces and API behavior exist |
| User activity views | Included | Profile, panel, request, and donation views exist |
| Administration views | Included for demonstration | Admin screens and endpoints exist; production hardening is incomplete |
| Responsive interface | Included | Shared CSS and mobile-focused adjustments are present |

## Partial Capabilities

| Capability | Status | Remaining work |
|---|---|---|
| Firebase authentication | Partial | Provider setup and deployment configuration must match the active environment |
| React migration | Partial | The repository still contains both static and React-oriented frontend structures |
| Saved items and notifications | Partial | UI or supporting behavior exists, but end-to-end completeness is not claimed |
| Input validation | Partial | Important checks exist; centralized validation is still needed |
| Automated testing | Partial | Critical API cases are covered, but broad regression coverage is not |
| Accessibility and browser coverage | Partial | Checklists exist; not every checklist item has recorded execution evidence |

## Cut or Not Delivered

- Payments, auctions, shipping, and marketplace seller features
- A native mobile application
- Production-grade email receipts and notification delivery
- Complete password-recovery workflow
- Production security controls such as comprehensive rate limiting and hardened local password storage

## Nice Later

- Complete the frontend consolidation strategy.
- Centralize request validation and API error formats.
- Hash or retire the local password-authentication path.
- Add end-to-end browser tests and repeatable accessibility evidence.
- Add image optimization, notification delivery, observability, and abuse controls.

## Verification Evidence

- [MVP status history](../../docs/PROJECT/MVP_STATUS.md)
- [Week 11 verification checklist](../../docs/PROGRESS/week11/MVP_VERIFICATION_CHECKLIST.md)
- [QA report](../05-qa-and-stabilization/QA_REPORT.md)
- [Bugs and limitations](../05-qa-and-stabilization/BUGS_AND_LIMITATIONS.md)
- [Current server](../../server/server.js)
