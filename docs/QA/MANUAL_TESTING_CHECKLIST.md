# Manual Testing Checklist — Free Sewaa

## Overview

This checklist is used to verify the core functionality, usability, and responsiveness of the Free Sewaa platform before sprint reviews and the final project demonstration. All critical user flows should be tested and validated to ensure a stable and reliable user experience.

---

## Authentication Testing

### Account Registration and Login

- [ ] Signup with valid data successfully redirects the user to the dashboard
- [ ] Signup with missing required fields displays appropriate validation errors
- [ ] Signup with a weak password displays a password strength error
- [ ] Signup with an invalid email domain displays an error message
- [ ] Signup using an existing email address displays a duplicate account error
- [ ] Login with valid credentials successfully redirects the user to the dashboard
- [ ] Login with an incorrect password displays an authentication error
- [ ] Login with a blocked or suspended account displays an access restriction error
- [ ] Logout successfully redirects the user to the landing page
- [ ] Administrator login successfully redirects to the admin dashboard

---

## Browse Feature Testing

### Item Discovery and Navigation

- [ ] Browse page loads successfully with Figma-designed item cards
- [ ] Category filtering functions correctly
- [ ] Sticky filters remain visible while scrolling on desktop devices
- [ ] Sticky filters scroll naturally on mobile devices (below 900px width)
- [ ] Item detail pages display accurate item information
- [ ] Request button functions correctly for authenticated users
- [ ] Save button functions correctly

---

## Donation Feature Testing

### Item Submission Workflow

- [ ] Donation form loads successfully
- [ ] Title, description, category, and condition fields function correctly
- [ ] Image URL field accepts valid image URLs
- [ ] Form submission successfully creates a new listing
- [ ] Newly created item appears on the Browse page

---

## Request Management Testing

### Item Request Workflow

- [ ] Users can submit a request for an available item
- [ ] Users cannot request their own item
- [ ] Users cannot submit duplicate requests for the same item
- [ ] Item owners can accept requests
- [ ] Item owners can decline requests
- [ ] Request status updates correctly throughout the workflow

---

## Messaging System Testing

### Communication Features

- [ ] Conversations list loads successfully
- [ ] Users can send messages
- [ ] Messages appear in real time or after page refresh
- [ ] Unread message count badge is displayed in the navigation header
- [ ] Badge count updates when messages are read
- [ ] Badge disappears when all messages have been read

---

## Administration Testing

### Administrative Features

- [ ] Admin overview dashboard displays system statistics
- [ ] User management list loads successfully
- [ ] Administrators can block and unblock users
- [ ] Listing management page loads successfully
- [ ] Administrators can remove listings
- [ ] Administrative actions execute without errors

---

## Mobile Responsiveness Testing

### Mobile User Experience

- [ ] Landing page displays correctly on mobile devices
- [ ] Browse grid adapts to a single-column layout on smaller screens
- [ ] Forms remain usable and accessible on small displays
- [ ] Navigation links are accessible through the hamburger menu (if implemented)

---
