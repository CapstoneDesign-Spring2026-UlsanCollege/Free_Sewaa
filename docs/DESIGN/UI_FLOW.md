# UI Flow — Free Sewaa#

This document shows how the 18 pages of Free Sewaa connect and how users navigate through the platform.#

## Page Flow Diagram#

```mermaid
flowchart TD#
    A[index.html\nLanding Page] --> B[signin.html\nSign In]
    A --> C[signup.html\nSign Up]
    B --> D[app.html\nMain Dashboard]
    C --> D#
    D --> E[browse.html\nBrowse Items]
    D --> F[donate.html\nPost a Donation]
    D --> G[profile.html\nUser Profile]#
    D --> H[messages.html\nMessages Inbox]
    E --> I[item-detail.html\nItem Detail]
    I --> J[request.html\nRequest Item]
    I --> H#
    J --> D#
    F --> D#
    H --> K[conversation.html\nDirect Message Thread]
    A --> M[admin_login.html\nAdmin Login]
    M --> N[admin.html\nAdmin Dashboard]
    N --> O[admin-items.html\nManage Items]
    N --> P[admin-users.html\nManage Users]
```#

## User Journies#

### Journey 1: New User Signs Up and Donates an Item#
1. `index.html` → click "Get Started"#
2. `signup.html` → fill in name, email, password#
3. `app.html` → lands on dashboard#
4. `donate.html` → fill in item details and submit#
5. `app.html` → confirmation, item now listed#

### Journey 2: User Browses and Requests an Item#
1. `signin.html` → login with credentials#
2. `app.html` → click "Browse Items"#
3. `browse.html` → filter/search available items#
4. `item-detail.html` → view item info#
5. `request.html` → send request with message#
6. `app.html` → request submitted, awaiting donor response#

### Journey 3: Admin Reviews the Platform#
1. `admin_login.html` → login with admin credentials#
2. `admin.html` → view platform overview#
3. `admin-items.html` → review/remove flagged items#
4. `admin-users.html` → manage user accounts#

---

*Last updated: May 2026*
