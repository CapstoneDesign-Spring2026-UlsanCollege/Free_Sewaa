# Backup Demo Plan

## Primary Demo: Live Render

**URL:** [https://free-sewaa-qh05.onrender.com](https://free-sewaa-qh05.onrender.com)  
**Note:** Pre-warm the site ~1 minute before demo to avoid cold start delay.

## Backup 1: Localhost

If the live site is unavailable, run locally:

```bash
git clone https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa.git
cd Free_Sewaa
npm install
# Configure .env with MongoDB Atlas URI
npm start
# Open http://localhost:3000
```

## Backup 2: Screenshots

If both live and localhost fail, use screenshot walkthrough:

- [assets/screenshots/README.md](../../../assets/screenshots/README.md) — Screenshot inventory and capture guide
- [docs/evidence/week11/screenshots/](../../../docs/evidence/week11/) — Week 11 screenshots (6 images)

Screenshots cover: Landing page, Signup form, Browse items, Donate form, Messages, Admin panel.

## Demo Credentials

### User Account
- Sign up during demo, or use pre-seeded demo account

### Admin Account
- Navigate to `/admin-login.html`
- Username: `admin`
- Password: `admin123`

## What to Do If Internet Fails

1. **Switch to localhost** — If you have the repo cloned locally with dependencies installed
2. **Switch to screenshots** — Walk through the screenshots in order
3. **Use demo script** — Read through the [FINAL_PRESENTATION_SCRIPT.md](./FINAL_PRESENTATION_SCRIPT.md) without live demo
4. **Explain architecture** — Use [ARCHITECTURE_FINAL.md](../04-final-product/ARCHITECTURE_FINAL.md) to explain the system

## Pre-Demo Checklist

- [ ] Verify live site is accessible
- [ ] Pre-warm Render (visit site 1 minute before)
- [ ] Have local environment ready as backup
- [ ] Open screenshot folder as fallback
- [ ] Confirm demo credentials work
- [ ] Test browser compatibility (Chrome recommended)
- [ ] Close unnecessary tabs and applications
