# Deployment and Demo Plan

## Production Deployment

### Platform: Render

The application is deployed on Render's free tier with automatic deploys from the main branch.

**Config:** [render.yaml](../../render.yaml)

### Deployment Details
- **Live URL:** [https://free-sewaa-qh05.onrender.com](https://free-sewaa-qh05.onrender.com)
- **Deploy method:** GitHub push to `main` branch
- **Build command:** `npm ci && npm run build`
- **Start command:** `npm start`
- **Environment variables:** Configured in Render dashboard

### Pre-Deployment Checklist
Deployment verification steps are documented in:
- [DEPLOYMENT_CHECKLIST.md](../../DEPLOYMENT_CHECKLIST.md)
- [RELEASE_CHECKLIST.md](../../RELEASE_CHECKLIST.md)

### Known Deployment Limitations
- **Cold start:** Free tier spins down after inactivity (~30 seconds to restart)
- **Free tier limits:** 750 hours/month, 512 MB RAM
- **No custom domain:** Uses Render's *.onrender.com subdomain

## Local Backup Demo

### Running Locally
```bash
git clone https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa.git
cd Free_Sewaa
npm install
# Configure .env with local MongoDB or Atlas URI
npm start
# Open http://localhost:3000
```

### Local vs Production Differences
| Aspect | Production | Local |
|--------|-----------|-------|
| URL | render.com | localhost:3000 |
| Database | MongoDB Atlas | Local or Atlas |
| Build | Vite production | Vite dev or static |
| Cold start | ~30s | Instant |
| Performance | Limited (free tier) | Full machine |

## Demo Devices and Setup

### Recommended Devices
- **Primary:** Laptop/desktop with modern browser (Chrome, Firefox, Safari, Edge)
- **Secondary:** Mobile device (iPhone/Android) for responsive design demo

### Browser Compatibility
Verified on all major browsers:
- [Browser Testing Checklist](../../BROWSER_TESTING_CHECKLIST.md)

## Demo Risks and Backup Plan

| Risk | Probability | Impact | Mitigation |
|------|-----------|--------|------------|
| Render cold start | High | Medium | Pre-warm site 1 minute before demo |
| Internet failure | Low | High | Switch to localhost demo |
| Database connection issue | Low | High | Restart server or check MongoDB Atlas status |
| Browser incompatibility | Low | Medium | Test on primary browser beforehand |
| Screenshots not loading | Low | Low | Local copies available |

### Backup Plan
1. **Primary:** Live Render demo at [free-sewaa-qh05.onrender.com](https://free-sewaa-qh05.onrender.com)
2. **Backup 1:** Localhost at `http://localhost:3000`
3. **Backup 2:** Screenshots in [assets/screenshots/](../../assets/screenshots/) and [docs/evidence/week11/screenshots/](../../docs/evidence/week11/)
4. **Backup 3:** Demo script walkthrough without live demo

### Demo Credentials
- User: Create account during demo or use pre-seeded credentials
- Admin: Username `admin` / Password `admin123` (configured in server)

## Screenshots

Screenshot gallery links:
- [Screenshot Inventory](../../assets/screenshots/README.md)
- [Week 11 Evidence Screenshots](../../docs/evidence/week11/)
