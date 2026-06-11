# Representative Pull Requests and Commits

## Purpose

This page identifies who created each representative GitHub artifact and what
the artifact actually changed. It is a grading aid, not a claim that the named
person owns every later revision of the affected files.

## How to Read the Evidence

- **PR opener** means the GitHub account that opened the pull request.
- **Commit author** means the identity recorded in the commit metadata.
- **Shared history** means the PR branch contains commits from multiple people.
- **Historical path** means the file existed in that commit but was later moved,
  replaced, or removed.
- **Current file** means the path still exists on `main`; later edits may have
  additional authors.
- An issue author documented or tracked work. Issue authorship alone does not
  prove implementation.

## GitHub Identity Key

| Team member | GitHub identity used in this evidence |
|---|---|
| Swarnim Jung Karki | [`Swarnimkarki50`](https://github.com/Swarnimkarki50) |
| Ram Pathak | [`Rampathak12`](https://github.com/Rampathak12) |
| Sujan Tamang | [`SujanTamang20`](https://github.com/SujanTamang20) |
| Sujan Shrestha | [`suzmoon`](https://github.com/suzmoon) |
| Mohan Khadka | [`Mohankhadkaa`](https://github.com/Mohankhadkaa) |

## Pull Request Attribution

| Evidence | Opened by | Commit authors inside PR | What the evidence shows | Ownership note |
|---|---|---|---|---|
| [PR #35 - Donate page](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/pull/35) | Swarnim | Swarnim, Sujan Shrestha, Sujan Tamang, Ram, and Copilot | The PR file list includes `frontend/donate/donate.html`, `donate.css`, and `donate.js`, plus repository reorganization | **Shared branch history.** Swarnim opened and merged the PR, but it must not be presented as a Swarnim-only change |
| [PR #41 - Post, browse, request flow](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/pull/41) | Swarnim | Swarnim | Records the intended vertical-slice flow | GitHub currently reports zero changed files for the merged PR. Use [Issue #39](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/issues/39) and related commits as implementation evidence |
| [PR #61 - Initial backend API](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/pull/61) | Swarnim | Swarnim Jung Karki | Added 20 backend files covering configuration, models, controllers, routes, middleware, and server entry point | Strong evidence for Swarnim's **initial** backend architecture. The original `backend/src/` paths are historical and the current server was later replaced and expanded |
| [PR #148 - Final capstone portfolio](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/pull/148) | Swarnim | Swarnim | Added the numbered portfolio structure and 62 documentation files | Strong evidence for initial portfolio organization. Many portfolio files were later reviewed or edited by teammates |

## Swarnim Jung Karki - Backend, Integration, Security, and Portfolio

| Commit | Authored by | Actual changed files | Current status |
|---|---|---|---|
| [`585cc74`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/585cc7409c1de455d87771ccd1efde09bb872a9b) - Initial backend API | Swarnim Jung Karki, `swarnimkarki50@gmail.com` | 20 files under `backend/`, including models, controllers, routes, auth middleware, database config, and `backend/src/server.js` | Historical architecture; `backend/src/` is no longer the current runtime |
| [`cfc466f`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/cfc466fc0496f4f2da16d7eb15a7892ce0253c9b) - Frontend/API integration | Swarnim Jung Karki, `swarnimkarki50@gmail.com` | Added `js/api.js`; changed browse, donate, signup, and shared script files | Historical root paths were later reorganized |
| [`c1c8a9d`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/c1c8a9de3a755e0bfb1bbb5eecb4e0cbf3cc7549) - bcrypt work | `Swarnimkarki50` | `server/server.js`, `server/package.json`, and lockfile | Current files exist, but the final portfolio still records a separate local-password risk |
| [`a8dd0cc`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/a8dd0ccf01e37809ae07f5977978bfaba97216d6) - Jest tests | `Swarnimkarki50` | Added `server/__tests__/api.test.js`; updated server test dependencies | Current test file exists; the verified suite contains three focused tests |
| [`2fe552d`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/2fe552dcd274754ed49c14b87e7ec125a6226e96) - Individual portfolio and UML organization | `Swarnimkarki50` | Added `docs/UML_AND_MERMAID_DIAGRAMS.md`; revised all five individual portfolio pages and their index | Files exist; individual pages represent each member and are not claims of Swarnim owning their underlying technical work |

Related tracking:
[Issue #62](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/issues/62),
[Issue #94](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/issues/94), and
[open Issue #95](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/issues/95).

## Ram Pathak - Figma Matching and UI Implementation

| Commit | Authored by | Actual changed files | Current status |
|---|---|---|---|
| [`7399ae8`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/7399ae8) - Homepage Figma match | `Rampathak12` | `css/style.css`, `html/index.html`, and `js/index.js` | Current files exist and may include later revisions |
| [`d26a904`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/d26a904) - Browse-page Figma match | `Rampathak12` | `css/theme.css` and `html/browse.html` | Current files exist and may include later revisions |

These commits directly support Ram's UI implementation evidence. They do not
prove sole ownership of every current line in those shared files.

## Sujan Tamang - Sprint and Scope Documentation

| Commit | Authored by | Actual changed files | Current status |
|---|---|---|---|
| [`d8229f1`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/d8229f153b447c787660dfa8d4bc605c0749c401) - Week 14 sprint packet | `Tamang Sujan` / `SujanTamang20` | Added `docs/sprints/Weekly Sprint Packet - Week 14.md` | File exists; final portfolio labels unsupported statements in the historical packet honestly |
| [`2327598`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/23275984c40b8b8982b1f47cabea8a773dddff0e) - Scope decisions | `Tamang Sujan` / `SujanTamang20` | Updated `portfolio/01-project-overview/SCOPE_DECISIONS.md` | Current file exists and may include earlier authors |

These commits support Sujan Tamang's documentation and scope-maintenance work.

## Sujan Shrestha - Diagram Maintenance and Bug Evidence

| Commit | Authored by | Actual changed files | Current status |
|---|---|---|---|
| [`ca9f848`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/ca9f848ace15ffaa92978517fa75a4c58c2af12a) - Mermaid diagram fixes | `suzmoon` | Updated `docs/UML_AND_MERMAID_DIAGRAMS.md` | Current file exists; the commit clearly shows later collaborative maintenance |
| [`e661d0a`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/e661d0acfe31e9e718e44d770ff91f86fc7e6577) - Admin-login bug report | `suzmoon` | Updated `docs/ISSUES/BUGS/bug9.md` | Current bug-evidence path exists |

These commits support Sujan Shrestha's diagram and issue-documentation work.

## Mohan Khadka - React Migration and Bug Reporting

| Commit | Authored by | Actual changed files | Current status |
|---|---|---|---|
| [`c57d2ab`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/c57d2ab8e6663277c14803d268734d63e91599e8) - React migration snapshot | Mohan Khadka / `Mohankhadkaa` | Added the React client, generated page components, current server snapshot, static frontend files, checklists, and project documentation | Many paths exist. This proves authorship of the migration commit, not original authorship of every imported or generated file |
| [`3e7c877`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/3e7c877ef0401f77443e98d73f8a471f76e33b95) - Slow-network bug report | Mohan Khadka / `Mohankhadkaa` | Added `docs/ISSUES/BUGS/bug20.md` | Current bug report exists; it records a risk, not a completed fix |

Additional Week 15 bug-report commits by Mohan are linked from
[Week 15](../../02-semester-journey/weekly-sprints/WEEK_15.md).

## Attribution Rules for Grading

1. Use commit and PR metadata to identify the recorded author.
2. Inspect the changed-file list to understand what the artifact actually did.
3. Do not assign sole ownership from a PR opener when branch history is shared.
4. Do not treat issue creation or bug reporting as proof that implementation was completed.
5. Do not treat a historical file as the current architecture.
6. Ask the named contributor to explain the work during the technical defense.
7. Use the [individual portfolios](../../08-individual-portfolios/README.md) for each member's broader evidence.

## Repository-Wide Context

- [Main branch commit history](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commits/main)
- [Pull requests](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/pulls)
- [Issues](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/issues)
- [AI Code Ownership Audit](../AI_CODE_OWNERSHIP_AUDIT.md)
