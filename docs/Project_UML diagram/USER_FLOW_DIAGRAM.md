# Free Sewaa — User Flow Diagrams

This document explains the main user flow of the Free Sewaa project.  
The diagrams are divided by section so each part is easy to understand.

---

## 1. Authentication Flow

This diagram shows how a visitor enters the system as a returning user, new user, or admin.

```mermaid
flowchart LR
    Start([Start]) --> Landing[Landing Page]
    Landing --> Role{Choose User Type}

    Role -->|Returning User| Login[User Login]
    Role -->|New User| Register[Register]
    Role -->|Admin| AdminLogin[Admin Login]

    Login --> CheckLogin{Credentials Valid?}
    CheckLogin -->|Yes| UserDash[User Dashboard]
    CheckLogin -->|No| Forgot[Forgot Password]
    Forgot --> Reset[Reset Password]
    Reset --> Login

    Register --> Create[Create Account]
    Create --> Verify[Verify Account / Complete Setup]
    Verify --> UserDash

    AdminLogin --> CheckAdmin{Admin Valid?}
    CheckAdmin -->|Yes| AdminDash[Admin Dashboard]
    CheckAdmin -->|No| AdminRetry[Retry Login]
    AdminRetry --> AdminLogin

    classDef terminal fill:#e8f5e9,stroke:#2e7d32,color:#111;
    classDef process fill:#f5f5f5,stroke:#666,color:#111;
    classDef decision fill:#fff8e1,stroke:#999,color:#111;

    class Start terminal;
    class Landing,Login,Register,AdminLogin,Forgot,Reset,Create,Verify,UserDash,AdminDash,AdminRetry process;
    class Role,CheckLogin,CheckAdmin decision;
```

---

## 2. User Dashboard Flow

This diagram shows the main areas a user can access after logging in.

```mermaid
flowchart LR
    Dashboard[User Dashboard]

    Dashboard --> Explore[Explore Features]
    Dashboard --> Activity[My Activity]
    Dashboard --> Communication[Communication]
    Dashboard --> Account[Account]

    Explore --> Browse[Browse Services]
    Explore --> Events[Events]
    Explore --> Premium[Free Services / Donate]

    Activity --> RequestTracking[Request Tracking]
    Activity --> Requests[Requests]
    Activity --> Posts[My Posts]
    Activity --> Saved[Saved Items]

    Communication --> Messages[Messages / AI Chat]
    Communication --> Notifications[Notifications]

    Account --> Profile[Profile]
    Account --> Logout[Logout]

    classDef core fill:#e3f2fd,stroke:#1565c0,color:#111;
    classDef group fill:#f1f8e9,stroke:#558b2f,color:#111;
    classDef item fill:#f5f5f5,stroke:#666,color:#111;

    class Dashboard core;
    class Explore,Activity,Communication,Account group;
    class Browse,Events,Premium,RequestTracking,Requests,Posts,Saved,Messages,Notifications,Profile,Logout item;
```

---

## 3. Service Booking Flow

This diagram shows how a user moves from browsing a service to booking confirmation.

```mermaid
flowchart LR
    Dashboard[User Dashboard] --> Browse[Browse Services]
    Browse --> Details[View Service Details]
    Details --> Select[Select Service / Option]
    Select --> Booking[Enter Booking Details]
    Booking --> Payment[Payment]
    Payment --> Confirm[Booking Confirmation]
    Confirm --> RequestTracking[Saved in Request Tracking]

    classDef process fill:#f5f5f5,stroke:#666,color:#111;
    classDef important fill:#e8f5e9,stroke:#2e7d32,color:#111;

    class Dashboard,Browse,Details,Select,Booking,Payment process;
    class Confirm,RequestTracking important;
```

---

## 4. Donation / Request Flow

This diagram shows the main flow for requests and donation or free service actions.

```mermaid
flowchart LR
    Dashboard[User Dashboard] --> Action{Choose Action}

    Action -->|Request Help / Service| RequestFlow[Request Flow]
    Action -->|Donate / Free Services| DonateFlow[Donation / Free Services Flow]

    RequestFlow --> RequestForm[Fill Request Details]
    RequestForm --> SubmitRequest[Submit Request]
    SubmitRequest --> TrackRequest[Track Request Status]

    DonateFlow --> ChoosePlan[Choose Amount / Plan]
    ChoosePlan --> Payment[Payment]
    Payment --> DonateSuccess[Donation / Free Services Confirmed]

    classDef process fill:#f5f5f5,stroke:#666,color:#111;
    classDef decision fill:#fff8e1,stroke:#999,color:#111;
    classDef result fill:#e8f5e9,stroke:#2e7d32,color:#111;

    class Dashboard,RequestFlow,DonateFlow,RequestForm,SubmitRequest,TrackRequest,ChoosePlan,Payment process;
    class Action decision;
    class DonateSuccess result;
```

---

## 5. Admin Flow

This diagram shows how an admin logs in and manages the system.

```mermaid
flowchart LR
    AdminLogin[Admin Login] --> Validate{Credentials Valid?}
    Validate -->|Yes| AdminDash[Admin Dashboard]
    Validate -->|No| Retry[Retry Login]
    Retry --> AdminLogin

    AdminDash --> Users[Manage Users]
    AdminDash --> Services[Manage Services]
    AdminDash --> Events[Manage Events]
    AdminDash --> Reports[View Reports]
    AdminDash --> AdminLogout[Logout]

    classDef process fill:#f5f5f5,stroke:#666,color:#111;
    classDef decision fill:#fff8e1,stroke:#999,color:#111;
    classDef core fill:#e3f2fd,stroke:#1565c0,color:#111;

    class AdminDash core;
    class AdminLogin,Retry,Users,Services,Events,Reports,AdminLogout process;
    class Validate decision;
```

---

## 6. Logout Flow

This diagram shows the logout process for both users and admins.

```mermaid
flowchart LR
    UserDash[User Dashboard] --> UserLogout[Click Logout]
    AdminDash[Admin Dashboard] --> AdminLogout[Click Logout]

    UserLogout --> UserConfirm{Confirm Logout?}
    AdminLogout --> AdminConfirm{Confirm Logout?}

    UserConfirm -->|No| UserDash
    UserConfirm -->|Yes| EndUser[Return to Landing Page]

    AdminConfirm -->|No| AdminDash
    AdminConfirm -->|Yes| EndAdmin[Return to Landing Page]

    classDef process fill:#f5f5f5,stroke:#666,color:#111;
    classDef decision fill:#fff8e1,stroke:#999,color:#111;
    classDef result fill:#e8f5e9,stroke:#2e7d32,color:#111;

    class UserDash,AdminDash,UserLogout,AdminLogout process;
    class UserConfirm,AdminConfirm decision;
    class EndUser,EndAdmin result;
```

---

## Summary

| Section | Purpose |
|---|---|
| Authentication Flow | Shows how new users, returning users, and admins enter the system |
| User Dashboard Flow | Shows the main features available after user login |
| Service Booking Flow | Shows how users browse and book services |
| Donation / Request Flow | Shows request, donation, and free-service-related actions |
| Admin Flow | Shows how admins manage the platform |
| Logout Flow | Shows how users and admins leave the system |

---

_Last updated: May 2026_
