## Title
Bug: Website Accessibility Fails After Latest Deployment

## Severity
P0 – Accessibility & Compliance Issue

## Description
After the latest deployment, several pages became difficult to access for users relying on accessibility tools and keyboard navigation.

## Steps to Reproduce
1. Open the deployed application
2. Navigate using keyboard only
3. Test pages with accessibility tools/screen readers
4. Observe accessibility behavior

## Expected Behavior
Application should fully support accessibility standards including keyboard navigation, readable UI structure, and assistive technologies.

## Actual Behavior
- Some buttons are not keyboard accessible
- Missing labels for screen readers
- Navigation order becomes inconsistent
- Certain UI elements fail accessibility checks

## Suggested Fixes
- Improve semantic HTML structure
- Add ARIA labels and alt text
- Fix keyboard navigation flow
- Improve WCAG 2.2 AA compliance

## Labels
bug P0 accessibility frontend QA
