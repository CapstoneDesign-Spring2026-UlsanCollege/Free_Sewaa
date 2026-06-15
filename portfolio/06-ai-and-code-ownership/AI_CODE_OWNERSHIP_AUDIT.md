# AI Code Ownership Audit

## Purpose

This audit helps the professor see who can explain which parts of the project and how AI-assisted work was reviewed. It is not a claim that any one member owns every later revision of a shared file.

## Human Review Process

1. A team member creates or accepts a draft change.
2. The diff is reviewed against the current repository pattern.
3. The feature is manually tested, covered by automated tests, or documented as unverified.
4. Evidence is linked through commits, PRs, issues, files, or sprint records.
5. Remaining risks are listed rather than hidden.

## Explainable Ownership Areas

| Area | Evidence owner to ask first | Representative evidence |
|---|---|---|
| Backend expansion and database integration | Ram Pathak | [server](../../server/), [architecture](../04-final-product/ARCHITECTURE_FINAL.md) |
| Frontend pages and user experience | Sujan Shrestha | [html](../../html/), [UI flow](../../docs/DESIGN/UI_FLOW.md) |
| Integration, testing, and documentation | Sujan Tamang | [testing plan](../../docs/TESTING_PLAN.md), [QA report](../05-qa-and-stabilization/QA_REPORT.md) |
| Initial backend/API integration and vertical slice | Swarnim Jung Karki | [PR #61](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/pull/61), [PR #41](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/pull/41) |
| UI fixes, maintenance, and stabilization | Mohan Khadka | [bug reports](../../docs/ISSUES/BUGS/), [final review notes](../../docs/FINAL/FINAL_REVIEW_NOTES.md) |

## High-Risk Areas to Explain Honestly

| Area | Risk | Presentation answer |
|---|---|---|
| Local password path | Current code directly stores/compares values | Academic MVP limitation; harden before production |
| Mixed frontend structures | Static and React-oriented assets coexist | Migration was started but not completed |
| Manual QA metrics | Some reported metrics lack raw execution sheets | Present saved logs and checklists separately |
| Historical architecture docs | Some mention Express/Mongoose/JWT/bcrypt | Treat them as historical, not current runtime truth |
| AI-generated wording | Can overstate completion | Verify against repository evidence |

## Representative Contributions

- [Individual portfolios](../08-individual-portfolios/README.md)
- [Representative PRs and commits](./representative-prs/README.md)
- [Final product architecture](../04-final-product/ARCHITECTURE_FINAL.md)
- [Bugs and limitations](../05-qa-and-stabilization/BUGS_AND_LIMITATIONS.md)
