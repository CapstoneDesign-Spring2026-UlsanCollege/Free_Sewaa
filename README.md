<div align="center">

# Free Sewaa

### A community donation platform for sharing useful items, reducing waste, and supporting local communities.

[![Capstone Project](https://img.shields.io/badge/Capstone-Spring%202026-2563EB)](portfolio/README.md)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?logo=nodedotjs&logoColor=white)](package.json)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?logo=mongodb&logoColor=white)](docs/DATABASE_DESIGN.md)
[![CI](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/actions/workflows/ci.yml/badge.svg)](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/actions/workflows/ci.yml)

[Live Demo](https://free-sewaa.vercel.app) ·
[Capstone Portfolio](portfolio/README.md) ·
[Documentation](docs/README.md) ·
[Project Evidence](portfolio/06-ai-and-code-ownership/representative-prs/README.md)

</div>

---

## Overview

Free Sewaa is a full-stack academic project that helps people give reusable
items to others instead of discarding them. Users can create an account, post
an item, browse available donations, send requests, communicate with other
users, and review their activity from a dashboard.

The project was developed by a five-member Capstone Design team at Ulsan
College during Spring 2026. It demonstrates product planning, frontend and
backend integration, database persistence, authentication, testing,
deployment, and evidence-based team ownership.

> **Project status:** The semester MVP is complete and preserved for final
> review. Free Sewaa is an academic prototype, not a production service.

## MVP Experience

```text
Create account or sign in
          |
          v
Post an item or browse available donations
          |
          v
Request an item and contact the donor
          |
          v
Track posts, requests, messages, and activity
```

| Capability | What it provides |
|---|---|
| Authentication | Firebase-backed signup and sign-in for protected user actions |
| Donation listings | Create, browse, search, filter, and inspect reusable items |
| Requests | Express interest in an item and track request activity |
| Messaging | Communicate between donors and potential recipients |
| Dashboard | Review personal listings, requests, messages, and account activity |
| Administration | Review platform records through restricted admin workflows |
| Responsive interface | Support desktop, tablet, and mobile layouts |

## Architecture

Free Sewaa currently contains a Vite/React client alongside the project's
static HTML, CSS, and JavaScript interface. A Node.js server exposes the API,
serves built or static frontend assets, validates Firebase identity tokens,
and persists application data in MongoDB.

| Layer | Technology |
|---|---|
| Interface | React, Vite, HTML, CSS, JavaScript |
| Server | Node.js |
| Data | MongoDB Node.js driver |
| Authentication | Firebase Authentication and server-side token validation |
| Testing | Jest and Supertest |
| Automation | GitHub Actions |
| Deployment | Vercel and Render configuration |

See the [system architecture](docs/SYSTEM_ARCHITECTURE.md),
[API reference](docs/API_REFERENCE.md), and
[database design](docs/DATABASE_DESIGN.md) for implementation details.

## Quick Start

### Requirements

- Node.js 18 or newer
- npm
- A MongoDB connection string for database-backed features
- Firebase project configuration for authentication

### Run locally

```bash
git clone https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa.git
cd Free_Sewaa
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000).

The interface and health endpoint can start without MongoDB, but
database-backed API operations require `MONGODB_URI` or `MONGO_URI`. Review the
[deployment guide](docs/DEPLOYMENT_GUIDE.md) before configuring a complete
environment. Do not commit secrets or private credentials.

### Build the client

```bash
npm run build
```

### Run the server tests

```bash
cd server
npm install
npm test
```

The automated suite is intentionally focused and does not represent complete
end-to-end browser coverage.

## Documentation

| Start here | Purpose |
|---|---|
| [Capstone portfolio](portfolio/README.md) | Final project story, semester evidence, QA, ownership, and presentation material |
| [Documentation index](docs/README.md) | Technical and project documentation |
| [Project overview](docs/PROJECT_OVERVIEW.md) | Problem, users, objectives, and product context |
| [User flow](docs/USER_FLOW.md) | Main user and administration journeys |
| [System architecture](docs/SYSTEM_ARCHITECTURE.md) | Current components and data flow |
| [API reference](docs/API_REFERENCE.md) | Server endpoints and request behavior |
| [Testing plan](docs/TESTING_PLAN.md) | Test strategy, scope, and evidence |
| [Deployment guide](docs/DEPLOYMENT_GUIDE.md) | Environment and deployment guidance |
| [Demo script](docs/FINAL/DEMO_SCRIPT.md) | Structured final demonstration sequence |
| [Security policy](SECURITY.md) | Security expectations and reporting guidance |

## Evidence for Reviewers

The repository uses pull requests, commits, issues, documentation, and
individual portfolios to distinguish implementation evidence from broad
ownership claims.

| Evidence | What it demonstrates |
|---|---|
| [Semester journey](portfolio/02-semester-journey/SEMESTER_JOURNEY.md) | Weekly development from initial planning through final delivery |
| [Representative PRs and commits](portfolio/06-ai-and-code-ownership/representative-prs/README.md) | Evidence boundaries and representative contributions for every team member |
| [PR #61](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/pull/61) | Swarnim's initial Node.js, Express, and MongoDB backend architecture |
| [PR #148](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/pull/148) | Initial organization of the final capstone portfolio |
| [Issue #95](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/issues/95) | Unfinished centralized signup and authentication validation work |
| [Commit history](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commits/main) | Chronological repository activity and signed commit metadata |

### Team Contributions

Each member is represented through authored commits and repository evidence.
The summaries describe demonstrated activity without assigning sole ownership
of shared files or treating documentation of a risk as proof that it was fixed.

| Team member | Evidence-based contribution area | Representative activity | Portfolio | Commit evidence |
|---|---|---|---|---|
| [Ram Pathak](https://github.com/Rampathak12) | Frontend and interface implementation | Homepage and browse-page UI, React conversion, unread-message badge, and sticky browse filters | [Individual portfolio](portfolio/08-individual-portfolios/Rampathak12.md) | [5 representative commits](portfolio/06-ai-and-code-ownership/representative-prs/README.md#ram-pathak---5-representative-commits) |
| [Sujan Tamang](https://github.com/SujanTamang20) | Testing and project documentation | Testing strategy, weekly sprint packets, API reference updates, and scope-decision documentation | [Individual portfolio](portfolio/08-individual-portfolios/Sujan_Tamang.md) | [5 representative commits](portfolio/06-ai-and-code-ownership/representative-prs/README.md#sujan-tamang---5-representative-commits) |
| [Sujan Shrestha](https://github.com/suzmoon) | Diagrams and supporting documentation | UML maintenance, issue documentation, logo documentation, presentation material, and ownership audit updates | [Individual portfolio](portfolio/08-individual-portfolios/Sujan_Shrestha.md) | [5 representative commits](portfolio/06-ai-and-code-ownership/representative-prs/README.md#sujan-shrestha---5-representative-commits) |
| [Swarnim Jung Karki](https://github.com/Swarnimkarki50) | Full-stack architecture, integration, and quality | Initial backend architecture, API integration, password-security work, focused tests, CI, UML, and portfolio evidence | [Individual portfolio](portfolio/08-individual-portfolios/Swarnim_Jung_Karki.md) | [8 representative commits](portfolio/06-ai-and-code-ownership/representative-prs/README.md#swarnim-jung-karki---8-representative-commits) |
| [Mohan Khadka](https://github.com/Mohankhadkaa) | Migration, authentication, and risk documentation | React migration snapshot, authentication redirect fix, and accessibility, network, and password-recovery risk reports | [Individual portfolio](portfolio/08-individual-portfolios/Mohan_Khadka.md) | [5 representative commits](portfolio/06-ai-and-code-ownership/representative-prs/README.md#mohan-khadka---5-representative-commits) |

See the [complete attribution guide](portfolio/06-ai-and-code-ownership/representative-prs/README.md)
for changed-file details, historical context, and evidence boundaries.

## Current Limitations

- Static and React frontend structures coexist and should be consolidated.
- Automated tests cover selected API behavior rather than the full user journey.
- Centralized request validation remains incomplete; the archived work is
  recorded in [Issue #95](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/issues/95).
- Password recovery, rate limiting, notification delivery, and broader
  accessibility verification remain future work.
- Deployment availability may vary because the project uses student/free-tier
  infrastructure.

Additional scope decisions and risks are recorded in the
[final portfolio](portfolio/README.md).

## Team and Contribution Policy

Free Sewaa is a shared team project. Contribution claims should be supported by
the relevant commit, pull request, issue, or repository file and should account
for later collaborative revisions.

For contribution guidelines, see [CONTRIBUTING.md](CONTRIBUTING.md). For the
complete attribution method, see the
[representative evidence guide](portfolio/06-ai-and-code-ownership/representative-prs/README.md).

---

<div align="center">

**Capstone Design · Spring 2026 · Ulsan College**

[Live Demo](https://free-sewaa.vercel.app) ·
[Portfolio](portfolio/README.md) ·
[Documentation](docs/README.md)

</div>
