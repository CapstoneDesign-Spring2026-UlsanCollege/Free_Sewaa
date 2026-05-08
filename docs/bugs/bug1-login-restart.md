# Bug: Login fails after server restart

## Severity
P1

## What happened?
After restarting the server, existing users cannot login with correct credentials.

## Steps to reproduce
1. Start the server with `npm start`
2. Create a user or use existing one
3. Restart the server (Ctrl+C, then `npm start` again)
4. Try to login with correct credentials

## Expected result
User should be able to login after server restart.

## Actual result
Login fails with 401 Unauthorized error.

## Evidence
- Screenshot: (to add)
- Console error: JWT secret not persisting
- Related PR: (to add)

## Owner
Ram Pathak

## Definition of Done
- [ ] JWT secret persists across restarts
- [ ] Login works after server restart
- [ ] Manual test completed
- [ ] Evidence linked
