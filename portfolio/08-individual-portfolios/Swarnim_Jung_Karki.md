# Swarnim Jung Karki - Individual Portfolio

## Professional Profile

I contributed to Free Sewaa as a **full-stack architecture, integration, and
quality contributor**. My strongest technical work established the project's
initial backend structure, connected frontend behavior to API resources, and
strengthened authentication, automated tests, CI, UML, and final evidence.

My work spans implementation and technical communication: I can explain how a
browser action becomes an authenticated API request, how that request reaches
the persistence layer, how failures should be handled, and how repository
evidence proves what was actually delivered.

> **Ownership boundary:** I claim the initial backend architecture and the
> commits I authored. The current server and shared frontend files were later
> expanded or revised by teammates, so I do not claim sole ownership of their
> final state.

## Contribution Snapshot

| Area | My verified contribution | Strongest evidence |
|---|---|---|
| Backend architecture | Created the initial Express/MongoDB models, controllers, routes, middleware, and server structure | [PR #61](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/pull/61), [`585cc74`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/585cc7409c1de455d87771ccd1efde09bb872a9b) |
| API integration | Connected browse, donate, signup, and shared frontend scripts to backend resources and responses | [`cfc466f`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/cfc466fc0496f4f2da16d7eb15a7892ce0253c9b), [Issue #65](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/issues/65) |
| Core product flow | Helped establish the Post Item -> Browse Items -> Request Item vertical-slice direction | [Issue #39](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/issues/39), [PR #41](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/pull/41) |
| Security and validation | Added historical bcrypt password handling and supported authentication validation work | [`c1c8a9d`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/c1c8a9de3a755e0bfb1bbb5eecb4e0cbf3cc7549), [Issue #94](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/issues/94) |
| Tests and CI | Added focused Jest tests and improved the GitHub Actions workflow | [`a8dd0cc`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/a8dd0ccf01e37809ae07f5977978bfaba97216d6), [`36d3b13`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/36d3b13) |
| Technical communication | Improved UML flow accuracy, portfolio structure, and the final evidence audit | [`5d6f2c6`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/5d6f2c6), [`e60a6f0`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/e60a6f0) |

## 1. My Role and Responsibility

My role evolved with the project. Early in the semester, I focused on turning
frontend prototypes into a connected product by establishing a backend
architecture and API integration path. Later, I worked on security, tests, CI,
technical diagrams, evidence quality, and final portfolio organization.

The professional value of this work was not only adding code. I helped create
clear boundaries between the interface, API, authentication, persistence,
testing, and documentation layers. I also reviewed the final evidence so that
historical designs, current behavior, open risks, and individual ownership were
not confused with one another.

### Git Identity Note

My semester history appears under these author identities:

- `swarnimkarki60@gmail.com`
- `swarnimkarki50@gmail.com`
- `swarnimkarki50@users.noreply.github.com`
- `162858067+Swarnimkarki50@users.noreply.github.com`
- `jung@Swarnims-MacBook-Pro.local`

The author names include `Swarnim Jung Karki` and `Swarnimkarki50`. I use
focused, reviewable evidence instead of a raw commit count because repository
history also contains merges, reverts, and branch duplication.

## 2. Strongest Technical Contributions

### Case Study A: Establishing the Initial Backend

**Problem:** The project needed a structured server-side foundation rather than
placing application state and business behavior entirely inside page scripts.

**Action:** In [PR #61](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/pull/61),
I added 20 backend files covering database configuration, resource models,
controllers, routes, JWT middleware, environment setup, and a server entry
point. The implementation is preserved in
[commit `585cc74`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/585cc7409c1de455d87771ccd1efde09bb872a9b).

**Result:** The team gained an architectural baseline for users, items,
requests, messages, and authentication. This made it possible to reason about
API contracts and persistence separately from the interface.

**Boundary:** The original `backend/src/` architecture is historical. Teammates
later replaced and expanded the runtime in `server/server.js`.

### Case Study B: Connecting the Frontend to the API

**Problem:** Early pages depended on prototype or browser-only behavior, so
actions were not consistently connected to server resources and errors.

**Action:** In
[commit `cfc466f`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/cfc466fc0496f4f2da16d7eb15a7892ce0253c9b),
I added an API helper and changed browse, donate, signup, and shared frontend
scripts to communicate with backend endpoints. The work is tracked by
[Issue #65](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/issues/65).

**Result:** Browser interactions gained a path to persistent resources,
structured responses, and visible error handling.

**Boundary:** The original root-level frontend paths were later reorganized.
The commit proves my integration work, not ownership of every current page.

### Case Study C: Building a Demonstrable Product Flow

The team needed a coherent experience rather than disconnected screens. I
opened [Issue #39](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/issues/39)
to define the Post Item -> Browse Items -> Request Item vertical slice and
opened [PR #41](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/pull/41)
for that workflow.

Two attribution details matter:

- [PR #35](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/pull/35)
  was opened and merged by me, but its branch history contains commits from
  multiple teammates and Copilot. I present it as shared evidence.
- GitHub reports zero changed files for PR #41. It is useful workflow evidence,
  while Issue #39 and implementation commits provide stronger delivery proof.

### Case Study D: Security, Tests, and CI

I added historical bcrypt password handling in
[commit `c1c8a9d`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/c1c8a9de3a755e0bfb1bbb5eecb4e0cbf3cc7549),
tracked by [Issue #94](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/issues/94).
I then added Jest checks for health and authentication behavior in
[commit `a8dd0cc`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/a8dd0ccf01e37809ae07f5977978bfaba97216d6)
and improved CI safety in
[commit `36d3b13`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/36d3b13).

The current verified suite contains three focused tests, not broad regression
coverage. [Issue #95](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/issues/95)
remains open for centralized signup/auth validation. The final project also
documents a separate local-password path that still needs production hardening.

### Case Study E: UML and Evidence Leadership

I standardized the individual portfolio and UML context in
[commit `2fe552d`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/2fe552dcd274754ed49c14b87e7ec125a6226e96),
then corrected ambiguity in the user-flow diagram in
[commit `5d6f2c6`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/5d6f2c6).
Finally, I created the final portfolio audit in
[commit `e60a6f0`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/e60a6f0).

This work made the project easier to evaluate: claims are connected to evidence,
open limitations remain visible, and team documentation is not used to invent
individual ownership.

## 3. Technical Area I Can Defend

### API Architecture and Request Lifecycle

I can explain the initial request lifecycle end to end:

1. The browser collects and validates user input.
2. A frontend API helper serializes the request and sends it to an endpoint.
3. The router maps the method and path to a controller.
4. Authentication middleware verifies the token for protected operations.
5. The controller validates context and coordinates business behavior.
6. A model reads or changes MongoDB data.
7. The controller returns a JSON response with a meaningful status code.
8. The frontend converts the response into success, empty, validation, or error UI.

The design separates concerns: route definitions stay small, controllers own
request behavior, models describe data, middleware handles cross-cutting
authentication, and the frontend focuses on presentation.

Important failure modes include malformed input, missing or expired tokens,
duplicate account data, unavailable database connections, unexpected response
shapes, and partial UI updates. The next engineering step should be centralized
schema validation and integration tests for every protected write endpoint.

## 4. AI Use and Human Verification

I used AI for scaffolding ideas, debugging hypotheses, test-case suggestions,
documentation structure, and Markdown cleanup. AI did not decide project scope,
security acceptance, feature completion, or individual ownership.

My review process was:

1. Inspect the proposed diff instead of accepting generated output directly.
2. Compare it with the repository's current architecture and conventions.
3. Run the affected test or manually reproduce the workflow.
4. Check links, authors, file paths, and issue states against GitHub.
5. Remove inflated claims when the evidence did not support them.

Examples of human corrections include identifying PR #35 as shared history,
recording PR #41's zero-file result, distinguishing the historical backend from
the current server, and keeping Issue #95 open rather than presenting validation
as complete.

## 5. Problem I Helped Solve

### Moving Authentication Toward Safer Password Handling

The historical authentication implementation needed to avoid persisting and
comparing passwords as plain values. In
[commit `c1c8a9d`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/c1c8a9de3a755e0bfb1bbb5eecb4e0cbf3cc7549),
I added bcrypt support to the server dependencies and updated registration and
login behavior to hash and compare credentials.

This work reduced the risk of exposing usable passwords if stored data were
compromised. It also reinforced an important lesson: security must be reflected
in persistence, controller behavior, error handling, and tests rather than
added as a final visual feature.

The accurate final statement is narrower than “authentication is completely
secure.” The repository later evolved, and the final risk review still
identifies local password handling and centralized validation as unfinished.

## 6. Reflection and Growth

### What I Learned

I learned how one user-facing action crosses interface state, network requests,
middleware, controllers, persistence, and tests. I also learned that a concise,
well-scoped commit is stronger grading evidence than a large activity count.

### What I Am Most Proud Of

I am most proud of creating the initial backend baseline and connecting it to
frontend behavior. That work helped move Free Sewaa from independent prototype
pages toward a full-stack product flow.

### What I Would Improve

I would introduce shared validation schemas and integration tests earlier,
maintain one Git author identity, and divide broad changes into smaller PRs with
explicit acceptance criteria. I would also document architecture transitions
as they happen so historical and current implementations remain easy to
distinguish.

### Strongest Skill Developed

My strongest growth was in **full-stack systems thinking**: understanding both
the code path and the proof path. I can explain how the feature works, where it
can fail, how it should be tested, and which Git artifact supports the claim.

## 7. Eight Representative Commits

| # | Date | Commit | Verified contribution | Evidence boundary |
|---:|---|---|---|---|
| 1 | 2026-04-08 | [`585cc74`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/585cc7409c1de455d87771ccd1efde09bb872a9b) | Added the initial backend models, controllers, routes, middleware, configuration, and server | Historical backend architecture |
| 2 | 2026-04-08 | [`cfc466f`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/cfc466fc0496f4f2da16d7eb15a7892ce0253c9b) | Connected frontend scripts to API behavior | Original paths were later reorganized |
| 3 | 2026-05-16 | [`c1c8a9d`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/c1c8a9de3a755e0bfb1bbb5eecb4e0cbf3cc7549) | Added historical bcrypt password hashing and comparison | Separate final password risks remain |
| 4 | 2026-05-16 | [`a8dd0cc`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/a8dd0ccf01e37809ae07f5977978bfaba97216d6) | Added Jest health and authentication tests | Three focused tests, not broad coverage |
| 5 | 2026-05-22 | [`36d3b13`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/36d3b13) | Improved `.github/workflows/ci.yml` safety | Workflow received later edits |
| 6 | 2026-06-04 | [`2fe552d`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/2fe552dcd274754ed49c14b87e7ec125a6226e96) | Standardized individual portfolios and added UML context | Organization is not ownership of teammates' work |
| 7 | 2026-06-04 | [`5d6f2c6`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/5d6f2c6) | Corrected user-flow diagram ambiguity and dead ends | Shared documentation later evolved |
| 8 | 2026-06-11 | [`e60a6f0`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/e60a6f0) | Added the final portfolio audit and refined final MVP demo evidence | Documentation and grading-readiness work |

## 8. Five Best Evidence Links

1. [PR #61 - Initial backend API](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/pull/61)
   demonstrates the clearest single-author technical foundation: 20 backend files.
2. [Commit `cfc466f` - Frontend/API integration](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/cfc466fc0496f4f2da16d7eb15a7892ce0253c9b)
   shows cross-layer integration rather than isolated page work.
3. [Commit `a8dd0cc` - Jest tests](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/a8dd0ccf01e37809ae07f5977978bfaba97216d6)
   proves direct testing work and dependency setup.
4. [Issue #94 and commit `c1c8a9d`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/issues/94)
   provide a traceable security problem and implementation trail.
5. [PR #148 - Final capstone portfolio](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/pull/148)
   demonstrates evidence organization across the complete submission.

## Technical Defense Readiness

I am prepared to:

- Draw and explain the initial route -> middleware -> controller -> model flow.
- Trace a frontend action into an API request and response.
- Explain why bcrypt is preferable to plain password storage.
- Run and interpret the current Jest suite and CI workflow.
- Explain why PR #35 is shared evidence and PR #41 is workflow evidence.
- Distinguish my historical backend contribution from the current server.
- Identify Issue #95 and the local-password path as unfinished work.
- Defend all eight representative commits without relying on a raw commit count.

## Navigation

- [Representative contribution evidence](../06-ai-and-code-ownership/representative-prs/README.md)
- [AI and code ownership audit](../06-ai-and-code-ownership/AI_CODE_OWNERSHIP_AUDIT.md)
- [Back to Individual Portfolios](./README.md)
- [Back to Portfolio Home](../README.md)
