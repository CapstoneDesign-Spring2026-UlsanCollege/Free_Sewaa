# Database Schema — Free Sewaa#

## Storage Strategy
- **Development/Demo:** JSON file storage (`server/data/*.json`)
- **Production:** MongoDB Atlas (configured via `MONGO_URI` environment variable)

---

## Collections#

### users#
Stores registered user accounts.#

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `_id` | String | ✅ | Auto-generated unique user ID |
| `firstName` | String | ✅ | User's first name |
| `lastName` | String | ✅ | User's last name |
| `email` | String | ✅ | Unique email address (used for login) |
| `password` | String | ✅ | Hashed password |
| `isAdmin` | Boolean | ❌ | Defaults to false. True for admin accounts |
| `joinedAt` | Date | ✅ | Account creation timestamp |
| `avatarUrl` | String | ❌ | Optional profile picture URL |

---

### items#
Stores donation items posted by users.#

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `_id` | String | ✅ | Auto-generated item ID |
| `title` | String | ✅ | Item name/title |
| `description` | String | ✅ | Item description |
| `category` | String | ✅ | e.g. "Clothing", "Electronics", "Furniture" |
| `condition` | String | ✅ | e.g. "New", "Good", "Fair" |
| `donorId` | String | ✅ | Reference to `users._id` |
| `status` | String | ✅ | "available", "requested", "given" |
| `imageUrl` | String | ❌ | Optional item photo URL |
| `postedAt` | Date | ✅ | When the item was listed |
| `location` | String | ❌ | General area/city of the donor |

---

### requests#
Stores requests made by users for available items.#

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `_id` | String | ✅ | Auto-generated request ID |
| `itemId` | String | ✅ | Reference to `items._id` |
| `requesterId` | String | ✅ | Reference to `users._id` |
| `message` | String | ❌ | Optional message to the donor |
| `status` | String | ✅ | "pending", "accepted", "declined" |
| `requestedAt` | Date | ✅ | Timestamp of the request |

---

### messages#
Stores direct messages between users.#

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `_id` | String | ✅ | Auto-generated message ID |
| `senderId` | String | ✅ | Reference to `users._id` |
| `receiverId` | String | ✅ | Reference to `users._id` |
| `itemId` | String | ❌ | Optional — related donation item |
| `content` | String | ✅ | Message text |
| `sentAt` | Date | ✅ | Timestamp |
| `read` | Boolean | ✅ | Whether recipient has read the message |

---

*Last updated: May 2026*
