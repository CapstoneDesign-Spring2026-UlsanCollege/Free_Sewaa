## Title
Bug: User Session Is Lost After Page Refresh

## Severity
P1 – Core Authentication Issue

## Description
Users are sometimes logged out automatically after refreshing the page, even when authentication should persist.

## Steps to Reproduce
1. Login successfully
2. Refresh the browser page
3. Observe authentication state

## Expected Behavior
User session should remain active after refresh until logout or token expiration.

## Actual Behavior
- User gets redirected to login page
- Authentication state resets unexpectedly
- Session persistence becomes inconsistent

## Suggested Fixes
- Verify JWT token persistence
- Improve auth state restoration
- Validate token expiration handling
- Rehydrate authentication context on app load

## Labels
bug
P1
authentication
frontend
QA
