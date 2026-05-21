# Environment Setup

## Required Tools

| Tool | Version | Purpose |
|------|---------|---------|
| Node.js | 18+ | JavaScript runtime |
| npm | 9+ | Package manager |
| MongoDB | 6+ | Database |
| Git | Any | Version control |

## Setup Steps

```bash
# 1. Install Node.js 18+
# Download from https://nodejs.org/

# 2. Install MongoDB
# macOS:
brew install mongodb-community
brew services start mongodb-community

# 3. Clone the repository
git clone https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa.git
cd Free_Sewaa

# 4. Install dependencies
npm install

# 5. Create environment file
cat > .env << EOF
PORT=3000
MONGODB_URI=mongodb://localhost:27017/freesewaa
EOF

# 6. Start the server
npm start
```

## Verify Setup

Open `http://localhost:3000` in a browser. The landing page should load.

## Common Setup Errors

| Error | Fix |
|-------|-----|
| `MongoDB connection failed` | Make sure MongoDB is running: `brew services start mongodb-community` |
| `Port 3000 already in use` | Change port in `.env`: `PORT=3001` |
| `bcryptjs not found` | Run `npm install` in the `server/` folder |
| `Module not found` | Run `npm install` from the project root |

---

*Last updated: May 2026*
