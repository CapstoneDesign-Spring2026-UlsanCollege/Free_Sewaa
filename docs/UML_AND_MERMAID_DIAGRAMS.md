# UML and Mermaid Diagrams

> This document provides visual diagrams for the Free Sewaa platform, covering system architecture, user flow, team contribution, portfolio structure, and development workflow. These diagrams complement the detailed documentation in the repository.

---

## Table of Contents

- [1. System Architecture Diagram](#1-system-architecture-diagram)
- [2. User Flow Diagram](#2-user-flow-diagram)
- [3. Team Contribution Diagram](#3-team-contribution-diagram)
- [4. Portfolio Structure Diagram](#4-portfolio-structure-diagram)
- [5. Development Workflow Diagram](#5-development-workflow-diagram)
- [6. Existing UML Diagrams](#6-existing-uml-diagrams)
- [Navigation](#navigation)

---

## 1. System Architecture Diagram

This diagram shows the high-level architecture of the Free Sewaa platform, including the frontend, backend, database, and deployment layers.

```mermaid
flowchart TB
    subgraph Client["Client Layer"]
        Browser[Web Browser]
        HTML[HTML/CSS/JS Pages]
    end

    subgraph Server["Server Layer"]
        Express[Express.js Server]
        Auth[JWT Authentication Middleware]
        Routes[API Routes]
    end

    subgraph Database["Data Layer"]
        MongoDB[MongoDB Atlas]
        Collections[Users, Items, Requests, Messages]
    end

    subgraph Deployment["Deployment"]
        Render[Render Cloud Platform]
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

This diagram shows the complete user journey — from landing on the platform through authentication, core feature usage, and logout. For a more detailed breakdown with six separate flow diagrams, see [Project UML Diagrams](./Project_UML%20diagram/USER_FLOW_DIAGRAM.md).

```mermaid
flowchart LR
    Start([Visitor]) --> Landing[Landing Page]
    Landing --> Auth{Choose Action}

    Auth -->|Sign Up| Register[Create Account]
    Auth -->|Login| Login[Sign In]
    Auth -->|Browse Only| Browse[Browse Items]

    Register --> UserDash[User Dashboard]
    Login --> UserDash

    UserDash --> Actions{Choose Feature}
    Actions -->|Post Item| Donate[Donate Page]
    Actions -->|Find Items| Browse2[Browse Items]
    Actions -->|Request| Request[Request Item]
    Actions -->|Chat| Messages[Messages]
    Actions -->|Manage| Dashboard[Dashboard]

    Donate --> Confirm[Item Posted]
    Browse2 --> Request
    Request --> Messages
    Messages --> Confirm2[Communication Complete]
    Dashboard --> Manage[Manage Posts & Requests]

    Manage --> Logout([Logout])

    classDef start fill:#e8f5e9,stroke:#2e7d32,color:#111;
    classDef page fill:#e3f2fd,stroke:#1565c0,color:#111;
    classDef action fill:#fff8e1,stroke:#f57f17,color:#111;
    classDef end fill:#fce4ec,stroke:#c62828,color:#111;

    class Start start;
    class Landing,Register,Login,Browse,UserDash,Donate,Browse2,Request,Messages,Dashboard,Manage page;
    class Auth,Actions action;
    class Confirm,Confirm2,Logout end;
```
---

## 3. Team Contribution Diagram

This diagram maps each team member's role and their primary technical contributions to the Free Sewaa platform.

```mermaid
flowchart TD
    A[Free Sewaa Team Portfolio] --> B[Rampathak12<br/>Backend & Core Logic]
    A --> C[Sujan Shrestha<br/>Frontend & UI Development]
    A --> D[Sujan Tamang<br/>Testing, Integration & Documentation]
    A --> E[Swarnim Jung Karki<br/>Styling, CSS & Documentation]
    A --> F[Mohan Khadka<br/>Bug Fixes & Maintenance]

    B --> B1[API Routes]
    B --> B2[Database Integration]
    B --> B3[Authentication Flow]

    C --> C1[Main Pages]
    C --> C2[UI Components]
    C --> C3[User Experience]

    D --> D1[Testing Evidence]
    D --> D2[Integration Checks]
    D --> D3[Documentation Support]

    E --> E1[Responsive Design]
    E --> E2[CSS Polish]
    E --> E3[Portfolio Organization]

    F --> F1[Bug Fixing]
    F --> F2[Stability Improvements]
    F --> F3[Final Cleanup]
```

---

## 4. Portfolio Structure Diagram

This diagram shows the organization of the final capstone portfolio across all 8 sections.

```mermaid
flowchart LR
    P[Free Sewaa<br/>Capstone Portfolio] --> S01[01 — Project Overview]
    P --> S02[02 — Semester Journey]
    P --> S03[03 — Design & Planning]
    P --> S04[04 — Final Product]
    P --> S05[05 — QA & Stabilization]
    P --> S06[06 — AI & Code Ownership]
    P --> S07[07 — Final Presentation]
    P --> S08[08 — Individual Portfolios]

    S01 --> S01A[Project Summary]
    S01 --> S01B[MVP Scope]
    S01 --> S01C[Scope Decisions]

    S02 --> S02A[Weekly Sprints]
    S02 --> S02B[Sprint Summaries]
    S02 --> S02C[Semester Journey]

    S03 --> S03A[Proposals]
    S03 --> S03B[User Research]
    S03 --> S03C[Wireframes]
    S03 --> S03D[Architecture]
    S03 --> S03E[Risk & Scope]
    S03 --> S03F[Planning Docs]

    S04 --> S04A[MVP Demo]
    S04 --> S04B[Setup Guide]
    S04 --> S04C[Architecture]
    S04 --> S04D[Screenshots]

    S05 --> S05A[QA Report]
    S05 --> S05B[Bugs & Limitations]
    S05 --> S05C[Test Evidence]
    S05 --> S05D[Refactor Evidence]

    S06 --> S06A[AI Ownership Audit]
    S06 --> S06B[AI Use Summary]
    S06 --> S06C[Representative PRs]

    S07 --> S07A[Presentation Script]
    S07 --> S07B[Technical Defense]
    S07 --> S07C[Backup Demo]

    S08 --> S08A[Ram Pathak]
    S08 --> S08B[Sujan Shrestha]
    S08 --> S08C[Sujan Tamang]
    S08 --> S08D[Swarnim Jung Karki]
    S08 --> S08E[Mohan Khadka]

    classDef portfolio fill:#e3f2fd,stroke:#1565c0,color:#111;
    classDef section fill:#f5f5f5,stroke:#666,color:#111;
    classDef content fill:#f1f8e9,stroke:#558b2f,color:#111;

    class P portfolio;
    class S01,S02,S03,S04,S05,S06,S07,S08 section;
    class S01A,S01B,S01C,S02A,S02B,S02C,S03A,S03B,S03C,S03D,S03E,S03F,S04A,S04B,S04C,S04D,S05A,S05B,S05C,S05D,S06A,S06B,S06C,S07A,S07B,S07C,S08A,S08B,S08C,S08D,S08E content;
```

---

## 5. Development Workflow Diagram

This diagram shows the development process followed during the capstone project — from planning through deployment and presentation.

```mermaid
flowchart LR
    Plan[Planning & Requirements] --> Design[Design & Prototyping]
    Design --> Implement[Implementation]
    Implement --> Test[Testing & QA]
    Test --> Fix[Bug Fixing]
    Fix --> Deploy[Deployment]
    Deploy --> Present[Presentation]

    Test -->|Issues Found| Implement
    Fix -->|Regression Test| Test

    Plan --> P1[User Stories]
    Plan --> P2[Sprint Planning]
    Plan --> P3[Task Assignment]

    Design --> D1[Wireframes]
    Design --> D2[Architecture Design]
    Design --> D3[Database Design]

    Implement --> I1[Frontend Pages]
    Implement --> I2[Backend API]
    Implement --> I3[Integration]

    Test --> T1[Manual Testing]
    Test --> T2[QA Checklists]
    Test --> T3[Bug Reporting]

    Deploy --> Dep1[Render Setup]
    Deploy --> Dep2[Environment Config]
    Deploy --> Dep3[Live Testing]

    Present --> Pres1[Demo Script]
    Present --> Pres2[Defense Prep]
    Present --> Pres3[Portfolio Submission]

    classDef phase fill:#e3f2fd,stroke:#1565c0,color:#111;
    classDef step fill:#f5f5f5,stroke:#666,color:#111;
    classDef detail fill:#f1f8e9,stroke:#558b2f,color:#111;

    class Plan,Design,Implement,Test,Fix,Deploy,Present phase;
    class D1,D2,D3,I1,I2,I3,T1,T2,T3,Dep1,Dep2,Dep3,Pres1,Pres2,Pres3 step;
    class P1,P2,P3 detail;
```

---

## 6. Existing UML Diagrams

The repository also contains detailed UML user flow diagrams in the [Project UML Diagram](./Project_UML%20diagram/) directory. These include:

| Diagram | File | Description |
|---------|------|-------------|
| Full User Flow | [USER_FLOW_DIAGRAM.md](./Project_UML%20diagram/USER_FLOW_DIAGRAM.md) | Complete user journey with 6 section diagrams |
| Raw Mermaid Source | [user-flow.mmd](./Project_UML%20diagram/user-flow.mmd) | Raw Mermaid code for all flows |
| Authentication Flow | [sections/01-authentication-flow.md](./Project_UML%20diagram/sections/01-authentication-flow.md) | Login, register, forgot password, admin login |
| User Dashboard Flow | [sections/02-user-dashboard-flow.md](./Project_UML%20diagram/sections/02-user-dashboard-flow.md) | All dashboard features |
| Service Booking Flow | [sections/03-service-booking-flow.md](./Project_UML%20diagram/sections/03-service-booking-flow.md) | Browse, select, book, confirm |
| Donation/Request Flow | [sections/04-donation-request-flow.md](./Project_UML%20diagram/sections/04-donation-request-flow.md) | Create, post, browse, save, request |
| Admin Flow | [sections/05-admin-flow.md](./Project_UML%20diagram/sections/05-admin-flow.md) | Admin auth, dashboard, management |
| Logout Flow | [sections/06-logout-flow.md](./Project_UML%20diagram/sections/06-logout-flow.md) | User and admin logout |
| UML Image | [UML Diagram .jpeg](./Project_UML%20diagram/UML%20Diagram%20.jpeg) | Original UML diagram image |

---

## Navigation

- [Back to Documentation Home](./README.md)
- [Back to Repository Root](../README.md)
- [Back to Portfolio Home](../portfolio/README.md)
- [View Individual Portfolios](../portfolio/08-individual-portfolios/README.md)

---

*Free Sewaa — Capstone Design, Spring 2026, Ulsan College*
