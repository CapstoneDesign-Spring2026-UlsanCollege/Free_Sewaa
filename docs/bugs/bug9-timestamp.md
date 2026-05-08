# Bug: Timestamp shows "Just now" forever

## Severity
P2

## What happened?
Items in browse page show "Just now" timestamp forever, even after days.

## Steps to reproduce
1. Post a donation item
2. Wait 1 hour
3. Check browse page

## Expected result
Should show relative time (e.g., "1 hour ago").

## Actual result?
Still shows "Just now".

## Evidence
- Screenshot: (to add)
- Related: donate.js timestamp issue

## Owner
Swarnim Jung Karki

## Definition of Done
- [ ] Fix timestamp format in donate.js
- [ ] Use proper date formatting
- [ ] Manual test completed
- [ ] Evidence linked
