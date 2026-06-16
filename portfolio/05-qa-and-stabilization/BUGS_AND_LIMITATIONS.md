# Bugs and Limitations

## Highest-Risk Deferred Limitations

| Limitation | Severity | Status | Evidence | Next step |
|---|---|---|---|---|
| Local passwords are stored/compared directly | P1 security | Deferred after capstone | [`server/server.js`](../../server/server.js), [Security Checklist](../../docs/QA/SECURITY_CHECKLIST.md) | Hash credentials or remove local password auth |
| Central validation is incomplete | P1 quality/security | Deferred after capstone | [Issue #95](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/issues/95) | Add shared validation for write endpoints |
| Password recovery is not complete | P1 feature gap | Deferred after capstone | [bug report history](../../docs/ISSUES/BUGS/) | Implement reset flow |
| End-to-end automation is limited | P2 quality | Deferred after capstone | [Issue #96](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/issues/96), [QA Report](./QA_REPORT.md) | Add browser and integration tests |
| Mixed static/React frontend remains | P2 maintainability | Deferred after capstone | [Frontend Guide](../../docs/FRONTEND_GUIDE.md) | Finish or retire migration |
| Rate limiting/abuse controls are missing | P2 security | Deferred after capstone | [`server/server.js`](../../server/server.js) | Add throttling and monitoring |
| Email receipts/notifications are not delivered | P2 feature gap | Deferred after capstone | [Issue #101](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/issues/101), [bug report history](../../docs/ISSUES/BUGS/) | Integrate email provider |

Issues [#95](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/issues/95), [#96](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/issues/96), and [#101](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/issues/101) were closed as `not planned` for the semester submission. They remain valid post-capstone hardening items, not completed MVP claims.

## Historical Bug Evidence

| Evidence | Meaning |
|---|---|
| [docs/ISSUES/BUGS/](../../docs/ISSUES/BUGS/) | Preserved bug files available in the repository |
| [Week 11 bug list](../../docs/PROGRESS/week11/BUG_LIST.md) | Historical critical-fix summary |
| [Week 15](../02-semester-journey/weekly-sprints/WEEK_15.md) | Later bug-report commits and documentation |
| [Final review notes](../../docs/FINAL/FINAL_REVIEW_NOTES.md) | End-of-semester review context |

Bug reports document discovery and triage. A listed bug should not be read as fixed unless a linked commit, PR, or verification file supports that status.

## Demo Limitations to Say Out Loud

- Render can cold-start.
- Firebase behavior depends on authorized domains and public configuration.
- Live data can differ between environments.
- Local setup requires a valid MongoDB URI for database-backed features.
- The project is an academic MVP, not a hardened production service.
