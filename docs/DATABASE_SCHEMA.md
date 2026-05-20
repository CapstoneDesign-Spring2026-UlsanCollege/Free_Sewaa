# Database Schema

## Overview

Free Sewaa currently uses a **custom HTTP server** with in-memory storage and MongoDB as the production database. If no `MONGO_URI` is set, it falls back to JSON file storage for local development.

The data has 5 main collections: Users, Items (Listings), Requests, Messages, and Conversations.

---

## Users Collection

Stores registered user accounts.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `_id` | ObjectId | Auto | Unique user ID |
| `firstName` | String | Yes | First name |
| `lastName` | String | Yes | Last name |
| `email` | String | Yes | Unique, must be from recognized provider |
| `password` | String | Yes | Hashed with bcryptjs |
| `phone` | String | No | Phone number |
| `region` | String | No | Location (e.g. "Seoul") |
| `role` | String | Yes | `"user"` or `"admin"` |
| `avatar` | String | No | Profile image URL |
| `blocked` | Boolean | No | If true, login is denied |
| `createdAt` | Date | Auto | Account creation timestamp |
| `updatedAt` | Date | Auto | Last update timestamp |

**Admin users** have `role: "admin"`. They can access the admin dashboard, manage listings and users. Admin accounts are created by setting their email in the `SUPER_ADMIN_EMAILS` environment variable, or by using the admin signin endpoint with matching credentials.

**Example user:**
```json
{
  "id": "user-1712345678",
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@gmail.com",
  "password": "$2a$10$...",
  "role": "user",
  "region": "Seoul",
  "createdAt": "2026-04-18T10:30:00Z"
}
```

---

## Items Collection (Listings)

Stores donation items posted by users.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `_id` | ObjectId | Auto | Unique item ID |
| `title` | String | Yes | Item name |
| `description` | String | Yes | Condition, pickup details |
| `category` | String | Yes | Clothing, Books, Electronics, Food, etc. |
| `condition` | String | No | "Like new", "Good", "Used" |
| `image` | String | No | Image URL (default if empty) |
| `images` | [String] | No | Array of image URLs |
| `donorId` | String | Yes | Reference to User who donated |
| `donorName` | String | Yes | Denormalized donor name |
| `region` | String | No | Location |
| `status` | String | Yes | `"available"`, `"reserved"`, or `"donated"` |
| `distance` | String | No | Display distance |
| `createdAt` | Date | Auto | When item was posted |
| `updatedAt` | Date | Auto | Last update |

**Status lifecycle:** available → reserved → donated

**Example item:**
```json
{
  "id": "item-1712345678",
  "title": "Winter Coat",
  "description": "Gently used warm coat, size L",
  "category": "Clothing",
  "condition": "Like new",
  "image": "https://images.unsplash.com/...",
  "donorId": "user-1712345678",
  "donorName": "John Doe",
  "region": "Seoul",
  "status": "available",
  "createdAt": "2026-04-18T10:30:00Z"
}
```

---

## Requests Collection

Stores when a user requests an item from a donor.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `_id` | ObjectId | Auto | Unique request ID |
| `itemId` | String | Yes | Reference to Item |
| `requesterId` | String | Yes | Reference to User who requested |
| `donorId` | String | Yes | Reference to Item donor |
| `status` | String | Yes | `"pending"`, `"approved"`, `"completed"`, `"cancelled"` |
| `createdAt` | Date | Auto | When request was made |
| `updatedAt` | Date | Auto | Last status change |

**Status lifecycle:** pending → approved → completed (or cancelled)

---

## Messages Collection

Stores individual messages within conversations.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `_id` | ObjectId | Auto | Unique message ID |
| `conversationId` | String | Yes | Groups messages by conversation |
| `senderId` | String | Yes | Reference to User who sent |
| `receiverId` | String | No | Reference to recipient |
| `itemId` | String | No | Reference to related Item |
| `text` | String | Yes | Message content |
| `type` | String | No | `"sent"` or system type |
| `read` | Boolean | No | Read status |
| `createdAt` | Date | Auto | When sent |

**Example message:**
```json
{
  "id": "msg-1712345678",
  "conversationId": "conv-1712345678",
  "senderId": "user-...",
  "text": "Is this still available?",
  "createdAt": "2026-04-18T10:35:00Z"
}
```

---

## Conversations Collection

Groups messages between participants about an item.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `_id` | ObjectId | Auto | Unique conversation ID |
| `participantIds` | [String] | Yes | Array of user IDs |
| `itemId` | String | No | Reference to related Item |
| `lastMessage` | String | No | Preview of last message |
| `lastMessageAt` | Date | No | Timestamp of last activity |
| `createdAt` | Date | Auto | When conversation started |

---

## Admin Role

Admin users have `role: "admin"` in the Users collection. They are identified by:

1. Matching email in `SUPER_ADMIN_EMAILS` env variable
2. Matching user ID in `SUPER_ADMIN_USER_IDS` env variable
3. Using the admin signin endpoint at `/api/auth/admin/signin`

Admin capabilities:
- View platform overview (user count, listing count, request count)
- Block or unblock user accounts
- Remove or restore listings
- Access security audit logs

---

## Relationship Diagram

```
Users ──1:N── Items (as donor)
Users ──1:N── Requests (as requester)
Users ──1:N── Conversations (as participant)
Users ──1:N── Messages (as sender)
Items ──1:N── Requests
Items ──1:N── Conversations
Conversations ──1:N── Messages
```

---

## Indexes (MongoDB)

| Collection | Index | Purpose |
|------------|-------|---------|
| Users | `email` (unique) | Fast login |
| Items | `donorId` | Find by donor |
| Items | `category` | Filter |
| Items | `status` | Available items |
| Messages | `conversationId` | Load conversation |
| Requests | `requesterId` | User requests |
| Requests | `itemId` | Check request status |
