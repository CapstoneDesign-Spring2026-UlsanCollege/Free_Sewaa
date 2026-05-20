# Developer Guide — Free Sewaa

This guide explains how to set up the project locally, understand the folder structure, and fix common issues.

---

## Local Setup

### Prerequisites

- Node.js 18+
- MongoDB (local or Atlas)
- Git

### Steps

```bash
# 1. Clone the repo
git clone https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa.git
cd Free_Sewaa

# 2. Install dependencies
npm install

# 3. Start the server
node server/server.js
# Server starts at http://localhost:3000
```

### Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/freesewaa
SUPER_ADMIN_EMAILS=admin@freesewaa.local
SUPER_ADMIN_USER_IDS=
```

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `PORT` | No | 3000 | Server port |
| `MONGO_URI` | No | (JSON storage) | MongoDB connection string |
| `MONGODB_URI` | No | Same as MONGO_URI | Alternative name |
| `DB_NAME` | No | freesewaa | Database name |
| `SUPER_ADMIN_EMAILS` | No | — | Comma-separated admin emails |
| `SUPER_ADMIN_USER_IDS` | No | — | Comma-separated admin user IDs |

If no `MONGO_URI` is set, the server will exit with an error. MongoDB is required.

---

## Folder Structure

```
Free_Sewaa/
├── server/
│   ├── server.js          # Main backend (custom HTTP server)
│   ├── package.json       # Backend dependencies
│   └── __tests__/         # Jest test files
│       └── api.test.js    # Health + auth tests
├── html/                  # Static HTML pages
│   ├── index.html         # Landing page
│   ├── signup.html        # Registration
│   ├── signin.html        # Login
│   ├── browse.html        # Browse items
│   ├── donate.html        # Post a donation
│   ├── donate-us.html     # Donate page (alt)
│   ├── app.html           # User dashboard
│   ├── admin.html         # Admin panel
│   ├── admin_login.html   # Admin login
│   ├── messages.html      # Messaging
│   └── ...
├── css/                   # Stylesheets
├── js/                    # Frontend JS
├── docs/                  # Documentation
│   ├── week11/            # Week 11 docs
│   ├── assets/screenshots/ # Screenshots
│   └── ...
├── .github/workflows/     # CI config
└── README.md
```

---

## Running Tests

```bash
cd server
npm install
npm test
```

Tests use Jest + Supertest. They connect to a MongoDB instance at `localhost:27017`. In CI, a MongoDB service container is used.

---

## Common Errors

### "MongoDB connection failed"
- Make sure MongoDB is running: `mongod` or `brew services start mongodb-community`
- Check your `MONGO_URI` in `.env`
- MongoDB is required — the server exits if no connection string is provided

### "Email domain not recognized"
- Use a real email provider: @gmail.com, @naver.com, @daum.net, etc.
- Demo domains (@demo.com, @example.com, @test.com) are blocked

### "Password does not meet requirements"
- Must be 8–10 characters
- Must include uppercase and lowercase letters
- Must include at least one number

### "Port 3000 already in use"
- Change the port in `.env`: `PORT=3001`
- Or kill the process: `lsof -ti:3000 | xargs kill`

### "bcryptjs not found"
- Run `npm install` in the server folder
- bcryptjs is a pure JS library, no native compilation needed
- Note: bcryptjs is installed but not yet used for password hashing

### Tests fail with "ECONNREFUSED"
- Make sure MongoDB is running locally on port 27017
- Or set `MONGO_URI` to your Atlas connection string

---

## CI Pipeline

The GitHub Actions workflow (`.github/workflows/ci.yml`) runs on every push to main:

1. Starts a MongoDB 7 service container
2. Installs dependencies
3. Runs `npm test`
4. Checks that key folders and files exist

Check the Actions tab for results: https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/actions
