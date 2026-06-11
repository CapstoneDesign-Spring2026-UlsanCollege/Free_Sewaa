# Scope Decisions

## Feature-Level Scope Decisions

| Feature or Idea | Final Status | Why | Evidence |
|---|---|---|---|
| **Payment Processing** | Cut | Donation platform prioritizes community reuse over commercial transactions | [Project pitch](../../docs/PROJECT/PROJECT_IDEA_PITCH.md) |
| **Auctions and Bidding** | Cut | Kept MVP centered on straightforward posting and requesting, not competitive bidding | [Scope decision #1](#1-donation-platform-instead-of-marketplace) |
| **Shipping Integration** | Cut | Platform focuses on local community connections; shipping logistics outside MVP scope | [Scope decision #1](#1-donation-platform-instead-of-marketplace) |
| **Native Mobile Application** | Cut | Web-based MVP; responsive design covers mobile access without native app build | [Product summary](../PROJECT_SUMMARY.md#technology-stack) |
| **Production Email Notifications** | Cut | Intentionally excluded from MVP; planned for Phase 4 | [Known limitations](../PROJECT_SUMMARY.md#known-limitations--future-scope) |
| **Complete Password Recovery** | Cut | Basic authentication only; complete recovery workflow deferred | [Known limitations](../PROJECT_SUMMARY.md#known-limitations--future-scope) |
| **Advanced Enterprise Security** | Cut | MVP prioritizes core functionality over complex security controls | [Known limitations](../PROJECT_SUMMARY.md#known-limitations--future-scope) |
| **Express.js Backend** | Included | JavaScript across application; Node.js server with Express chosen for rapid development | [`package.json`](../../package.json), [`server/server.js`](../../server/server.js) |
| **React/Vite Frontend** | Included | Modern reactive UI with component reuse; Vite for fast development builds | [Frontend guide](../../docs/FRONTEND_GUIDE.md) |
| **MongoDB Database** | Included | NoSQL flexibility for document-based user, item, and messaging data | [`server/server.js`](../../server/server.js) |
| **Firebase Authentication** | Included (with limitations) | Identity token integration enabled multiple demo paths; local endpoints also maintained | [`server/server.js`](../../server/server.js), [authentication docs](../../docs/AUTHENTICATION.md) |
| **Local Account System** | Included (with limitations) | Mixed authentication during MVP evolution; increased flexibility but security risk noted | [Scope decision #3](#3-mixed-authentication-during-mvp-evolution) |
| **User Registration & Login** | Included | Core requirement for account access and security (FR-01, FR-02, FR-05) | [Product requirements](../../docs/PRODUCT_REQUIREMENTS.md#authentication) |
| **Item Posting & Browsing** | Included | Central MVP feature for donation lifecycle (FR-07, FR-09) | [Product requirements](../../docs/PRODUCT_REQUIREMENTS.md#item-management) |
| **Item Requests** | Included | Essential for connecting donors and recipients (FR-12, FR-13) | [Product requirements](../../docs/PRODUCT_REQUIREMENTS.md#requests) |
| **User-to-User Messaging** | Included | Direct communication between donors and recipients (FR-15, FR-16) | [Product requirements](../../docs/PRODUCT_REQUIREMENTS.md#messaging) |
| **Admin Dashboard** | Included | User management, listing monitoring, activity oversight (FR-18, FR-19, FR-20) | [Product requirements](../../docs/PRODUCT_REQUIREMENTS.md#admin) |
| **Static Frontend Pages** | Included | Preserved during React migration to reduce migration risk mid-semester | [Scope decision #4](#4-preserve-static-pages-during-react-work) |
| **Render Deployment** | Included | Primary documented deployment environment | [`render.yaml`](../../render.yaml) |
| **Vercel Deployment** | Included | Secondary public demo target for flexibility | [Deployment plan](../04-final-product/DEPLOYMENT_AND_DEMO_PLAN.md) |
| **Automated Testing** | Included | Jest tests for server API validation (3/3 passing) | [`server/__tests__/api.test.js`](../../server/__tests__/api.test.js) |
| **Responsive Design** | Included | Mobile, tablet, and desktop support required (NFR-02) | [Product requirements](../../docs/PRODUCT_REQUIREMENTS.md#non-functional-requirements) |
| **Comprehensive Documentation** | Included | Portfolio and technical documentation for academic submission | [Documentation hub](../PROJECT_SUMMARY.md#documentation-hub) |
| **Category Filtering** | Incomplete | Basic structure present; advanced categorization planned for Phase 2 | [Future enhancements](../../docs/FUTURE_ENHANCEMENTS.md#phase-2-better-donation-experience) |
| **Item Edit & Delete** | Incomplete | Structure present but not fully polished; marked as "Should" priority (FR-10, FR-11) | [Product requirements](../../docs/PRODUCT_REQUIREMENTS.md#item-management) |
| **Request Status Management** | Incomplete | Basic structure; enhanced tracking planned for Phase 4 | [Future enhancements](../../docs/FUTURE_ENHANCEMENTS.md#phase-4-notifications-and-messaging) |
| **Email Notifications** | Nice Later | Production email system deferred; planned for Phase 4 | [Future enhancements](../../docs/FUTURE_ENHANCEMENTS.md#phase-4-notifications-and-messaging) |
| **Verified Donor Badge** | Nice Later | Trust system enhancement planned for Phase 3 | [Future enhancements](../../docs/FUTURE_ENHANCEMENTS.md#phase-3-trust-and-safety) |
| **Report Post Feature** | Nice Later | Trust and safety mechanism deferred to Phase 3 | [Future enhancements](../../docs/FUTURE_ENHANCEMENTS.md#phase-3-trust-and-safety) |
| **Location-Based Filtering** | Nice Later | Planned enhancement for improved donation discovery | [Future enhancements](../../docs/FUTURE_ENHANCEMENTS.md#phase-2-better-donation-experience) |
| **Saved Searches** | Nice Later | User convenience feature deferred to Phase 2 | [Future enhancements](../../docs/FUTURE_ENHANCEMENTS.md#phase-2-better-donation-experience) |
| **Admin Statistics Dashboard** | Nice Later | Analytics features deferred to Phase 5 | [Future enhancements](../../docs/FUTURE_ENHANCEMENTS.md#phase-5-admin-and-analytics) |
| **Dark Mode** | Nice Later | UI enhancement deferred to Phase 6 | [Future enhancements](../../docs/FUTURE_ENHANCEMENTS.md#phase-6-production-polish) |
| **Accessibility Improvements** | Nice Later | Planned for Phase 6 polish and compliance | [Future enhancements](../../docs/FUTURE_ENHANCEMENTS.md#phase-6-production-polish) |

---

*Last updated: June 2026*
