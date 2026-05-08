# Bug: Passwords stored in plain text

## Severity
P1

## What happened?
User passwords are stored in plain text in the database.

## Steps to reproduce
1. Register a new user
2. Check the database record for that user
3. Look at the password field

## Expected result
Passwords should be hashed with bcrypt.

## Actual result
Password visible in database as plain text.

## Evidence
- Issue: #94
- Related PR: (to add)
- Database screenshot: (to add)

## Owner
Ram Pathak

## Definition of Done
- [ ] Password hashing implemented with bcrypt
- [ ] Existing passwords migrated to hashed format
- [ ] Login works with hashed passwords
- [ ] Evidence linked
