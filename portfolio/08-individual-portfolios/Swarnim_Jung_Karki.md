# Swarnim Jung Karki - Individual Portfolio

## 1. My Role

I contributed across the full stack, with my strongest work in establishing the project's initial backend, connecting the frontend to that API, and building the first complete Post Item -> Browse Items -> Request Item user flow. I also worked on authentication security, validation, automated testing, responsive UI improvements, UML documentation, and final portfolio organization.

My initial backend contribution introduced the Node.js, Express, and MongoDB structure, including authentication and the first models and routes for the project's main resources. The current server was subsequently expanded and substantially revised by teammates, so I claim ownership of the initial architecture and integration work rather than sole ownership of the final server.

### Git identity note

My repository history appears under several Git identities used during the semester:

- `swarnimkarki60@gmail.com`
- `swarnimkarki50@gmail.com`
- `swarnimkarki50@users.noreply.github.com`
- `162858067+Swarnimkarki50@users.noreply.github.com`
- `jung@Swarnims-MacBook-Pro.local`

The associated author names include `Swarnim Jung Karki` and `Swarnimkarki50`. A repository-wide identity audit finds approximately 403 historical commits across these aliases and all refs, but that count includes merges, reverts, and branch history. I therefore use the representative evidence below instead of treating a raw commit count as a quality measure.

## 2. My Strongest Contributions

### Initial backend architecture

