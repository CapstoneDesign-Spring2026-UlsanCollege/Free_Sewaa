# Demo Guide

## Preparation Checklist

- [ ] Live site is accessible (https://free-sewaa-qh05.onrender.com)
- [ ] Demo accounts are ready
- [ ] Browser is opened to the landing page
- [ ] Screen recording is ready (if recording)
- [ ] Backup plan is prepared if the live site fails

## Demo Accounts

**User account (demo-only):**
- Email: `pathakram09555@gmail.com`
- Password: `123456`

**Admin account (demo-only):**
- Email: `admin@freesewaa.local`
- Password: `admin12345`

## Step-by-Step Demo

### 1. Landing Page (30 seconds)
- Open the live site
- Point out the clean design and navigation
- Click "Sign Up" to create a new account

### 2. Sign Up (1 minute)
- Fill in first name, last name, email, password
- Show validation (try an invalid email first)
- Submit and show the dashboard

### 3. Dashboard (30 seconds)
- Show the navigation menu
- Point out the main sections: Browse, Donate, Messages, Profile

### 4. Browse Items (1 minute)
- Click Browse
- Show the available donation items
- Filter by category
- Click on an item to see details

### 5. Post a Donation (1 minute)
- Click Donate
- Fill in title, description, category, image
- Submit and show the item appearing in browse

### 6. Request an Item (1 minute)
- Find an item and click "Request"
- Show the request being created

### 7. Messaging (1 minute)
- Open Messages
- Show existing conversations
- Send a test message

### 8. Admin Dashboard (1 minute)
- Log out
- Log in as admin
- Show the admin dashboard
- Show user management and listing management

### 9. Q&A (2 minutes)
- Answer questions about the platform
- Explain the tech stack: Node.js, MongoDB, vanilla JS, Render

## Backup Plan

If the live site is down:
1. Start the server locally: `npm start`
2. Open `http://localhost:3000`
3. Continue the same demo flow

## Common Questions

| Question | Answer |
|----------|--------|
| What tech stack did you use? | Node.js, MongoDB, vanilla HTML/CSS/JS, Render |
| How is authentication handled? | localStorage-based with userId stored in browser |
| Is this production-ready? | This is a capstone demo — not intended for production use |
| How do you handle security? | Input validation, admin access control, XSS prevention (see Security Plan) |

---

*Last updated: May 2026*
