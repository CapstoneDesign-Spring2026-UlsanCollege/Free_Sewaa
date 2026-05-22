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

- **Password security:** Stored in plaintext. bcryptjs is installed but not wired.
- **Session persistence:** No timeout. Users stay logged in until they click Logout.
- **Image upload:** URL-based only. No file upload or storage.
- **Notifications:** No email or SMS. Users must check the app manually.
- **AI chatbot:** Backend endpoint exists but frontend is not connected.
- **Password reset:** No reset flow. Admin must assist if password is lost.
- **Admin UI:** Functional but basic. No charts or advanced filtering.
- **Test coverage:** 3 unit tests only. No integration or E2E tests.

## What We Would Improve Next

1. **Wire up bcryptjs** — hash passwords before storing
2. **Session timeout** — auto-logout after 30 min of inactivity
3. **File upload** — integrate Cloudinary for image hosting
4. **Notifications** — email via SendGrid, SMS via Twilio
5. **Password reset** — email-based reset with token expiry
6. **Mobile app** — React Native or PWA for offline support
7. **Test suite** — integration tests, E2E with Playwright
8. **CI/CD** — auto-test on push, auto-deploy on merge to main
9. **Admin dashboard** — add charts, search, pagination
10. **AI chatbot** — connect frontend to existing backend endpoint

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
