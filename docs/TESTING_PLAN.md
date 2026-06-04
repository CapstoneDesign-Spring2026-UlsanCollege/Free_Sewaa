# Testing Plan

## Testing Levels

```mermaid
flowchart TD
    E2E["E2E Tests<br/>Complete User Journeys"]
    INT["Integration Tests<br/>Connected Features"]
    UNIT["Unit Tests<br/>Small Logic and Validation"]
    E2E --> INT --> UNIT
```

| Level | Purpose | Status |
|-------|---------|--------|
| Unit | Validate individual functions, business logic, and input validation | Partial |
| Integration | Verify interactions between connected system components | Planned |
| E2E | Validate complete user workflows from start to finish | Planned |
| Manual QA | Perform visual inspection, usability testing, and user experience validation | Ongoing |

## Unit Tests

**Framework:** Jest + Supertest

### Current Tests (3 Passing)

- Health endpoint returns HTTP 200 status
- Signup rejects requests with missing `firstName`
- Signup rejects weak passwords

### Planned Test Coverage

- User signup with valid data
- User login with valid and invalid credentials
- Admin authentication
- Listing CRUD (Create, Read, Update, Delete) operations
- Request creation and status management
- Message sending functionality
- Notification generation and delivery

## Integration Tests

The following feature integrations are planned:

- **Authentication Flow:** Signup → Login → Session Validation → Logout
- **Listing Flow:** Create → Read → Update → Delete
- **Request Flow:** Create Request → Accept Request → Complete Request
- **Admin Flow:** Admin Login → User Management → Listing Management

## End-to-End (E2E) Test Script

The following user journey will be used to validate the complete system workflow:

1. Open the landing page
2. Sign up as a new user
3. Browse available items
4. Post a donation item
5. Request an item
6. Send a message
7. Log in as an administrator
8. Manage users and listings
9. Log out

## Running Tests

```bash
cd server
npm install
npm test
```

## Test Status

| Category | Tests | Status |
|----------|-------|--------|
| Health Check | 1 | ✅ Passing |
| Authentication Validation | 2 | ✅ Passing |
| Authentication Functional Tests | 0 | ❌ Not Started |
| Listings | 0 | ❌ Not Started |
| Requests | 0 | ❌ Not Started |
| Messages | 0 | ❌ Not Started |
| Admin Features | 0 | ❌ Not Started |

---

*Last Updated: june 2026*
