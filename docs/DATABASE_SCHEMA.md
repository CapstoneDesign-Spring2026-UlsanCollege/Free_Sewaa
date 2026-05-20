# Database Schema

Free Sewaa uses MongoDB with 10 collections. All IDs are custom string IDs (e.g. `user-1712345678`, `listing-201`), not MongoDB ObjectIds.

---

## 1. Users Collection

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | String | Yes | Unique user ID (`user-...`) |
| `firstName` | String | Yes | First name |
| `lastName` | String | Yes | Last name |
| `name` | String | Yes | Full name |
| `email` | String | No | Must be from recognized provider |
| `password` | String | No | Plaintext (bcryptjs available but unused) |
| `phone` | String | No | Phone number |
| `city` | String | No | City (default `Ulsan`) |
| `region` | String | No | District (default `Nam-gu`) |
| `role` | String | Yes | `"user"`, `"admin"`, or `"superadmin"` |
| `firebaseUid` | String | No | Firebase UID if signed in via Firebase |
| `provider` | String | No | Auth provider (`"firebase"`, `"phone"`) |
| `isBlocked` | Boolean | No | If true, login is denied |
| `createdAt` | String | Yes | ISO timestamp |
| `updatedAt` | String | No | ISO timestamp |

---

## 2. States Collection

Stores per-user application state (saved items, preferences, drafts).

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `userId` | String | Yes | Reference to User |
| `state` | Object | Yes | Full user state object (preferences, saved listings, drafts) |

---

## 3. Meta Collection

Stores app-level metadata.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `key` | String | Yes | Identifier (e.g. `"app-meta"`) |
| `lastUpdatedAt` | String | No | ISO timestamp |

---

## 4. Listings Collection

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | String | Yes | Unique listing ID (`listing-...`) |
| `ownerId` | String | Yes | Reference to User who posted |
| `ownerName` | String | Yes | Denormalized owner name |
| `title` | String | Yes | Item name |
| `description` | String | Yes | Condition, pickup details |
| `category` | String | Yes | Clothing, Books, Electronics, Food, Home, etc. |
| `condition` | String | No | `"Like new"`, `"Good"`, `"Used"`, `"New"` |
| `location` | String | No | Full location string (e.g. `"Ulsan, Samsan-dong"`) |
| `distanceKm` | Number | No | Approximate distance |
| `pickup` | String | No | `"Pickup only"` or `"Flexible"` |
| `pickupWindow` | String | No | Time window for pickup |
| `notes` | String | No | Extra notes |
| `image` | String | No | Image URL (default if empty) |
| `requestCount` | Number | No | Number of requests received |
| `saveCount` | Number | No | Number of saves/bookmarks |
| `urgent` | Boolean | No | If true, marked as urgent |
| `featured` | Boolean | No | If true, featured listing |
| `reviewed` | Boolean | No | If true, has been reviewed |
| `status` | String | Yes | `"active"`, `"reserved"`, `"donated"`, or `"hidden"` |
| `createdAt` | String | Yes | ISO timestamp |
| `updatedAt` | String | Yes | ISO timestamp |

**Status lifecycle:** active → reserved → donated (or hidden)

---

## 5. Requests Collection

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | String | Yes | Unique request ID (`req-...`) |
| `listingId` | String | Yes | Reference to Listing |
| `requesterId` | String | Yes | Reference to User who requested |
| `requesterName` | String | Yes | Denormalized requester name |
| `ownerId` | String | Yes | Reference to Listing owner |
| `status` | String | Yes | `"pending"`, `"accepted"`, `"declined"`, or `"completed"` |
| `requestedAt` | String | Yes | ISO timestamp |
| `note` | String | No | Message from requester |

**Status lifecycle:** pending → accepted → completed (or declined)

---

## 6. Conversations Collection

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | String | Yes | Unique conversation ID (`conv-...`) |
| `listingId` | String | No | Reference to related Listing |
| `participantIds` | [String] | Yes | Array of user IDs |
| `participantNames` | [String] | No | Array of user names |
| `participant` | String | No | Display name of other participant |
| `participantCity` | String | No | City of other participant |
| `lastMessage` | String | No | Preview of last message |
| `lastMessageAt` | String | No | ISO timestamp of last activity |
| `createdAt` | String | Yes | ISO timestamp |
| `updatedAt` | String | Yes | ISO timestamp |

---

## 7. Messages Collection

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `conversationId` | String | Yes | Reference to Conversation |
| `senderId` | String | Yes | Reference to User who sent |
| `senderName` | String | Yes | Denormalized sender name |
| `text` | String | Yes | Message content |
| `type` | String | No | `"sent"` or `"received"` |
| `createdAt` | String | Yes | ISO timestamp |

---

## 8. Notifications Collection

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | String | Yes | Unique notification ID |
| `userId` | String | Yes | Reference to User |
| `text` | String | Yes | Notification message |
| `type` | String | Yes | `"request"`, `"message"`, etc. |
| `read` | Boolean | No | Read status |
| `createdAt` | String | Yes | ISO timestamp |

---

## 9. Suggestions Collection

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | String | Yes | Unique suggestion ID |
| `userId` | String | Yes | Reference to User |
| `text` | String | Yes | Suggestion content |
| `createdAt` | String | Yes | ISO timestamp |

---

## 10. Reviews Collection

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | String | Yes | Unique review ID |
| `itemId` | String | No | Reference to Listing |
| `reviewerId` | String | Yes | Reference to reviewer User |
| `rating` | Number | No | Rating value |
| `comment` | String | No | Review text |
| `createdAt` | String | Yes | ISO timestamp |

---

## Indexes

| Collection | Index | Purpose |
|------------|-------|---------|
| Users | `email` (unique, sparse) | Fast login |
| Users | `phone` (unique, sparse) | Phone lookup |
| Users | `id` (unique) | User lookup |
| States | `userId` (unique) | Per-user state |
| Listings | `id` (unique) | Listing lookup |
| Listings | `ownerId` | Find by owner |
| Listings | `status` | Available items |
| Listings | `category` | Filter |
| Requests | `id` (unique) | Request lookup |
| Requests | `listingId` | Request count per item |
| Requests | `requesterId` | User requests |
| Requests | `ownerId` | Incoming requests |
| Conversations | `id` (unique) | Conversation lookup |
| Conversations | `participantIds` | User conversations |
| Messages | `conversationId` | Load conversation |
| Messages | `createdAt` | Chronological order |
| Notifications | `id` (unique) | Notification lookup |
| Notifications | `userId` | User notifications |
| Notifications | `read` | Unread filter |
| Suggestions | `id` (unique) | Suggestion lookup |
| Suggestions | `userId` | User suggestions |
| Suggestions | `createdAt` (desc) | Recent first |
| Reviews | `id` (unique) | Review lookup |
| Reviews | `createdAt` (desc) | Recent first |
| Reviews | `rating` | Sort by rating |

---

*Last updated: May 2026*
