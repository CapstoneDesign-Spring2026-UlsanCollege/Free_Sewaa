# Logout Flow

How both regular users and admins end their session.

## Diagram

```mermaid
flowchart TD
    UserDashboard[User Dashboard] --> UserChoice{Logout?}
    UserChoice -->|No| UserDashboard
    UserChoice -->|Yes| UserEnd([Session Ended])

    AdminDashboard[Admin Dashboard] --> AdminChoice{Logout?}
    AdminChoice -->|No| AdminDashboard
    AdminChoice -->|Yes| AdminEnd([Session Ended])

    classDef page fill:#f4f4f4,stroke:#555,stroke-width:1px,color:#111;
    classDef decision fill:#fff,stroke:#555,stroke-width:1px,color:#111;
    classDef terminal fill:#eee,stroke:#333,stroke-width:1px,color:#111;

    class UserDashboard,AdminDashboard page;
    class UserChoice,AdminChoice decision;
    class UserEnd,AdminEnd terminal;
```

## Steps

| Role | Stay | Logout |
|------|------|--------|
| Regular User | Stays on the dashboard and continues using features | Session clears → returns to landing page |
| Admin | Stays on the admin dashboard | Session clears → returns to landing page |

Both flows work the same way: the user clicks logout, the server destroys the session token, and the browser redirects to the homepage.

---

*Last updated: May 2026*
