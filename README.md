# Free Sewaa

A community donation platform connecting donors with people who need reusable items.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Status](https://img.shields.io/badge/Status-Final%20Sprint-blue)](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.0+-green.svg)](https://mongodb.com/)
[![Last Commit](https://img.shields.io/github/last-commit/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa)](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commits/main)

**Live site:** https://free-sewaa-qh05.onrender.com

Give away what you don't need. Find what you do — for free.

**Quick links:**
- [Documentation hub](docs/README.md)
- [Demo script](DEMO_SCRIPT.md)
- [Final review notes](FINAL_REVIEW_NOTES.md)
- [API reference](docs/API_REFERENCE.md)
- [Screenshots](assets/screenshots/)

## Live Demo

Try Free Sewaa without installing anything:

- **URL:** https://free-sewaa-qh05.onrender.com
- **User demo:** `pathakram09555@gmail.com` / `123456`
- **Admin demo:** `admin@freesewaa.local` / `admin12345`

> ⚠ The live site runs on Render free tier. It may take 30-60 seconds to wake up after inactivity.

### Features

| Feature | Description |
|---------|-------------|
| User authentication | Signup, login, logout, admin login |
| Browse items | Filter by category, view details |
| Post donations | Title, description, category, condition, image |
| Request items | Request, accept, decline, complete |
| Messaging | Conversations between donors and receivers |
| Admin panel | User management, listing moderation, stats |
| Auth flowchart | Visual auth flow diagram (html/auth-flow.html) |
| Responsive | Works on mobile and desktop |
| Tests | Jest unit tests (server/) |

---

## Screenshots

Screenshots are in [`assets/screenshots/`](assets/screenshots/). See the [capture guide](assets/screenshots/README.md) for how to take screenshots of key pages:

- Landing page, signup, dashboard
- Browse, item detail, donate form
- Messages, admin dashboard
- Mobile views

---

## Quick Start

```bash
git clone https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa.git
cd Free_Sewaa
npm install
npm start
```

Open http://localhost:3000

**Requirements:** Node.js 18+, MongoDB 6+ running locally.

---

## Demo Credentials

| Role | Email | Password |
|------|-------|----------|
| User | `pathakram09555@gmail.com` | `123456` |
| Admin | `admin@freesewaa.local` | `admin12345` |

---

## Project Structure

```
Free_Sewaa/
├── css/            # Stylesheets (auth.css, style.css, theme.css)
├── html/           # Frontend pages (landing, auth, browse, donate, admin, etc.)
├── js/             # Frontend JavaScript
├── server/         # Backend server and tests
├── assets/         # Screenshots and media
├── docs/           # Full project documentation
├── .github/        # Issue templates and CI config
├── package.json    # Root package config
├── DEMO_SCRIPT.md  # Demo presentation script
└── README.md       # This file
```

---

## Documentation

Full documentation is in the [docs/](docs/README.md) folder:

| Section | Documents |
|---------|-----------|
| Project Info | Overview · Requirements · Personas · User Stories |
| Architecture | System Design · Database · API · Authentication |
| Guides | Frontend · Backend · Admin · Setup · Deployment |
| Testing | Testing Plan · QA Checklist |
| Management | Roadmap · Risks · Maintenance · Future Plans |

---

## Tech Stack

**Frontend:** HTML5, CSS3, Vanilla JS · **Backend:** Node.js · **Database:** MongoDB

---

## Team

Capstone Design — Spring 2026, Ulsan College

| Role | Name |
|------|------|
| Project Manager | Ram Pathak |
| Lead Developer | Sujan Tamang |
| Demo Driver | Mohan Khadka |
| QA Lead | Sujan Shrestha |
| Scribe | Swarnim Jung Karki |

---

## License

MIT
