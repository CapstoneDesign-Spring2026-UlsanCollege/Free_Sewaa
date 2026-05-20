# Admin Flow

How an admin logs in and manages the platform.

## Diagram

```mermaid
flowchart TD
    AdminLogin[Admin Login Page] --> Credentials[Enter Admin Email & Password]
    Credentials --> Auth{Admin Auth Valid?}
    Auth -->|No| AdminLogin
    Auth -->|Yes| Dashboard[Admin Dashboard]

    Dashboard --> Users[Manage Users]
    Dashboard --> Services[Manage Services]
    Dashboard --> Events[Manage Events]
    Dashboard --> Reports[View Reports]

    Users --> UserList[View / Ban / Delete Users]
    Services --> ServiceList[Add / Edit / Remove Listings]
    Events --> EventList[Create / Cancel Events]
    Reports --> Stats[Platform Usage & Flagged Content]

    classDef page fill:#f4f4f4,stroke:#555,stroke-width:1px,color:#111;
    classDef decision fill:#fff,stroke:#555,stroke-width:1px,color:#111;

    class AdminLogin,Credentials,Dashboard,Users,Services,Events,Reports,UserList,ServiceList,EventList,Stats page;
    class Auth decision;
```

## Steps

| Step | What Happens |
|------|--------------|
| Admin Login | Admin enters credentials on the admin login page |
| Auth check | System verifies admin role in the database |
| Wrong credentials | Redirected back to admin login to retry |
| Admin Dashboard | Main control panel with four management sections |
| Manage Users | View all users, ban suspicious accounts, or delete profiles |
| Manage Services | Add new donation categories, edit listings, remove inappropriate items |
| Manage Events | Schedule community events, update details, or cancel |
| View Reports | See platform statistics and review flagged content |

---

*Last updated: May 2026*
