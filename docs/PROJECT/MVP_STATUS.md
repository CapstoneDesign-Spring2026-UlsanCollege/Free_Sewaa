# MVP_STATUS.md — Free Sewaa

> Simple breakdown of what works, what's in progress, and what's planned.

---

## ✅ Working Now (Stable Features)

These features work reliably and can be demoed:

| Feature | Description | Evidence |
|---------|-------------|----------|
| **Homepage loads** | Landing page displays correctly with navigation | [Live demo](https://free-sewaa-qh05.onrender.com) |
| **User signup** | Users can create account with email/password | [Signup page](https://free-sewaa-qh05.onrender.com/signup.html) |
| **User login** | Existing users can log in | [Live demo](https://free-sewaa-qh05.onrender.com) |
| **Admin login** | Admin can access admin panel | [Admin login](https://free-sewaa-qh05.onrender.com/admin_login.html) |
| **Browse items** | Users can see available donation items | [Browse page](https://free-sewaa-qh05.onrender.com/browse.html) |
| **Responsive design** | Pages work on desktop and mobile | Tested by team |
| **MongoDB connected** | Database stores user and item data | [PR #78](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/pull/78) |

---

## 🔄 Partly Working (In Progress)

These features work but need improvement:

| Feature | What works | What needs fixing | Owner |
|---------|--------------|---------------------|--------|
| **Donate item** | Form submits, item created | Image upload not done, validation weak | Sujan Tamang |
| **Request item** | User can request items | Status tracking incomplete | Ram Pathak |
| **User profile** | Profile page loads | Request history not complete | Mohan Khadka |
| **Password security** | Login works | Passwords not hashed (P0 issue) | Ram Pathak, Sujan Shrestha |
| **Input validation** | Basic validation exists | Needs strengthening on all forms | Sujan Shrestha |
| **Error messages** | Some errors show | Messages unclear in places | Team |

---

## 📅 Planned Before Final (Week 11)

These must be done before the final presentation:

| Task | Priority | Owner | Status |
|------|----------|--------|--------|
| Implement password hashing (bcrypt) | P0 | Ram Pathak, Sujan Shrestha | 🔄 In Progress |
| Add input validation to all forms | P1 | Sujan Shrestha | 🔄 In Progress |
| Write backend API tests | P1 | Ram Pathak | ❌ To Do |
| Fix CI workflow to run tests | P1 | Ram Pathak | ❌ To Do |
| Record backup demo video | High | Swarnim Jung Karki | ❌ To Do |
| Test full flow in incognito mode | High | Team | ❌ To Do |
| Complete team contribution receipts | High | All | 🔄 In Progress |
| Finalize demo script and practice | High | Team | ❌ To Do |

---

## 💡 Future After Course (Not for Grading)

Ideas for after the class ends. Not part of MVP:

| Feature | Description | Priority |
|---------|-------------|----------|
| **Image upload** | Upload item photos to Cloudinary/S3 | Medium |
| **Real-time notifications** | Push notifications for requests | Medium |
| **Email verification** | Verify user emails on signup | Low |
| **Rating system** | Rate donors and recipients | Low |
| **Mobile app** | React Native or Flutter app | Low |
| **AI recommendations** | Suggest items based on user needs | Low |
| **Location-based matching** | Find items near the user | Medium |
| **Chat system** | Real-time messaging between users | Low |
| **Public launch** | Buy domain, deploy to production | High |

---

## 📊 Progress Summary

```
Working Now:      ████████████████████ 60%
Partly Working:    ██████████░░░░░░░░░ 40%
Planned (Before):  ██████░░░░░░░░░░░░░░ 30%
Future (After):    ░░░░░░░░░░░░░░░░░░░░  0%
```

---

## 🎯 Final MVP Goal (Week 11)

A small, stable, clearly proven app that demonstrates:

1. ✅ User can sign up and log in
2. ✅ Admin can manage users and items
3. 🔄 Donor can post items
4. ✅ User can browse available items
5. 🔄 User can request items
6. 🔄 Request status is saved and visible
7. ✅ Data persists in MongoDB
8. ❌ Backup video recorded

---

*Last Updated: Week 10 — Simple Student Summary*
