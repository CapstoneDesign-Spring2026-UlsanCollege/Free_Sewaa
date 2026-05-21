# ADR-001: Technology Stack

**Status:** Accepted

**Date:** 2026-04-01

## Context

We needed to choose a technology stack for the Free Sewaa capstone project. The stack needed to be:
- Easy for a team of 5 students to learn and use
- Quick to prototype for a 12-week semester
- Deployable for a live demo
- Well-documented with community support

## Decision

We chose:

| Layer | Technology | Reason |
|-------|------------|--------|
| Frontend | Vanilla HTML, CSS, JavaScript | No framework learning curve; fast prototyping |
| Backend | Node.js (native HTTP module) | Simple server setup; no Express dependency |
| Database | MongoDB | Flexible schema; easy to iterate during development |
| Deployment | Render | Free tier; connects directly to GitHub |
| CI | GitHub Actions | Built into GitHub; no extra setup |

## Consequences

- No frontend framework means more manual DOM manipulation but complete control
- Native HTTP server avoids Express dependency but requires manual routing
- MongoDB requires connection string management and environment configuration
- Render free tier may sleep after inactivity (cold start delay)

---

*Last updated: May 2026*
