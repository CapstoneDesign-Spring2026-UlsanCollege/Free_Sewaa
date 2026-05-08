# Free Sewaa - Team Contributions

> **Purpose:** Each team member can point to specific code/files they worked on and explain them.

---

## 👤 Ram Pathak (@Rampathak12) - Backend Lead

### What I Worked On
- Express server setup and routing (`server/server.js`)
- MongoDB Atlas connection and database models
- REST API endpoints for authentication, donations, and requests
- Backend security (password hashing preparation)

### Files I Own
| File | What it does | Evidence |
|------|----------------|----------|
| `server/server.js` | Main Express server with all API routes | [PR #78](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/pull/78) |
| `server/package.json` | Node.js dependencies and scripts | [Commits](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commits/main) |
| `docs/DESIGN/MONGODB_SETUP.md` | MongoDB setup documentation | [Commits](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commits/main) |

### What I Can Explain
- How the Express server handles routing and middleware
- How MongoDB models are structured
- How authentication endpoints work (signup, login, session)
- How donation and request APIs interact with the database

### AI Assistance Disclosure
- **GitHub Copilot** helped with Express routing boilerplate and async/await patterns
- I reviewed and modified all code to fit our specific needs
- Added custom error handling and validation logic

### Testing/Checks I Performed
- Tested API endpoints using Postman
- Verified MongoDB connection and data persistence
- Checked error responses for invalid inputs

### What Still Needs Improvement
- Password hashing not yet implemented (Issue #68)
- Need unit tests for backend APIs
- Input validation needs strengthening

---

## 👤 Sujan Tamang (@SujanTamang20) - Frontend Developer

### What I Worked On
- HTML pages: browse, donate, profile, auth, item detail
- Frontend structure and navigation flow
- Form validation and user input handling
- Sprint documentation (Weeks 1-10)

### Files I Own
| File | What it does | Evidence |
|------|----------------|----------|
| `html/browse.html` | Browse donation items page | [Commits](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commits/main) |
| `html/donate.html` | Donation form page | [Commits](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commits/main) |
| `html/profile.html` | User profile page | [Commits](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commits/main) |
| `html/auth.html` | Login/signup page | [Commits](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commits/main) |
| `docs/sprints/SPRINT_*.md` | Weekly sprint packets | Sprint docs folder |

### What I Can Explain
- HTML structure of all main pages
- How forms collect user input
- How pages link together in the user flow
- How sprint documentation tracks our progress

### AI Assistance Disclosure
- **GitHub Copilot** helped with HTML boilerplate and form structure
- I customized all forms for our specific data needs
- Added semantic HTML and accessibility considerations

### Testing/Checks I Performed
- Tested all forms with valid and invalid inputs
- Verified navigation flow between pages
- Checked responsive layout on different screen sizes

### What Still Needs Improvement
- Form validation needs JavaScript enhancement
- Mobile responsiveness can be improved
- Need to add loading states

---

## 👤 Sujan Shrestha (@suzmoon) - Backend Developer

### What I Worked On
- JavaScript authentication logic (`js/auth.js`)
- Frontend-backend API integration
- User session management
- Package dependencies and configuration

### Files I Own
| File | What it does | Evidence |
|------|----------------|----------|
| `js/auth.js` | Login/signup form validation and API calls | [Commits](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commits/main) |
| `server/server.js` | API integration and middleware | [PR #78](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/pull/78) |
| `server/package.json` | Node.js dependencies | [Commits](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commits/main) |

### What I Can Explain
- How authentication flow works from frontend to backend
- How API requests are structured and sent
- How responses are handled and displayed to users
- How session management keeps users logged in

### AI Assistance Disclosure
- **GitHub Copilot** helped with fetch API patterns and error handling
- I added custom validation logic and user feedback messages
- Reviewed all AI-generated code for security issues

### Testing/Checks I Performed
- Tested signup flow with various inputs
- Verified login persists across page refreshes
- Checked error messages display correctly

### What Still Needs Improvement
- Password hashing implementation (Issue #68)
- Session timeout configuration
- Input sanitization on API endpoints

---

## 👤 Swarnim Jung Karki (@Swarnimkarki50) - Frontend & Design Lead

### What I Worked On
- CSS styling for all pages (`css/style.css`, `css/theme.css`, `css/auth.css`)
- Responsive design and theme implementation
- Documentation (README, CONTRIBUTORS, AI audit)
- Board Reset Kanban app (`board/`)

### Files I Own
| File | What it does | Evidence |
|------|----------------|----------|
| `css/style.css` | Main styling and layout | [Commits](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commits/main) |
| `css/theme.css` | Color scheme and CSS variables | [Commits](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commits/main) |
| `css/auth.css` | Authentication page styles | [Commits](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commits/main) |
| `docs/AI_CODE_OWNERSHIP_AUDIT.md` | AI audit documentation | [Commits](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commits/main) |
| `board/App.jsx` | Kanban board React app | [Commit cc84b3f](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/cc84b3f) |

### What I Can Explain
- How CSS variables create a consistent theme
- How responsive breakpoints work across pages
- How the Kanban board DnD kit integration works
- How documentation files are structured and linked

### AI Assistance Disclosure
- **GitHub Copilot** helped with CSS flexbox/grid layouts and React component structure
- I tested all styling across browsers and adjusted spacing/colors
- Added custom animations and transitions

### Testing/Checks I Performed
- Tested responsive design at multiple breakpoints
- Verified color contrast meets accessibility standards
- Checked cross-browser compatibility
- Tested Kanban board drag-and-drop functionality

### What Still Needs Improvement
- Dark mode toggle (nice-to-have)
- More comprehensive CSS documentation
- Kanban board needs localStorage persistence

---

## 👤 Mohan Khadka (@Mohankhadkaa) - Frontend Developer

### What I Worked On
- JavaScript interactivity (`js/index.js`, `js/site.js`)
- DOM manipulation and dynamic content loading
- Site-wide functionality and utilities
- Browse page item rendering

### Files I Own
| File | What it does | Evidence |
|------|----------------|----------|
| `js/index.js` | Homepage interactions and DOM manipulation | [Commits](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commits/main) |
| `js/site.js` | Global site functionality and utilities | [Commits](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commits/main) |
| `html/browse.html` | Item rendering and browse functionality | [Commits](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commits/main) |

### What I Can Explain
- How JavaScript manipulates the DOM to show/hide elements
- How items are dynamically loaded and displayed
- How site-wide utilities work (navigation, modals, etc.)
- How event listeners handle user interactions

### AI Assistance Disclosure
- **GitHub Copilot** helped with DOM manipulation patterns and event handling
- I debugged all code and fixed event listener issues
- Added custom animations and user feedback

### Testing/Checks I Performed
- Tested all interactive elements on the homepage
- Verified browse page loads items correctly
- Checked JavaScript doesn't throw console errors
- Tested cross-browser functionality

### What Still Needs Improvement
- Add loading states for async operations
- Improve error handling in JavaScript
- Add unit tests for JS functions

---

## 📋 Individual Contribution Receipts

Each team member has:
- ✅ Specific files they can point to and explain
- ✅ Evidence linked (PRs, commits, issues)
- ✅ Clear understanding of their code
- ✅ Disclosed AI assistance
- ✅ Performed testing/debugging
- ✅ Identified areas for improvement

---

*Last Updated: Week 10 - Final Submission Prep*
