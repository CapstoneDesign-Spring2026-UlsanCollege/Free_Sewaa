## Title
Bug: Authentication Redirect Fails After Login

## Severity
P0 – Blocker

## Description
After successful authentication, users are sometimes not redirected to the dashboard/home page. The application may remain stuck on the login screen or redirect after a long delay, affecting the core MVP flow and demo reliability.

This issue impacts the main user journey and creates a poor user experience during testing and presentations.

## Steps to Reproduce
1. Open the application
2. Navigate to the login page
3. Enter valid credentials
4. Click the login button
5. Observe page behavior after authentication

## Expected Behavior
Users should be redirected immediately to the dashboard or home page after successful login.

## Actual Behavior
- Login page remains visible
- Redirect is delayed or inconsistent
- User session may appear authenticated but UI does not update properly

## Possible Causes
- JWT token not stored correctly
- Authentication state not updating
- Route protection logic issues
- Async redirect timing problem

## Suggested Fixes
- Verify JWT token storage in localStorage/sessionStorage
- Improve redirect handling after authentication
- Add loading state during login request
- Ensure authentication context refreshes correctly
- Validate protected route logic

## Evidence
- Screenshot/video of failed redirect
- Browser console logs
- Network/API response logs

## Owner
Assigned developer: [Team Member Name]

## Next Steps
1. Reproduce issue consistently
2. Debug authentication flow
3. Test redirect behavior on multiple browsers
4. Push fix with PR and testing evidence

## Labels
bug
P0
authentication
frontend
QA
