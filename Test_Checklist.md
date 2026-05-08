# Free Sewaa - Test Checklist

> **Purpose:** Evidence that our MVP works. Each test links to proof.

---

## ✅ Core MVP Flow Tests

### 1. User Can Sign Up
- [x] **Test:** Navigate to signup page, fill form, submit
- **Expected:** Account created, redirected to login
- **Result:** ✅ PASS
- **Evidence:** [Auth code](js/auth.js) | [Server API](server/server.js)
- **Tested by:** Sujan Shrestha
- **Date:** Week 9

### 2. User Can Log In
- [x] **Test:** Enter credentials, click login
- **Expected:** Logged in, redirected to homepage
- **Result:** ✅ PASS
- **Evidence:** [Live demo login](https://free-sewaa-qh05.onrender.com/login)
- **Tested by:** Ram Pathak
- **Date:** Week 9

### 3. Donor Can Post Item
- [x] **Test:** Navigate to donate page, fill form, submit
- **Expected:** Item appears in browse page
- **Result:** ✅ PASS
- **Evidence:** [Donate page](html/donate.html) | [Form code](js/site.js)
- **Tested by:** Sujan Tamang
- **Date:** Week 8

### 4. Item Appears in Browse Page
- [x] **Test:** Post item, navigate to browse page
- **Expected:** New item visible in browse list
- **Result:** ✅ PASS
- **Evidence:** [Browse page](html/browse.html) | [Live demo](https://free-sewaa-qh05.onrender.com/browse.html)
- **Tested by:** Mohan Khadka
- **Date:** Week 8

### 5. User Can Request Item
- [x] **Test:** Click request on item, confirm request
- **Expected:** Request created, status changes
- **Result:** ✅ PASS
- **Evidence:** [Server API](server/server.js) | [Item page](html/item.html)
- **Tested by:** Ram Pathak, Sujan Shrestha
- **Date:** Week 9

### 6. Request is Saved / Status Changes
- [x] **Test:** Request item, check profile/status
- **Expected:** Request visible in user profile
- **Result:** ✅ PASS
- **Evidence:** [Profile page](html/profile.html) | [API endpoint](server/server.js)
- **Tested by:** Sujan Tamang
- **Date:** Week 9

### 7. Data Persists (MongoDB)
- [x] **Test:** Post item, refresh page, verify item still there
- **Expected:** Data remains after refresh
- **Result:** ✅ PASS
- **Evidence:** [MongoDB setup](docs/DESIGN/MONGODB_SETUP.md) | [PR #78](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/pull/78)
- **Tested by:** Ram Pathak
- **Date:** Week 8

### 8. Invalid Input Shows Clear Error
- [x] **Test:** Submit empty form, wrong email format, short password
- **Expected:** Error messages display correctly
- **Result:** ✅ PASS (partial - needs improvement)
- **Evidence:** [Auth JS](js/auth.js) | [Tests](docs/PROGRESS/TESTING_LOG.md)
- **Tested by:** Sujan Shrestha
- **Date:** Week 10

### 9. Demo Works in Fresh Browser
- [x] **Test:** Open incognito window, run full flow
- **Expected:** All features work in clean session
- **Result:** ✅ PASS
- **Evidence:** [Backup video](https://youtu.be/free-sewaa-demo-backup)
- **Tested by:** Swarnim Jung Karki
- **Date:** Week 10

### 10. Responsive Design Works
- [x] **Test:** Test on mobile (375px), tablet (768px), desktop (1920px)
- **Expected:** Layout adapts to screen size
- **Result:** ✅ PASS
- **Evidence:** [CSS files](css/) | [Theme](css/theme.css)
- **Tested by:** Swarnim Jung Karki
- **Date:** Week 7

---

## 🐛 Bug Tests (P0/P1)

### P0: Password Hashing Not Implemented
- [ ] **Test:** Check if passwords are hashed in database
- **Expected:** Passwords should be bcrypt hashed
- **Result:** ❌ FAIL - Currently plain text
- **Issue:** [Issue #68](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/issues/68)
- **Owner:** Ram Pathak, Sujan Shrestha
- **Priority:** P0 - Must fix before production

### P1: No Input Validation on Donate Form
- [ ] **Test:** Submit donate form with invalid data
- **Expected:** Validation errors shown
- **Result:** ⚠️ PARTIAL - Basic validation only
- **Issue:** Create issue
- **Owner:** Sujan Shrestha, Mohan Khadka
- **Priority:** P1 - Fix before final

### P1: No Unit Tests for Backend
- [ ] **Test:** Run backend test suite
- **Expected:** All API endpoints have tests
- **Result:** ❌ FAIL - No tests yet
- **Issue:** Create issue
- **Owner:** Ram Pathak
- **Priority:** P1 - Write tests before final

---

## 📸 Screenshot Evidence

| Test | Screenshot Link |
|------|-------------------|
| Signup page | [docs/MID-TERM/](docs/MID-TERM/) |
| Login page | [docs/MID-TERM/](docs/MID-TERM/) |
| Browse page | [docs/MID-TERM/](docs/MID-TERM/) |
| Donate form | [docs/MID-TERM/](docs/MID-TERM/) |
| Profile page | [docs/MID-TERM/](docs/MID-TERM/) |
| Mobile view | [css/](css/) |

---

## 🔄 Cross-Browser Testing

| Browser | Version | Signup | Login | Browse | Donate | Status |
|----------|----------|--------|-------|--------|---------|--------|
| Chrome | Latest | ✅ | ✅ | ✅ | ✅ | PASS |
| Firefox | Latest | ✅ | ✅ | ✅ | ✅ | PASS |
| Safari | Latest | ✅ | ✅ | ⚠️ | ✅ | Minor CSS issues |
| Edge | Latest | ✅ | ✅ | ✅ | ✅ | PASS |

---

## 📱 Device Testing

| Device | Screen Size | Browse | Donate | Login | Status |
|--------|--------------|--------|--------|-------|--------|
| iPhone SE | 375px | ✅ | ✅ | ✅ | PASS |
| iPad | 768px | ✅ | ✅ | ✅ | PASS |
| Desktop | 1920px | ✅ | ✅ | ✅ | PASS |

---

## 🎯 Final MVP Verification (Week 11)

- [ ] User can sign up with email/password
- [ ] User can log in and stay logged in
- [ ] Donor can post item with title, description, category
- [ ] Item appears immediately in browse page
- [ ] User can request item from browse page
- [ ] Request status is saved and visible
- [ ] Data persists after page refresh
- [ ] No console errors during normal flow
- [ ] Backup video recorded and uploaded
- [ ] Live demo accessible to professor

---

## 📝 Testing Log

Full testing log available at:
- [docs/PROGRESS/TESTING_LOG.md](docs/PROGRESS/TESTING_LOG.md)
- [docs/MID-TERM/Testing and Bugs.md](docs/MID-TERM/Testing%20and%20Bugs.md)
- [docs/PROGRESS/MVP_CHECKLIST.md](docs/PROGRESS/MVP_CHECKLIST.md)

---

*Last Updated: Week 10 - Pre-Final Testing*
