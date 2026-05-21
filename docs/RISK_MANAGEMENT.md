# Risk Management

## Technical Risks

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| MongoDB connection fails in production | Low | High | Use MongoDB Atlas with auto-scaling; verify connection string |
| Render deployment goes down | Low | High | Keep local development environment ready for demo; have rollback plan |
| Browser compatibility issues | Medium | Medium | Test on Chrome and Safari (primary student browsers) |
| Performance with many listings | Low | Medium | MongoDB indexes on queried fields; pagination for large result sets |

## Security Risks

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Brute force login attack | Medium | High | Rate limiting planned; demo credentials are for presentation only |
| XSS via item descriptions | Low | Medium | HTML escaping on all user input |
| Unauthorized admin access | Low | High | Role-based access control; superadmin self-protection |

## User Experience Risks

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Users cannot figure out the flow | Medium | Medium | Simple navigation; clear labels; demo guide available |
| Mobile layout breaks on some devices | Medium | Medium | Responsive design with 6 breakpoints; test on common screen sizes |
| Image upload fails | Low | Medium | Server accepts image URLs as fallback; client-side compression |

## Deployment Risks

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Environment variables missing on Render | Medium | High | Document all env vars in deployment guide; check before deploy |
| Build fails on Render | Low | High | Run `npm install` locally first; verify dependencies |
| MongoDB Atlas IP whitelist blocks Render | Low | High | Whitelist all IPs (0.0.0.0/0) for Atlas during development |

## Team Workflow Risks

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Team members unavailable before demo | Low | High | Cross-train demo flow; document backup plan |
| Merge conflicts on main branch | Medium | Medium | Use feature branches; rebase before merging |
| Documentation out of sync with code | Medium | Medium | Review docs before each submission; update during sprint close |

---

*Last updated: May 2026*
