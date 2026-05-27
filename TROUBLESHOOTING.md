# Troubleshooting — Free Sewaa

## Server Won't Start

| Error | Fix |
|-------|-----|
| `Missing MongoDB connection string` | Add `MONGODB_URI` to `.env` |
| `connect ECONNREFUSED` | Start MongoDB: `brew services start mongodb-community` |
| `listen EADDRINUSE` | Kill process: `lsof -ti:3000 \| xargs kill` |

## Login Issues

| Problem | Fix |
|---------|-----|
| `Email domain not recognized` | Use gmail.com, naver.com, or outlook.com |
| `Password does not meet requirements` | Password must be 8-10 chars with uppercase, lowercase, number |
| `Account is blocked` | Contact admin to unblock |

## Page Errors

| Problem | Fix |
|---------|-----|
| Blank page on load | Check browser console (F12) for errors |
| 404 on navigation | Ensure you're on the right port (default 3000) |
| Styles not loading | Clear browser cache |
| Auth state lost | Check localStorage in DevTools → Application → Storage |

## API Issues

| Problem | Fix |
|---------|-----|
| API returns 401 | Include `?userId=` or `x-user-id` header |
| API returns 500 | Check server logs for error details |

See full guide: [`docs/TROUBLESHOOTING.md`](docs/TROUBLESHOOTING.md)

---

*Last updated: May 2026*
