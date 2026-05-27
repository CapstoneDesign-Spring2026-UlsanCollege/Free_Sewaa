# API Reference

**Base URL (local):** `http://localhost:3000`
**Base URL (live):** `https://free-sewaa-qh05.onrender.com`

All API routes are prefixed with `/api`. The server is a custom Node.js HTTP server (not Express).

**Auth:** User ID is sent as a query parameter (`?userId=...`) or `x-user-id` header. No JWT tokens.

---

## Health

### `GET /api/health`

Check if the server is running.

**Response (200):**
```json
{ "ok": true, "service": "freesewaa-backend-mongodb" }
```

---

## Authentication

### `POST /api/auth/signup`

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
  "user": { "id": "user-a1b2c3d4", "firstName": "John", "lastName": "Doe", "email": "john@gmail.com", "role": "user" },
  "auth": { "userId": "user-a1b2c3d4", "isAuthenticated": true }
}
```

**Errors:** 400 (missing fields, weak password, invalid email domain, email taken)

### `POST /api/auth/signin`

Log in with existing credentials.

**Request Body:**
```json
{ "email": "john@gmail.com", "password": "SecurePass1" }
```

**Response (200):** Same format as signup.

**Errors:** 401 (invalid credentials), 403 (account blocked)

### `POST /api/auth/admin/signin`

Admin login.

**Request Body:**
```json
{ "email": "admin@freesewaa.local", "password": "admin12345" }
```

**Response (200):** User object with role `"superadmin"`.

**Errors:** 401 (invalid credentials)

### `POST /api/auth/logout`

Clear session.

**Response (200):** `{ "ok": true }`

### `GET /api/auth/session`

Check if current user session is valid. Requires `?userId=` or `x-user-id` header.

**Response (200):** User object with auth status.
**Errors:** 401 (not authenticated), 403 (blocked)

### `POST /api/auth/firebase`

Firebase token authentication.

**Request Body:**
```json
{ "idToken": "firebase-id-token-abc123", "firstName": "", "lastName": "", "phone": "" }
```

**Response (200):** User object with auth status.
**Errors:** 400/401/403 (invalid or expired token)

### `POST /api/auth/google-demo`

**Deprecated.** Returns 410 Gone.

---

## Listings

### `GET /api/listings`

Get all donation items. Supports query params for filtering.

**Query Parameters:**
- `owner` — filter by owner ID
- `category` — filter by category
- `status` — filter by status (`active`, `reserved`, `donated`, `hidden`)

**Response (200):**
```json
{
  "listings": [
    {
      "id": "listing-201",
      "ownerId": "user-a1b2c3d4",
      "ownerName": "John Doe",
      "title": "Winter Jacket",
      "category": "Clothing",
      "condition": "Good",
      "location": "Ulsan, Samsan-dong",
      "distanceKm": 4,
      "pickup": "Pickup only",
      "description": "Warm, clean, and wearable.",
      "image": "https://example.com/images/jacket.jpg",
      "status": "active",
      "requestCount": 2,
      "saveCount": 6,
      "urgent": false,
      "createdAt": "2026-03-20T10:30:00Z"
    }
  ]
}
```

### `POST /api/listings`

Create a new donation listing. Requires `?userId=` or `x-user-id` header.

**Request Body:**
```json
{
  "title": "Winter Coat",
  "description": "Gently used, size L",
  "category": "Clothing",
  "condition": "Like new",
  "image": "https://example.com/images/coat.jpg"
}
```

**Response (200):** The created listing object.

### `GET /api/listings/:id`

Get a single listing by ID.

**Response (200):** Listing object.
**Errors:** 404 (not found)

### `PUT /api/listings/:id`

Update a listing (owner only). Requires `?userId=` or `x-user-id` header.

**Request Body:** Partial listing fields.
**Response (200):** Updated listing.
**Errors:** 403 (not the owner), 404 (not found)

### `DELETE /api/listings/:id`

Delete a listing (owner or admin). Requires `?userId=` or `x-user-id` header.

**Response (200):** `{ "success": true }`
**Errors:** 403 (not authorized), 404 (not found)

---

## Requests

### `GET /api/requests/mine`

Get all requests made by or sent to the current user. Requires `?userId=`.

**Response (200):**
```json
{
  "requests": [
    {
      "id": "req-205",
      "listingId": "listing-205",
      "requesterId": "user-a1b2c3d4",
      "requesterName": "John Doe",
      "ownerId": "community-3",
      "status": "pending",
      "requestedAt": "2026-03-21T14:00:00Z",
      "note": "Can pick up this weekend."
    }
  ]
}
```

### `POST /api/requests`

Create a new request for an item. Requires `?userId=` or `x-user-id` header.

**Request Body:**
```json
{ "listingId": "listing-201", "note": "Can pick up this weekend." }
```

**Response (200):** The created request.
**Errors:** 400 (missing fields), 409 (already requested), 403 (cannot self-request)

### `PATCH /api/requests/:id/status`

Update request status (owner only). Requires `?userId=` or `x-user-id` header.

**Request Body:**
```json
{ "status": "accepted" }
```

**Status values:** `pending` → `accepted` or `declined` → `completed`

**Response (200):** Updated request.
**Errors:** 403 (not the owner), 404 (not found)

---

## Messages

### `GET /api/messages/conversations`

Get all conversations for a user. Requires `?userId=`.

**Response (200):** Array of conversation objects with last message.

### `POST /api/messages/conversations`

Create or find a conversation.

**Request Body:**
```json
{ "participantIds": ["user-a1b2c3d4", "user-e5f6g7h8"], "listingId": "listing-201" }
```

**Response (200):** Conversation object.

### `GET /api/messages/conversations/:id/messages`

Get messages in a conversation. Requires `?userId=`.

**Response (200):** Array of message objects.

### `POST /api/messages/conversations/:id/messages`

Send a message in a conversation.

**Request Body:**
```json
{ "text": "Is this still available?" }
```

**Response (200):** Created message object.

---

## User State

### `GET /api/state?userId={id}`

Get saved items and preferences for a user.

**Response (200):**
```json
{
  "userId": "user-a1b2c3d4",
  "state": {
    "user": {
      "id": "user-a1b2c3d4",
      "name": "John Doe",
      "savedListingIds": [],
      "requestedListingIds": [],
      "preferences": { "theme": "dark", "notifications": true }
    }
  }
}
```

### `PUT /api/state?userId={id}`

Update user state (saved items, preferences).

**Request Body:** Partial state fields.
**Response (200):** Updated state object.

---

## Admin

### `GET /api/admin/overview`

Get platform overview stats.

**Response (200):**
```json
{
  "totalUsers": 42,
  "totalListings": 156,
  "totalRequests": 89,
  "totalConversations": 67,
  "recentUsers": [
    { "_id": "user-a1b2c3d4", "firstName": "John", "lastName": "Doe", "email": "john@gmail.com", "createdAt": "2026-03-20T10:30:00Z" },
    { "_id": "user-e5f6g7h8", "firstName": "Jane", "lastName": "Smith", "email": "jane@gmail.com", "createdAt": "2026-03-19T09:00:00Z" }
  ],
  "recentListings": [
    { "_id": "listing-201", "title": "Winter Jacket", "category": "Clothing", "status": "active", "createdAt": "2026-03-20T10:30:00Z" },
    { "_id": "listing-202", "title": "Textbook Bundle", "category": "Books", "status": "active", "createdAt": "2026-03-19T15:00:00Z" }
  ]
}
```

### `POST /api/admin/user-action`

Perform admin action on a user.

**Request Body:**
```json
{ "action": "block", "targetUserId": "user-a1b2c3d4", "adminId": "admin-x1y2z3" }
```

**Actions:** `block`, `unblock`, `delete`, `make-superadmin`, `demote`

### `POST /api/admin/listing-action`

Perform admin action on a listing.

**Request Body:**
```json
{ "action": "remove", "listingId": "listing-201", "adminId": "admin-x1y2z3" }
```

**Actions:** `remove`, `restore`

---

## Notifications

### `GET /api/notifications?userId={id}`

Get notifications for a user.

**Response (200):** Array of notification objects.

### `PATCH /api/notifications/read`

Mark notifications as read.

**Request Body:**
```json
{ "userId": "user-a1b2c3d4", "notificationIds": ["n1", "n2"] }
```

**Response (200):** `{ "success": true }`

---

## Other

### `GET /api/audits`

Get security audit logs (admin only). Requires `?userId=`.

### `POST /api/chatbot`

AI chatbot endpoint for user questions.

**Request Body:**
```json
{ "message": "How do I donate clothes?", "userId": "user-a1b2c3d4" }
```

**Response (200):** `{ "reply": "Go to the Donate page and fill out the form.", "conversation": [{ "role": "user", "content": "How do I donate clothes?" }, { "role": "bot", "content": "Go to the Donate page and fill out the form." }] }`

### `POST /api/suggestions`

Submit a suggestion or feedback.

**Request Body:**
```json
{ "userId": "user-a1b2c3d4", "text": "Please add a search bar to find items faster." }
```

### `GET /api/reviews`

Get reviews for an item. Query params: `itemId`

**Response (200):** Array of review objects.

### `POST /api/reviews`

Submit a review.

**Request Body:**
```json
{ "itemId": "listing-201", "reviewerId": "user-a1b2c3d4", "rating": 5, "comment": "Great condition, thank you!" }
```

---

## Error Codes

| Code | Meaning |
|------|---------|
| 200 | Success |
| 201 | Created |
| 400 | Bad request (missing or invalid fields) |
| 401 | Unauthorized (not logged in) |
| 403 | Forbidden (not allowed, blocked, or self-request) |
| 404 | Not found |
| 409 | Conflict (duplicate) |
| 410 | Gone (deprecated endpoint) |
| 500 | Internal server error |

---

## Auth Method

The app uses **localStorage-based auth**. After signin/signup, the frontend stores:

```js
localStorage.setItem('freesewaa-auth', 'true');
localStorage.setItem('freesewaa-current-user-id', 'user-a1b2c3d4');
localStorage.setItem('freesewaa-user', JSON.stringify(userObject));
```

The `userId` is sent as a query parameter or `x-user-id` header for API calls. No JWT tokens.

---

*Last updated: May 2026*
