# Swarnim Jung Karki — Individual Portfolio

## 1. Role Summary

I focused on improving the visual design, responsiveness, and documentation organization of Free Sewaa. This included refining the CSS theme, ensuring the layout worked well on mobile devices, and structuring the project documents so they were clear and easy to follow. I also served as documentation lead and occasional project manager (Weeks 2, 10), helping the team stay organized during key milestones.

## 2. Main Responsibilities

- CSS styling and visual polish — colors, spacing, typography, and component design (buttons, cards, forms)
- Responsive design — media queries, mobile layout adjustments, touch-friendly sizing
- Accessibility improvements — focus-visible outlines, color contrast, ARIA labels
- Documentation management — structuring `docs/README.md`, maintaining sprint packets and checklists
- Portfolio organization — structuring the final portfolio section with navigation and evidence links
- Final link checking — verifying all cross-references across 62+ portfolio files
- Presentation readiness — preparing slide materials, demo backup plans, and technical defense prep

## 3. Key Contributions

| Area | Work Completed | Evidence Link |
|------|---------------|---------------|
| CSS Theme | Updated `css/theme.css` with consistent colors, spacing, typography, and component styling | [CSS Theme](../../css/theme.css) |
| Responsive Design | Added media queries, 48px minimum touch targets, iOS zoom fix for inputs, mobile layout adjustments | [Mobile Testing Checklist](../../MOBILE_TESTING_CHECKLIST.md) |
| Accessibility | Added focus-visible outlines, improved contrast, ARIA labels for keyboard and screen reader support | [Accessibility Checklist](../../ACCESSIBILITY_CHECKLIST.md) |
| Documentation Hub | Structured `docs/README.md` as central navigation point for all project documentation | [docs/README.md](../../docs/README.md) |
| Portfolio Organization | Created and verified cross-references across all 8 portfolio sections (62+ files) | [Portfolio Home](../README.md) |
| Sprint Evidence | Maintained sprint documentation in `docs/sprints/` and `docs/PROGRESS/` | [Sprint Packets](../../docs/sprints/) |

## 4. Technical Ownership

I owned the visual design layer and documentation structure of the project. On the CSS side, I maintained `css/theme.css` which controls the platform's appearance — colors, typography, spacing, button styles, card layouts, form elements, and responsive breakpoints. On the documentation side, I was responsible for the structure and navigability of `docs/README.md` as the central documentation hub, and I led the final portfolio organization effort that ensured all 62+ files across 8 sections had correct cross-references and consistent formatting.

## 5. Evidence of Work

- [CSS Theme](../../css/theme.css) — Complete stylesheet with responsive rules, accessibility features, and consistent design tokens
- [Mobile Testing Checklist](../../MOBILE_TESTING_CHECKLIST.md) — Documents mobile-specific tests performed (viewport sizes, touch targets, iOS zoom)
- [Accessibility Checklist](../../ACCESSIBILITY_CHECKLIST.md) — Accessibility improvements including keyboard navigation and screen reader support
- [Documentation Hub](../../docs/README.md) — Central documentation navigation that I helped structure
- [Sprint Packets](../../docs/sprints/) — Weekly sprint documentation maintained throughout the semester
- [Portfolio Home](../README.md) — Final portfolio structure with cross-referenced links across all sections

## 6. AI Usage Reflection

- **AI tools used:** GitHub Copilot
- **How AI helped:** Suggested CSS utility classes (flex layouts, spacing helpers) and provided ideas for media query breakpoints.
- **What I checked:** Reviewed every AI-generated CSS suggestion to ensure it matched design goals, did not introduce conflicts, and used correct selectors. Verified that proposed values (padding, margin, font size) were appropriate for the context.
- **What I changed:** Rewrote most AI-generated code to align with the project's styling conventions and Figma-inspired design. Adjusted color values to match our palette, removed unnecessary vendor prefixes, and ensured responsiveness was intentional rather than relying on AI guesses.
- **How I verified:** Visually inspected changes across multiple viewports, used browser DevTools to check computed styles, and confirmed interactive states (hover, focus) worked as expected.
- **Area to improve:** Want to adopt CSS custom properties (variables) for colors, spacing, and typography to make theme changes easier and more consistent.

## 7. Challenges and Solutions

**Challenge 1 — iOS Safari Zoom on Input Fields**
Input fields on the donate and signup pages would zoom in when tapped on iOS Safari, making forms difficult to use and breaking the layout on mobile devices.
- **Solution:** Identified the root cause — font size on input fields was less than 16px. Increased font size to exactly 16px on all `input`, `select`, and `textarea` elements in `css/theme.css`, which is the threshold that prevents iOS Safari from triggering zoom behavior. Users can now tap into any form field on an iPhone without unexpected zooming.

**Challenge 2 — Inconsistent Visual Design Across Pages**
Different pages had slightly different colors, spacing, and typography because CSS rules were scattered across multiple files without a central theme.
- **Solution:** Consolidated styling into `css/theme.css` as the primary stylesheet, defined consistent color values, standardized spacing and font sizes, and applied uniform button and card styles across all pages.

**Challenge 3 — Portfolio Link Verification Across 62+ Files**
The final portfolio had cross-references between 8 sections, and many links were broken due to incorrect relative paths, renamed files, or missing directories.
- **Solution:** Performed a systematic audit of all relative links across the `portfolio/` tree, fixed depth prefix errors (`../../../` → `../../` for depth-2 files), corrected zero-padded week numbers, and replaced non-existent directory paths with working alternatives.

## 8. What I Learned

I learned how CSS choices directly affect usability and accessibility, especially on mobile devices. I also gained experience in balancing aesthetic design with functional requirements like responsiveness and readability. Organizing the final portfolio taught me the importance of systematic link checking and consistent file naming — small mistakes like a space in a filename can break dozens of cross-references.

## 9. Presentation Summary

- I contributed to the visual design, responsive layout, and documentation organization of Free Sewaa
- I can explain the iOS Safari zoom fix: why it happens (font size under 16px) and how we solved it
- I led the final portfolio organization effort, verifying 62+ files across 8 sections
- The CSS theme is responsive and works on mobile devices down to 390px viewport width
- I reviewed the technical defense questions and can answer honestly

## 10. Navigation

- [Back to Individual Portfolios](./README.md)
- [Back to Portfolio Home](../README.md)
- [Back to Repository](../../README.md)
