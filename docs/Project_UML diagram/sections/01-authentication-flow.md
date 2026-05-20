# Authentication Flow

How a user signs up, logs in, or resets their password. Also covers admin login.

## Diagram

```mermaid
flowchart TD
    Start([Visitor]) --> SelectType{Select User Type}

    SelectType -->|New User| Register[Register Account]
    SelectType -->|Returning User| UserLogin[User Login]
    SelectType -->|Admin| AdminLogin[Admin Login]

    Register --> Form[Fill Name / Email / Password]
    Form --> Save[Account Created]
    Save --> DashRedirect([Redirect to User Dashboard])

    UserLogin --> Credentials[Enter Email & Password]
    Credentials --> Auth{Auth Valid?}
    Auth -->|Yes| DashRedirect
    Auth -->|No| Forgot[Forgot Password]
    Forgot --> EmailSent[Reset Link Sent]
    EmailSent --> UserLogin

    AdminLogin --> AdminCred[Enter Admin Email & Password]
    AdminCred --> AdminAuth{Admin Auth Valid?}
    AdminAuth -->|Yes| AdminDashRedirect([Redirect to Admin Dashboard])
    AdminAuth -->|No| AdminLogin

    classDef page fill:#f4f4f4,stroke:#555,stroke-width:1px,color:#111;
    classDef decision fill:#fff,stroke:#555,stroke-width:1px,color:#111;
    classDef terminal fill:#eee,stroke:#333,stroke-width:1px,color:#111;

    class Register,UserLogin,AdminLogin,Form,Save,Credentials,Forgot,EmailSent,AdminCred page;
    class SelectType,Auth,AdminAuth decision;
    class Start,DashRedirect,AdminDashRedirect terminal;
```

## Steps

| Step | What Happens |
|------|--------------|
| Visitor arrives | User sees the landing page and picks their user type |
| New user | Fills signup form → account created → redirected to dashboard |
| Returning user | Enters email + password → system validates |
| Auth succeeds | Goes to user dashboard |
| Auth fails | Sees "forgot password" → reset link sent → tries again |
| Admin login | Separate login page → admin auth check → admin dashboard |

---

*Last updated: May 2026*
