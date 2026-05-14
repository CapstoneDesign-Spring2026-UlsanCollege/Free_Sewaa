# API Reference

**Base URL (local):** `http://localhost:3000/api`
**Base URL (live):** `https://free-sewaa-qh05.onrender.com/api`

---

## Authentication

### POST /api/auth/signup
Create a new user account.

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "password": "securepassword123"
}
```

**Response (200):**
```json
{
  "user": {
    "id": "user-1712345678",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "role": "user"
  },
  "auth": {
    "userId": "user-1712345678",
    "isAuthenticated": true
  }
}
```

**Error (400):**
```json
{
  "error": "Email already registered"
}
```

---

### POST /api/auth/signin
Log in with existing credentials.

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "securepassword123"
}
```

**Response (200):**
```json
{
  "user": {
    "id": "user-1712345678",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "role": "user"
  },
  "auth": {
    "userId": "user-1712345678",
    "isAuthenticated": true
  }
}
```

**Error (401):**
```json
{
  "error": "Invalid credentials"
}
```

---

### POST /api/auth/logout
Clear the current session.

**Response (200):**
```json
{
  "success": true,
  "message": "Logged out"
}
```

---

### POST /api/auth/google-demo
Demo Google authentication (bypass for presentation).

**Request Body:**
```json
{
  "email": "demo@example.com"
}
```

**Response (200):**
```json
{
  "user": {
    "id": "user-demo-123",
    "firstName": "Demo",
    "lastName": "User",
    "email": "demo@example.com"
  },
  "auth": {
    "userId": "user-demo-123",
    "isAuthenticated": true
  }
}
```

---

## State

### GET /api/state?userId={id}
Get user state (saved items, preferences).

**Response (200):**
```json
{
  "userId": "user-1712345678",
  "savedItems": ["item-abc", "item-def"],
  "preferences": {
    "theme": "dark",
    "notifications": true,
    "region": "Seoul"
  }
}
```

---

### PUT /api/state?userId={id}
Update user state.

**Request Body:**
```json
{
  "savedItems": ["item-abc", "item-def", "item-ghi"],
  "preferences": {
    "theme": "light"
  }
}
```

**Response (200):**
```json
{
  "success": true,
  "state": { "...updated state..." }
}
```

---

## Health

### GET /api/health
Check server status.

**Response (200):**
```json
{
  "status": "ok",
  "timestamp": "2026-05-13T10:00:00Z",
  "uptime": 3600
}
```

---

## Error Codes

| Code | Meaning |
|------|---------|
| 200 | Success |
| 400 | Bad request (missing or invalid fields) |
| 401 | Unauthorized (invalid credentials) |
| 404 | Resource not found |
| 500 | Internal server error |

---

## Rate Limiting

No rate limiting currently implemented. Plan to add for production.

---

## Authentication Method

The app uses **localStorage-based auth**. On signin/signup, user data and auth status are stored in the browser's localStorage:

```
localStorage.setItem('freesewaa-auth', 'true')
localStorage.setItem('freesewaa-current-user-id', 'user-1712345678')
localStorage.setItem('freesewaa-user', JSON.stringify(userObject))
```

No JWT tokens are used yet (planned for production).
