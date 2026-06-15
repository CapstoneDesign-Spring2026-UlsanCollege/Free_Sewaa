# Database Design

## Collections

Free Sewaa uses MongoDB with 11 collections. All IDs are custom string IDs (e.g. `user-1712345678`, `listing-201`).

See the full schema at [DATABASE_SCHEMA.md](DATABASE_SCHEMA.md) for detailed field listings.

```mermaid
erDiagram
    USERS ||--o{ LISTINGS : owns
    USERS ||--o{ REQUESTS : requests
    USERS ||--o{ CONVERSATIONS : participates
    USERS ||--o{ MESSAGES : sends
    USERS ||--o{ NOTIFICATIONS : receives
    USERS ||--o{ STATES : has
    USERS ||--o{ REPORTS : submits
    LISTINGS ||--o{ REQUESTS : receives
    LISTINGS ||--o{ CONVERSATIONS : about
    LISTINGS ||--o{ REPORTS : receives
    CONVERSATIONS ||--o{ MESSAGES : contains

    USERS {
        string id PK
        string firstName
        string lastName
        string email
        string password
        string role
        string city
        string region
        boolean isBlocked
    }

    LISTINGS {
        string id PK
        string ownerId FK
        string title
        string description
        string category
        string image
        string status
        number distanceKm
    }

    REQUESTS {
        string id PK
        string listingId FK
        string requesterId FK
        string ownerId FK
        string status
    }

    MESSAGES {
        string conversationId FK
        string senderId FK
        string text
    }

    CONVERSATIONS {
        string id PK
        string listingId FK
        array participantIds
    }

    NOTIFICATIONS {
        string id PK
        string userId FK
        string text
        string type
        boolean read
    }

    REPORTS {
        string id PK
        string listingId FK
        string reporterId FK
        string reason
        string status
        string resolution
    }
```

## Key Relationships

- A **User** can own many **Listings** (donor)
- A **User** can make many **Requests**
- A **Listing** can receive many **Requests**
- A **Conversation** belongs to a **Listing** and has many **Messages**
- A **User** receives many **Notifications**
- A **User** can submit one open **Report** per **Listing**
- A **Report** remains as audit evidence after an admin dismisses it or acts on the listing

---

*Last updated: June 2026*
