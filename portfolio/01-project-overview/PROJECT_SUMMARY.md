# Project Summary

## Overview

Free Sewaa is a web-based community donation platform developed as a capstone project by a team of 5 students at Ulsan College (Spring 2026). The platform connects donors with people in need, facilitating the sharing of reusable items through a user-friendly interface.

**Live Demo:** [free-sewaa-qh05.onrender.com](https://free-sewaa-qh05.onrender.com)  
**Repository:** [github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa)

## Problem Statement

Many usable items go to waste while community members lack access to essential goods. There is no centralized, trustworthy platform for item donation that ensures transparency, security, and ease of use for both donors and recipients.

## Target Users

- **Donors** — Individuals seeking to donate items (clothes, electronics, household goods)
- **Recipients** — People in need of essential items
- **Administrators** — Platform managers overseeing content and users

## Features

| Feature | Description | Evidence |
|---------|-------------|----------|
| User signup/login | JWT-based authentication with secure session management | [Authentication docs](../../docs/AUTHENTICATION.md), [server/auth](../../server/) |
| Item donation posting | Post items with categories, descriptions, and images | [Browse/Donate pages](../../html/), [server/items](../../server/) |
| Item request system | Browse available items and submit requests | [Requests docs](../../docs/USER_FLOW.md), [server/requests](../../server/) |
| Messaging | Direct communication between donors and requesters | [Messages UI](../../html/messages.html), [server/messages](../../server/) |
| User dashboard | Track donations, requests, and account activity | [Dashboard](../../html/user_panel.html), [Profile](../../html/profile.html) |
| Admin panel | User management, content moderation, listing oversight | [Admin panel](../../admin-panel.js), [Admin guide](../../docs/ADMIN_GUIDE.md) |
| Responsive design | Mobile and desktop support with consistent UX | [CSS theme](../../css/theme.css), [Mobile checklist](../../MOBILE_TESTING_CHECKLIST.md) |
| Documentation & testing | QA checklists, test plans, bug reports | [docs/](../../docs/), [QA checklists](../../MANUAL_TESTING_CHECKLIST.md) |

## Technology Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML/CSS/JS, React (migration in progress), Vite |
| Backend | Node.js, Express.js |
| Database | MongoDB (Atlas), Mongoose |
| Authentication | JWT, bcrypt (installed) |
| Deployment | Render |
| Testing | Jest, Supertest |

## Key Project Links

- [README](../../README.md) — Project overview and badges
- [docs/README.md](../../docs/README.md) — Documentation hub
- [docs/PROJECT/PROJECT.md](../../docs/PROJECT/PROJECT.md) — Full project document
- [docs/PROJECT/PROJECT_IDEA_PITCH.md](../../docs/PROJECT/PROJECT_IDEA_PITCH.md) — Original project pitch
- [ROADMAP.md](../../ROADMAP.md) — Project timeline and phases
- [PROJECT_BOARD.md](../../PROJECT_BOARD.md) — Kanban project board
