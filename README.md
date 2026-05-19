# Free Sewaa

> A community donation platform connecting donors with people who need reusable items.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Status: In Progress](https://img.shields.io/badge/Status-In%20Progress-blue)](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.0+-green.svg)](https://mongodb.com/)
[![Last Commit](https://img.shields.io/github/last-commit/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa)](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commits/main)
[![Issues](https://img.shields.io/github/issues/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa)](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/issues)
[![Pull Requests](https://img.shields.io/github/issues-pr/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa)](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/pulls)

## 🎓 Capstone Info

- **Course:** Capstone Design — Spring 2026, Ulsan College
- **Team name:** Free Sewaa Team
- **Sprint board:** https://github.com/orgs/CapstoneDesign-Spring2026-UlsanCollege/projects/14
- **Submission format:** Sprint Packet Issues submitted every Friday

---

## Live Deployment

This project is deployed from the GitHub `main` branch using Render.

- Live website: https://free-sewaa-qh05.onrender.com
- Signup page: https://free-sewaa-qh05.onrender.com/signup.html
- Admin login: https://free-sewaa-qh05.onrender.com/admin_login.html

⚠️ **Admin demo account (demo-only, never use real credentials in public repo):**

```text
Email: admin@freesewaa.local
Password: admin12345
```

> User demo account: See Quick Start below.

---

## 🎯 About

**Free Sewaa** is a community-based donation platform that enables people to give away usable items for free to those who need them. The mission is to reduce waste, support communities, and make helping others simple and accessible.

### Features
- 🔐 User authentication (signup/login) with JWT
- 📦 Browse available donation items with search and category filtering
- 🎁 Post items for donation with image upload
- 📋 Request items with contact donor flow
- 💬 Direct messaging between users
- 🏠 Premium UI design (Airbnb/Karrot inspired)
- 📱 Responsive design (mobile/tablet/desktop)
- 🔧 Backend API (Node.js/Express + MongoDB)
- 🔎 Admin dashboard for management
- 📊 User profile dashboard (My Items/My Requests)
- 🔔 Password hashing with bcrypt
- ✅ Unit testing with Jest

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- MongoDB Atlas account (or local MongoDB)

### 1. Clone the Repository
```bash
git clone https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa.git
cd Free_Sewaa
```

### 2. Install Dependencies & Run Backend
```bash
npm install

# Create .env file (optional - works without it for demo)
# Add MONGO_URI for production database connection

# Start server
npm start
```

The backend runs on `http://localhost:3000`

> Full API docs at [docs/API_REFERENCE.md](docs/API_REFERENCE.md)

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | HTML5, CSS3, Vanilla JavaScript |
| **Backend** | Node.js, Express.js |
| **Database** | JSON file storage (production: MongoDB ready) |
| **Deployment** | Ready for Vercel, Render, Railway |

---

## 📁 Project Structure

```
Free_Sewaa/
├── .github/                    # GitHub templates & workflows
│   ├── ISSUE_TEMPLATE/         # Issue templates
│   ├── pull_request_template.md
│   └── workflows/              # CI/CD workflows
├── docs/                       # Documentation
│   ├── DESIGN/                 # Design documents
│   ├── ISSUES/                 # Issue tracking
│   ├── PROGRESS/               # MVP progress
│   ├── PROJECT/                # Project docs
│   └── sprints/                # Sprint packets
├── server/                     # Node.js backend
│   ├── server.js               # Express server
│   └── package.json            # Dependencies
├── html/                       # Frontend pages (18 pages)
│   ├── index.html              # Landing page
│   ├── signin.html             # Sign in
│   ├── signup.html             # Sign up
│   ├── app.html                # Main app after login
│   ├── browse.html             # Browse items
│   ├── donate.html             # Post donation
│   └── ... (12 more pages)
├── css/                        # Stylesheets
│   ├── style.css               # Landing page styles
│   ├── theme.css               # App pages styles
│   └── auth.css                # Auth pages styles
├── js/                         # Frontend scripts
│   ├── index.js                # Landing page JS
│   ├── site.js                 # App pages JS
│   └── auth.js                 # Auth pages JS
├── README.md
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
└── ROADMAP.md
```

---

## 🔧 Environment Variables

Create a `.env` file in the root directory:

```env
# Server Configuration
PORT=3000

# Database (optional - uses local JSON if not set)
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/free-sewaa

# For MySQL (alternative)
# MYSQL_URI=mysql://user:password@localhost:3306/freesewaa
```

> **Note:** The app works without any environment variables for local demo. Add database connection strings when ready for production.

---

## 👥 Team

| Role | Name | Responsibilities |
|------|------|------------------|
| Project Manager | Ram Pathak | Overall coordination, timeline management |
| Lead Developer | Sujan Tamang | Frontend & backend development |
| Demo Driver | Mohan Khadka | Live demo presentation, troubleshooting |
| QA Lead | Sujan Shrestha | Testing, bug verification |
| Scribe / Documentation | Swarnim Jung Karki | Documentation, presentations, repo management |

### Team Presentation Roles for Midterm
- **Pitch:** Ram Pathak, Sujan Tamang
- **Demo:** Mohan Khadka
- **Q&A:** All team members
- **Brochure:** Swarnim Jung Karki

---

## 📚 Documentation

> **Start here:** [User Guide](docs/USER_GUIDE.md) · [Developer Guide](docs/DEVELOPER_GUIDE.md) · [API Reference](docs/API_REFERENCE.md)

### Overview

- [Project Idea Pitch](docs/PROJECT/PROJECT_IDEA_PITCH.md) — what we are building
- [User Stories](docs/PROJECT/USER_STORIES.md) — user flows
- [Glossary](docs/PROJECT/GLOSSARY.md) — terms explained
- [Final Submission Index](docs/PROJECT/FINAL_SUBMISSION_INDEX.md) — all deliverables
- [User Guide](docs/USER_GUIDE.md) — how to use the app

### Architecture

- [System Architecture](docs/DESIGN/SYSTEM_ARCHITECTURE.md) — system overview
- [Backend Plan](docs/DESIGN/BACKEND_PLAN.md) — server design
- [Database Schema](docs/DATABASE_SCHEMA.md) — collections and fields
- [API Reference](docs/API_REFERENCE.md) — all endpoints
- [Developer Guide](docs/DEVELOPER_GUIDE.md) — setup and common errors

### Deployment

- [Deployment Guide](docs/DESIGN/DEPLOYMENT.md)
- [Deployment Checklist](docs/DEPLOYMENT_CHECKLIST.md)
- [MongoDB Setup](docs/DESIGN/MONGODB_SETUP.md)

### Testing & Bugs

- [Testing Strategy](docs/TESTING_STRATEGY.md)
- [Test Checklist](docs/PROJECT/TEST_CHECKLIST.md)
- [Code Coverage](docs/PROGRESS/week11/CODE_COVERAGE.md)
- [Accessibility Testing](docs/PROGRESS/week11/ACCESSIBILITY_TESTING.md)
- [Bug Triage](docs/PROJECT/BUG_TRIAGE.md)
- [Bug List](docs/PROGRESS/week11/BUG_LIST.md)
- [Test Evidence](docs/week11/TEST_EVIDENCE.md)
- [Screenshots](docs/assets/screenshots/)

### Sprints

| Week | Title | Link |
|------|-------|------|
| 1 | Onboarding | [Packet](docs/sprints/Weekly%20Sprint%20Packet%20—%20Week%201.md) |
| 2 | Planning | [Packet](docs/sprints/Weekly%20Sprint%20Packet%20—%20Week%202.md) |
| 3 | Frontend MVP | [Packet](docs/sprints/Weekly%20Sprint%20Packet%20—%20Week%203%20.md) |
| 4 | Browse & Filter | [Packet](docs/sprints/Weekly%20Sprint%20Packet%20—%20Week%204.md) |
| 5 | UI Redesign | [Packet](docs/sprints/Weekly%20Sprint%20Packet%20—%20Week%205.md) |
| 6 | Backend | [Packet](docs/sprints/Weekly%20Sprint%20Packet%20—%20Week%206.md) |
| 7 | Midterm Prep | [Packet](docs/sprints/Weekly%20Sprint%20Packet%20—%20Week%207.md) |
| 8 | Midterm | [Packet](docs/sprints/Weekly%20Sprint%20Packet%20—%20Week%208.md) |
| 9 | Polish | [Packet](docs/sprints/Weekly%20Sprint%20Packet%20—%20Week%209.md) |
| 10 | Bug Triage | [Packet](docs/sprints/Weekly%20Sprint%20Packet%20—%20Week%2010.md) |
| 11 | MVP Verification | [Overview](docs/PROGRESS/week11/README.md) · [Demo](docs/week11/DEMO_SCRIPT.md) · [Checklist](docs/week11/MVP_CHECKLIST.md) |
| 12 | Final | [Overview](docs/PROGRESS/week12/README.md) · [Demo](docs/PROGRESS/week12/FINAL_DEMO_SCRIPT.md) · [Checklist](docs/PROGRESS/week12/FINAL_SUBMISSION_CHECKLIST.md) |

### Project Management

- [Project Board](PROJECT_BOARD.md)
- [Risk Register](docs/PROJECT/RISK_REGISTER.md)
- [Lessons Learned](docs/PROJECT/LESSONS_LEARNED.md)
- [Team Contributions](docs/PROJECT/TEAM_CONTRIBUTIONS.md)
- [AI Code Audit](docs/AI_CODE_OWNERSHIP_AUDIT.md)
- [Release Notes](docs/RELEASE_NOTES.md)

### Templates

- [Bug Report](.github/ISSUE_TEMPLATE/bug_report.md)
- [Pull Request](.github/pull_request_template.md)

---

## 📋 Quick Reference

- **Live site:** https://free-sewaa-qh05.onrender.com
- **Signup page:** https://free-sewaa-qh05.onrender.com/signup.html
- **Admin login:** https://free-sewaa-qh05.onrender.com/admin_login.html
- **Demo account:** `pathakram09555@gmail.com` / `123456`
- **Key commands:** `npm install`, `npm start`
- **Key pages:** `html/index.html`, `html/app.html`, `html/browse.html`, `html/donate.html`

---

## 🔗 Links

- **Repository:** https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa
- **Project Board:** https://github.com/orgs/CapstoneDesign-Spring2026-UlsanCollege/projects/14
- **Pull Requests:** https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/pulls
- **Issues:** https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/issues

> Documentation updated May 2026 (test commit 2)

---

## 📋 Development Workflow

```
Issue → Branch → Code → PR → Review → Merge
```

1. Create an issue
2. Create a branch: `git checkout -b feature/your-feature`
3. Make changes
4. Create PR with description
5. Team reviews and merges

## 📜 License

This project is licensed under the MIT License.

---

## 🙏 Mission

> To build a platform that connects communities, reduces waste, and helps people in need by making sharing simple and accessible.


