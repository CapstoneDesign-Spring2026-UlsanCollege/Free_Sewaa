# Final Review Notes — Free Sewaa

**Date:** May 2026
**Course:** Capstone Design — Spring 2026, Ulsan College
**Live Site:** https://free-sewaa-qh05.onrender.com

---

## Project Summary

Free Sewaa is a community donation platform. Donors post reusable items. Receivers browse and request items for free. Built with vanilla HTML/CSS/JS frontend and Node.js + MongoDB backend.

## What We Built

- User authentication (signup, login, logout)
- Browse and filter donation items
- Post items for donation
- Request items from donors
- Messaging between users
- Admin dashboard for user and listing management
- Responsive design (mobile + desktop)
- Authentication flowchart (HTML/CSS/SVG)

## Known Limitations

- Passwords stored in plaintext (bcryptjs is installed but not wired)
- No session timeout — users stay logged in until they manually log out
- Image upload uses URL only — no file storage
- No email or SMS notifications
- AI chatbot endpoint exists but frontend integration is partial
- No password reset flow
- Admin panel works but has basic UI

## What We Would Improve Next

1. Wire up bcryptjs for password hashing
2. Add session timeout with auto-logout
3. Implement file upload for images
4. Add email notifications for requests and messages
5. Build a mobile app or PWA
6. Add password reset
7. Write more tests (integration, E2E)
8. Add CI/CD pipeline with automated tests

## Key Numbers

| Metric | Value |
|--------|-------|
| HTML pages | 13 |
| CSS files | 3 |
| Server files | 1 |
| MongoDB collections | 10 |
| Unit tests | 3 |
| GitHub issues | 7 open |
| Team members | 5 |

---

*End of review notes.*
