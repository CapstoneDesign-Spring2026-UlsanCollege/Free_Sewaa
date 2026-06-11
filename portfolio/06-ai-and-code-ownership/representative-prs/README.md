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

## Representative Evidence Count

| Team member | Number of representative commits below |
|---|---:|
| Swarnim Jung Karki | **8** |
| Ram Pathak | **5** |
| Sujan Tamang | **5** |
| Sujan Shrestha | **5** |
| Mohan Khadka | **5** |

The shared pull-request table above provides additional context and is not
included in these per-person commit counts.

## Swarnim Jung Karki - 8 Representative Commits

| # | Commit | Actual contribution | Evidence boundary |
|---:|---|---|---|
| 1 | [`585cc74`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/585cc7409c1de455d87771ccd1efde09bb872a9b) - Initial backend API | Added 20 files for models, controllers, routes, authentication middleware, database configuration, and the backend server | Historical `backend/src/` architecture; the current runtime was later replaced and expanded |
| 2 | [`cfc466f`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/cfc466fc0496f4f2da16d7eb15a7892ce0253c9b) - Frontend/API integration | Added `js/api.js` and connected browse, donate, signup, and shared scripts to API behavior | Original root paths were later reorganized |
| 3 | [`c1c8a9d`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/c1c8a9de3a755e0bfb1bbb5eecb4e0cbf3cc7549) - bcrypt work | Updated `server/server.js`, `server/package.json`, and the lockfile | Current files exist; a separate local-password path remains a documented risk |
| 4 | [`a8dd0cc`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/a8dd0ccf01e37809ae07f5977978bfaba97216d6) - Jest tests | Added `server/__tests__/api.test.js` and server test dependencies | Current suite exists and contains three focused tests |
| 5 | [`36d3b13`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/36d3b13) - CI safety | Updated `.github/workflows/ci.yml` | Current workflow exists and may have later edits |
| 6 | [`2fe552d`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/2fe552dcd274754ed49c14b87e7ec125a6226e96) - Portfolio and UML organization | Added `docs/UML_AND_MERMAID_DIAGRAMS.md` and revised the individual portfolio section | Organizing portfolio pages is not ownership of teammates' technical work |
| 7 | [`5d6f2c6`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/5d6f2c6) - User-flow diagram correction | Fixed login-node conflict, admin flow, browse dead end, and dashboard ambiguity in the UML/Mermaid document | Current diagram file exists and later received collaborative edits |
| 8 | [`e60a6f0`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/e60a6f0) - Final portfolio audit | Added `portfolio/FINAL_PORTFOLIO_AUDIT.md` and updated the final MVP demo document | Documentation audit evidence, not new application functionality |

Related tracking:
[Issue #62](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/issues/62),
[Issue #94](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/issues/94), and
[open Issue #95](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/issues/95).

## Ram Pathak - 5 Representative Commits

| # | Commit | Actual contribution | Evidence boundary |
|---:|---|---|---|
| 1 | [`7399ae8`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/7399ae8) - Homepage Figma match | Updated `css/style.css`, `html/index.html`, and `js/index.js` | Current shared files include later revisions |
| 2 | [`d26a904`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/d26a904) - Browse-page Figma match | Updated `css/theme.css` and `html/browse.html` | Current shared files include later revisions |
| 3 | [`7dc196f`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/7dc196f) - React conversion | Added React generated pages, routing, styles, Vite configuration, and build/deployment changes | Migration remains partial because static and React structures coexist |
| 4 | [`2849cc3`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/2849cc3) - Unread message count | Updated `css/theme.css` and `js/site.js` to show the unread badge | Current shared files may include later edits |
| 5 | [`7491e56`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/7491e56) - Sticky browse filters | Updated `css/theme.css` for sticky filtering behavior | Styling evidence, not sole ownership of the complete browse page |

These commits directly support Ram's UI implementation evidence. They do not
prove sole ownership of every current line in those shared files.

## Sujan Tamang - 5 Representative Commits

| # | Commit | Actual contribution | Evidence boundary |
|---:|---|---|---|
| 1 | [`d8229f1`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/d8229f153b447c787660dfa8d4bc605c0749c401) - Week 14 sprint packet | Added `docs/sprints/Weekly Sprint Packet - Week 14.md` | Historical packet includes claims later qualified by the final portfolio |
| 2 | [`db30d53`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/db30d53) - Week 12 sprint packet | Added the Week 12 sprint packet | Documentation evidence; completion claims require supporting tests or files |
| 3 | [`c96ccaf`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/c96ccaf) - Testing strategy | Updated `docs/TESTING_STRATEGY.md` with detailed plans and objectives | A strategy document is not proof every test was executed |
| 4 | [`32b6c51`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/32b6c51) - API reference | Enhanced `docs/DESIGN/API_REFERENCE.md` | Documentation should be checked against the current server |
| 5 | [`2327598`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/23275984c40b8b8982b1f47cabea8a773dddff0e) - Scope decisions | Updated `portfolio/01-project-overview/SCOPE_DECISIONS.md` | Current shared file includes earlier contributions |

These commits support Sujan Tamang's documentation and scope-maintenance work.

## Sujan Shrestha - 5 Representative Commits

| # | Commit | Actual contribution | Evidence boundary |
|---:|---|---|---|
| 1 | [`ca9f848`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/ca9f848ace15ffaa92978517fa75a4c58c2af12a) - Mermaid fixes | Updated `docs/UML_AND_MERMAID_DIAGRAMS.md` | Current shared file demonstrates collaborative maintenance |
| 2 | [`e661d0a`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/e661d0acfe31e9e718e44d770ff91f86fc7e6577) - Admin-login bug report | Updated `docs/ISSUES/BUGS/bug9.md` | Bug documentation does not prove the fix |
| 3 | [`40d08e9`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/40d08e9) - Logo documentation | Added `docs/logo.md` | Current documentation file exists |
| 4 | [`1aff0bd`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/1aff0bd) - Midterm demo notes | Added `docs/ARCHIVE FILES/presentation.md` | Preserved presentation artifact, not application code |
| 5 | [`f45fd1f`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/f45fd1f) - Ownership audit | Updated `docs/AI_CODE_OWNERSHIP_AUDIT.md` | Historical audit; final ownership interpretation is in this portfolio section |

These commits support Sujan Shrestha's diagram and issue-documentation work.

## Mohan Khadka - 5 Representative Commits

| # | Commit | Actual contribution | Evidence boundary |
|---:|---|---|---|
| 1 | [`c57d2ab`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/c57d2ab8e6663277c14803d268734d63e91599e8) - React migration snapshot | Added the React client, generated pages, server snapshot, static assets, checklists, and project documentation | Proves authorship of this migration snapshot, not original authorship of every imported/generated file |
| 2 | [`c5bbd56`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/c5bbd56) - Authentication redirect fix | Updated admin login, `js/auth.js`, `js/site.js`, and `server/server.js` | Current files exist and may have later revisions |
| 3 | [`3e7c877`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/3e7c877ef0401f77443e98d73f8a471f76e33b95) - Slow-network report | Added historical `docs/ISSUES/BUGS/bug20.md` | Records the issue; does not prove a fix |
| 4 | [`d483e0e`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/d483e0e) - Accessibility report | Added historical `docs/ISSUES/BUGS/bug18.md` | Records accessibility risk; does not prove remediation |
| 5 | [`7ae75f9`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/7ae75f9) - Password-recovery report | Added historical `docs/ISSUES/BUGS/bug12.md` | Records an incomplete feature; password recovery remains future work |

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
