# Rampathak12 — Backend & Core Logic

## Short Summary

I focused on building the backend infrastructure for Free Sewaa, including API routes, database models, and authentication flow. This work was essential because it enabled core features like user signup, item posting, and messaging to function correctly.

## 1. My Role

- **Name:** Ram Pathak (Rampathak12)
- **Team:** Free Sewaa
- **Project:** Free Sewaa
- **Main responsibilities:** Designing and implementing the Express.js server, MongoDB schema, JWT authentication, and API endpoints.
- **Role during the semester:** Backend developer and occasional project manager (Weeks 3, 6, 8, 9).

## 2. My Strongest Contributions

| Contribution | What I personally did | Evidence |
|---|---|---|
| API routes for core features | Implemented RESTful endpoints for authentication, items, requests, and messages in `server/routes/`. | [API Reference](../../../docs/DESIGN/API_REFERENCE.md) |
| MongoDB database schema | Defined the structure for users, items, requests, and messages collections, including field types and relationships. | [Database Schema](../../../docs/DESIGN/DATABASE_SCHEMA.md) |
| Authentication flow | Added JWT-based signup and login, password hashing with bcrypt (though not fully integrated in all places), and protected route middleware. | [Authentication docs](../../../docs/AUTHENTICATION.md) |
| Server initialization and middleware | Set up the main server file (`server/server.js`), connected to MongoDB, and configured CORS and body parsing middleware. | [Server code](../../../server/server.js) |

## 3. One Area I Can Explain Clearly

- **Area:** JWT authentication middleware and protected routes
- **File/folder/doc:** `server/server.js` (lines 100-140) and [Authentication docs](../../../docs/AUTHENTICATION.md)
- **What it does:** Verifies the JWT token on incoming requests to ensure only authenticated users can access protected endpoints like `/api/items` or `/api/messages`.
- **How it works:** When a user signs in, the server returns a signed token. The client stores this token and sends it in the `Authorization` header. The middleware checks the token’s validity and attaches the user data to the request if valid.
- **How it was tested:** I tested it manually by signing in via the frontend, checking the token in localStorage, and using curl to send requests with and without the token. I also verified that protected routes returned 401 without a token and 200 with a valid one.
- **One limitation:** The token is stored in localStorage, which is vulnerable to XSS attacks. A more secure approach would be to use httpOnly cookies.
- **Evidence:** [Server code](../../../server/server.js), [Authentication docs](../../../docs/AUTHENTICATION.md)

## 4. My AI Use and Review

- **AI tools used:** GitHub Copilot
- **What AI helped with:** Generating boilerplate code for route handlers (e.g., basic CRUD operations for items) and suggesting Mongoose schema fields.
- **What I personally checked:** I reviewed every AI-generated route for correct error handling, status codes, and data validation. I also checked that the MongoDB queries used the correct field names from the schema.
- **What I personally changed:** I rewrote most of the AI-generated code to match our project’s conventions, added proper error responses (e.g., 400 for bad requests), and adjusted the authentication logic to use bcrypt for password comparison.
- **How I tested or verified it:** I ran the server locally, used Postman to test each endpoint, and verified the responses matched the expected format and status codes.
- **One area I still need to improve:** I would like to add more comprehensive input validation (e.g., using Joi or express-validator) to prevent malformed data from reaching the database.

## 5. One Problem I Helped Solve

- **Problem:** During early testing, the server failed to connect to MongoDB Atlas, causing the entire backend to crash on startup.
- **Why it mattered:** Without a database connection, none of the core features (signup, login, item posting) could work, blocking frontend development and testing.
- **What I did:** I checked the connection string in the `.env` file, verified the MongoDB user credentials and network access, and corrected the URI format (added missing parameters like `retryWrites=true&w=majority`).
- **What changed:** The server now connects to MongoDB reliably on startup, as seen in the console log “✅ MongoDB connected.”
- **Evidence:** [Environment setup guide](../../../docs/ENVIRONMENT_SETUP.md), [Server logs during startup] (visible when running `npm start`)

## 6. Reflection

### What I learned
I learned how to structure a Node.js/Express application with separation of concerns—keeping routes, models, and middleware in distinct folders. I also gained hands-on experience with MongoDB schema design and the challenges of debugging asynchronous database operations.

### What I am proud of
The backend API is stable and handles the core flows of the platform: users can sign up, log in, post items, make requests, and send messages without server-side errors during normal use.

### What I should have done better
I should have written unit tests for the route handlers earlier in the semester. Relying only on manual testing made it harder to catch regressions when I refactored code later.

### What I would improve next
I would add proper JWT token expiration and refresh mechanisms, implement role-based access control (e.g., separating user and admin routes more strictly), and write automated tests for the authentication flow.

### One skill I want to continue developing
Backend security practices, including secure token storage, input validation, and protection against common web vulnerabilities like injection and CSRF.

## 7. Presentation Readiness

- [x] I can explain my main contribution: backend API and database
- [x] I can explain one technical area clearly: JWT authentication middleware
- [x] I know the final MVP demo flow (landing → sign up → browse → post item → request item → send message → admin panel)
- [x] I know at least one bug or limitation: session stored in localStorage (XSS risk) and bcrypt not fully integrated for password hashing
- [x] I reviewed the technical defense questions
- [x] I can answer honestly if I do not know something

## 8. My Best Evidence Links

1. [API Reference](../../../docs/DESIGN/API_REFERENCE.md) — Full list of backend endpoints
2. [Database Schema](../../../docs/DESIGN/DATABASE_SCHEMA.md) — Collection design
3. [Server code](../../../server/server.js) — Main server file with middleware and routes
4. [Authentication docs](../../../docs/AUTHENTICATION.md) — Auth flow details
5. [Environment setup guide](../../../docs/ENVIRONMENT_SETUP.md) — Shows how MongoDB URI is configured

---
[Back to Individual Portfolios](./README.md) | [Back to Portfolio Home](../README.md)