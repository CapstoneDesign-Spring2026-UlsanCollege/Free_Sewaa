# 📌 Week 6 MVP Specifications – Free Sewaa

## Overview
Week 6 focuses on **backend integration and database setup**. The goal is to transition from local JSON storage to MongoDB and establish robust API endpoints for all core features.

---

## 🎯 Objectives
- Set up MongoDB Atlas connection
- Migrate local data to MongoDB
- Implement secure authentication endpoints
- Create REST API for all CRUD operations
- Begin password hashing implementation

---

## 🔹 Core Features

### 1. MongoDB Setup
- Configure MongoDB Atlas cluster
- Create database collections for users, items, requests, messages
- Set up connection string in environment variables
- Test data persistence

### 2. Authentication API
- User signup endpoint (`POST /api/auth/signup`)
- User login endpoint (`POST /api/auth/login`)
- Session management
- Basic security checks

### 3. Item Management API
- Create item endpoint (`POST /api/items`)
- Retrieve all items endpoint (`GET /api/items`)
- Retrieve single item endpoint (`GET /api/items/:id`)
- Update item endpoint (`PUT /api/items/:id`)
- Delete item endpoint (`DELETE /api/items/:id`)

### 4. User Profile API
- Get user profile endpoint (`GET /api/users/:id`)
- Update profile endpoint (`PUT /api/users/:id`)
- User statistics endpoint

### 5. Request Management API
- Create request endpoint (`POST /api/requests`)
- Get user requests endpoint (`GET /api/requests`)
- Update request status endpoint (`PUT /api/requests/:id`)

---

## 🎯 Demo Plan
During the demo, show:
1. MongoDB connection test
2. Creating a new item via API and viewing it in database
3. User login through API
4. API response formats and structure
5. Database schema overview

---

## 📦 Deliverables
- MongoDB Atlas cluster configured
- Backend `/server` directory with Express.js setup
- `.env` file with database connection string (documented in README)
- All CRUD endpoints implemented and tested
- API documentation (Postman collection or README)
- Database schema definition

---

## ✅ Conclusion
Week 6 establishes a **robust backend infrastructure** that allows the frontend to persist data reliably. The move to MongoDB ensures scalability and data integrity for the final submission.

---

*Status: Backend foundation complete, ready for integration testing*
