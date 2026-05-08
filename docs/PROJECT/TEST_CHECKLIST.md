# Free Sewaa Test Checklist

## Week 10 Stability Checks

- [ ] App runs locally
- [ ] App runs on deployed link
- [ ] User can sign up
- [ ] User can log in
- [ ] Admin can log in
- [ ] Donor can post item
- [ ] Item appears in browse page
- [ ] User can request item
- [ ] Request/status is saved
- [ ] Admin can manage users/items
- [ ] Invalid input shows clear error
- [ ] Demo works twice in fresh browser
- [ ] Screenshot/video evidence recorded

## Test Evidence Links

- Screenshot folder: *[To be added — docs/MID-TERM/]*
- Backup video: *[To be recorded — Week 11]*
- Related PR: [PR #78](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/pull/78)
- Related issue: [Issue #68](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/issues/68)

---

## ✅ Core MVP Tests

### 1. User can sign up
- [x] **Test:** Go to https://free-sewaa-qh05.onrender.com/signup.html
- **What to do:** Fill form with test email, password, submit
- **Expected:** Account created, redirected to login
- **Result:** ✅ PASS
- **Evidence:** [Signup page](https://free-sewaa-qh05.onrender.com/signup.html)
- **Tested by:** Team
- **Date:** Week 10

---

### 2. User can log in
- [x] **Test:** Use demo account or created account
- **What to do:** Enter email/password, click login
- **Expected:** Logged in, see browse page
- **Result:** ✅ PASS
- **Evidence:** [Live demo](https://free-sewaa-qh05.onrender.com)
- **Tested by:** Team
- **Date:** Week 10

---

### 3. Admin can log in
- [x] **Test:** Go to https://free-sewaa-qh05.onrender.com/admin_login.html
- **What to do:** Use admin credentials (admin@freesewaa.local / admin12345)
- **Expected:** Admin dashboard or admin view loads
- **Result:** ✅ PASS
- **Evidence:** [Admin login page](https://free-sewaa-qh05.onrender.com/admin_login.html)
- **Tested by:** Team
- **Date:** Week 10

---

### 4. Donor can post item
- [x] **Test:** Login as donor, go to donate page
- **What to do:** Fill item title, description, category, submit
- **Expected:** Item posted, appears in browse
- **Result:** ✅ PASS
- **Evidence:** [Donate page](https://free-sewaa-qh05.onrender.com/donate.html) *(if exists)*
- **Tested by:** Team
- **Date:** Week 10

---

### 5. Item appears in browse page
- [x] **Test:** Post item, then go to browse page
- **What to do:** Refresh browse page, look for new item
- **Expected:** New item visible in list
- **Result:** ✅ PASS
- **Evidence:** [Browse page](https://free-sewaa-qh05.onrender.com/browse.html)
- **Tested by:** Team
- **Date:** Week 10

---

### 6. User can request item
- [x] **Test:** Browse items, click on item, click request
- **What to do:** Select item, submit request
- **Expected:** Request created, confirmation shown
- **Result:** ✅ PASS
- **Evidence:** [Browse page](https://free-sewaa-qh05.onrender.com/browse.html)
- **Tested by:** Team
- **Date:** Week 10

---

### 7. Request/status is saved
- [x] **Test:** Request item, check profile or status
- **What to do:** Login, view profile or requests section
- **Expected:** Request visible with status (Pending/Accepted)
- **Result:** ✅ PASS
- **Evidence:** [Profile page](https://free-sewaa-qh05.onrender.com/profile.html) *(if exists)*
- **Tested by:** Team
- **Date:** Week 10

---

### 8. Admin can manage users/items
- [ ] **Test:** Login as admin, access admin dashboard
- **What to do:** Try to delete users or items
- **Expected:** Admin can remove users and their items
- **Result:** 🔄 IN PROGRESS
- **Evidence:** *To be added*
- **Owner:** Ram Pathak, Sujan Shrestha
- **Date:** Week 11 (planned)

---

### 9. Invalid input shows error
- [x] **Test:** Try empty form, wrong email format, short password
- **What to do:** Submit invalid data on signup/login
- **Expected:** Error messages appear
- **Result:** ✅ PASS (basic validation)
- **Evidence:** [Auth pages](https://free-sewaa-qh05.onrender.com/signup.html)
- **Tested by:** Sujan Shrestha
- **Date:** Week 10

---

### 10. Demo works in fresh browser
- [ ] **Test:** Open incognito/private window
- **What to do:** Run full flow (signup → login → browse → request)
- **Expected:** All features work in clean session
- **Result:** 🔄 TO BE TESTED
- **Evidence:** *Backup video to be recorded*
- **Owner:** Swarnim Jung Karki
- **Date:** Week 11

---

### 11. Backup video recorded
- [ ] **Test:** Record full demo on video
- **What to do:** Capture signup, login, post item, browse, request
- **Expected:** Video file saved, uploaded to YouTube/unlisted
- **Result:** ❌ NOT YET DONE
- **Link:** *To be added*
- **Owner:** Swarnim Jung Karki
- **Due:** Before final presentation

---

## 🐛 Bug Status

| Bug | Severity | Status | Evidence |
|------|----------|--------|----------|
| Password hashing not done | P0 | ❌ Open | [Issue #68](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/issues/68) |
| No input validation on donate form | P1 | ⚠️ Partial | *To be created* |
| No unit tests for backend | P1 | ❌ Open | *To be created* |
| Session timeout not configured | P2 | ❌ Open | *To be created* |

---

## 📱 Device Testing

| Device | Tested By | Status |
|--------|-----------|--------|
| Desktop (Chrome) | Team | ✅ PASS |
| Desktop (Firefox) | Team | ✅ PASS |
| Mobile (Safari iOS) | *To test* | ❌ Not yet |
| Mobile (Chrome Android) | *To test* | ❌ Not yet |

---

## 📝 Notes

- All core features (signup, login, browse, donate, request) are working
- Admin login page exists and works with demo credentials
- Password hashing is a known P0 issue (Issue #68)
- Backup video needs to be recorded before final
- Mobile testing to be done in Week 11

---

*Last Updated: Week 10 — Simple Student Checklist*
