# Bugs and Limitations

## Known Bugs

| Bug / Limitation | Severity | Status | Evidence | Workaround / Next Step |
|---|---|---|---|---|
| Passwords stored in plain text / bcrypt installed but unused | P1 | Open | [PROJECT_BOARD.md](../../PROJECT_BOARD.md), [SECURITY_CHECKLIST.md](../../SECURITY_CHECKLIST.md) | Integrate bcrypt hashing middleware (partial fix in Week 11) |
| Demo credentials exposed in README | P3 | Open | [README.md](../../README.md), [SECURITY_CHECKLIST.md](../../SECURITY_CHECKLIST.md) | Remove or obfuscate before production deployment |
| CORS wide open (`*`) | P2 | Open | [server/server.js](../../server/server.js), [SECURITY_CHECKLIST.md](../../SECURITY_CHECKLIST.md) | Restrict CORS to specific origins (Render domain + localhost) |
| Browse page items not rendering correctly | P1 | Open | [docs/ISSUES/BUGS/bug1.md](../../docs/ISSUES/BUGS/bug1.md) | Refresh page or check network tab for API errors |
| Uploaded images too large and inconsistent | P2 | Open | [docs/ISSUES/BUGS/bug2.md](../../docs/ISSUES/BUGS/bug2.md) | Add client-side image resizing before upload |
| No professional logout option | P1 | Open | [docs/ISSUES/BUGS/bug3.md](../../docs/ISSUES/BUGS/bug3.md) | Add logout button to navigation |
| Homepage gradients harsh and inconsistent | P2 | Open | [docs/ISSUES/BUGS/bug4.md](../../docs/ISSUES/BUGS/bug4.md) | Apply Figma-matched gradient values |
| Request/item actions not reflected across pages | P1 | Open | [docs/ISSUES/BUGS/bug6.md](../../docs/ISSUES/BUGS/bug6.md) | Add state synchronization after actions |
| "Just now" timestamp always shown | P1 | Open | [docs/ISSUES/BUGS/bug7.md](../../docs/ISSUES/BUGS/bug7.md) | Fix timestamp calculation on server |
| Chat button not passing item context | P1 | Open | [docs/ISSUES/BUGS/bug7.md](../../docs/ISSUES/BUGS/bug7.md) | Pass item ID in chat URL parameters |
| Admin login shows error after account creation | P1 | Open | [docs/ISSUES/BUGS/bug8.md](../../docs/ISSUES/BUGS/bug8.md), [bug9.md](../../docs/ISSUES/BUGS/bug9.md) | Verify admin account setup order |
| Authentication redirect fails after login | P0 | Open | [docs/ISSUES/BUGS/bug10.md](../../docs/ISSUES/BUGS/bug10.md) | Check redirect logic in auth middleware |
| User session lost after page refresh | P1 | Open | [docs/ISSUES/BUGS/bug11.md](../../docs/ISSUES/BUGS/bug11.md) | Implement persistent session storage |
| Password recovery feature missing | P0 | Open | [Bug reports](../../docs/ISSUES/BUGS/) | Implement forgot password flow |
| Navigation bar contains broken links | P0 | Open | [Bug reports](../../docs/ISSUES/BUGS/) | Audit and fix all navigation URLs |
| Donation receipt emails not sent | P1 | Open | [Bug reports](../../docs/ISSUES/BUGS/) | Integrate email service (nodemailer) |
| Search filter returns inconsistent results | P1 | Open | [Bug reports](../../docs/ISSUES/BUGS/) | Debug search query logic |
| AI bot responses lack contextual accuracy | P2 | Open | [Bug reports](../../docs/ISSUES/BUGS/) | Improve AI training data or fallback to canned responses |
| UI components lack visual consistency | P2 | Open | [Bug reports](../../docs/ISSUES/BUGS/) | Apply Figma design system consistently |
| Website accessibility fails after deployment | P0 | Open | [Bug reports](../../docs/ISSUES/BUGS/) | Audit with Lighthouse, fix ARIA labels and keyboard nav |
| Empty pages lack proper feedback messages | P2 | Open | [Bug reports](../../docs/ISSUES/BUGS/) | Add empty state components with messaging |
| Donation posts load slowly on weak networks | P1 | Open | [Bug reports](../../docs/ISSUES/BUGS/) | Implement lazy loading and image optimization |

## Known Limitations

| Limitation | Impact | Notes |
|---|---|---|
| Render cold start | Demo delay | ~30 seconds to restart after inactivity |
| No rate limiting | Security risk | API endpoints unprotected from abuse |
| No email service | Missing feature | Receipt and notification emails not sent |
| No password hashing | Security risk | bcrypt installed but not integrated |
| Limited test automation | Coverage gap | Only 3 automated tests vs 50+ manual |
| No CI/CD beyond basic | Workflow risk | Only basic CI workflow configured |
| React migration in progress | Inconsistent UI | Some pages still static HTML |
| No custom domain | Presentation issue | Uses Render subdomain |
