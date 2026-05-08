# Free Sewaa - Demo Script

> **Purpose:** Step-by-step script for the final presentation demo.

---

## 🎥 Pre-Demo Checklist

- [ ] Live demo accessible: https://free-sewaa-qh05.onrender.com
- [ ] Backup video recorded: https://youtu.be/free-sewaa-demo-backup
- [ ] Tested full flow in incognito mode
- [ ] No console errors
- [ ] All team members know their parts

---

## 📋 Demo Flow (5-7 Minutes)

### 1. Introduction (30 seconds)
**Speaker:** [Name]

"Hi, we're Free Sewaa team. Our project solves the problem of usable items being thrown away while people in our community need them. Free Sewaa is a community-driven platform that connects donors with those who need items - completely free."

**Slide:** Show project logo + tagline

---

### 2. Target Users (20 seconds)
**Speaker:** [Name]

"Our target users are:
- **Students** who need items but have limited budget
- **Low-income families** looking for household items
- **Donors** who want to give away usable items
- **Community members** supporting waste reduction"

**Slide:** User personas (brief)

---

### 3. Live Demo - Core MVP Flow (4 minutes)

#### Step 1: Homepage (30 sec)
**Action:** Open https://free-sewaa-qh05.onrender.com
**Say:** "This is our homepage. Users can immediately see what Free Sewaa is about, browse available items, or log in to donate."

**Point out:**
- Clean, responsive design
- Navigation (Home, Browse, Login/Signup)
- About section explaining the mission

---

#### Step 2: User Sign Up (45 sec)
**Action:** Click "Sign Up" → Fill form → Submit
**Say:** "Let's create a new user account. I'll sign up as a recipient looking for items."

**Data to use:**
- Name: Demo User
- Email: demo@free-sewaa.com
- Password: demo1234

**Point out:**
- Form validation (try empty fields)
- Success message after signup
- Redirected to login page

---

#### Step 3: User Login (30 sec)
**Action:** Enter credentials → Click Login
**Say:** "Now I'll log in with the account I just created."

**Point out:**
- Session persists (refresh page)
- Navigation changes (Profile, Donate, Logout appear)

---

#### Step 4: Browse Available Items (45 sec)
**Action:** Click "Browse" → Scroll through items
**Say:** "This is our browse page. Users can see all available donation items posted by donors."

**Point out:**
- Item cards with title, description, category
- Responsive grid layout
- Click item to see detail

---

#### Step 5: Donor Posts an Item (60 sec)
**Action:** Log out → Sign up as donor → Click "Donate" → Fill form → Submit
**Say:** "Now let's see the donor flow. I'll create a donor account and post an item for donation."

**Data to use:**
- Title: "Study Desk - Like New"
- Description: "Wooden study desk, barely used, perfect for students"
- Category: Furniture
- Condition: Like New

**Point out:**
- Form has all required fields
- Item appears in browse page immediately after posting

---

#### Step 6: Request an Item (45 sec)
**Action:** Log in as recipient → Browse → Click item → Click "Request"
**Say:** "As a recipient, I can request an item I need. Let's request the study desk."

**Point out:**
- Request button on item detail page
- Confirmation message after requesting
- Request status visible in user profile

---

#### Step 7: View Profile / Request Status (30 sec)
**Action:** Click "Profile" → Show requests
**Say:** "Users can track their requests and donations in their profile page."

**Point out:**
- Active requests listed
- Status of each request (Pending, Accepted, Completed)
- Donation history

---

### 4. Technical Implementation (60 seconds)
**Speaker:** [Name] - Ram Pathak (Backend Lead)

"Under the hood, we use:
- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Backend:** Node.js with Express framework
- **Database:** MongoDB Atlas for data persistence
- **Authentication:** Session-based with JWT (in progress)
- **Deployment:** Render.com for live demo"

**Show quickly:**
- `server/server.js` (API endpoints)
- `html/browse.html` (frontend structure)
- MongoDB Atlas connection (screenshot)

---

