# Troubleshooting

## App Won't Start

| Symptom | Cause | Fix |
|---------|-------|-----|
| `Error: Missing MongoDB connection string` | No `MONGODB_URI` in `.env` | Add `MONGODB_URI=mongodb://localhost:27017/freesewaa` to `.env` |
| `Error: connect ECONNREFUSED` | MongoDB not running | Run `brew services start mongodb-community` |
| `Error: listen EADDRINUSE` | Port already in use | Change port in `.env` or kill the process: `lsof -ti:3000 \| xargs kill` |

## Login Issues

| Symptom | Cause | Fix |
|---------|-------|-----|
| `Email domain not recognized` | Email provider not in whitelist | Use a recognized provider: gmail.com, naver.com, outlook.com, etc. |
| `Password does not meet requirements` | Weak password | Password must be 8-10 characters with uppercase, lowercase, and a number |
| `Account is blocked` | Admin blocked the account | Contact an admin to unblock |

## Page Not Loading

| Symptom | Cause | Fix |
|---------|-------|-----|
| Blank page on Render | Build or start command misconfigured | Check Render dashboard → Environment → Start Command should be `node server/server.js` |
| 404 on page | File not found | Make sure the HTML file exists in the `html/` directory |
| Styling broken | CSS file not loading | Check that the `<link>` tag path is correct (should be `css/style.css`) |

## Database Issues

| Symptom | Cause | Fix |
|---------|-------|-----|
| Data not persisting | MongoDB not connected | Check `MONGODB_URI` in `.env` |
| Duplicate email error | Email already registered | Use a different email or log in with the existing account |

## Render Deployment Issues

| Symptom | Cause | Fix |
|---------|-------|-----|
| Build fails | Missing dependency | Make sure `package.json` has all required dependencies |
| App crashes after deploy | Missing environment variable | Add `MONGODB_URI` in Render dashboard → Environment |
| Static files not served | Wrong root directory | Make sure the project root (not `server/`) is the base directory |

---

*Last updated: May 2026*
