# Bug: Backend has no unit tests

## Severity
P1

## What happened?
Backend API has no unit tests. Changes can break functionality without detection.

## Steps to reproduce
1. Check `server/` folder for test files
2. Run `npm test`
3. Check coverage

## Expected result
Each API endpoint should have unit tests.

## Actual result
No test files found. `npm test` fails or does nothing.

## Evidence
- Issue: #96
- Related PR: (to add)

## Owner
Sujan Shrestha

## Definition of Done
- [ ] Jest setup completed
- [ ] Tests written for auth endpoints
- [ ] Tests written for items endpoints
- [ ] Test coverage > 70%
- [ ] CI runs tests automatically
