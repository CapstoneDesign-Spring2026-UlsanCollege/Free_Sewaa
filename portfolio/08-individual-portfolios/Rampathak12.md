# Rampathak12 — Backend and Core Logic

I built the backend infrastructure for Free Sewaa — the Express.js server, MongoDB database models, authentication system, and API endpoints that power the entire platform. My work ensures that users can sign up, log in, post items, make requests, and send messages reliably.

## 1. My Role

- **Name:** Ram Pathak (Rampathak12)
- **Team:** Capstone Design — Spring 2026, Ulsan College
- **Project:** Free Sewaa
- **Main responsibilities:** Backend API development, database design, authentication logic, server architecture
- **Role during the semester:** Project Manager (Weeks 3, 6, 8, 9), Backend Lead

## 2. My Strongest Contributions

| Contribution | What I personally did | Evidence |
|---|---|---|
| Express.js API | Built all RESTful routes: auth, items, requests, messages, users | [API Reference](../../docs/DESIGN/API_REFERENCE.md) |
| MongoDB database | Designed schema for users, items, requests, messages collections | [Database Schema](../../docs/DESIGN/DATABASE_SCHEMA.md) |
| JWT authentication | Implemented signup, signin, token verification middleware | [Auth docs](../../docs/AUTHENTICATION.md) |
| Server structure | Created server.js, middleware pipeline, route organization | [Server code](../../server/server.js) |
| Backend documentation | Wrote backend plan, API reference, auth flow docs | [Backend Guide](../../docs/BACKEND_GUIDE.md) |

## 3. One Area I Can Explain Clearly

- **Area:** JWT Authentication Flow
- **File/folder/doc:** [server/server.js](../../server/server.js), [Auth docs](../../docs/AUTHENTICATION.md)
- **What it does:** Authenticates users and protects API routes from unauthorized access
- **How it works:** On signup/login, server generates a signed JWT token. Protected routes verify the token via middleware before processing requests.
- **How it was tested:** Manual testing with browser login/logout flows; 3 Jest tests verify signup validation
- **One limitation:** Session is lost on page refresh — token is not persisted to localStorage or cookies reliably
- **Evidence:** [Bug 11 — Session lost after refresh](../../docs/ISSUES/BUGS/bug11.md), [Testing Plan](../../docs/TESTING_PLAN.md)

## 4. My AI Use and Review

- **AI tools used:** GitHub Copilot
- **What AI helped with:** Generating route handler templates, Mongoose schema definitions, boilerplate middleware code
- **What I personally checked:** Every route's request/response format, error handling paths, database query logic
- **What I personally changed:** Fixed incorrect endpoint paths, added missing validation, corrected MongoDB query syntax
- **How I tested or verified it:** Ran server locally, tested endpoints with browser and curl, verified database writes in MongoDB Atlas
- **One area I still need to improve:** Error responses are inconsistent across endpoints — some return JSON, some return plain text

## 5. One Problem I Helped Solve

- **Problem:** Server could not connect to MongoDB Atlas on first deployment
- **Why it mattered:** The entire platform depends on the database — without it, no user could sign up, browse items, or send messages
- **What I did:** Debugged the connection string format, found a missing environment variable, and corrected the MongoDB URI in `.env`
- **What changed:** Server now connects to Atlas reliably on every start
- **Evidence:** [Environment Setup](../../docs/ENVIRONMENT_SETUP.md), [MongoDB Setup](../../docs/DESIGN/MONGODB_SETUP.md)

## 6. Reflection

### What I learned
Structuring a Node.js/Express backend with clean separation of routes, models, and middleware taught me how real applications are organized. I also learned MongoDB aggregation and query optimization.

### What I am proud of
The backend architecture is modular and consistent. Every route handler follows the same pattern, making it easy for any team member to add new endpoints.

### What I should have done better
Added proper error handling and input validation from the start. Some endpoints return inconsistent error responses that need refactoring.

### What I would improve next
Implement proper password hashing with bcrypt, add request rate limiting, and document the API with OpenAPI/Swagger.

### One skill I want to continue developing
Advanced MongoDB query optimization, indexing strategies, and performance tuning.

## 7. Presentation Readiness

- [x] I can explain my main contribution: backend API and database
- [x] I can explain one technical area clearly: JWT authentication flow
- [x] I know the final MVP demo flow (landing → signup → browse → donate → request → messages → admin)
- [x] I know at least one bug or limitation: session lost on page refresh
- [x] I reviewed the technical defense questions
- [x] I can answer honestly if I do not know something

## 8. My Best Evidence Links

1. [API Reference](../../docs/DESIGN/API_REFERENCE.md) — All backend endpoints
2. [Database Schema](../../docs/DESIGN/DATABASE_SCHEMA.md) — Collection design
3. [Backend Plan](../../docs/DESIGN/BACKEND_PLAN.md) — Server architecture
4. [Authentication Docs](../../docs/AUTHENTICATION.md) — Auth flow
5. [Server Code](../../server/server.js) — Main server file

---
[Back to Individual Portfolios](./README.md) | [Back to Portfolio Home](../README.md)
