# Bug: Input validation missing on signup

## Severity
P1

## What happened?
Signup form accepts invalid emails and weak passwords.

## Steps to reproduce
1. Go to signup page
2. Enter invalid email (e.g., test@test)
3. Enter weak password (e.g., 123)
4. Submit form

## Expected result
Form should show validation errors.

## Actual result
User created with invalid data.

## Evidence
- Issue: #95
- Related PR: (to add)
- Screenshot: (to add)

## Owner
Sujan Tamang

## Definition of Done
- [ ] Email validation implemented
- [ ] Password strength check added
- [ ] Clear error messages shown
- [ ] Evidence linked
