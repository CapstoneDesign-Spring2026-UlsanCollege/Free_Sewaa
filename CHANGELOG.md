# Changelog

All notable changes to the **Free Sewaa** project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Added
- Endpoint documentation for notification system (planned)
- WebSocket integration for real-time messaging (in planning)
- User profile dashboard with "My Items" and "My Requests" (in planning)
- Admin dashboard analytics (backlog)

### Changed
- Documentation updates for ongoing sprint work

---

## [2.0.0] - 2026-04-22

### Added
- Complete Node.js/Express backend API with RESTful endpoints
- MongoDB models (User, Item, Request, Message) with Mongoose
- JWT authentication middleware with token verification
- REST API endpoints for all core features:
  - Authentication: `/api/auth/signup`, `/api/auth/signin`, `/api/auth/logout`
  - Items: `/api/items` (CRUD operations)
  - Requests: `/api/requests` (create, update status)
  - Messages: `/api/messages` (direct messaging between users)
  - State: `/api/state` (user state management)
  - Health: `/api/health` (server status check)
- Frontend-backend connection via `js/api.js`
- MongoDB Atlas setup guide (`docs/DESIGN/MONGODB_SETUP.md`)
- Backend README with full API documentation
- Environment variable configuration (`.env.example`)
- CORS configuration for Render deployment
- Password hashing with bcrypt (planned integration)
- GitHub issues #62-71 for project board tracking

### Fixed
- Timestamp bug in donate/browse flow (donate.js now saves timestamp as number)
- Chat button not passing item context to chat page (updated browse.html)
- Form validation inconsistencies across pages
- Navigation link issues between pages

### Changed
- Frontend now connects to backend API instead of localStorage
- Backend status: Planned → Complete structure
- Repository organization: added README, CHANGELOG, ROADMAP
- Sprint Packet formatting and organization improved
- Updated README.md with current project status and live deployment links

---

## [1.5.0] - 2026-04-15

### Added
- Premium UI redesign across all pages (Airbnb/Karrot inspired)
- Authentication flow (login/signup/logout) with session management
- Dashboard-style homepage after login with dynamic welcome UI
- Browse page with search, category filtering, and item cards
- Donate page with form validation and image upload support
- Chat system UI with direct messaging interface
- Responsive design (mobile/tablet/desktop breakpoints)
- Modern gradients, button animations, and visual hierarchy
- Profile/settings page with logout functionality
- Live deployment on Render: https://free-sewaa-qh05.onrender.com
- Demo accounts (admin and user) for testing

### Fixed
- UI inconsistencies across pages (standardized design system)
- Navigation bugs and incorrect redirects
- Layout issues on mobile devices
- Gradient and color mismatch problems
- Button style inconsistencies

### Changed
- Refactored layout using Flexbox/Grid for better responsiveness
- Unified gradients and color palette across all pages
- Improved responsive breakpoints
- Standardized global CSS design system

---

## [1.0.0] - 2026-04-01

### Added
- Initial React frontend MVP (later migrated to vanilla JS/HTML/CSS)
- Post Item feature with form validation and success messages
- Browse Items view with category filtering
- Item detail modal with request/contact donor flow
- Data persistence via localStorage (frontend-only, later replaced with API)
- GitHub workflow with issue-driven development
- Project board integration (GitHub Projects v2)
- Sprint documentation system with weekly packets
- Team agreement and contribution guidelines
- CODE_OF_CONDUCT.md and CONTRIBUTING.md

### Fixed
- UI/feature work iteration to match MVP demo flow
- Merge conflicts from multiple contributors

### Changed
- Frontend architecture from React to vanilla JS for simplicity
- Project direction finalized after Week 3 review

---

## [0.3.0] - 2026-03-25

### Added
- Browse page functionality with item listing
- Category filtering system
- Item cards with modal detail view
- Navigation improvements across pages
- Week 4 Sprint Packet documentation

### Fixed
- Navigation link issues between pages

---

## [0.2.0] - 2026-03-11

### Added
- PROJECT_IDEA_PITCH.md with project concept and goals
- USER_STORIES.md with user flows and acceptance criteria
- TEAM_AGREEMENT.md defining team roles and responsibilities
- MVP_WEEK_2.md outlining weekly deliverables
- Initial project planning and scope definition
- GitHub issue templates (Weekly Sprint Packet, bug reports)
- Pull request template for consistent reviews
- Week 2 Sprint Packet with demo evidence

### Changed
- Repository structure organized following capstone-team-startup-documents template
- Team roles assigned and rotated weekly

---

## [0.1.0] - 2026-03-04

### Added
- Repository created under CapstoneDesign-Spring2026-UlsanCollege organization
- Team members added (Ram Pathak, Sujan Tamang, Swarnim Jung Karki, Sujan Shrestha, Mohan Khadka)
- Initial README with project description
- Documentation templates from professor's startup documents repo
- CODE_OF_CONDUCT.md (Contributor Covenant)
- CONTRIBUTING.md with workflow guidelines
- .github folder with:
  - Issue templates (Weekly Sprint Packet, bug report)
  - Pull request template
  - GitHub Actions workflow (CI/CD basics)
- Landing page interface (HTML/CSS)
- Week 1 Sprint Packet documenting onboarding progress

### Changed
- Repository visibility set to public
- Default branch: main

---

## [0.0.1] - 2026-03-01

### Added
- Project concept: **Free Sewaa** - Community donation platform
- Initial team formation and role assignment
- Platform mission: Reduce waste, support communities, simplify helping others

---

## Release Notes

### Version 2.0.0 - Backend Release
This release marks the completion of the backend infrastructure. The application now has a fully functional Node.js/Express API with MongoDB integration ready. Frontend has been connected to backend APIs, replacing the previous localStorage approach.

### Version 1.5.0 - Premium UI Release
Major UI/UX overhaul transforming the application from a basic template to a near-production-quality interface. Implements modern design patterns with responsive layouts and smooth interactions.

### Version 1.0.0 - MVP Release
First demoable version of the application with core user flows: post items, browse items, request items, and contact donors. Established GitHub workflow with proper issue/PR management.

### Version 0.x.x - Setup & Planning
Initial project setup following capstone-team-startup-documents template. Established team workflows, documentation standards, and sprint processes.

---

## Contributors

- **Ram Pathak** - Project Manager, Lead Developer (demo, architecture)
- **Sujan Tamang** - Frontend Developer (UI/UX, features)
- **Swarnim Jung Karki** - Scribe/Documentation, Backend Developer (docs, API)
- **Sujan Shrestha** - QA Lead (testing, quality assurance)
- **Mohan Khadka** - Demo Driver (presentations, testing)

---

*Generated for Capstone Design Studio (Spring 2026)*  
*Last updated: 2026-05-02*
