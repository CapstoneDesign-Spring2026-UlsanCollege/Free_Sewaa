# User Flow and App Workflow

> Complete visual guide to the Free Sewaa platform — from user journeys to system architecture and donation flow.

---

## App Workflow

This diagram shows the main Free Sewaa user journey from entering the platform to donating, requesting, messaging, and admin review.

```mermaid
flowchart LR
    A([Visitor]) --> B[Landing Page]
    B --> C{Choose Action}

    C -->|New User| D[Sign Up]
    C -->|Returning User| E[Login]
    C -->|Admin| F[Admin Login]

    D --> G[User Dashboard]
    E --> G

    G --> H[Browse Items]
    G --> I[Post Donation Item]
    G --> J[My Requests]
    G --> K[Messages]
    G --> L[Profile]

    H --> M[View Item Details]
    M --> N[Request Item]
    N --> K

    I --> O[Donation Item Published]
    O --> H

    F --> P[Admin Dashboard]
    P --> Q[Manage Users]
    P --> R[Manage Items]
    P --> S[Review Reports]

    classDef start fill:#DCFCE7,stroke:#16A34A,color:#111827;
    classDef page fill:#EFF6FF,stroke:#2563EB,color:#111827;
    classDef decision fill:#FEF3C7,stroke:#F59E0B,color:#111827;
    classDef admin fill:#F3E8FF,stroke:#7C3AED,color:#111827;
    classDef success fill:#ECFDF5,stroke:#059669,color:#111827;

    class A start;
    class B,D,E,G,H,I,J,K,L,M,N,O page;
    class C decision;
    class F,P,Q,R,S admin;
```

The app workflow covers the complete user journey. Visitors can sign up as new users, log in as returning users, or access the admin panel directly. Once logged in, users can browse donation items, post items to give away, view their requests, send messages, and manage their profile. The admin panel provides tools for managing users, items, and reports.

---

## System Workflow

This diagram shows how the frontend, backend, authentication, database, and deployment work together.

```mermaid
flowchart TD
    A[User Browser] --> B[Frontend Pages<br/>HTML CSS JavaScript]
    B --> C[API Requests]
    C --> D[Node.js + Express Server]

    D --> E[Authentication Middleware]
    E --> F{Valid Request?}

    F -->|Yes| G[Controllers / Route Logic]
    F -->|No| H[Return Error Response]

    G --> I[MongoDB Database]
    I --> J[Response Data]
    J --> B

    D --> K[Admin Routes]
    K --> L[Admin Dashboard]

    M[Render Deployment] --> D
    N[GitHub Repository] --> M

    classDef user fill:#DCFCE7,stroke:#16A34A,color:#111827;
    classDef frontend fill:#DBEAFE,stroke:#2563EB,color:#111827;
    classDef backend fill:#FEF3C7,stroke:#F59E0B,color:#111827;
    classDef database fill:#EDE9FE,stroke:#7C3AED,color:#111827;
    classDef error fill:#FEE2E2,stroke:#DC2626,color:#111827;

    class A user;
    class B,C frontend;
    class D,E,G,K,L backend;
    class I,J database;
    class H error;
```

The system architecture follows a standard client-server model. The user's browser sends requests to the Node.js + Express backend, which processes authentication, routes logic, and queries MongoDB. Responses flow back through the same path. Admin routes are handled separately with their own access controls.

---

## Donation Request Flow

This diagram shows how a donated item moves through the platform.

```mermaid
flowchart LR
    A[Donor Posts Item] --> B[Item Appears in Browse Page]
    B --> C[Receiver Views Item]
    C --> D[Receiver Sends Request]
    D --> E[Donor and Receiver Communicate]
    E --> F[Item Handover]
    F --> G[Request Completed]

    classDef donor fill:#DCFCE7,stroke:#16A34A,color:#111827;
    classDef receiver fill:#DBEAFE,stroke:#2563EB,color:#111827;
    classDef process fill:#F8FAFC,stroke:#64748B,color:#111827;
    classDef done fill:#ECFDF5,stroke:#059669,color:#111827;

    class A donor;
    class C,D receiver;
    class B,E,F process;
    class G done;
```

The donation flow begins when a donor posts an item, which immediately appears in the browse page. A receiver can view the item and send a request. The donor and receiver then communicate through the messaging system and arrange a handover. Once the item changes hands, the request is marked as completed.

---

## Authentication Flow

```mermaid
flowchart TD
    Start([Visitor]) --> Select{Select Type}
    Select -->|New User| Signup[Sign Up]
    Select -->|Returning| Signin[Sign In]
    Select -->|Admin| AdminSignin[Admin Sign In]
    Signup --> Create[Create Account]
    Create --> Dashboard[User Dashboard]
    Signin --> Validate{Auth Valid?}
    Validate -->|Yes| Dashboard
    Validate -->|No| Error[Show Error]
    Error --> Signin
    AdminSignin --> AdminValidate{Admin Valid?}
    AdminValidate -->|Yes| AdminDash[Admin Dashboard]
    AdminValidate -->|No| AdminSignin
```

## Dashboard Navigation

```mermaid
flowchart LR
    Dashboard[User Dashboard] --> Browse[Browse Items]
    Dashboard --> Donate[Post Donation]
    Dashboard --> Messages[Messages]
    Dashboard --> Profile[Profile]
    Dashboard --> Saved[Saved Items]
    Dashboard --> Posts[My Posts]
    Dashboard --> Requests[Requests]
    Dashboard --> Orders[Orders]
```

## Donation Posting Flow

```mermaid
flowchart TD
    Start([User]) --> Click[Click Post Donation]
    Click --> Form[Fill Title, Description, Category, Image]
    Form --> Submit[Submit]
    Submit --> Valid{Valid Input?}
    Valid -->|Yes| Save[Item Saved]
    Valid -->|No| Form
    Save --> Confirm[Confirmation]
```

## Item Request Flow

```mermaid
flowchart TD
    Browse[Browse Items] --> Select[Select Item]
    Select --> View[View Details]
    View --> Request[Request Item]
    Request --> Notify[Donor Notified]
    Notify --> Accept{Donor Accepts?}
    Accept -->|Yes| Arrange[Arrange Pickup]
    Accept -->|No| Decline[Request Declined]
```

## Messaging Flow

```mermaid
flowchart TD
    Start[User] --> Open[Open Messages]
    Open --> List[View Conversations]
    List --> Pick[Select Conversation]
    Pick --> Chat[Send / Read Messages]
    Chat --> New[New Message Arrives]
    New --> Notify[Notification]
```

## Admin Management Flow

```mermaid
flowchart TD
    Admin[Admin Login] --> Dash[Admin Dashboard]
    Dash --> Users[Manage Users]
    Dash --> Items[Manage Listings]
    Dash --> Reports[View Reports]
    Users --> Block[Block / Unblock]
    Users --> Delete[Delete User]
    Items --> Remove[Remove Listing]
    Items --> Restore[Restore Listing]
```

## Logout Flow

```mermaid
flowchart TD
    Dashboard[User Dashboard] --> Logout{Logout?}
    Logout -->|No| Dashboard
    Logout -->|Yes| End([Redirect to Landing])
    AdminDash[Admin Dashboard] --> AdminLogout{Logout?}
    AdminLogout -->|No| AdminDash
    AdminLogout -->|Yes| End
```

---

*Last updated: May 2026*
