# Bug: CI workflow not running tests

## Severity
P1

## What happened?
GitHub Actions CI only counts files, doesn't run backend tests.

## Steps to reproduce
1. Go to https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/actions
2. Check what CI actually does
3. Create a test that should fail

## Expected result?
CI should run `npm test` and fail if tests don't pass.

## Actual result?
CI only runs `git diff --quiet` or file count checks.

## Evidence
- Issue: #92
- Screenshot: (to add)

## Owner
Swarnim Jung Karki

## Definition of Done
- [ ] Update `.github/workflows/ci.yml`
- [ ] Add `npm test` step
- [ ] Test failure blocks PR merge
- [ ] Evidence linked
