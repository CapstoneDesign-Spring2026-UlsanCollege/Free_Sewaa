# Swornim Karki — Styling and Documentation Management

I made Free Sewaa look professional and work well on any device. I designed the CSS theme, made the site responsive, fixed mobile layout issues, and organized the documentation so the team and professors can find everything easily.

## 1. My Role

- **Name:** Swornim Jung Karki
- **Team:** Capstone Design — Spring 2026, Ulsan College
- **Project:** Free Sewaa
- **Main responsibilities:** CSS styling, responsive design, documentation management, sprint evidence
- **Role during the semester:** Scribe, Project Manager (Weeks 2, 10), Documentation Lead

## 2. My Strongest Contributions

| Contribution | What I personally did | Evidence |
|---|---|---|
| CSS theme | Built consistent color scheme, typography, layout system across 18+ pages | [theme.css](../../css/theme.css) |
| Responsive design | Added media queries, touch targets (48px min), iOS zoom fix (16px font) | [Mobile Checklist](../../MOBILE_TESTING_CHECKLIST.md) |
| Accessibility | Added focus-visible styles, ARIA labels, color contrast improvements | [Accessibility Checklist](../../ACCESSIBILITY_CHECKLIST.md) |
| Documentation hub | Organized docs/README.md as central navigation for all project documents | [docs/README.md](../../docs/README.md) |
| README redesign | Rebuilt README with professional badges, clean layout, alt text for accessibility | [README.md](../../README.md) |
| Sprint evidence | Created sprint packets and weekly documentation for Weeks 1-12 | [Sprint Packets](../../docs/sprints/) |

## 3. One Area I Can Explain Clearly

- **Area:** Responsive CSS and Mobile Layout
- **File/folder/doc:** [theme.css](../../css/theme.css), [Mobile Testing Checklist](../../MOBILE_TESTING_CHECKLIST.md)
- **What it does:** Makes Free Sewaa usable on phones, tablets, and desktops without breaking layout
- **How it works:** CSS media queries adjust grid columns, font sizes, and spacing at breakpoints (mobile 390px, tablet 768px, desktop 1024px+). Touch targets are set to 48px minimum. Input font-size is forced to 16px to prevent iOS zoom.
- **How it was tested:** Tested on iPhone 14 viewport (390x844), Chrome DevTools device emulation, physical Android device
- **One limitation:** Some pages have horizontal scroll on very narrow screens (<360px width)
- **Evidence:** [Mobile Testing Checklist](../../MOBILE_TESTING_CHECKLIST.md), [Accessibility Checklist](../../ACCESSIBILITY_CHECKLIST.md)

## 4. My AI Use and Review

- **AI tools used:** GitHub Copilot
- **What AI helped with:** Generating CSS utility classes, responsive layout suggestions, media query scaffolding
- **What I personally checked:** Every CSS rule against the actual rendered page, tested on multiple viewports, verified no layout breakage
- **What I personally changed:** Adjusted AI-suggested spacing values to match Figma design, overrode AI color choices with project palette, removed unused vendor prefixes
- **How I tested or verified it:** Visual inspection on 3 viewports (mobile, tablet, desktop), browser DevTools for box model verification
- **One area I still need to improve:** CSS custom properties could be better organized into a proper design system instead of scattered values

## 5. One Problem I Helped Solve

- **Problem:** Input fields zoomed in on mobile Safari when tapped, breaking the form layout and frustrating users
- **Why it mattered:** Most Free Sewaa users access the site on mobile phones. Broken form inputs would prevent donations and requests.
- **What I did:** Set `font-size: 16px` on all input fields — this is the minimum size that prevents iOS Safari from auto-zooming on focus
- **What changed:** Forms now work correctly on iPhone and iPad without unexpected zoom behavior
- **Evidence:** [Mobile Testing Checklist](../../MOBILE_TESTING_CHECKLIST.md), [theme.css](../../css/theme.css)

## 6. Reflection

### What I learned
Building a cohesive design system with CSS custom properties, responsive breakpoints, and accessibility considerations taught me mobile-first design principles and how CSS affects user behavior.

### What I am proud of
The CSS theme is clean, consistent, and works across all 18+ pages. The responsive design adapts well to both desktop and mobile without major layout breakage.

### What I should have done better
Applied the Figma design system earlier in the semester. Late-stage design matching in Weeks 13-14 required significant refactoring that could have been avoided.

### What I would improve next
Create a proper design system with CSS custom properties, add dark mode support, and improve animation and transition quality.

### One skill I want to continue developing
Advanced CSS — particularly animations, grid layouts, and design systems architecture using tools like Tailwind or styled-components.

## 7. Presentation Readiness

- [x] I can explain my main contribution: CSS theming and documentation
- [x] I can explain one technical area clearly: responsive CSS and mobile layout
- [x] I know the final MVP demo flow (landing → signup → browse → donate → request → messages → admin)
- [x] I know at least one bug or limitation: iOS zoom issue (fixed) / horizontal scroll on narrow screens (not fixed)
- [x] I reviewed the technical defense questions
- [x] I can answer honestly if I do not know something

## 8. My Best Evidence Links

1. [CSS Theme](../../css/theme.css) — Main stylesheet with responsive design
2. [Accessibility Checklist](../../ACCESSIBILITY_CHECKLIST.md) — Accessibility testing
3. [Mobile Testing Checklist](../../MOBILE_TESTING_CHECKLIST.md) — Mobile viewport tests
4. [docs/README.md](../../docs/README.md) — Documentation hub (redesigned)
5. [Sprint Packets](../../docs/sprints/) — Sprint evidence documentation

---
[Back to Individual Portfolios](./README.md) | [Back to Portfolio Home](../README.md)
