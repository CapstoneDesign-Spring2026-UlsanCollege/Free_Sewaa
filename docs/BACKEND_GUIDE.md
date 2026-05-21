# Backend Guide

## Server Structure

The backend is a single-file Node.js HTTP server at `server/server.js` (2239 lines). It uses the native `http` module — no Express framework.

```
server/
├── server.js           # Main server (all routes + logic)
├── package.json        # Dependencies
└── __tests__/
    └── api.test.js     # Jest tests
```

## Routes

All routes are prefixed with `/api`.

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/health` | Health check |
| POST | `/api/auth/signup` | Create account |
| POST | `/api/auth/signin` | Log in |
| POST | `/api/auth/admin/signin` | Admin log in |
| POST | `/api/auth/logout` | Log out |
| GET | `/api/auth/session` | Check session |
| GET | `/api/listings` | List all items |
| POST | `/api/listings` | Create listing |
| GET | `/api/listings/:id` | Get single listing |
| PUT | `/api/listings/:id` | Update listing |
| DELETE | `/api/listings/:id` | Delete listing |
| GET | `/api/requests/mine` | Get user requests |
| POST | `/api/requests` | Create request |
| PATCH | `/api/requests/:id/status` | Update request status |
| GET | `/api/messages/conversations` | List conversations |
| POST | `/api/messages/conversations` | Create conversation |
| GET | `/api/messages/conversations/:id/messages` | Get messages |
| POST | `/api/messages/conversations/:id/messages` | Send message |
| GET | `/api/admin/overview` | Admin stats |
| POST | `/api/admin/user-action` | Admin user action |
| POST | `/api/admin/listing-action` | Admin listing action |
| GET | `/api/notifications` | Get notifications |
| PATCH | `/api/notifications/read` | Mark read |
| POST | `/api/chatbot` | AI chatbot |
| POST | `/api/suggestions` | Submit suggestion |
| GET | `/api/state` | Get user state |
| PUT | `/api/state` | Update user state |

## Environment Variables

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `PORT` | No | 3000 | Server port |
| `MONGODB_URI` | Yes | — | MongoDB connection string |
| `MONGO_URI` | No | — | Alias for MONGODB_URI |
| `DB_NAME` | No | freesewaa | Database name |
| `SUPER_ADMIN_EMAILS` | No | — | Comma-separated admin emails |
| `SUPER_ADMIN_USER_IDS` | No | — | Comma-separated admin user IDs |

## Error Handling

The server uses a global try/catch wrapper. Errors are returned as JSON:
```json
{ "error": "Error message" }
```

HTTP status codes: 200, 201, 400, 401, 403, 404, 409, 410, 500

## How to Add a New API Endpoint

1. Add a new `if` block in the route handler (around line 1138 in `server.js`)
2. Parse the request body with `readRequestBody(req)`
3. Query the database
4. Return JSON with `sendJson(res, statusCode, data)`

---

*Last updated: May 2026*
