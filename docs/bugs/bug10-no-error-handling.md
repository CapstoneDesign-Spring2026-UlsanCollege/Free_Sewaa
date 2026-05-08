# Bug: No error handling in API routes

## Severity
P2

## What happened?
API routes don't have proper error handling. Server crashes on unexpected input.

## Steps to reproduce
1. Send malformed JSON to any API endpoint
2. Send request with missing required fields
3. Check server logs

## Expected result
API should return clear error messages with proper status codes.

## Actual result?
Server crashes or returns generic error.

## Evidence
- Issue: #93
- Console error: (to add)

## Owner
Ram Pathak

## Definition of Done
- [ ] Add try-catch blocks to all routes
- [ ] Create error middleware
- [ ] Return consistent error format
- [ ] Manual test completed
