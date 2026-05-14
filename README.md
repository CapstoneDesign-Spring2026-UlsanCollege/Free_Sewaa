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
- 🔔 Password hashing with bcrypt (in progress)
- ✅ Unit testing with Jest (in progress)

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

### 3. Access the App
Open your browser and go to:
- **Landing page:** http://localhost:3000
- **Sign in:** http://localhost:3000/signin.html
- **App:** http://localhost:3000/app.html

**Demo Account (for presentation):**
```text
Email: pathakram09555@gmail.com
Password: 123456
```

> **Tip:** Use this account for presentation demo.

---

## 📖 API Documentation

### Base URL
```
http://localhost:3000/api
```

### Authentication Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/auth/signup` | Register new user |
| POST | `/auth/signin` | Login user |
| POST | `/auth/google-demo` | Demo Google login |
| POST | `/auth/logout` | Logout user |

### State Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/state?userId={id}` | Get user state |
| PUT | `/state?userId={id}` | Update user state |

### Health Check

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/health` | Server health status |

### Request/Response Examples

**Signup:**
```json
POST /api/auth/signup
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Signin:**
```json
POST /api/auth/signin
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "user": { "id": "user-123", "name": "John Doe", ... },
  "auth": { "userId": "user-123", "isAuthenticated": true }
}
```

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

## 📄 Documentation

| Category | Document | Description |
|----------|----------|-------------|
| **Overview** | [PROJECT_IDEA_PITCH.md](docs/PROJECT/PROJECT_IDEA_PITCH.md) | Project concept and goals |
| | [USER_STORIES.md](docs/PROJECT/USER_STORIES.md) | User stories and flows |
| | [GLOSSARY.md](docs/PROJECT/GLOSSARY.md) | Domain and technical terms defined |
| | [FINAL_SUBMISSION_INDEX.md](docs/PROJECT/FINAL_SUBMISSION_INDEX.md) | Master index of all submission links |
| **Architecture** | [SYSTEM_ARCHITECTURE.md](docs/DESIGN/SYSTEM_ARCHITECTURE.md) | System architecture overview |
| | [BACKEND_PLAN.md](docs/DESIGN/BACKEND_PLAN.md) | Backend development plan |
| | [DATABASE_SCHEMA.md](docs/DATABASE_SCHEMA.md) | Data models, collections, relationships |
| | [API_REFERENCE.md](docs/API_REFERENCE.md) | Complete API endpoint reference |
| **Deployment** | [DEPLOYMENT.md](docs/DESIGN/DEPLOYMENT.md) | Deployment guide and configuration |
| | [DEPLOYMENT_CHECKLIST.md](docs/DEPLOYMENT_CHECKLIST.md) | Step-by-step deploy checklist |
| | [MONGODB_SETUP.md](docs/DESIGN/MONGODB_SETUP.md) | MongoDB Atlas setup guide |
| **Testing** | [TESTING_STRATEGY.md](docs/TESTING_STRATEGY.md) | Overall test plan: unit, integration, UI, a11y |
| | [TEST_CHECKLIST.md](docs/PROJECT/TEST_CHECKLIST.md) | MVP test checklist with evidence |
| | [CODE_COVERAGE.md](docs/PROGRESS/week%2011/CODE_COVERAGE.md) | Jest setup, test plan, 70% coverage target |
| | [ACCESSIBILITY_TESTING.md](docs/PROGRESS/week%2011/ACCESSIBILITY_TESTING.md) | WCAG 2.1 AA audit, keyboard nav, screen reader |
| | [BUG_TRIAGE.md](docs/PROJECT/BUG_TRIAGE.md) | Bug triage with severity guide |
| | [BUG_LIST.md](docs/PROGRESS/week%2011/BUG_LIST.md) | Current bug list (P0-P2) |
| **Sprints** | [Weekly Sprint Packets](docs/sprints/) | All weekly sprint packets |
| | [Week 1 - Onboarding](docs/sprints/Weekly%20Sprint%20Packet%20—%20Week%201.md) | Setup & planning |
| | [Week 2 - Reset](docs/sprints/Weekly%20Sprint%20Packet%20—%20Week%202.md) | Planning & frontend |
| | [Week 3 - Frontend MVP](docs/sprints/Weekly%20Sprint%20Packet%20—%20Week%203%20.md) | MVP demo ready |
| | [Week 4 - Browse](docs/sprints/Weekly%20Sprint%20Packet%20—%20Week%204.md) | Browse & filtering |
| | [Week 5 - Premium UI](docs/sprints/Weekly%20Sprint%20Packet%20—%20Week%205.md) | Redesign complete |
| | [Week 6 - Backend](docs/sprints/Weekly%20Sprint%20Packet%20—%20Week%206.md) | API & MongoDB |
| | [Week 7 - Midterm Prep](docs/sprints/Weekly%20Sprint%20Packet%20—%20Week%207.md) | Presentation ready |
| | [Week 8 - Midterm](docs/sprints/Weekly%20Sprint%20Packet%20—%20Week%208.md) | Presented successfully |
| | [Week 9 - Polish](docs/sprints/Weekly%20Sprint%20Packet%20—%20Week%209.md) | Testing & fixes |
| | [Week 10 - Bug Triage](docs/sprints/Weekly%20Sprint%20Packet%20—%20Week%2010.md) | AI workflow & bugs |
| | [Week 11 - MVP Verification](docs/PROGRESS/week%2011/README.md) | MVP verification, demo script, bug list, ownership |
| **Management** | [PROJECT_BOARD.md](PROJECT_BOARD.md) | Project board and task tracking |
| | [RISK_REGISTER.md](docs/PROJECT/RISK_REGISTER.md) | Project risks, impact, and mitigation |
| | [LESSONS_LEARNED.md](docs/PROJECT/LESSONS_LEARNED.md) | Retrospective and improvements |
| | [TEAM_CONTRIBUTIONS.md](docs/PROJECT/TEAM_CONTRIBUTIONS.md) | Team contribution receipts |
| | [AI_CODE_OWNERSHIP_AUDIT.md](docs/AI_CODE_OWNERSHIP_AUDIT.md) | AI use and code ownership check |
| **Templates** | [.github/ISSUE_TEMPLATE/bug_report.md](.github/ISSUE_TEMPLATE/bug_report.md) | Bug report template |
| | [.github/pull_request_template.md](.github/pull_request_template.md) | Pull request template with AI note |

