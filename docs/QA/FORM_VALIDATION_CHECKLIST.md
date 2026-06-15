# Form Validation Checklist — Free Sewaa

## Overview

This checklist is used to verify that all user input forms within the Free Sewaa platform enforce validation rules correctly, display appropriate feedback, and prevent invalid data from being submitted to the system.

---

## Signup Form Validation

### User Registration Requirements

- [ ] All required fields are completed (First Name, Last Name, Email, Password)
- [ ] Email domain is recognized and accepted (e.g., gmail.com, naver.com, outlook.com)
- [ ] Password meets security requirements:
  - 8–10 characters
  - At least one uppercase letter
  - At least one lowercase letter
  - At least one numeric digit
- [ ] Duplicate email addresses display an appropriate validation error
- [ ] Clear and user-friendly error messages are displayed for each validation rule

---

## Login Form Validation

### User Authentication Requirements

- [ ] Email field is required
- [ ] Password field is required
- [ ] Invalid credentials return a 401 Unauthorized error
- [ ] Blocked or suspended accounts return a 403 Forbidden error
- [ ] Authentication error messages are clear and user-friendly

---

## Donate Form Validation

### Donation Listing Requirements

- [ ] Title field is required
- [ ] Description field is required
- [ ] Category selection is required
- [ ] Condition field behaves according to specification (required or optional)
- [ ] Image URL field validates correct URL format
- [ ] Successful submission creates a new donation listing

---

## Request Form Validation

### Item Request Requirements

- [ ] Note field is optional
- [ ] Users cannot request their own item (403 Forbidden)
- [ ] Users cannot submit duplicate requests for the same item (409 Conflict)

---

## Admin Form Validation

### Administrative Action Requirements

- [ ] Action selection is required
- [ ] Target User ID or Listing ID is required
- [ ] Confirmation is required before destructive actions are executed

---

## General Form Validation

### Application-Wide Validation Rules

- [ ] Error messages appear next to the correct input field
- [ ] Forms cannot be submitted when validation errors exist
- [ ] Success feedback is displayed after successful submission
- [ ] Loading state is shown during form submission (if implemented)

---

## Validation Test Completion

**Tester Name:** _________Ram Pathak_________________

**Date Tested:** _______2026/05/20___________________

**Overall Result:** Pass
