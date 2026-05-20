# User Dashboard Flow

All the features a user can access from their dashboard after logging in.

## Diagram

```mermaid
flowchart TD
    Dashboard[User Dashboard] --> Browse[Browse Services]
    Dashboard --> Events[Events]
    Dashboard --> Messages[Messages / AI Assistant]
    Dashboard --> Notifications[Notifications]
    Dashboard --> Profile[Profile]
    Dashboard --> Saved[Saved Items]
    Dashboard --> Posts[My Posts]
    Dashboard --> Requests[Requests]
    Dashboard --> Premium[Premium / Donate]
    Dashboard --> Orders[Orders]
    Dashboard --> Logout[Logout]

    classDef page fill:#f4f4f4,stroke:#555,stroke-width:1px,color:#111;
    class Dashboard page;
```

## Modules

| Module | Description |
|--------|-------------|
| Browse Services | View all donation items. Filter by category or search keyword. |
| Events | See upcoming community donation drives and events. |
| Messages / AI Assistant | Chat with other users or get help from the AI bot. |
| Notifications | Alerts for messages, requests, and order updates. |
| Profile | Edit name, email, profile picture, and password. |
| Saved Items | Items bookmarked for later. |
| My Posts | Items you posted. Edit or delete them. |
| Requests | People who requested your items. Accept or decline. |
| Premium / Donate | Upgrade account or donate to support the platform. |
| Orders | Items you successfully claimed. |

---

*Last updated: May 2026*
