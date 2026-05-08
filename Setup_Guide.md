# Free Sewaa - Setup Guide

> **Purpose:** Step-by-step instructions to run the project locally.

---

## 📋 Prerequisites

| Tool | Version | Download |
|------|---------|----------|
| Node.js | v18+ | [nodejs.org](https://nodejs.org/) |
| MongoDB | v6+ (or Atlas) | [mongodb.com](https://www.mongodb.com/try/download/community) |
| Git | Latest | [git-scm.com](https://git-scm.com/) |
| Browser | Chrome/Firefox/Safari | Modern browser |

---

## 🚀 Quick Start (5 Minutes)

### 1. Clone the Repository
```bash
git clone https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa.git
cd Free_Sewaa
```

### 2. Setup MongoDB

**Option A: MongoDB Atlas (Recommended)**
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas/database)
2. Create free cluster
3. Get connection string
4. Add to `server/.env` (see step 4)

**Option B: Local MongoDB**
```bash
# macOS
brew tap mongodb/brew
brew install mongodb-community@6.0
brew services start mongodb-community@6.0

# Verify running
mongosh
```

### 3. Install Backend Dependencies
```bash
cd server
npm install
```

### 4. Configure Environment Variables

Create `server/.env` file:
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/free_sewaa
# OR for Atlas:
# MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/free_sewaa

SESSION_SECRET=your_session_secret_here
NODE_ENV=development
```

### 5. Start the Backend Server
```bash
cd server
npm start
```

Expected output:
```
Server running on port 3000
MongoDB connected successfully
```

### 6. Open Frontend

Just open `html/index.html` in your browser, OR use a simple HTTP server:

**Option A: Direct file open**
```
open html/index.html
```

**Option B: Live Server (VS Code extension)**
- Install "Live Server" extension
- Right-click `html/index.html` → "Open with Live Server"

**Option C: Python simple server**
```bash
cd html
python3 -m http.server 8080
# Visit: http://localhost:8080
```

---

## 🧪 Verify Setup

### Backend API Test
```bash
curl http://localhost:3000/api/health
# Expected: {"status": "ok"}
```

### Frontend Test
1. Open http://localhost:8080 (or open html/index.html)
2. Click "Sign Up" → Create account
3. Click "Browse" → See donation items
4. Click "Donate" → Post an item
5. Verify item appears in browse page

---

## 📂 Project Structure

```
Free_Sewaa/
├── html/              # Frontend HTML files
│   ├── index.html     # Homepage
│   ├── browse.html    # Browse donations
│   ├── donate.html    # Donate item form
│   ├── auth.html      # Login/Signup
│   └── profile.html   # User profile
├── css/               # Stylesheets
│   ├── style.css      # Main styles
│   ├── theme.css      # Theme variables
│   └── auth.css       # Auth page styles
├── js/                # JavaScript files
│   ├── index.js       # Homepage logic
│   ├── site.js        # Site-wide functions
│   └── auth.js        # Authentication logic
├── server/            # Backend Node.js/Express
│   ├── server.js      # Main server file
│   ├── package.json   # Dependencies
│   └── .env           # Environment variables (create this)
├── docs/              # Documentation
└── README.md          # Project overview
```

---

## 🐛 Common Issues

### Issue: "MongoDB connection failed"
**Solution:**
- Check MongoDB is running: `mongosh`
- Verify connection string in `.env`
- For Atlas: whitelist your IP in Network Access

### Issue: "Port 3000 already in use"
**Solution:**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
# Or change PORT in .env
```

### Issue: "Cannot find module"
**Solution:**
```bash
cd server
rm -rf node_modules package-lock.json
npm install
```

### Issue: CORS errors
**Solution:**
- Make sure frontend requests go to correct backend URL
- Check CORS configuration in `server.js`

---

## 🔐 Demo Credentials (For Professor)

> **Note:** Create these in your local setup, or use live demo: https://free-sewaa-qh05.onrender.com

| Role | Email | Password |
|------|--------|----------|
| Donor | donor@demo.com | demo1234 |
| Recipient | recipient@demo.com | demo1234 |
| Admin | admin@demo.com | admin1234 |

---

## 🌐 Live Demo

No setup needed! Visit:
**https://free-sewaa-qh05.onrender.com**

---

## 📹 Backup Video

If live demo fails, watch:
**https://youtu.be/free-sewaa-demo-backup**

---

## 👥 Team Contacts

| Member | GitHub | Role |
|--------|---------|------|
| Ram Pathak | [@Rampathak12](https://github.com/Rampathak12) | Backend Lead |
| Sujan Tamang | [@SujanTamang20](https://github.com/SujanTamang20) | Frontend HTML |
| Sujan Shrestha | [@suzmoon](https://github.com/suzmoon) | Auth & API |
| Swarnim Jung Karki | [@Swarnimkarki50](https://github.com/Swarnimkarki50) | CSS & Docs |
| Mohan Khadka | [@Mohankhadkaa](https://github.com/Mohankhadkaa) | Frontend JS |

---

## 📞 Need Help?

1. Check [docs/](docs/) folder for detailed documentation
2. Review [AI_CODE_OWNERSHIP_AUDIT.md](docs/AI_CODE_OWNERSHIP_AUDIT.md)
3. Check [Project Board](PROJECT_BOARD.md) for known issues
4. Create issue: https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/issues

---

*Last Updated: Week 10 - Final Submission Prep*
