# Rampathak12 — Backend and Core Logic

## Role
Backend Developer — Database integration, system infrastructure, core logic

## Strongest Contributions
- Built Express.js backend API with RESTful endpoints
- Designed MongoDB database schema (users, items, requests, messages)
- Implemented JWT authentication flow
- Set up MongoDB Atlas integration
- Created server directory structure and middleware

## Evidence Links
- [Backend API Plan](../../docs/DESIGN/BACKEND_PLAN.md)
- [API Reference](../../docs/DESIGN/API_REFERENCE.md)
- [Database Schema](../../docs/DESIGN/DATABASE_SCHEMA.md)
- [Server code](../../server/)
- [Backend Guide](../../docs/BACKEND_GUIDE.md)

## Code Area I Can Explain
Authentication flow: JWT token generation, verification middleware, protected routes, signup/signin endpoints.

## AI Use
Used AI for generating route handler templates and Mongoose schema definitions. All AI code was reviewed for correctness before merging.

## One Problem Solved
Fixed the MongoDB connection issue where the server was failing to connect to Atlas. The problem was a missing environment variable and incorrect connection string format.

## What I Learned
How to structure a Node.js/Express backend with proper separation of concerns (routes, models, middleware). Also learned MongoDB aggregation and query optimization.

## What I'm Proud Of
The backend architecture is clean and modular. Each route handler follows consistent patterns, making it easy to add new features.

## What I Should Have Done Better
Added better error handling and validation from the start. Some endpoints return inconsistent error responses that need refactoring.

## What I Would Improve Next
Implement proper password hashing with bcrypt, add request rate limiting, and improve API documentation with OpenAPI/Swagger.

## One Skill to Continue Developing
Advanced MongoDB query optimization and indexing strategies.
