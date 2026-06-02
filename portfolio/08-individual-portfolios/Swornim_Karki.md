# Swarnim Jung Karki — Styling, CSS & Documentation Management

## Short Summary

I focused on improving the visual design, responsiveness, and documentation organization of Free Sewaa. This included refining the CSS theme, ensuring the layout worked well on mobile devices, and structuring the project documents so they were clear and easy to follow.

## 1. My Role

- **Name:** Swarnim Jung Karki
- **Team:** Free Sewaa
- **Project:** Free Sewaa
- **Main responsibilities:** CSS styling, responsive design improvements, accessibility enhancements, documentation management, and sprint evidence organization.
- **Role during the semester:** Documentation lead and occasional project manager (Weeks 2, 10).

## 2. My Strongest Contributions

| Contribution | What I personally did | Evidence |
|---|---|---|
| CSS theme and visual polish | Updated `css/theme.css` to improve colors, spacing, typography, and component styling (buttons, cards, forms) for a more consistent and professional look. | [CSS theme](../../../css/theme.css) |
| Responsive design and mobile fixes | Added media queries, touch-friendly sizes (48px minimum), fixed iOS zoom issue on inputs, and adjusted layouts for small screens. | [Mobile testing checklist](../../../MOBILE_TESTING_CHECKLIST.md) |
| Accessibility improvements | Added focus-visible outlines, improved color contrast, and added ARIA labels where needed to support keyboard navigation and screen readers. | [Accessibility checklist](../../../ACCESSIBILITY_CHECKLIST.md) |
| Documentation hub and organization | Helped structure `docs/README.md` as a central navigation point and kept other documents like sprint packets and checklists up to date and easy to find. | [docs/README.md](../../../docs/README.md) |
| Sprint evidence and reports | Maintained the sprint documentation in `docs/sprints/` and `docs/PROGRESS/` to reflect weekly progress, goals, and outcomes. | [Sprint packets](../../../docs/sprints/) |

## 3. One Area I Can Explain Clearly

- **Area:** Responsive CSS and mobile layout adjustments
- **File/folder/doc:** `css/theme.css` (look for media queries and mobile-specific rules)
- **What it does:** Adjusts the layout, font sizes, spacing, and interactive elements to ensure the website is usable and readable on mobile devices (e.g., iPhone 14 viewport at 390x844px).
- **How it works:** CSS media queries (@media) detect screen width and apply different styles. For example, on screens narrower than 768px, the item grid changes from 3 columns to 1, padding is reduced, and font sizes are scaled. Touch targets like buttons are increased to at least 48px height and width for easy tapping. The font size on input fields is set to 16px to prevent iOS Safari from zooming in when tapped.
- **How it was tested:** I tested it using Chrome DevTools device emulation (iPhone 14), on an actual Android phone, and verified with the mobile testing checklist. I also checked that the layout did not break or require horizontal scrolling on common mobile widths.
- **One limitation:** On very wide screens (large desktop monitors), some sections may have excessive white space. A max-width constraint on the main content area could improve readability on large displays.
- **Evidence:** [CSS theme](../../../css/theme.css), [Mobile testing checklist](../../../MOBILE_TESTING_CHECKLIST.md)

## 4. My AI Use and Review

- **AI tools used:** GitHub Copilot
- **What AI helped with:** Suggesting CSS utility classes (e.g., for flex layouts or spacing) and providing ideas for media query breakpoints.
- **What I personally checked:** I reviewed every AI-generated CSS suggestion to ensure it matched our design goals, did not introduce conflicts, and used the correct selectors. I also verified that the proposed values (like padding, margin, font size) were appropriate for the context.
- **What I personally changed:** I rewrote most of the AI-generated code to align with our project’s styling conventions and the Figma-inspired design we were following. For example, I adjusted color values to match our palette, removed unnecessary vendor prefixes, and ensured responsiveness was intentional rather than relying on AI guesses.
- **How I tested or verified it:** I visually inspected the changes across multiple viewports, used browser DevTools to check computed styles, and confirmed that interactive states (hover, focus) worked as expected.
- **One area I still need to improve:** I would like to adopt a more systematic approach to CSS using CSS custom properties (variables) for colors, spacing, and typography to make theme changes easier and more consistent.

## 5. One Problem I Helped Solve

- **Problem:** Input fields on the donate and signup pages would zoom in when tapped on iOS Safari, making the form difficult to use and breaking the layout.
- **Why it mattered:** A significant portion of users access the site via mobile phones. If the form became unusable on iOS, it would negatively impact the user experience and potentially deter donations.
- **What I did:** I identified that the root cause was the font size on input fields being less than 16px. I increased the font size to exactly 16px on all input, select, and textarea elements in `css/theme.css`, which is the threshold that prevents iOS Safari from triggering the zoom behavior.
- **What changed:** Users can now tap into any form field on an iPhone without the page zooming unexpectedly, making the form easier to complete on mobile devices.
- **Evidence:** [CSS theme](../../../css/theme.css) (search for `input`, `select`, `textarea` font-size rules), [Mobile testing checklist](../../../MOBILE_TESTING_CHECKLIST.md) (includes checks for mobile form usability)

## 6. Reflection

### What I learned
I learned how CSS choices directly affect usability and accessibility, especially on mobile devices. I also gained experience in balancing aesthetic design with functional requirements like responsiveness and readability.

### What I am proud of
The visual design is now consistent across pages, and the site works well on both desktop and mobile without major layout issues. The documentation is organized so that team members and reviewers can find what they need quickly.

### What I should have done better
I should have started the responsive design and accessibility improvements earlier in the semester. Addressing these issues late meant we had to retroactively fix many pages, which took time that could have been spent on new features.

### What I would improve next
I would define a CSS design system using custom properties for colors, font sizes, and spacing, implement a dark mode toggle, and add more sophisticated animations and transitions to improve the user experience.

### One skill I want to continue developing
Advanced CSS and UI/UX design, particularly how to create scalable, maintainable stylesheets and design systems that work across teams and projects.

## 7. Presentation Readiness

- [x] I can explain my main contribution: CSS styling, responsive design, and documentation
- [x] I can explain one technical area clearly: responsive CSS and mobile layout fixes (e.g., media queries, touch targets, iOS zoom fix)
- [x] I know the final MVP demo flow (landing → sign up → browse → post item → request item → send message → admin panel)
- [x] I know at least one bug or limitation: layout may have excessive whitespace on very wide screens; some accessibility aspects could be further improved
- [x] I reviewed the technical defense questions
- [x] I can answer honestly if I do not know something

## 8. My Best Evidence Links

1. [CSS theme](../../../css/theme.css) — Shows the responsive rules and styling
2. [Accessibility checklist](../../../ACCESSIBILITY_CHECKLIST.md) — References the accessibility improvements we aimed for
3. [Mobile testing checklist](../../../MOBILE_TESTING_CHECKLIST.md) — Documents the mobile-specific tests we performed
4. [docs/README.md](../../../docs/README.md) — The documentation hub we helped organize
5. [Sprint packets](../../../docs/sprints/) — Shows our ongoing documentation and sprint tracking

---
[Back to Individual Portfolios](./README.md) | [Back to Portfolio Home](../README.md)