# Security Plan

## Current Security Measures

### Authentication
- Email domain whitelist — only recognized providers can register
- Password strength validation (8-10 chars, upper + lower + number)
- Admin accounts protected by role-based access
- Firebase configuration is present for email-based authentication support

### Input Validation
- HTML escaping on all user-generated content (`escapeHtml()` utility)
- Payload size limit (10MB) on request body
- Chatbot message length limit (600 characters)
- Form validation on both frontend and backend

### Access Control
- Dashboard routes require valid userId
- Admin routes require `superadmin` role
- Users can only edit/delete their own listings
- Users cannot request their own items
- Self-protection: admin cannot block their own account

## Security Checklist

- [x] Email domain validation
- [ ] Production password policy and hashing
- [x] Input escaping (XSS prevention)
- [x] Payload size limits
- [x] Role-based admin access
- [x] Ownership verification for edits
- [ ] Password hashing with bcryptjs in all local-password paths
- [ ] Rate limiting on auth endpoints
- [ ] HTTPS enforcement
- [ ] Security headers (CSP, HSTS)
- [ ] CSRF protection

## Known Limitations

- Passwords stored in plaintext (bcryptjs available but unused)
- CORS is wide open (`Access-Control-Allow-Origin: *`)
- No rate limiting on login attempts
- No JWT tokens — uses localStorage-based auth
- No HTTPS redirect middleware (handled by Render in production)

## Recommended Improvements

1. Implement bcrypt password hashing
2. Add rate limiting to auth endpoints
3. Add security headers (helmet or equivalent)
4. Restrict CORS to specific origins in production
5. Add proper JWT or session tokens

---

*Last updated: May 2026*
