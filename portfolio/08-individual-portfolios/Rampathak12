# Ram Pathak (Rampathak12) — Individual Portfolio

## 1. Role Summary

I focused on building the backend infrastructure for Free Sewaa, including API routes, database models, and authentication flow. As the backend developer and occasional project manager (Weeks 3, 6, 8, 9), I worked to ensure the server-side logic was stable, secure, and well-documented so the frontend team could integrate smoothly.

## 2. Main Responsibilities

- Designing and implementing Express.js RESTful API routes for users, items, requests, and messages
- Defining MongoDB schemas and managing database collections
- Implementing JWT-based authentication with signup, login, and protected route middleware
- Setting up server initialization, MongoDB connection, CORS, and body parsing middleware
- Maintaining API documentation and environment configuration guides

## 3. Key Contributions

| Area | Work Completed | Evidence Link |
|------|---------------|---------------|
| API Routes | Implemented RESTful endpoints for authentication, items, requests, and messages | [API Reference](../../docs/DESIGN/API_REFERENCE.md) |
| MongoDB Schema | Defined collection structures for users, items, requests, and messages | [Database Schema](../../docs/DESIGN/DATABASE_SCHEMA.md) |
| Authentication Flow | Added JWT signup/login, bcrypt password hashing, and protected route middleware | [Authentication Docs](../../docs/AUTHENTICATION.md) |
| Server Setup | Configured main server file with MongoDB connection, CORS, and body parsing | [Server Code](../../server/server.js) |
| Environment Setup | Documented prerequisites, install steps, and MongoDB URI configuration | [Environment Setup](../../docs/ENVIRONMENT_SETUP.md) |

## 4. Technical Ownership

I owned the entire backend layer of the application. This includes `server/server.js` for initialization and middleware, `server/routes/` for all API endpoints (auth, items, requests, messages), and `server/models/` for Mongoose schemas. I also maintained the authentication middleware that protects routes requiring a valid JWT token. The database design and schema decisions were my responsibility, including field types, relationships, and indexing considerations.

## 5. Evidence of Work

- [API Reference](../../docs/DESIGN/API_REFERENCE.md) — Complete list of all backend endpoints with request/response formats
- [Database Schema](../../docs/DESIGN/DATABASE_SCHEMA.md) — Collection design with field types and relationships
- [Server Code](../../server/server.js) — Main server file with middleware configuration and route mounting
- [Authentication Docs](../../docs/AUTHENTICATION.md) — Full authentication flow documentation
- [Environment Setup](../../docs/ENVIRONMENT_SETUP.md) — Shows how MongoDB URI and environment variables are configured

## 6. AI Usage Reflection

- **AI tools used:** GitHub Copilot
- **How AI helped:** Generated boilerplate code for route handlers (basic CRUD operations) and suggested Mongoose schema field definitions.
- **What I checked:** Reviewed every AI-generated route for correct error handling, status codes, and data validation. Verified MongoDB queries used correct field names from the schema.
- **What I changed:** Rewrote most AI-generated code to match project conventions, added proper error responses (400 for bad requests, 401 for unauthorized), and adjusted authentication logic to use bcrypt for password comparison.
- **How I verified:** Ran the server locally, tested each endpoint with Postman, and verified responses matched expected format and status codes.
- **Area to improve:** Would like to add comprehensive input validation (Joi or express-validator) to prevent malformed data from reaching the database.

## 7. Challenges and Solutions

**Challenge 1 — MongoDB Connection Failure on Startup**
The server failed to connect to MongoDB Atlas, causing the entire backend to crash on startup. This blocked all core features (signup, login, item posting) and halted frontend development.
- **Solution:** Checked the connection string in `.env`, verified MongoDB user credentials and network access, corrected the URI format by adding missing parameters like `retryWrites=true&w=majority`. The server now connects reliably with the log message "MongoDB connected."

**Challenge 2 — Inconsistent Error Responses Across Endpoints**
Early in development, different endpoints returned different error formats, making frontend integration difficult.
- **Solution:** Standardized error response format across all routes — every error now returns `{ success: false, message: "..." }` with appropriate HTTP status codes (400, 401, 404, 500).

**Challenge 3 — Password Hashing Not Fully Integrated**
The bcrypt password comparison logic was not consistently applied across all auth routes, creating a security gap.
- **Solution:** Audited all auth endpoints, added bcrypt comparison to login routes, and documented remaining areas that still need secure password handling.

## 8. What I Learned

I learned how to structure a Node.js/Express application with separation of concerns — keeping routes, models, and middleware in distinct folders. I gained hands-on experience with MongoDB schema design and the challenges of debugging asynchronous database operations. Most importantly, I learned that early testing and documentation save significant time during integration.

## 9. Presentation Summary

- I built the backend API and database layer that powers all core features of Free Sewaa
- I can explain JWT authentication middleware: how tokens are created, verified, and used to protect routes
- The backend has known limitations: localStorage token storage (XSS risk) and bcrypt not yet fully integrated for all password operations
- I know the full demo flow: landing → sign up → browse → post item → request item → send message → admin panel
- I reviewed the technical defense questions and can answer honestly

## 10. Navigation

- [Back to Individual Portfolios](./README.md)
- [Back to Portfolio Home](../README.md)
- [Back to Repository](../../README.md)
