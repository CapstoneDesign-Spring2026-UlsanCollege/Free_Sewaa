# Deployment Checklist

**Platform:** Render (free tier)
**Live URL:** https://free-sewaa-qh05.onrender.com
**Repository:** https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa

---

## 1. Build Configuration

- [x] Build command: `npm install`
- [x] Start command: `npm start`
- [x] Node version: 18+
- [x] Auto-deploy from `main` branch
- [ ] Verify build succeeds after each push

## 2. Environment Variables

- [ ] Create `.env` file:

```
PORT=3000
MONGO_URI=mongodb+srv://user:password@cluster.mongodb.net/free-sewaa
```

- [ ] Add `MONGO_URI` to Render dashboard
- [ ] Do NOT commit `.env` to repo
- [ ] Keep `.env.example` with dummy values

## 3. MongoDB Atlas

- [ ] Create M0 free cluster
- [ ] Create database user with read/write
- [ ] Whitelist Render IP in Network Access
- [ ] Test connection string

## 4. GitHub Setup

- [x] Repository created
- [x] Branch protection on `main`
- [ ] Webhook for auto-deploy
- [ ] CI workflow passing

## 5. Pre-Deploy Checks

- [ ] `npm install` completes
- [ ] `npm start` runs without crash
- [ ] Server responds on localhost:3000
- [ ] Console shows no errors

## 6. Post-Deploy Checks

- [ ] Landing page loads
- [ ] Signup and signin work
- [ ] Browse page shows items
- [ ] Donate form submits
- [ ] Admin login works
- [ ] Health endpoint responds

## 7. Common Issues

| Issue | Cause | Fix |
|-------|-------|-----|
| MongoDB timeout | IP not whitelisted | Add Render IP to Atlas Network Access |
| Port conflict | Render assigns PORT env | Use `process.env.PORT` |
| Static files 404 | Relative path broken | Use paths relative to project root |
| Auth state lost | localStorage cleared | Check browser storage after deploy |

## 8. Rollback Plan

1. Go to Render dashboard
2. Click "Manual Deploy" → "Deploy previous commit"
3. Or revert the commit: `git revert HEAD && git push`
4. Verify rollback on live URL
