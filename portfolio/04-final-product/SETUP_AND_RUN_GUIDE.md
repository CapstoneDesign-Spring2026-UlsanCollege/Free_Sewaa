# Setup and Run Guide

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/)
- [MongoDB Atlas](https://www.mongodb.com/atlas) account (free tier) or local MongoDB

## Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa.git
cd Free_Sewaa

# 2. Install dependencies
npm install

# 3. Create environment file
cp .env.example .env
```

## Environment Configuration

Edit `.env` with your settings:

```
PORT=3000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/freesewaa
JWT_SECRET=your-secret-key
```

## Run the Application

```bash
# Start the server
npm start

# Or for development (with auto-reload)
npx nodemon server/server.js
```

The application will be available at `http://localhost:3000`.

## Run Tests

```bash
# Run Jest tests
npm test
```

Expected output: 3 passing tests (health endpoint, signup validation, weak password check).

## Project Structure

```
Free_Sewaa/
├── client/          # React frontend (Vite build)
├── css/             # Stylesheets
├── docs/            # Documentation
├── html/            # Static HTML pages
├── js/              # Client-side JavaScript
├── server/          # Express.js backend
│   ├── routes/      # API route handlers
│   ├── models/      # MongoDB schemas
│   └── tests/       # Jest test files
├── package.json     # Dependencies and scripts
├── render.yaml      # Render deployment config
└── vite.config.js   # Vite build configuration
```

## Troubleshooting

Common issues and solutions are documented in:
- [TROUBLESHOOTING.md](../../TROUBLESHOOTING.md)
- [docs/ENVIRONMENT_SETUP.md](../../docs/ENVIRONMENT_SETUP.md)
- [docs/DEVELOPER_GUIDE.md](../../docs/DEVELOPER_GUIDE.md)
