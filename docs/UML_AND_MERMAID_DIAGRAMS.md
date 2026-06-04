# UML and Mermaid Diagrams

> This document provides visual diagrams for the Free Sewaa platform, covering system architecture, user flow, team contribution, portfolio structure, and development workflow.

---

## Table of Contents

* [1. System Architecture Diagram](#1-system-architecture-diagram)
* [2. User Flow Diagram](#2-user-flow-diagram)
* [3. Team Contribution Diagram](#3-team-contribution-diagram)
* [4. Portfolio Structure Diagram](#4-portfolio-structure-diagram)
* [5. Development Workflow Diagram](#5-development-workflow-diagram)
* [6. Existing UML Diagrams](#6-existing-uml-diagrams)
* [Navigation](#navigation)

---

## 1. System Architecture Diagram

```mermaid
flowchart TB
    subgraph Client["Client Layer"]
        Browser["Web Browser"]
        HTML["HTML / CSS / JavaScript Pages"]
    end

    subgraph Server["Server Layer"]
        Express["Express.js Server"]
        Auth["JWT Authentication Middleware"]
        Routes["API Routes"]
    end

    subgraph Database["Data Layer"]
        MongoDB["MongoDB Atlas"]
        Collections["Users, Items, Requests, Messages"]
    end

    subgraph Deployment["Deployment Layer"]
        Render["Render Cloud Platform"]
    end

    Browser --> HTML
    HTML --> Express
    Express --> Auth
    Auth --> Routes
    Routes --> MongoDB
    MongoDB --> Collections
    Express --> Render
```

---

## 2. User Flow Diagram

```mermaid
flowchart LR
    Start(["Visitor"]) --> Landing["Landing Page"]
    Landing --> Auth{"Choose Path"}

    Auth -->|"Sign Up"| Register["Create Account"]
    Auth -->|"Login"| SignIn["Sign In"]
    Auth -->|"Browse Only"| BrowseItems["Browse Items"]
    Auth -->|"Admin"| AdminLogin["Admin Login"]

    Register --> UserDash["User Dashboard"]
    SignIn --> UserDash
    BrowseItems --> Auth

    UserDash --> Actions{"Choose Feature"}

    Actions -->|"Post Item"| PostItem["Post Donation Item"]
    Actions -->|"Browse and Request"| BrowseReq["Browse Items"]
    Actions -->|"Messages"| MsgPage["Messages"]
    Actions -->|"Manage My Stuff"| MyItems["My Posts and Requests"]
    Actions -->|"Admin Panel"| AdminDash["Admin Dashboard"]

    PostItem --> ItemLive["Item Listed"]
    BrowseReq --> ViewItem["View Item Details"]
    ViewItem -->|"Request Item"| SendRequest["Send Request"]
    SendRequest --> MsgPage
    MsgPage --> Chat["Donor and Receiver Chat"]

    MyItems --> EditItem["Edit or Remove Listings"]
    MyItems --> TrackReq["Track Request Status"]

    AdminDash --> ManageUsers["Manage Users"]
    AdminDash --> ManageListings["Manage Listings"]
    AdminDash --> ViewReports["View Reports"]

    ItemLive --> UserDash
    EditItem --> UserDash
    TrackReq --> UserDash
    Chat --> UserDash

    UserDash --> Logout(["Logout"])
    AdminDash --> AdminLogout(["Admin Logout"])

    classDef startNode fill:#e8f5e9,stroke:#2e7d32,color:#111
    classDef pageNode fill:#e3f2fd,stroke:#1565c0,color:#111
    classDef decisionNode fill:#fff8e1,stroke:#f57f17,color:#111
    classDef endNode fill:#fce4ec,stroke:#c62828,color:#111

    class Start startNode
    class Landing,Register,SignIn,BrowseItems,AdminLogin,UserDash,PostItem,BrowseReq,MsgPage,MyItems,AdminDash,ViewItem,SendRequest,Chat,EditItem,TrackReq,ManageUsers,ManageListings,ViewReports,ItemLive pageNode
    class Auth,Actions decisionNode
    class Logout,AdminLogout endNode
```

---

## 3. Team Contribution Diagram

```mermaid
flowchart TD
    A["Free Sewaa Team Portfolio"]

    A --> B["Ram Pathak - Backend and Core Logic"]
    A --> C["Sujan Shrestha - Project Lead, Frontend, Documentation and Testing"]
    A --> D["Sujan Tamang - Testing, Integration and Documentation"]
    A --> E["Swarnim Jung Karki - Styling, CSS and Documentation"]
    A --> F["Mohan Khadka - Bug Fixes and Maintenance"]

    B --> B1["API Routes"]
    B --> B2["Database Integration"]
    B --> B3["Authentication System"]

    C --> C1["Project Management"]
    C --> C2["Frontend Development"]
    C --> C3["Documentation Management"]
    C --> C4["System Testing"]
    C --> C5["UI Improvements"]
    C --> C6["Portfolio Development"]

    D --> D1["Testing Evidence"]
    D --> D2["Integration Checks"]
    D --> D3["Documentation Support"]

    E --> E1["Responsive Design"]
    E --> E2["CSS Styling"]
    E --> E3["Portfolio Organization"]

    F --> F1["Bug Fixing"]
    F --> F2["System Stability"]
    F --> F3["Final Cleanup"]
```

---

## 4. Portfolio Structure Diagram

```mermaid
flowchart LR
    P["Free Sewaa Capstone Portfolio"]

    P --> S01["01 - Project Overview"]
    P --> S02["02 - Semester Journey"]
    P --> S03["03 - Design and Planning"]
    P --> S04["04 - Final Product"]
    P --> S05["05 - QA and Stabilization"]
    P --> S06["06 - AI and Code Ownership"]
    P --> S07["07 - Final Presentation"]
    P --> S08["08 - Individual Portfolios"]

    S01 --> S01A["Project Summary"]
    S01 --> S01B["MVP Scope"]
    S01 --> S01C["Scope Decisions"]

    S02 --> S02A["Weekly Sprints"]
    S02 --> S02B["Sprint Summaries"]
    S02 --> S02C["Semester Journey"]

    S03 --> S03A["Proposals"]
    S03 --> S03B["User Research"]
    S03 --> S03C["Wireframes"]
    S03 --> S03D["Architecture"]
    S03 --> S03E["Risk Assessment"]
    S03 --> S03F["Planning Documents"]

    S04 --> S04A["MVP Demo"]
    S04 --> S04B["Setup Guide"]
    S04 --> S04C["Architecture"]
    S04 --> S04D["Screenshots"]

    S05 --> S05A["QA Report"]
    S05 --> S05B["Bugs and Limitations"]
    S05 --> S05C["Testing Evidence"]
    S05 --> S05D["Refactoring Evidence"]

    S06 --> S06A["AI Ownership Audit"]
    S06 --> S06B["AI Usage Summary"]
    S06 --> S06C["Representative Pull Requests"]

    S07 --> S07A["Presentation Script"]
    S07 --> S07B["Technical Defense"]
    S07 --> S07C["Backup Demo"]

    S08 --> S08A["Ram Pathak"]
    S08 --> S08B["Sujan Shrestha"]
    S08 --> S08C["Sujan Tamang"]
    S08 --> S08D["Swarnim Jung Karki"]
    S08 --> S08E["Mohan Khadka"]

    classDef portfolioNode fill:#e3f2fd,stroke:#1565c0,color:#111
    classDef sectionNode fill:#f5f5f5,stroke:#666,color:#111
    classDef contentNode fill:#f1f8e9,stroke:#558b2f,color:#111

    class P portfolioNode
    class S01,S02,S03,S04,S05,S06,S07,S08 sectionNode
    class S01A,S01B,S01C,S02A,S02B,S02C,S03A,S03B,S03C,S03D,S03E,S03F,S04A,S04B,S04C,S04D,S05A,S05B,S05C,S05D,S06A,S06B,S06C,S07A,S07B,S07C,S08A,S08B,S08C,S08D,S08E contentNode
```

---

## 5. Development Workflow Diagram

```mermaid
flowchart LR
    Plan["Planning and Requirements"] --> Design["Design and Prototyping"]
    Design --> Implement["Implementation"]
    Implement --> Test["Testing and QA"]
    Test --> Fix["Bug Fixing"]
    Fix --> Deploy["Deployment"]
    Deploy --> Present["Presentation"]

    Test -->|"Issues Found"| Implement
    Fix -->|"Regression Testing"| Test

    Plan --> P1["User Stories"]
    Plan --> P2["Sprint Planning"]
    Plan --> P3["Task Assignment"]

    Design --> D1["Wireframes"]
    Design --> D2["System Architecture"]
    Design --> D3["Database Design"]

    Implement --> I1["Frontend Development"]
    Implement --> I2["Backend Development"]
    Implement --> I3["System Integration"]

    Test --> T1["Manual Testing"]
    Test --> T2["QA Checklist"]
    Test --> T3["Bug Reports"]

    Deploy --> Dep1["Render Deployment"]
    Deploy --> Dep2["Environment Configuration"]
    Deploy --> Dep3["Live Verification"]

    Present --> Pres1["Demo Script"]
    Present --> Pres2["Technical Defense"]
    Present --> Pres3["Portfolio Submission"]

    classDef phaseNode fill:#e3f2fd,stroke:#1565c0,color:#111
    classDef stepNode fill:#f5f5f5,stroke:#666,color:#111
    classDef detailNode fill:#f1f8e9,stroke:#558b2f,color:#111

    class Plan,Design,Implement,Test,Fix,Deploy,Present phaseNode
    class D1,D2,D3,I1,I2,I3,T1,T2,T3,Dep1,Dep2,Dep3,Pres1,Pres2,Pres3 stepNode
    class P1,P2,P3 detailNode
```

---

## 6. Existing UML Diagrams

| Diagram              | Description                                                 |
| -------------------- | ----------------------------------------------------------- |
| Authentication Flow  | User registration, login, password recovery and admin login |
| Dashboard Flow       | User dashboard interactions                                 |
| Donation Flow        | Create, browse, request and manage donations                |
| Messaging Flow       | Communication between donors and receivers                  |
| Admin Flow           | User management and platform moderation                     |
| Logout Flow          | User and admin logout process                               |
| Complete UML Diagram | Full system workflow                                        |

---

## Navigation

* [Back to Documentation Home](./README.md)
* [Back to Repository Root](../README.md)
* [Back to Portfolio Home](../portfolio/README.md)
* [View Individual Portfolios](../portfolio/08-individual-portfolios/README.md)

---

**Free Sewaa — Capstone Design Project**
**Ulsan College, Spring 2026**

### Debug Fixes Applied

* Fixed Mermaid parse error in User Flow Diagram.
* Replaced `classDef end` with `classDef endNode`.
* Removed special characters that can break GitHub Mermaid rendering.
* Replaced `&` with `and`.
* Removed `<br>` from diagrams where it may cause rendering issues.
* Removed semicolons from `classDef` lines for better compatibility.
