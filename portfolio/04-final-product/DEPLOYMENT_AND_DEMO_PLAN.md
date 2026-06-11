# Deployment and Demo Plan

| Priority | Environment | Access |
|---|---|---|
| Primary | Render | [free-sewaa-qh05.onrender.com](https://free-sewaa-qh05.onrender.com) |
| Secondary | Vercel | [free-sewaa.vercel.app](https://free-sewaa.vercel.app) |
| Backup | Localhost | `http://localhost:3000` |

## Pre-Demo Procedure

1. Verify both public landing pages.
2. Pre-warm Render.
3. Test database-backed browse, account, post, request, and message actions.
4. Verify Firebase authorized domains if that provider will be shown.
5. Prepare non-sensitive demo users and records.
6. Keep localhost and screenshot evidence open as fallbacks.

## Risks and Responses

| Risk | Response |
|---|---|
| Render cold start | Open early; switch to Vercel or localhost |
| Database/configuration failure | Use a verified environment or saved evidence |
| Firebase mismatch | Use the already verified account path |
| Live data changes | Prepare records immediately before presenting |
| Network outage | Use localhost, screenshots, architecture, and script |

Do not display a real `.env`, database URI, secret, private user data, or reusable password.
