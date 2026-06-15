# User Flow Diagrams

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
    Dashboard --> RequestTracking[Request Tracking]
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
