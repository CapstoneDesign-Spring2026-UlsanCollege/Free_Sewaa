# Demo Script — Free Sewaa

## Introduction

Hello, we are presenting Free Sewaa — a community donation platform. Donors can post reusable items. Receivers can browse, request, and pick up items for free. Our goal is to reduce waste and help the local community.

**Team:** Capstone Design, Spring 2026, Ulsan College

---

## Preparation Checklist

Before the demo:
- [ ] Live site loads: https://free-sewaa-qh05.onrender.com
- [ ] Browser ready, window maximized (1920x1080)
- [ ] Screen recording tool ready (if recording)
- [ ] Demo accounts ready: user + admin
- [ ] At least one donation item posted on the live site
- [ ] At least one request and message in the system
- [ ] Backup plan ready (local server)
- [ ] Q&A notes printed or on second screen

---

## Demo Flow

### 1. Landing Page
Open the live site: https://free-sewaa-qh05.onrender.com

- Show the Figma-inspired landing page with polished UI
- Point out navigation links: Browse, Donate, Sign Up, Login
- Emphasize: no account needed to browse

### 2. User Sign Up
- Click Sign Up
- Fill: John, Demo, johndemo@test.com, Password1
- Show validation by entering a bad email first
- Submit — redirects to dashboard

### 3. Dashboard
- Navigation: Browse, Donate, Messages, Logout
- Quick overview of what the user can do

### 4. Browse Items
- Click Browse
- Show Figma-designed item cards with images, categories, conditions
- Demonstrate sticky filters — scroll down, filters stay visible on desktop
- Filter by category using the sticky filter panel
- Click an item — show detail view
- Explain request and save buttons

### 5. Post a Donation
- Click Donate
- Fill title: "Winter Jacket"
- Description: "Warm jacket, size L, used but clean"
- Category: Clothing
- Upload image (or note that image upload works)
- Submit — item appears in Browse

### 6. Request an Item
- Find an item, click Request
- Show confirmation
- Explain the owner will be notified

### 7. Messages
- Open Messages
- Show conversation with the item owner
- Point out the unread message count badge in the header nav
- Send a test message
- Verify the badge updates in real time

### 8. Admin Demo
- Log out (click Logout)
- Log in with an authorized administrator account; do not publish credentials
- Show admin dashboard
- User management: view users, block/unblock
- Listing management: view listings, remove if needed
- Overview stats: total users, listings, requests

### 9. Q&A

---

## Backup Plan

If live site is down:
```bash
npm install
npm start
```
Open http://localhost:3000. All features work locally.

---

## Known Limitations

- Passwords stored in plaintext (bcrypt available but not wired)
- Session timeout not configured
- No email notifications
- Image upload uses URL only (no file storage)
- QA found 5 P1 bugs (missing tests for signup, login, browse, donate, request endpoints)

---

## Future Plan

- Add bcrypt password hashing
- Session timeout and auto-logout
- Email/SMS notifications
- Image file upload
- Mobile app

---

*Last updated: May 2026*
