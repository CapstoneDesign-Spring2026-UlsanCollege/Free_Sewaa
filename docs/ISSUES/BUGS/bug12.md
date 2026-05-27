## Title
Bug: Password Recovery Feature Is Missing

## Severity
P0 – Critical Authentication Issue

## Description
Users currently cannot recover their accounts if they forget their password because the password reset functionality has not been implemented.

## Steps to Reproduce
1. Open login page
2. Click “Forgot Password”
3. Attempt to recover account access

## Expected Behavior
Users should receive a password reset link or verification email to recover their account securely.

## Actual Behavior
- No password recovery flow exists
- Users are unable to reset forgotten passwords
- Account access becomes permanently blocked

## Suggested Fixes
- Implement forgot password workflow
- Add secure email verification token system
- Create reset password UI page
- Validate token expiration and security handling

## Labels
bug P0 authentication backend frontend
