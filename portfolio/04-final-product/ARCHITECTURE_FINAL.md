# Final Architecture

## System Overview

Free Sewaa follows a client-server architecture with a Node.js/Express backend and a frontend that combines static HTML pages with a React-based component system.

```
┌─────────────────────────────────────────────────┐
│                   Client                         │
│  ┌──────────────────┐  ┌─────────────────────┐  │
│  │  Static HTML/CSS │  │  React (Vite Build) │  │
│  │  (html/, css/,   │  │  (client/src/)      │  │
│  │   js/)           │  │                     │  │
│  └────────┬─────────┘  └──────────┬──────────┘  │
│           │                       │              │
│           └───────────┬───────────┘              │
│                       │                          │
│              HTTP Requests                        │
└───────────────────────┼──────────────────────────┘
                        │
┌───────────────────────┼──────────────────────────┐
│              Express.js Server                    │
│  ┌─────────────┐  ┌──────────────┐               │
│  │  API Routes │  │  Middleware  │               │
│  │  - Auth     │  │  - JWT Auth  │               │
│  │  - Items    │  │  - CORS      │               │
│  │  - Requests │  │  - Body Parse│               │
│  │  - Messages │  └──────────────┘               │
│  │  - Users    │                                 │
│  └──────┬──────┘                                 │
│         │                                         │
│  ┌──────┴──────┐                                 │
│  │  Mongoose   │                                 │
│  │  ODM        │                                 │
│  └──────┬──────┘                                 │
└─────────┼────────────────────────────────────────┘
          │
┌─────────┴────────────────────────────────────────┐
│              MongoDB Atlas                         │
│  ┌──────────┐ ┌──────────┐ ┌──────────────────┐  │
│  │  users   │ │  items   │ │  requests        │  │
│  ├──────────┤ ├──────────┤ ├──────────────────┤  │
│  │  messages│ │  (chats) │ │  (notifications) │  │
│  └──────────┘ └──────────┘ └──────────────────┘  │
└──────────────────────────────────────────────────┘
```

## Frontend

- **Static Pages:** HTML/CSS/JS in `html/`, `css/`, `js/` — 18+ pages including landing, auth, browse, donate, dashboard, admin
- **React Migration:** Client-side React app in `client/` built with Vite
- **Responsive Design:** Mobile-first CSS with touch targets, iOS zoom prevention
- **States:** Loading, empty, error, and edge case handling across all pages

## Backend

- **Framework:** Express.js running on Node.js
- **API Style:** RESTful JSON endpoints
- **Authentication:** JWT tokens with bcrypt (installed but not yet integrated for password hashing)
- **Key Endpoints:**
  - `POST /api/signup` — Create user account
  - `POST /api/signin` — Authenticate user
  - `GET/POST /api/items` — List and create items
  - `POST /api/requests` — Submit item request
  - `GET/POST /api/messages` — Send and receive messages
  - `GET /api/users` — List users (admin)
  - `POST /api/admin/login` — Admin authentication

## Database

- **Provider:** MongoDB Atlas (free tier)
- **ODM:** Mongoose
- **Collections:**
  - `users` — User accounts and profiles
  - `items` — Donation listings
  - `requests` — Item requests
  - `messages` — User communications

## Deployment

- **Platform:** Render (free tier)
- **Config:** `render.yaml` with automatic GitHub deploys
- **Build:** `npm ci && npm run build` (Vite for React)
- **Start:** `npm start`

## Architecture Diagrams

- [System Architecture (Docs)](../../docs/SYSTEM_ARCHITECTURE.md) — Full ASCII architecture diagram
- [System Architecture (Design)](../../docs/DESIGN/SYSTEM_ARCHITECTURE.md) — Layer-based architecture view
- [DESIGN_DOC-V1.md](../../docs/DESIGN/DESIGN_DOC-V1.md) — C4 architecture (context/container/component)
- [UML Diagram Collection](../../docs/Project_UML%20diagram/README.md) — UML diagrams for all sections
- [User Flow Diagram](../../docs/Project_UML%20diagram/USER_FLOW_DIAGRAM.md) — Complete user flow visualization
- [UI Flow](../../docs/DESIGN/UI_FLOW.md) — Page connection diagram (Mermaid.js)
