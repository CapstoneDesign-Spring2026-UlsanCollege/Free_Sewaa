# Browser Testing Checklist — Free Sewaa

Test core flows in each browser.

## Browsers to Test

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest) — macOS only
- [ ] Edge (latest)

## Core Flows (test in each browser)

### Landing Page
- [ ] Page loads without errors
- [ ] Navigation links work
- [ ] Sign Up and Login buttons visible

### Sign Up
- [ ] Form submits with valid data
- [ ] Validation errors show correctly
- [ ] Redirect to dashboard on success

### Browse
- [ ] Item cards render with Figma design
- [ ] Category filter changes results
- [ ] Sticky filters stay visible on scroll (desktop)
- [ ] Item detail opens

### Donate
- [ ] Form loads and submits
- [ ] New item visible in Browse

### Admin
- [ ] Admin login works
- [ ] Dashboard stats load
- [ ] User management actions work

### Messages
- [ ] Unread count badge displays correctly in header
- [ ] Badge updates after reading messages

## Cross-Browser Issues

| Issue | Browsers Affected | Notes |
|-------|-------------------|-------|
| CSS grid gaps | Safari < 15 | Use fallback |
| Flexbox bugs | Older browsers | Test on latest only |
| Font rendering | All | Consistent if using system fonts |

---

*Last updated: May 2026*
