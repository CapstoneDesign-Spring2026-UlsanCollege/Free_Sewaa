# API Reference

**Base URL (local):** http://localhost:3000
**Base URL (live):** https://free-sewaa-qh05.onrender.com

All API routes are prefixed with `/api`.

---

## Health

### GET /api/health
Check if the server is running.

**Response (200):**
```json
{ "ok": true, "service": "freesewaa-backend-mongodb" }
```

---

## Authentication

### POST /api/auth/signup
Create a new user account.

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@gmail.com",
  "password": "SecurePass1"
}
```

**Response (200):**
```json
{
  "user": { "id": "user-...", "firstName": "John", "lastName": "Doe", "email": "john@gmail.com", "role": "user" },
  "auth": { "userId": "user-...", "isAuthenticated": true }
}
```

**Errors:** 400 (missing fields, weak password, invalid email domain, email taken)

### POST /api/auth/signin
Log in with existing credentials.

**Request Body:**
```json
{ "email": "john@gmail.com", "password": "SecurePass1" }
```

**Response (200):** Same format as signup.

**Errors:** 401 (invalid credentials), 403 (account blocked)

### POST /api/auth/admin/signin
Admin login.

**Request Body:**
```json
{ "email": "admin@freesewaa.local", "password": "admin12345" }
```

**Response (200):** User object with role "admin".

**Errors:** 401 (invalid credentials)

### POST /api/auth/logout
Clear session.

**Response (200):** `{ "ok": true }`

### GET /api/auth/session
Check if current user session is valid.

**Response (200):** User object if authenticated.
**Errors:** 401 (not authenticated), 403 (blocked)

### POST /api/auth/firebase
Firebase token authentication.

**Request Body:** `{ "token": "firebase-id-token" }`

**Response (200):** User object with auth status.
**Errors:** 400/401/403 (invalid or expired token)

### POST /api/auth/google-demo
**Deprecated.** Returns 410 Gone.

---

## Listings / Items

### GET /api/listings
Get all donation items. Supports query params for filtering.

**Query Parameters:**
- `search` — text search in title/description
- `category` — filter by category
- `donorId` — filter by donor
- `status` — filter by status (available, reserved, donated)

**Response (200):**
```json
{
  "listings": [
    {
      "id": "item-...",
      "title": "Winter Coat",
      "description": "Gently used, size L",
      "category": "Clothing",
      "condition": "Like new",
      "image": "https://...",
      "donorId": "user-...",
      "donorName": "John Doe",
      "region": "Seoul",
      "status": "available",
      "createdAt": "2026-..."
    }
  ]
}
```

### POST /api/listings
Create a new donation listing.

**Request Body:**
```json
{
  "title": "Winter Coat",
  "description": "Gently used, size L",
  "category": "Clothing",
  "condition": "Like new",
  "image": "https://...",
  "donorId": "user-...",
  "donorName": "John Doe",
  "region": "Seoul"
}
```

**Response (200):** The created listing object.

### GET /api/listings/:id
Get a single listing by ID.

**Response (200):** Listing object.
**Errors:** 404 (not found)

### PUT /api/listings/:id
Update a listing (donor only).

**Request Body:** Partial listing fields.
**Response (200):** Updated listing.
**Errors:** 403 (not the donor), 404 (not found)

### DELETE /api/listings/:id
Delete a listing (donor or admin).

**Response (200):** `{ "success": true }`
**Errors:** 403 (not authorized), 404 (not found)

---

## Requests

### GET /api/requests/mine
Get all requests made by the current user.

**Query Parameters:** `userId` (required)

**Response (200):**
```json
{
  "requests": [
    {
      "id": "req-...",
      "itemId": "item-...",
      "requesterId": "user-...",
      "donorId": "user-...",
      "status": "pending",
      "createdAt": "2026-..."
    }
  ]
}
```

### POST /api/requests
Create a new request for an item.

**Request Body:**
```json
{ "itemId": "item-...", "requesterId": "user-...", "donorId": "user-..." }
```

**Response (200):** The created request.
**Errors:** 400 (missing fields), 409 (already requested)

### PATCH /api/requests/:id/status
Update request status (donor only).

**Request Body:**
```json
{ "status": "approved", "userId": "user-..." }
```

**Response (200):** Updated request.
**Errors:** 403 (not the donor), 404 (not found)

---

## Messages

### GET /api/messages/conversations
Get all conversations for a user.

**Query Parameters:** `userId` (required)

**Response (200):** Array of conversation objects with last message.

### POST /api/messages/conversations
Create or find a conversation.

**Request Body:**
```json
{ "participantIds": ["user-...", "user-..."], "itemId": "item-..." }
```

**Response (200):** Conversation object.

### GET /api/messages/conversations/:id/messages
Get messages in a conversation.

**Query Parameters:** `userId` (required for authorization)

**Response (200):** Array of message objects.

### POST /api/messages/conversations/:id/messages
Send a message in a conversation.

**Request Body:**
```json
{ "text": "Is this still available?", "userId": "user-..." }
```

**Response (200):** Created message object.

---

## User State

### GET /api/state?userId={id}
Get saved items and preferences for a user.

**Response (200):**
```json
{
  "userId": "user-...",
  "savedItems": ["item-...", "item-..."],
  "preferences": { "theme": "dark", "notifications": true, "region": "Seoul" }
}
```

### PUT /api/state?userId={id}
Update user state (saved items, preferences).

**Request Body:** Partial state fields.
**Response (200):** Updated state object.

---

## Admin

### GET /api/admin/overview
Get platform overview stats.

**Response (200):**
```json
{
  "totalUsers": 42,
  "totalListings": 156,
  "totalRequests": 89,
  "totalConversations": 67
}
```

### POST /api/admin/user-action
Perform admin action on a user (block, unblock, delete).

**Request Body:**
```json
{ "action": "block", "userId": "user-...", "adminId": "admin-..." }
```

### POST /api/admin/listing-action
Perform admin action on a listing (remove, restore).

**Request Body:**
```json
{ "action": "remove", "listingId": "item-...", "adminId": "admin-..." }
```

---

## Notifications

### GET /api/notifications?userId={id}
Get unread notifications.

**Response (200):** Array of notification objects.

### PATCH /api/notifications/read
Mark notifications as read.

**Request Body:**
```json
{ "userId": "user-...", "notificationIds": ["notif-..."] }
```

**Response (200):** `{ "success": true }`

---

## Other

### GET /api/audits
Get security audit logs (admin only).

**Query Parameters:** `userId` (admin ID required)

### POST /api/chatbot
AI chatbot endpoint for user questions.

**Request Body:** `{ "message": "...", "userId": "..." }`

### POST /api/suggestions
Submit a suggestion or feedback.

**Request Body:** `{ "userId": "...", "text": "..." }`

### GET /api/reviews
Get reviews for a user or item.

**Query Parameters:** `itemId` or `userId`

### POST /api/reviews
Submit a review.

**Request Body:**
```json
{ "itemId": "...", "reviewerId": "...", "rating": 5, "comment": "Great!" }
```

---

## Error Codes

| Code | Meaning |
|------|---------|
| 200 | Success |
| 400 | Bad request (missing or invalid fields) |
| 401 | Unauthorized (not logged in) |
| 403 | Forbidden (not allowed) |
| 404 | Not found |
| 409 | Conflict (duplicate) |
| 410 | Gone (deprecated endpoint) |
| 500 | Internal server error |

---

## Auth Method

The app uses **localStorage-based auth**. After signin/signup, the frontend stores:

```
localStorage.setItem('freesewaa-auth', 'true')
localStorage.setItem('freesewaa-current-user-id', 'user-...')
localStorage.setItem('freesewaa-user', JSON.stringify(userObject))
```

The userId is sent as a query parameter or in the request body for API calls. No JWT tokens yet (planned).
