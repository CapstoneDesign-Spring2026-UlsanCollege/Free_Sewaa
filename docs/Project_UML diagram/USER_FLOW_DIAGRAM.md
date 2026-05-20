# Free Sewaa — Full User Flow Diagram

This is the complete user flow from start to end. It covers all three user paths: new user, returning user, and admin.

## Full Flowchart

```mermaid
flowchart TD
    Start([Start]) --> Landing[Landing Page]
    Landing --> SelectType{Select User Type}

    SelectType -->|User| UserLogin[User Login]
    SelectType -->|New User| Register[Register Account]
    SelectType -->|Admin| AdminLogin[Admin Login]

    Register --> CreateAccount[Create Account]
    CreateAccount --> UserDashboard[User Dashboard]

    UserLogin --> Auth{Auth Valid?}
    Auth -->|Yes| UserDashboard
    Auth -->|No| Forgot[Forgot Password]
    Forgot --> UserLogin

    UserDashboard --> Browse[Browse Services]
    UserDashboard --> Events[Events]
    UserDashboard --> Messages[Messages / AI]
    UserDashboard --> Notifications[Notifications]
    UserDashboard --> Profile[Profile]
    UserDashboard --> Saved[Saved Items]
    UserDashboard --> Posts[My Posts]
    UserDashboard --> Requests[Requests]
    UserDashboard --> Premium[Premium / Donate]
    UserDashboard --> Orders[Orders]
    UserDashboard --> LogoutUser{Logout?}

    Browse --> SelectService[Select Service]
    SelectService --> Booking[Booking / Payment]
    Booking --> Confirmation[Confirmation]
    Orders --> Confirmation

    LogoutUser -->|No| UserDashboard
    LogoutUser -->|Yes| End([End])

    AdminLogin --> AdminAuth{Admin Auth Valid?}
    AdminAuth -->|Yes| AdminDashboard[Admin Dashboard]
    AdminAuth -->|No| AdminLogin

    AdminDashboard --> ManageUsers[Manage Users]
    AdminDashboard --> ManageServices[Manage Services]
    AdminDashboard --> ManageEvents[Manage Events]
    AdminDashboard --> Reports[View Reports]
    AdminDashboard --> LogoutAdmin{Logout?}

    LogoutAdmin -->|No| AdminDashboard
    LogoutAdmin -->|Yes| End

    classDef page fill:#f4f4f4,stroke:#555,stroke-width:1px,color:#111;
    classDef decision fill:#fff,stroke:#555,stroke-width:1px,color:#111;
    classDef terminal fill:#eee,stroke:#333,stroke-width:1px,color:#111;

    class Landing,UserLogin,Register,CreateAccount,UserDashboard,Forgot,Browse,Events,Messages,Notifications,Profile,Saved,Posts,Requests,Premium,Orders,SelectService,Booking,Confirmation,AdminLogin,AdminDashboard,ManageUsers,ManageServices,ManageEvents,Reports page;
    class SelectType,Auth,AdminAuth,LogoutUser,LogoutAdmin decision;
    class Start,End terminal;
```

## Breakdown by Section

| Section | File |
|---------|------|
| Authentication | [sections/01-authentication-flow.md](sections/01-authentication-flow.md) |
| User Dashboard | [sections/02-user-dashboard-flow.md](sections/02-user-dashboard-flow.md) |
| Service Booking | [sections/03-service-booking-flow.md](sections/03-service-booking-flow.md) |
| Donation / Request | [sections/04-donation-request-flow.md](sections/04-donation-request-flow.md) |
| Admin Panel | [sections/05-admin-flow.md](sections/05-admin-flow.md) |
| Logout | [sections/06-logout-flow.md](sections/06-logout-flow.md) |

---

*Last updated: May 2026*
