# ADR-004: Auth Session Hardening Path

**Status:** Accepted for MVP, planned for production hardening

**Date:** 2026-06-16

## Context

Free Sewaa currently uses a demo-oriented auth session model:

1. The backend validates signup, signin, or Firebase identity exchange.
2. The frontend stores the returned user identity in `localStorage`.
3. API calls send the user id with the request.
4. The backend checks the user against MongoDB before returning protected data.

This choice is documented in [Authentication Choice](002-authentication-choice.md) and [Authentication](../AUTHENTICATION.md). It keeps the capstone MVP easy to run, easy to debug during demos, and compatible with the existing static HTML plus React migration shape.

The security audit page also records the production hardening gap: browser `localStorage` is readable by client-side JavaScript, so it is not the preferred storage location for a production session token.

## Decision

For the MVP, Free Sewaa will keep the current `localStorage` session approach because it is already integrated, documented, and sufficient for the academic demo environment.

For any production follow-up, Free Sewaa should move to a server-managed session model:

| Option | Production Use |
|--------|----------------|
| HTTP-only secure cookie | Preferred for browser sessions because client JavaScript cannot read the token |
| Signed short-lived JWT plus refresh flow | Acceptable if the app needs token portability across clients |
| Current `localStorage` user id | Demo only; not recommended as the final production model |

## Migration Path

1. Add a backend session creation endpoint after successful signin or Firebase token exchange.
2. Store the session token in an HTTP-only, secure, same-site cookie.
3. Replace `x-user-id` and query-parameter identity checks with cookie-backed session validation.
4. Add logout server support that clears the cookie and invalidates the session.
5. Update automated tests to cover cookie login, protected routes, and logout.
6. Keep the current localStorage path only as a temporary demo fallback until the frontend has fully moved.

## Consequences

- The MVP remains stable for grading and live demos.
- The production risk is explicit instead of hidden in scattered notes.
- Future work has a clear target architecture.
- The migration will touch frontend auth helpers, backend auth routes, API request helpers, and tests.

---

*Last updated: June 2026*
