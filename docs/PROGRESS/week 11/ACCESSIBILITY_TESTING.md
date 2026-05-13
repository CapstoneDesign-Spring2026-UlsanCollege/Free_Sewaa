# Accessibility Testing — Week 11

## What Is Accessibility Testing?
Accessibility testing checks if the app can be used by people with disabilities. This includes screen reader support, keyboard navigation, color contrast, and proper HTML structure.

## Why It Matters
- Makes the app usable for everyone
- Required for many organizations and governments
- Improves SEO and overall user experience
- Shows professional development practice

---

## Our Accessibility Checklist

### Keyboard Navigation
| Test | Status | Notes |
|------|--------|-------|
| All links focusable with Tab key | ❌ Not tested | [Add result] |
| Forms can be filled without mouse | ❌ Not tested | [Add result] |
| Dropdown menus keyboard accessible | ❌ Not tested | [Add result] |
| Escape key closes modals | ❌ Not tested | [Add result] |

### Screen Reader
| Test | Status | Notes |
|------|--------|-------|
| All images have alt text | ❌ Not tested | [Add result] |
| Headings use proper h1-h6 tags | ❌ Not tested | [Add result] |
| Forms have labels | ❌ Not tested | [Add result] |
| Error messages announced | ❌ Not tested | [Add result] |
| Buttons have descriptive text | ❌ Not tested | [Add result] |

### Color & Contrast
| Test | Status | Notes |
|------|--------|-------|
| Text contrast ratio ≥ 4.5:1 | ❌ Not tested | [Add result] |
| Links distinguishable from text | ❌ Not tested | [Add result] |
| Error states visible (not just color) | ❌ Not tested | [Add result] |
| Dark mode contrast OK | ❌ Not tested | [Add result] |

### HTML Structure
| Test | Status | Notes |
|------|--------|-------|
| Valid HTML5 | ❌ Not tested | [Add result] |
| Landmarks used (nav, main, footer) | ❌ Not tested | [Add result] |
| ARIA attributes where needed | ❌ Not tested | [Add result] |
| Page has proper title | ❌ Not tested | [Add result] |

---

## How to Test Accessibility

### 1. Manual Keyboard Test
- Unplug your mouse
- Use only Tab, Shift+Tab, Enter, Escape, Arrow keys
- Can you complete signup without mouse? ✅ / ❌

### 2. Browser DevTools
- Chrome: Right-click → Inspect → Lighthouse tab → Accessibility audit
- Firefox: Tools → Web Developer → Accessibility
- Safari: Develop → Show Accessibility Inspector

### 3. Free Tools
| Tool | What It Checks | Link |
|------|----------------|------|
| Lighthouse (Chrome) | Overall accessibility score | Built into Chrome DevTools |
| WAVE | Contrast, ARIA, structure | https://wave.webaim.org |
| axe DevTools | Automated accessibility checks | Browser extension |
| NVDA (Windows) | Screen reader testing | Free download |
| VoiceOver (Mac) | Screen reader testing | Built into macOS |

### 4. Color Contrast Checkers
| Tool | Link |
|------|------|
| WebAIM Contrast Checker | https://webaim.org/resources/contrastchecker/ |
| Coolors Contrast | https://coolors.co/contrast-checker |

---

## Quick Accessibility Audit Steps

1. Open Chrome DevTools → Lighthouse
2. Click "Accessibility" category
3. Click "Analyze page load"
4. Review the score and fix issues

Repeat for these key pages:
- index.html (landing)
- signup.html / signin.html
- browse.html
- donate.html
- messages.html
- app.html

---

## Common Accessibility Issues in Our App

| Issue | Where | Fix |
|-------|-------|-----|
| Missing alt text on images | browse.html, donate.html | Add `alt="description"` to `<img>` tags |
| Low contrast in some themes | style.css, theme.css | Check contrast ratio, adjust colors |
| No skip navigation link | All pages | Add "Skip to content" link at top |
| Form fields missing labels | Various | Wrap in `<label>` or add `aria-label` |
| Modals not keyboard accessible | Multiple | Add focus trap, Escape key handler |

---

## Accessibility Standards

| Standard | Description |
|----------|-------------|
| WCAG 2.1 Level AA | Minimum recommended level |
| Section 508 | US federal requirement |
| EN 301 549 | EU accessibility standard |

We are targeting WCAG 2.1 Level AA.

---

## Links
- WCAG Quick Reference: https://www.w3.org/WAI/WCAG21/quickref/
- WebAIM Articles: https://webaim.org/articles/
- Our Testing Log: [TESTING_LOG.md](../../PROGRESS/TESTING_LOG.md)
