## Title
Bug: Donation Posts Load Slowly on Weak Network Connections

## Severity
P1 – Performance Issue

## Description
Donation listings and related content take excessive time to load when users access the platform on slower internet connections.

## Steps to Reproduce
1. Open the application on slow/mobile network
2. Navigate to donation browse page
3. Scroll through donation listings
4. Observe loading performance

## Expected Behavior
Donation posts should load smoothly with optimized performance even on slower networks.

## Actual Behavior
- Images load very slowly
- Content appears delayed
- Page scrolling becomes laggy
- Loading states remain for long periods

## Suggested Fixes
- Optimize API response handling
- Implement lazy loading for images
- Compress large assets
- Improve frontend rendering performance

## Labels
bug P1 performance frontend backend QA
