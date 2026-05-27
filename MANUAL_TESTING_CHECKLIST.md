# Manual Testing Checklist — Free Sewaa

Test each flow before the final demo.

## Authentication

- [ ] Signup with valid data — redirects to dashboard
- [ ] Signup with missing fields — shows error
- [ ] Signup with weak password — shows error
- [ ] Signup with invalid email domain — shows error
- [ ] Signup with existing email — shows error
- [ ] Login with valid credentials — redirects to dashboard
- [ ] Login with wrong password — shows error
- [ ] Login with blocked account — shows error
- [ ] Logout — redirects to landing page
- [ ] Admin login — redirects to admin dashboard

## Browse

- [ ] Browse page loads with Figma-designed item cards
- [ ] Category filter works
- [ ] Sticky filters stay visible while scrolling on desktop
- [ ] Sticky filters scroll naturally on mobile (below 900px)
- [ ] Item detail page shows correct info
- [ ] Request button works (logged in)
- [ ] Save button works

## Donate

- [ ] Donate form loads
- [ ] Title, description, category, condition fields work
- [ ] Image URL field accepts valid URL
- [ ] Submit creates listing
- [ ] New item appears in Browse

## Requests

- [ ] Can request an item
- [ ] Cannot request own item
- [ ] Cannot request same item twice
- [ ] Owner can accept request
- [ ] Owner can decline request
- [ ] Status updates correctly

## Messages

- [ ] Conversations list loads
- [ ] Can send a message
- [ ] Messages appear in real time (or after refresh)
- [ ] Unread message count badge shows in header nav
- [ ] Badge updates when messages are read
- [ ] Badge hides when all messages are read

## Admin

- [ ] Admin overview shows stats
- [ ] User list loads
- [ ] Can block/unblock a user
- [ ] Listing list loads
- [ ] Can remove a listing
- [ ] Admin actions work without errors

## Mobile

- [ ] Landing page fits mobile screen
- [ ] Browse grid stacks to single column
- [ ] Forms are usable on small screens
- [ ] Navigation links accessible via hamburger menu (if present)

---

*Last updated: May 2026*
