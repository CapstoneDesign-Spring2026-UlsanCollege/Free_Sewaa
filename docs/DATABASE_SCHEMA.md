# Database Schema

## Overview

Free Sewaa currently uses **JSON file storage** for local development and demo. MongoDB Atlas is configured and ready for production deployment.

---

## Current Storage: JSON Files

The app stores data in memory (server state) and persists via JSON file reads/writes.

### User Object
```json
{
  "id": "user-1712345678-abc",
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "password": "hashed_password_here",
  "phone": "+821012345678",
  "region": "Seoul",
  "role": "user",
  "avatar": "",
  "createdAt": "2026-04-18T10:30:00Z"
}
```

### Item Object
```json
{
  "id": "item-1712345678-def",
  "title": "Winter Coat",
  "description": "Gently used warm coat, size L",
  "category": "Clothing",
  "condition": "Like new",
  "images": ["https://example.com/image.jpg"],
  "donorId": "user-1712345678-abc",
  "donorName": "John Doe",
  "region": "Seoul",
  "status": "available",
  "distance": "5 km",
  "createdAt": "2026-04-18T10:30:00Z"
}
```

### Message Object
```json
{
  "id": "msg-1712345678-ghi",
  "conversationId": "conv-1712345678-jkl",
  "senderId": "user-1712345678-abc",
  "receiverId": "user-1712345678-mno",
  "itemId": "item-1712345678-def",
  "text": "Is this still available?",
  "timestamp": "2026-04-18T10:35:00Z",
  "read": false
}
```

### State Object
```json
{
  "userId": "user-1712345678-abc",
  "savedItems": ["item-1712345678-def", "item-1712345678-pqr"],
  "preferences": {
    "theme": "dark",
    "notifications": true,
    "region": "Seoul"
  }
}
```

---

## Production Schema: MongoDB (Ready)

### Users Collection
| Field | Type | Description |
|-------|------|-------------|
| `_id` | ObjectId | Auto-generated |
| `firstName` | String | Required |
| `lastName` | String | Required |
| `email` | String | Unique, indexed |
| `password` | String | Hashed with bcrypt |
| `phone` | String | Optional |
| `region` | String | User location |
| `role` | String | `user` or `admin` |
| `avatar` | String | URL |
| `createdAt` | Date | Auto |
| `updatedAt` | Date | Auto |

### Items Collection
| Field | Type | Description |
|-------|------|-------------|
| `_id` | ObjectId | Auto-generated |
| `title` | String | Required |
| `description` | String | Required |
| `category` | String | Clothing, Books, Food, Electronics, etc. |
| `condition` | String | Like new, Good, Used |
| `images` | [String] | Array of image URLs |
| `donorId` | ObjectId | Ref → Users |
| `donorName` | String | Denormalized |
| `region` | String | Location |
| `status` | String | available, reserved, donated |
| `createdAt` | Date | Auto |
| `updatedAt` | Date | Auto |

### Messages Collection
| Field | Type | Description |
|-------|------|-------------|
| `_id` | ObjectId | Auto-generated |
| `conversationId` | ObjectId | Group messages by conversation |
| `senderId` | ObjectId | Ref → Users |
| `receiverId` | ObjectId | Ref → Users |
| `itemId` | ObjectId | Ref → Items |
| `text` | String | Message content |
| `read` | Boolean | Read status |
| `timestamp` | Date | Auto |

### Requests Collection
| Field | Type | Description |
|-------|------|-------------|
| `_id` | ObjectId | Auto-generated |
| `itemId` | ObjectId | Ref → Items |
| `requesterId` | ObjectId | Ref → Users |
| `donorId` | ObjectId | Ref → Users |
| `status` | String | pending, approved, completed, cancelled |
| `createdAt` | Date | Auto |
| `updatedAt` | Date | Auto |

---

## Entity Relationships

```
Users ──1:N── Items (donorId)
Users ──1:N── Messages (senderId / receiverId)
Users ──1:N── Requests (requesterId)
Items ──1:N── Messages (itemId)
Items ──1:N── Requests (itemId)
Users ──1:1── State (userId)
```

---

## Indexes (MongoDB)

| Collection | Index | Purpose |
|------------|-------|---------|
| Users | `email` (unique) | Fast login lookup |
| Items | `donorId` | Find items by donor |
| Items | `category` | Filter by category |
| Items | `status` | Filter available items |
| Messages | `conversationId` | Load conversation |
| Requests | `requesterId` | Load user requests |
| Requests | `itemId` | Check request status |

---

## Migration Path

1. Create MongoDB Atlas cluster
2. Add `MONGO_URI` to `.env`
3. Run migration script (planned)
4. Verify data integrity
5. Switch from JSON to MongoDB in `server.js`
