# API Reference — Free Sewaa

## Overview

This document describes the available API endpoints for the Free Sewaa platform, including authentication, application state management, health monitoring, request formats, response structures, and common error codes.

---

## Base URL

### Local Development

```text
http://localhost:3000/api
```

### Production Environment

```text
https://free-sewaa-qh05.onrender.com/api
```

---

## Authentication

The Free Sewaa API uses **server-side session authentication**.

Upon successful login, the server creates a session and returns a session cookie. This cookie is automatically included in subsequent requests by the client and is used to authenticate the user.

### Authentication Method

- Session-based authentication
- HTTP cookies
- No bearer token required
- No authorization header required

---

# API Endpoints

## Authentication Endpoints

These endpoints handle user registration, login, and session management.

| Method | Endpoint | Description |
|----------|----------|-------------|
| POST | `/auth/signup` | Register a new user account |
| POST | `/auth/signin` | Authenticate an existing user |
| POST | `/auth/google-demo` | Demo Google OAuth authentication |
| POST | `/auth/logout` | Terminate the current session |

---

### POST `/auth/signup`

#### Description

Creates a new user account and stores the user information.

#### Request Body

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### Success Response (201 Created)

```json
{
  "user": {
    "id": "user-abc123",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

#### Error Response (400 Bad Request)

```json
{
  "error": "Email already in use"
}
```

---

### POST `/auth/signin`

#### Description

Authenticates a user using email and password credentials.

#### Request Body

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

#### Success Response (200 OK)

```json
{
  "user": {
    "id": "user-abc123",
    "name": "John Doe"
  },
  "auth": {
    "userId": "user-abc123",
    "isAuthenticated": true
  }
}
```

#### Error Response (401 Unauthorized)

```json
{
  "error": "Invalid credentials"
}
```

---

### POST `/auth/google-demo`

#### Description

Demonstration endpoint used to simulate Google OAuth authentication during project development and presentations.

#### Success Response (200 OK)

```json
{
  "success": true,
  "provider": "Google"
}
```

---

### POST `/auth/logout`

#### Description

Ends the active user session and removes authentication data.

#### Success Response (200 OK)

```json
{
  "message": "Logged out successfully"
}
```

---

## Application State Endpoints

These endpoints manage user-specific application data.

| Method | Endpoint | Description |
|----------|----------|-------------|
| GET | `/state?userId={id}` | Retrieve user application state |
| PUT | `/state?userId={id}` | Update user application state |

---

### GET `/state`

#### Description

Returns the complete application state associated with a user account.

#### Query Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| userId | String | Yes | Unique user identifier |

#### Success Response (200 OK)

```json
{
  "userId": "user-abc123",
  "items": [],
  "requests": [],
  "messages": [],
  "profile": {
    "name": "John Doe",
    "email": "john@example.com",
    "joinedAt": "2026-04-01T00:00:00Z"
  }
}
```

---

### PUT `/state`

#### Description

Updates user-specific application state information.

#### Success Response (200 OK)

```json
{
  "success": true,
  "message": "State updated successfully"
}
```

---

## Health Monitoring Endpoint

The health endpoint is used to verify server availability and operational status.

| Method | Endpoint | Description |
|----------|----------|-------------|
| GET | `/health` | Verify API server status |

---

### GET `/health`

#### Description

Returns the current operational status of the server.

#### Success Response (200 OK)

```json
{
  "status": "ok",
  "timestamp": "2026-05-08T12:00:00Z"
}
```

---

## Common HTTP Error Codes

The API uses standard HTTP response codes to communicate request status.

| Status Code | Meaning |
|------------|---------|
| 200 | Request completed successfully |
| 201 | Resource created successfully |
| 400 | Bad Request — Missing or invalid fields |
| 401 | Unauthorized — Authentication failed |
| 403 | Forbidden — Access denied |
| 404 | Not Found — Resource does not exist |
| 500 | Internal Server Error — Unexpected server failure |

---

## Example Authentication Flow

A typical user authentication workflow follows these steps:

1. User submits registration information through `POST /auth/signup`
2. User logs in through `POST /auth/signin`
3. Server creates a session and returns a session cookie
4. Authenticated requests automatically include the session cookie
5. User logs out through `POST /auth/logout`
6. Session is destroyed and authentication is removed

---

## Notes

- Authentication is session-based rather than token-based.
- All API responses use JSON format.
- Protected routes require a valid authenticated session.
- Error responses include descriptive messages when available.
- Production deployment is hosted on Render.

---
