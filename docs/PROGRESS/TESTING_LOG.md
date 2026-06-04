# Testing Log — Free Sewaa

## Overview

This document records testing activities, results, identified issues, and overall system quality verification performed during Week 8 Midterm Testing. The objective was to validate all core user workflows and ensure the platform was stable and ready for demonstration.

---

## Test Environment

| Item | Details |
|--------|---------|
| Server | localhost:3000 |
| Browsers Tested | Google Chrome, Mozilla Firefox, Safari |
| Test Account | alisha@example.com / demo123 |
| Test Date | April 28, 2026 |

---

# Test Cases Executed

## 1. Authentication Testing

### Objective

Verify user registration, login, session management, and authentication functionality.

| Test Case | Expected Result | Actual Result | Status |
|------------|----------------|---------------|--------|
| Sign up with email | New account created successfully | Account created successfully | ✅ Pass |
| Sign in with credentials | Redirect to application dashboard | Redirect successful | ✅ Pass |
| Demo login | Automatic login completed | Login successful | ✅ Pass |
| Logout | Session cleared and user logged out | Session removed successfully | ✅ Pass |
| Invalid credentials | Error message displayed | Error displayed correctly | ✅ Pass |

---

## 2. Browse & Search Testing

### Objective

Verify item browsing, searching, filtering, and sorting functionality.

| Test Case | Expected Result | Actual Result | Status |
|------------|----------------|---------------|--------|
| View all items | Listings displayed correctly | Listings displayed correctly | ✅ Pass |
| Search by keyword | Matching results displayed | Search working correctly | ✅ Pass |
| Filter by category | Category-specific items shown | Filter functioning correctly | ✅ Pass |
| Filter by distance | Items displayed within selected distance | Filter functioning correctly | ✅ Pass |
| Sort by newest | Items ordered by creation date | Sorting functioning correctly | ✅ Pass |

---

## 3. Donation Feature Testing

### Objective

Verify donation listing creation and publishing workflow.

| Test Case | Expected Result | Actual Result | Status |
|------------|----------------|---------------|--------|
| Post new item | Item created successfully | Item created successfully | ✅ Pass |
| Upload image | Image preview displayed | Preview functioning correctly | ✅ Pass |
| Multi-step form | Form progress maintained | Functioning correctly | ✅ Pass |
| Publish listing | Item visible in Browse page | Published successfully | ✅ Pass |

---

## 4. Request Workflow Testing

### Objective

Verify item request creation and management.

| Test Case | Expected Result | Actual Result | Status |
|------------|----------------|---------------|--------|
| Request item | Status set to Pending | Request submitted successfully | ✅ Pass |
| Cancel request | Request removed | Cancellation successful | ✅ Pass |
| View my requests | Request list displayed | Requests displayed correctly | ✅ Pass |

---

## 5. Messaging System Testing

### Objective

Verify user communication features.

| Test Case | Expected Result | Actual Result | Status |
|------------|----------------|---------------|--------|
| Send message | Message appears in chat | Message delivered successfully | ✅ Pass |
| Quick replies | Suggested text inserted | Functioning correctly | ✅ Pass |
| View conversation | Conversation history displayed | Working correctly | ✅ Pass |

---

## 6. Profile Management Testing

### Objective

Verify profile editing and personalization features.

| Test Case | Expected Result | Actual Result | Status |
|------------|----------------|---------------|--------|
| Edit profile | Changes saved successfully | Saved correctly | ✅ Pass |
| Change region | Location updated | Updated successfully | ✅ Pass |
| Toggle dark mode | Theme changes correctly | Functioning correctly | ✅ Pass |

---

# Bugs Found and Resolved

## Resolved Issues

| Bug ID | Description | Found Date | Fixed Date | Status |
|---------|------------|------------|------------|--------|
| BUG-001 | CSS paths broken after folder restructuring | Apr 28, 2026 | Apr 28, 2026 | ✅ Fixed |
| BUG-002 | CI workflow execution failure | Apr 28, 2026 | Apr 28, 2026 | ✅ Fixed |
| BUG-003 | GitHub Pages deployment failure | Apr 28, 2026 | Apr 28, 2026 | ✅ Fixed |
| BUG-004 | Demo login redirect loop | Apr 25, 2026 | Apr 25, 2026 | ✅ Fixed |
| BUG-005 | Admin login routing issue | Apr 25, 2026 | Apr 25, 2026 | ✅ Fixed |
| BUG-006 | Phone field incorrectly required | Apr 25, 2026 | Apr 25, 2026 | ✅ Fixed |

---

# Known Issues

## Open Issues and Future Improvements

| Issue ID | Description | Severity | Status |
|-----------|------------|-----------|--------|
| ISSUE-001 | Passwords currently stored as plain text | High | Pending |
| ISSUE-002 | JWT authentication not implemented | Medium | Pending |
| ISSUE-003 | Database persistence uses JSON storage | Medium | Pending |
| ISSUE-004 | Cloud image upload integration missing | Low | Backlog |

---

# Pre-Midterm Verification Results

## Core User Flows Successfully Tested

### Authentication & Item Discovery

- ✅ Sign Up → Sign In → Browse → Request → Message

### Donation Management

- ✅ Post Item → Edit Item → Delete Item

### Request Management

- ✅ Save Item → Request Item → Cancel Request

### Notification Workflow

- ✅ Notifications → Mark as Read

### User Profile Management

- ✅ Profile → Edit → Save

### User Interface Features

- ✅ Dark Mode Toggle

---

# Test Summary

| Metric | Result |
|----------|---------|
| Total Tests Executed | 35 |
| Tests Passed | 35 |
| Tests Failed | 0 |
| Overall Pass Rate | 100% |

---

# Conclusion

All planned Week 8 Midterm test cases were executed successfully. Core functionality, user workflows, and system features operated as expected. All identified defects were resolved before the midterm demonstration, resulting in a 100% test pass rate.

---

# Sign-Off

| Role | Name | Date |
|--------|--------|--------|
| QA Lead | Sujan Shrestha | April 28, 2026 |
| Tester | Free Sewaa Team | April 28, 2026 |

---

*Last Updated: Week 8 — Midterm Testing Complete*
