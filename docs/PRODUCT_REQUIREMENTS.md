# Product Requirements

## Functional Requirements

### Authentication

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-01 | User can create an account with name, email, and password | Must |
| FR-02 | User can log in with email and password | Must |
| FR-03 | System validates email domain against allowed providers | Must |
| FR-04 | System enforces password strength (8-10 chars, upper+lower+number) | Should |
| FR-05 | User can log out | Must |
| FR-06 | Admin can log in through a separate admin login | Must |

### Item Management

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-07 | User can view all available donation items | Must |
| FR-08 | User can filter items by category | Must |
| FR-09 | User can post a new donation item with title, description, category, image | Must |
| FR-10 | User can edit their own items | Should |
| FR-11 | User can delete their own items | Should |

### Requests

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-12 | User can request an item from another user | Must |
| FR-13 | Item owner can accept or decline a request | Should |
| FR-14 | User can view their incoming and outgoing requests | Should |

### Messaging

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-15 | User can start a conversation with another user | Must |
| FR-16 | User can send and receive messages | Must |
| FR-17 | User can view their conversation history | Should |

### Admin

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-18 | Admin can view platform overview (user count, listings, requests) | Should |
| FR-19 | Admin can block or unblock users | Should |
| FR-20 | Admin can remove or restore listings | Should |

## Non-Functional Requirements

| ID | Requirement | Priority |
|----|-------------|----------|
| NFR-01 | Pages load within 3 seconds on standard connection | Should |
| NFR-02 | UI works on mobile, tablet, and desktop screens | Must |
| NFR-03 | Passwords are never displayed in plaintext in the UI | Must |
| NFR-04 | Error messages are user-friendly | Should |
| NFR-05 | The app recovers gracefully from server errors | Should |

## Acceptance Criteria

The project is accepted when:

1. A new user can sign up, log in, browse items, and post an item
2. Users can request items and send messages
3. Admin can log in and manage users/items
4. The app runs on Render and is publicly accessible
5. Documentation covers setup, architecture, and testing

---

*Last updated: May 2026*
