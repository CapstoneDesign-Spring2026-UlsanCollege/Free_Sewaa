# Technical Defense Preparation

## Current Architecture

**Q: What backend framework does the final repo use?**

A: The active server is a native Node.js HTTP server in `server/server.js`. Historical docs include Express/Mongoose designs, but the final runtime uses Node's HTTP module and the MongoDB driver.

**Q: What database do you use?**

A: MongoDB. The server connects with `MONGODB_URI` or `MONGO_URI` and uses collections for users, items, requests, messages, and related state.

## Authentication

**Q: How does authentication work?**

A: The repo includes local account endpoints and Firebase identity-token support. Firebase tokens are verified externally. The local password path is an MVP limitation because it stores and compares password values directly.

**Q: Is the app production-secure?**

A: No. It is an academic MVP. Before production, the team must harden local passwords, authorization, validation, rate limiting, secrets, and monitoring.

## Core Product Flow

**Q: What is the main user flow?**

A: Account access -> browse or post an item -> request an item -> message or continue communication -> review user/admin activity.

**Q: What happens if a live demo step fails?**

A: Use the fallback plan: Vercel, localhost, screenshots, and architecture explanation. The presenter should state the failure honestly.

## QA

**Q: What testing evidence is strongest?**

A: Committed server tests, saved test output, sprint packets, manual checklists, and bug records. The portfolio labels broad manual metrics as historical records when raw execution sheets are not preserved.

**Q: What would you test next?**

A: End-to-end browser tests, integration tests with a test database, accessibility runs with saved output, and security tests for auth and validation.

## AI and Ownership

**Q: How did AI affect the project?**

A: AI helped with suggestions and documentation structure. Human team members reviewed, modified, tested, and linked evidence. AI did not determine completion or ownership.

**Q: Can each member explain their work?**

A: Each individual portfolio identifies explainable areas and links evidence. Shared files may have been revised by multiple people, so ownership is explained with PRs, commits, issues, and historical context.

## Known Limitations

- Local password hardening remains open.
- React migration is partial.
- Automated test coverage is narrow.
- Some manual QA metrics are historical summaries.
- Production controls such as rate limiting and monitoring are incomplete.
