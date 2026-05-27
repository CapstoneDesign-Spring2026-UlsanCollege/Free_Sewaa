# Form Validation Checklist — Free Sewaa

## Signup Form

- [ ] All fields required (first name, last name, email, password)
- [ ] Email domain must be recognized (gmail.com, naver.com, etc.)
- [ ] Password: 8-10 chars, uppercase, lowercase, number
- [ ] Duplicate email shows error
- [ ] Clear error messages displayed for each rule

## Login Form

- [ ] Email and password required
- [ ] Wrong credentials show 401 error
- [ ] Blocked account shows 403 error
- [ ] Error message user-friendly

## Donate Form

- [ ] Title required
- [ ] Description required
- [ ] Category required (dropdown)
- [ ] Condition optional?
- [ ] Image URL validated (must be valid URL format)
- [ ] Submit creates listing

## Request Form

- [ ] Note field optional
- [ ] Cannot request own item (403)
- [ ] Cannot request same item twice (409)

## Admin Forms

- [ ] Action selection required
- [ ] Target user/listing ID required
- [ ] Confirmation before destructive actions

## General

- [ ] Error messages associated with the correct field
- [ ] Form cannot submit with invalid data
- [ ] Success feedback after submission
- [ ] Loading state during submission (if implemented)

---

*Last updated: May 2026*
