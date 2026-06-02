# Sujan Shrestha — Frontend and UI Development

I built the frontend pages that users see and interact with every day — the landing page, browse page, donate form, dashboard, and messaging interface. My work makes Free Sewaa easy to use and navigate on any device.

## 1. My Role

- **Name:** Sujan Shrestha
- **Team:** Capstone Design — Spring 2026, Ulsan College
- **Project:** Free Sewaa
- **Main responsibilities:** Frontend page development, UI components, user experience, page flow
- **Role during the semester:** Project Manager (Week 1), QA Lead, Frontend Developer

## 2. My Strongest Contributions

| Contribution | What I personally did | Evidence |
|---|---|---|
| Landing page | Built hero section, feature highlights, navigation structure | [index.html](../../html/index.html) |
| Browse page | Created item grid with category filtering and detail modal | [browse.html](../../html/browse.html) |
| Donate page | Built posting form with image upload and category selection | [donate.html](../../html/donate.html) |
| Messaging UI | Designed chat interface for donor-recipient communication | [messages.html](../../html/messages.html) |
| React migration | Converted static pages to React components with Vite | [React pages](../../client/src/generated-pages/) |

## 3. One Area I Can Explain Clearly

- **Area:** Frontend Page Architecture and Navigation Flow
- **File/folder/doc:** [UI Flow Diagram](../../docs/DESIGN/UI_FLOW.md), [Frontend Guide](../../docs/FRONTEND_GUIDE.md)
- **What it does:** Connects all 18+ pages so users can navigate from landing to donation to messaging without confusion
- **How it works:** Each page is a separate HTML file (or React component). Navigation uses anchor links and JavaScript for auth state. Forms submit to backend API endpoints via fetch.
- **How it was tested:** Manual click-through testing across all pages; verified on Chrome, Firefox, Safari, Edge
- **One limitation:** No client-side routing — page transitions cause full reloads (React Router not yet implemented)
- **Evidence:** [Browser Testing Checklist](../../BROWSER_TESTING_CHECKLIST.md), [Manual Testing Checklist](../../MANUAL_TESTING_CHECKLIST.md)

## 4. My AI Use and Review

- **AI tools used:** GitHub Copilot
- **What AI helped with:** Generating React component skeletons, HTML table structures, repetitive form field markup
- **What I personally checked:** Every form's submit logic, API endpoint matching, data flow from form to server
- **What I personally changed:** Fixed incorrect API paths in fetch calls, added loading states, improved error display
- **How I tested or verified it:** Manual form submissions, checked browser console for errors, verified data appeared in browse page
- **One area I still need to improve:** State management across pages — currently each page fetches data independently

## 5. One Problem I Helped Solve

- **Problem:** Browse page items were not rendering — the page showed empty even after donations were posted
- **Why it mattered:** Browse is the core feature of Free Sewaa. If users cannot see items, the platform is unusable.
- **What I did:** Traced the issue to a mismatch between the API response format (array of objects) and the frontend rendering code (expected nested object)
- **What changed:** Items now render correctly with title, image, category, and timestamp
- **Evidence:** [Bug 1 — Browse page items not rendering](../../docs/ISSUES/BUGS/bug1.md)

## 6. Reflection

### What I learned
Building a multi-page web application with consistent UI/UX taught me how to design for real users. I learned React component architecture and how to handle form state without external libraries.

### What I am proud of
The user flow is smooth and intuitive. A new visitor can land on the homepage, sign up, browse items, and make a request in under two minutes.

### What I should have done better
Started the React migration earlier. Doing it late in the semester meant some pages use components while others remain as static HTML.

### What I would improve next
Complete the React migration so all pages use components, add React Router for client-side navigation, and implement a shared state solution.

### One skill I want to continue developing
React best practices — particularly component composition, hooks, and performance optimization with memoization.

## 7. Presentation Readiness

- [x] I can explain my main contribution: frontend pages and UI
- [x] I can explain one technical area clearly: frontend page architecture and navigation flow
- [x] I know the final MVP demo flow (landing → signup → browse → donate → request → messages → admin)
- [x] I know at least one bug or limitation: browse page items not rendering (fixed, regression possible)
- [x] I reviewed the technical defense questions
- [x] I can answer honestly if I do not know something

## 8. My Best Evidence Links

1. [Frontend Guide](../../docs/FRONTEND_GUIDE.md) — Frontend structure and conventions
2. [UI Flow Diagram](../../docs/DESIGN/UI_FLOW.md) — Page connection diagram
3. [Frontend Design](../../docs/DESIGN/Frontend_DESIGN.md) — Design documentation
4. [Wireframes](../../docs/DESIGN/WIREFRAMES.md) — UI wireframe descriptions
5. [React Components](../../client/src/generated-pages/) — Migrated React pages

---
[Back to Individual Portfolios](./README.md) | [Back to Portfolio Home](../README.md)
