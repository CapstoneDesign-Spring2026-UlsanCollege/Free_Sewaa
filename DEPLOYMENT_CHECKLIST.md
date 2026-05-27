# Deployment Checklist — Free Sewaa

**Platform:** Render (free tier)
**URL:** https://free-sewaa-qh05.onrender.com

## Pre-Deploy

- [ ] All changes committed to `main`
- [ ] `.env` file not in repo
- [ ] `node_modules` not in repo
- [ ] No console.log debugging statements
- [ ] No secrets or credentials in code

## Build

- [ ] Build command: `npm install`
- [ ] Start command: `npm start`
- [ ] Node version set to 18 in Render dashboard
- [ ] Environment variables set: `MONGODB_URI`, `PORT`

## Post-Deploy

- [ ] Landing page loads
- [ ] Health endpoint: `GET /api/health` returns `{ "ok": true }`
- [ ] Signup works
- [ ] Login works
- [ ] Browse shows items
- [ ] Donate form submits
- [ ] Admin login works
- [ ] Mobile layout works

## Rollback

If something breaks:
1. Go to Render dashboard → Manual Deploy → Deploy previous commit
2. Or revert: `git revert HEAD && git push`
3. Verify rollback on live URL

See full guide: [`docs/DEPLOYMENT_GUIDE.md`](docs/DEPLOYMENT_GUIDE.md)

---

*Last updated: May 2026*
