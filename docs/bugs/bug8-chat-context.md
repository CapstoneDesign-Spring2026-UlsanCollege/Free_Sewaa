# Bug: Chat button not passing item context

## Severity
P2

## What happened?
Clicking "Chat" button on an item doesn't pass the item ID to chat page.

## Steps to reproduce
1. Go to browse page
2. Click "Chat" on any item
3. Check if item context appears in chat

## Expected result
Chat page should know which item you're discussing.

## Actual result?
Chat page opens but doesn't know which item you clicked.

## Evidence
- Screenshot: (to add)
- Related Issue: #21

## Owner
Mohan Khadka

## Definition of Done
- [ ] Item ID passed via URL parameter
- [ ] Chat page reads item ID from URL
- [ ] Manual test completed
- [ ] Evidence linked
