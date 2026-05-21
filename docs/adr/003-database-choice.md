# ADR-003: Database Choice

**Status:** Accepted

**Date:** 2026-04-05

## Context

We needed a database that:
- Works well with Node.js
- Is easy to set up for local development
- Can be deployed to a cloud service for production
- Allows flexible schema changes during development

## Decision

We chose MongoDB with the native MongoDB driver.

| Factor | Decision |
|--------|----------|
| Database | MongoDB |
| Driver | `mongodb` (native, not Mongoose) |
| Cloud | MongoDB Atlas (free tier) |
| Local | `mongod` via Homebrew |

## Why Not SQL

| Option | Why Not Chosen |
|--------|----------------|
| MySQL/PostgreSQL | Requires schema migrations; more setup overhead |
| SQLite | Not suitable for production deployment |
| Mongoose ORM | Adds abstraction layer; native driver gives more control |

## Consequences

- No schema migrations needed — collections are created on first insert
- Data relationships are managed via application code (not foreign keys)
- MongoDB connection string must be set via environment variable
- Indexes are created programmatically in `server.js`

---

*Last updated: May 2026*