> **Weekly Role Rotation:** Roles (Project Manager, Scribe, QA Lead, Demo Driver) rotate each sprint per class policy.

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

---

## 📅 Weekly Sprints

| Week | Title | Link |
|------|-------|------|
| 1 | Onboarding & Setup | [Sprint Packet](docs/sprints/Weekly%20Sprint%20Packet%20—%20Week%201.md) |
| 2 | Reset Week & Planning | [Sprint Packet](docs/sprints/Weekly%20Sprint%20Packet%20—%20Week%202.md) |
| 3 | Frontend MVP | [Sprint Packet](docs/sprints/Weekly%20Sprint%20Packet%20—%20Week%203%20.md) |
| 4 | Browse & Filtering | [Sprint Packet](docs/sprints/Weekly%20Sprint%20Packet%20—%20Week%204.md) |
| 5 | Premium UI Redesign | [Sprint Packet](docs/sprints/Weekly%20Sprint%20Packet%20—%20Week%205.md) |
| 6 | Backend Foundation | [Sprint Packet](docs/sprints/Weekly%20Sprint%20Packet%20—%20Week%206.md) |
| 7 | Midterm Preparation | [Sprint Packet](docs/sprints/Weekly%20Sprint%20Packet%20—%20Week%207.md) |
| 8 | Midterm Presentation | [Sprint Packet](docs/sprints/Weekly%20Sprint%20Packet%20—%20Week%208.md) |
| 9 | Polish & Testing | [Sprint Packet](docs/sprints/Weekly%20Sprint%20Packet%20—%20Week%209.md) |
| 10 | Bug Triage & AI Workflow | [Sprint Packet](docs/sprints/Weekly%20Sprint%20Packet%20—%20Week%2010.md) |
| 11 | MVP Verification | [Overview](docs/PROGRESS/week%2011/README.md) |

---

## 📜 License

This project is licensed under the MIT License.

---

## 🙏 Mission

> To build a platform that connects communities, reduces waste, and helps people in need by making sharing simple and accessible.


