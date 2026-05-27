## Title
Bug: Navigation Bar Contains Broken Links

## Severity
P0 – Critical Navigation Issue

## Description
Some navigation links redirect users to invalid pages or fail to load properly after deployment.

## Steps to Reproduce
1. Open the application
2. Navigate through navbar links
3. Click multiple menu items
4. Observe page behavior

## Expected Behavior
All navigation links should redirect users to the correct working pages.

## Actual Behavior
- Certain links open blank pages
- Some routes fail to render properly
- Navigation flow becomes inconsistent

## Suggested Fixes
- Verify frontend routing paths
- Fix incorrect route references
- Add fallback route handling
- Test navigation after deployment

## Labels
bug P0 routing frontend QA