I created the first structured backend for Free Sewaa in [PR #61](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/pull/61), tracked by [Issue #62](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/issues/62). It established an Express application connected to MongoDB, JWT-based authentication, resource models, controllers, middleware, and routes for users, items, requests, and messages. The central implementation is preserved in [commit `585cc74`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/585cc7409c1de455d87771ccd1efde09bb872a9b).

This contribution gave the team a working architectural baseline. Teammates later expanded and revised the server significantly as requirements changed.

### Post, browse, and request vertical slice

I implemented the donate/post interface in [PR #35](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/pull/35), including form validation, image preview, and item persistence for the early prototype. I then connected posting, browsing, and requesting into one demonstrable user journey in [PR #41](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/pull/41), tracked by [Issue #39](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/issues/39).

This vertical slice was important because it changed separate pages into an end-to-end product flow that could be demonstrated and tested from a user's perspective.

### Frontend-to-backend API integration

After establishing the API, I replaced prototype-only data behavior with frontend calls to the backend in [commit `cfc466f`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/cfc466fc0496f4f2da16d7eb15a7892ce0253c9b), tracked by [Issue #65](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/issues/65). This work connected user actions in the browser to persistent server-side resources and error responses.

### Authentication security, validation, and tests

I improved password handling with bcrypt in [commit `c1c8a9d`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/c1c8a9de3a755e0bfb1bbb5eecb4e0cbf3cc7549), tracked by [Issue #94](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/issues/94). I also added authentication input checks in [commit `2397c4d`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/2397c4d2a431eaf5a5ad34fa4070096ce3f01c56), and added Jest coverage for health and authentication behavior in [commit `a8dd0cc`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/a8dd0ccf01e37809ae07f5977978bfaba97216d6), related to [Issue #92](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/issues/92).

[Issue #95](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/issues/95) remains open. It records remaining validation work and is not presented here as a completed contribution.

### Responsive UI, documentation, and final evidence

I contributed iterative mobile layout, spacing, button, and language-selector improvements during frontend development. Because teammates later rewrote portions of the shared theme, I use the historical commits as evidence of my changes rather than claiming sole ownership of the current CSS.

I also helped organize the final portfolio and technical documentation through [PR #148](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/pull/148) and [commit `2fe552d`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/2fe552dcd274754ed49c14b87e7ec125a6226e96). Repository evidence includes the [UML user-flow documentation](../../docs/Project_UML%20diagram/USER_FLOW_DIAGRAM.md), [code-coverage notes](../../docs/PROGRESS/week11/CODE_COVERAGE.md), and [documentation index](../../docs/README.md).

## 3. One Area I Can Explain Clearly

### The initial API architecture and frontend integration

The architecture I introduced separated browser behavior from persistence:

1. The frontend collected and validated user input.
2. A frontend API helper sent an HTTP request to an Express route.
3. The route delegated business logic to a controller.
4. The controller read or changed MongoDB data through a model.
5. The API returned JSON that the frontend converted into success, empty, or error UI states.
6. Protected operations required a JWT, which authentication middleware checked before the controller ran.

This separation made it easier to replace prototype storage, test server behavior independently, and add new resource types without putting all logic into page scripts.

Important failure cases included missing or invalid tokens, malformed input, unavailable database connections, duplicate account data, and unsuccessful API responses. I addressed parts of these through frontend checks, authentication validation, structured response handling, bcrypt password storage, and Jest tests for health and authentication routes.

The next improvement should be centralized schema validation for every write endpoint, followed by integration tests that run against the current server architecture. The open validation work in Issue #95 makes that gap explicit.

## 4. My AI Use

I used AI tools as assistants for code suggestions, debugging ideas, documentation structure, and Markdown cleanup. I did not treat generated output as evidence or submit it without review.

My verification process was to inspect the proposed diff, compare it with the repository's current patterns, run or manually test the affected flow, and correct inaccurate code or links. For this portfolio, I traced claims back to commits, pull requests, issues, and repository files. AI helped organize the evidence, while I remained responsible for deciding what accurately represented my work.

One limitation I recognize is that AI can make a plausible explanation sound stronger than the underlying evidence. I avoided that by stating the boundary between my initial backend architecture and the later server changes made by teammates.

## 5. One Problem I Helped Solve

### Preventing insecure password storage

The authentication implementation needed to avoid storing or comparing plaintext passwords. I addressed this in [Issue #94](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/issues/94) and [commit `c1c8a9d`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/c1c8a9de3a755e0bfb1bbb5eecb4e0cbf3cc7549).

The solution used bcrypt to hash a password before persistence and to compare a login attempt with the stored hash. This reduced the impact of accidental database exposure and kept the API response from revealing password data. I checked the registration and login paths after the change and later added Jest authentication tests as part of the project's QA work.

This problem taught me that security is not a feature to add only at the end. It must be part of the data model, controller behavior, error handling, and tests from the beginning.

## 6. Reflection

### What I learned

I learned how a user-facing feature crosses multiple layers: interface state, HTTP requests, authentication middleware, controllers, database models, and tests. I also learned that useful Git evidence needs focused commits and linked issues, not just a large activity count.

### What I am most proud of

I am most proud of establishing the initial backend foundation and connecting it to a complete post-to-request workflow. That work helped move Free Sewaa from separate mock pages toward an integrated product.

### What I should have done better

I should have added centralized validation and broader integration tests earlier. I also could have kept my Git author identity consistent from the start, which would have made individual contribution review simpler.

### What I would improve next

I would finish the validation scope recorded in open Issue #95, add tests for every protected write endpoint, and document the final server architecture after all team revisions. I would also split large changes into smaller PRs with clearer acceptance criteria.

### Skill I strengthened most

The skill I strengthened most was full-stack integration: understanding how a browser action becomes a validated, authenticated database operation and how to prove that behavior with tests and repository evidence.

## 7. Representative Commit Ledger

| Date | Commit | Contribution | Related evidence |
|---|---|---|---|
| 2026-04-08 | [`585cc74`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/585cc7409c1de455d87771ccd1efde09bb872a9b) | Established the initial Express/MongoDB API architecture, authentication, models, controllers, middleware, and routes. | [PR #61](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/pull/61), [Issue #62](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/issues/62) |
| 2026-04-08 | [`cfc466f`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/cfc466fc0496f4f2da16d7eb15a7892ce0253c9b) | Connected frontend behavior to backend API resources and responses. | [Issue #65](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/issues/65) |
| 2026-04-12 | [`2397c4d`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/2397c4d2a431eaf5a5ad34fa4070096ce3f01c56) | Added authentication input validation. | [Open remaining validation work: Issue #95](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/issues/95) |
| 2026-05-16 | [`c1c8a9d`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/c1c8a9de3a755e0bfb1bbb5eecb4e0cbf3cc7549) | Improved password security with bcrypt hashing and comparison. | [Issue #94](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/issues/94) |
| 2026-05-16 | [`a8dd0cc`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/a8dd0ccf01e37809ae07f5977978bfaba97216d6) | Added Jest tests for health and authentication behavior. | [Issue #92](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/issues/92) |
| 2026-06-04 | [`2fe552d`](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/2fe552dcd274754ed49c14b87e7ec125a6226e96) | Standardized individual portfolio structure and added visual documentation context. | [PR #148](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/pull/148) |

## 8. My Five Best Evidence Links

1. [PR #61 - Initial Node.js/Express backend API](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/pull/61): strongest evidence of my initial backend architecture and its reviewed scope.
2. [PR #41 - Post, browse, and request user flow](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/pull/41): strongest evidence of an end-to-end product workflow.
3. [Commit `cfc466f` - Frontend-to-backend API integration](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/cfc466fc0496f4f2da16d7eb15a7892ce0253c9b): direct evidence of connecting the UI to persistent backend behavior.
4. [Issue #94 - Password hashing with bcrypt](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/issues/94): focused evidence of a security problem, implementation, and completion trail.
5. [PR #148 - Final capstone portfolio documentation](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/pull/148): evidence of final documentation, UML, and portfolio organization.

## Presentation Readiness

I can demonstrate the Post Item -> Browse Items -> Request Item journey and explain where the frontend, API, authentication, and database responsibilities meet. I can also walk through PR #61 as the initial architecture, explain the bcrypt security fix, describe how the tests support authentication behavior, and identify Issue #95 honestly as unfinished validation work.
