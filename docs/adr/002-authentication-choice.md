# ADR-002: Authentication Choice

**Status:** Accepted

**Date:** 2026-04-05

## Context

We needed an authentication system that:
- Works without a third-party auth provider
- Is simple to implement in a student project
- Supports both regular users and admin users
- Can be extended later

## Decision

We chose localStorage-based authentication:

1. On signup/login, the server returns a userId
2. The frontend stores the userId in `localStorage`
3. API calls include the userId as a query parameter or header
4. The server checks the userId against the database on each request

## Alternatives Considered

| Option | Why Not Chosen |
|--------|----------------|
| JWT tokens | More complex to implement; suitable for future enhancement |
| Session cookies | Requires cookie management; harder to debug |
| Firebase Auth | Adds external dependency; works for phone auth but not required for core flow |
| OAuth (Google, etc.) | Overkill for a student demo |

## Consequences

- Simpler implementation but less secure than JWT
- localStorage is accessible via browser dev tools (acceptable for demo)
- Future upgrade to JWT is straightforward
- Firebase token auth is available as an alternative sign-in method

---

*Last updated: May 2026*
