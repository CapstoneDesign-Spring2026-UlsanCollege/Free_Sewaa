# API Reference — Free Sewaa

## Base URL
- Local: `http://localhost:3000/api`
- Production: `https://free-sewaa-qh05.onrender.com/api`

## Authentication
The API uses server-side session cookies. On successful login, the server sets a session cookie that is sent with subsequent requests. No token is required in headers.

## Endpoints

### Auth

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/auth/signup` | Register a new user |
| POST | `/auth/signin` | Login with email and password | 
| POST | `/auth/google-demo` | Demo Google OAuth login |
| POST | `/auth/logout` | Clear session and logout |

**POST /auth/signup — Request:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**POST /auth/signup — Success Response (201):**
```json
{
  "user": {
    "id": "user-abc123",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

**POST /auth/signup — Error Response (400):**
```json
{
  "error": "Email already in use"
}
```

**POST /auth/signin — Request:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**POST /auth/signin — Success Response (200):**
```json
{
  "user": { "id": "user-abc123", "name": "John Doe" },
  "auth": { "userId": "user-abc123", "isAuthenticated": true }
}
```

**POST /auth/signin — Error Response (401):**
```json
{
  "error": "Invalid credentials"
}
```

### State

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/state?userId={id}` | Get full user application state |
| PUT | `/state?userId={id}` | Update user application state |

**GET /state — Response (200):**
```json
{
  "userId": "user-abc123",
  "items": [],
  "requests": [],
  "messages": [],
  "profile": {
    "name": "John Doe",
    "email": "john@example.com",
    "joinedAt": "2026-04-01T00:00:00Z"
  }
}
```

### Health

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/health` | Check if server is running |

**GET /health — Response (200):**
```json
{
  "status": "ok",
  "timestamp": "2026-05-08T12:00:00Z"
}
```

## Common Error Codes

| Code | Meaning |
|------|---------|
| 400 | Bad request — missing or invalid fields |
| 401 | Unauthorized — not logged in or wrong credentials |
| 404 | Not found — resource does not exist |
| 500 | Server error — check server logs |

---

*Last updated: May 2026*