### 5. What's Next (30 seconds)
**Speaker:** [Name]

**Before Final:**
- ✅ Stable login and authentication
- ✅ Reliable item posting and browsing
- ✅ Working request flow
- ✅ Data persistence verified

**After Final (Future):**
- Real-time notifications
- Image upload for items
- Mobile app (React Native)
- AI-powered item recommendations
- Location-based matching

**Slide:** Roadmap (simple version)

---

### 6. Team Contributions (30 seconds)
**Speaker:** [Name] - Swarnim Jung Karki

"Our team of 5 students:
- **Ram Pathak** - Backend Lead (Node.js, MongoDB, APIs)
- **Sujan Tamang** - Frontend HTML (Pages, Forms, Structure)
- **Sujan Shrestha** - Auth & API Integration (JS, Security)
- **Mohan Khadka** - Frontend JS (Interactivity, DOM)
- **Swarnim Jung Karki** - CSS & Docs (Design, Styling, Documentation)

Each member owns their code and can explain it."

**Slide:** Team photo + GitHub usernames

---

### 7. Call to Action (15 seconds)
**Speaker:** [Name]

"Free Sewaa makes donation simple, accessible, and waste-free. We're ready for the final. Thank you!"

**Slide:** QR code to live demo + GitHub repo

---

## 🚨 Backup Plan

**If live demo fails:**
1. Play backup video: https://youtu.be/free-sewaa-demo-backup
2. Show screenshots from `docs/MID-TERM/` folder
3. Walk through code in VS Code (have it open)

**Backup materials ready:**
- [ ] Backup video recorded
- [ ] Screenshots taken
- [ ] Code editor open with key files
- [ ] PowerPoint/PDF ready to present

---

## 📝 Speaker Notes

### For Ram Pathak (Backend):
- Be ready to show `server.js` code
- Explain MongoDB connection
- Mention security work (password hashing in progress)

### For Sujan Tamang (Frontend HTML):
- Point out semantic HTML structure
- Show how forms collect data
- Mention responsive meta tags

### For Sujan Shrestha (Auth):
- Explain login flow (frontend → backend → session)
- Show `js/auth.js` code
- Mention AI assistance disclosure

### For Mohan Khadka (JS):
- Show DOM manipulation in `js/site.js`
- Demonstrate event listeners
- Point out dynamic content loading

### For Swarnim Jung Karki (CSS & Docs):
- Show responsive design (resize browser)
- Point out CSS variables in `theme.css`
- Mention documentation structure

---

## 🎯 Demo Tips

1. **Practice the flow** - Run through it 3+ times before presentation
2. **Slow down** - Don't rush, explain each step clearly
3. **Have backup** - Video + screenshots ready
4. **Team ready** - Everyone knows when to speak
5. **Check internet** - Test demo link 5 minutes before
6. **Clear cache** - Use incognito mode for clean demo
7. **No mystery code** - Everyone can explain their part

---

## 📸 Screenshot Timestamps (for backup video)

| Time | Screen | What to show |
|------|---------|----------------|
| 0:00 | Homepage | Clean landing page |
| 0:30 | Sign Up | Form filled, submitted |
| 1:15 | Login | Credentials entered |
| 1:45 | Browse | Items grid visible |
| 2:30 | Donate | Form filled, submitted |
| 3:30 | Item Detail | Request button clicked |
| 4:15 | Profile | Requests listed |
| 5:00 | Code | Quick server.js walkthrough |

---

## ✅ Pre-Presentation Checklist

**Day Before:**
- [ ] Test demo in incognito mode
- [ ] Record backup video
- [ ] Charge laptop + have charger
- [ ] Test projector/display connection
- [ ] Everyone knows their speaking parts

**15 Minutes Before:**
- [ ] Open demo in browser (test it works)
- [ ] Open VS Code with key files
- [ ] Open backup video (don't play yet)
- [ ] Close unnecessary apps/tabs
- [ ] Calm down, you've got this!

---

*Last Updated: Week 10 - Final Demo Prep*
