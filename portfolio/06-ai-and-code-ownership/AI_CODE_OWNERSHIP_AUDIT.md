# AI Code Ownership Audit

## Overview

This document summarizes the AI-assisted development practices in the Free Sewaa project. The full audit is available at [docs/AI_CODE_OWNERSHIP_AUDIT.md](../../docs/AI_CODE_OWNERSHIP_AUDIT.md).

## What AI Helped With

Based on the [AI Code Ownership Audit](../../docs/AI_CODE_OWNERSHIP_AUDIT.md):

1. **Code generation** — Boilerplate code for routes, models, and UI components
2. **Debugging** — Identifying and fixing bugs in auth flow, item listing, and messaging
3. **Documentation** — Generating initial doc structures, README templates
4. **Testing** — Writing Jest test cases and test scripts
5. **Refactoring** — Suggesting code improvements and architecture changes

## What Humans Reviewed

All AI-generated code was reviewed by team members before merging:

- **Authentication logic** — Reviewed by frontend and backend leads
- **Security-sensitive code** — Reviewed by the full team
- **Data validation** — Checked against existing patterns
- **Deployment config** — Verified against Render requirements
- **API endpoints** — Tested with curl and browser

## What Humans Changed

Team members made the following modifications to AI-generated code:

- Fixed incorrect API endpoint paths
- Added missing error handling
- Updated CSS to match Figma designs
- Removed unnecessary dependencies
- Corrected database schema references
- Added form validation logic

## How AI-Assisted Work Was Tested

- **Jest tests** — Backend endpoints tested with Supertest
- **Manual QA** — All features tested per sprint
- **PR review** — Code review before merging
- **Browser testing** — Cross-browser verification
- **Mobile testing** — Responsive design verification

## Code Ownership Map

| Code Area | Primary Owner | Can Explain | Evidence |
|-----------|--------------|-------------|----------|
| Backend API (routes, models) | Rampathak12 | Yes | [server/](../../server/), [server/](../../server/) |
| Frontend UI (pages, components) | Sujan Shrestha | Yes | [html/](../../html/), [html/](../../html/) |
| Testing & QA | Sujan Tamang | Yes | [docs/TESTING_PLAN.md](../../docs/TESTING_PLAN.md), checklists |
| Styling & CSS | Swarnim Karki | Yes | [css/theme.css](../../css/theme.css), responsive design |
| Bug fixes & stability | Mohan Khadka | Yes | Bug reports, commit history |

## Risky/Confusing Areas

| Area | Risk Level | Concern |
|------|-----------|---------|
| Auth session management | High | Session lost on refresh |
| Password handling | High | Plain text storage (known gap) |
| MongoDB queries | Medium | No proper indexing |
| API error handling | Medium | Inconsistent error responses |
| Frontend state management | Medium | No centralized store |

## Representative Contributions

- [Rampathak12](../08-individual-portfolios/Rampathak12.md) — Backend API, database models
- [Sujan Shrestha](../08-individual-portfolios/Sujan_Shrestha.md) — Frontend pages, UI components
- [Sujan Tamang](../08-individual-portfolios/Sujan_Tamang.md) — Testing, documentation
- [Swarnim Jung Karki](../08-individual-portfolios/Swarnim_Jung_Karki.md) — CSS, responsive design
- [Mohan Khadka](../08-individual-portfolios/Mohan_Khadka.md) — Bug fixes, maintenance
