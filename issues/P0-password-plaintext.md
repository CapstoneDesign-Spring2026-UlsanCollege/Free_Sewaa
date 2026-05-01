## [severity:p0] Password stored in plain text - no hashing implemented

## Summary
Passwords are stored in the database in plain text without any hashing. This is a critical security vulnerability.

## Severity
P0 - Critical security flaw. Passwords can be extracted from the database in readable form.

## Area
Backend / Security

## Evidence
File: `server/server.js` lines 82, 98, 825, 855, 882
- Demo user password: `123456` stored as plain text
- Admin password: `admin12345` stored as plain text  
- Comparison uses direct string match: `user.password !== password`

## Steps to Reproduce
1. Start MongoDB locally or connect to Atlas
2. Register a new user or check existing user
3. Query the users collection in MongoDB
4. Observe password field contains plain text

## Expected Behavior
Passwords should be hashed using bcrypt or similar before storing.

## Actual Behavior
Passwords stored as: `password: "123456"` in plain text.

## User Impact
If database is compromised, all user passwords are exposed. Violates OWASP security guidelines.

## Suspected Cause
Password hashing was planned but never implemented in the backend.

## Suggested Fix
- Install bcrypt: `npm install bcrypt`
- Hash password on signup before storing
- Use bcrypt.compare() for login verification.

## Acceptance Criteria
- [ ] Passwords hashed in database
- [ ] Login uses bcrypt.compare()
- [ ] Security review passes

## Related Documentation
- [AI Code Ownership Audit](docs/AI_CODE_OWNERSHIP_AUDIT.md)