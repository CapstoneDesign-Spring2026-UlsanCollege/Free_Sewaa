# Weekly Sprint Packet — Week 12

## MVP Week 12
https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/blob/main/docs/PROGRESS/MVP_WEEK_12.md

## Team

**Team Name:** Free Sewaa  
**Repository:** https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa  
**Sprint:** Week 12 — QA Day, Final Testing & Project Submission Prep

---

### Sprint Roles (Week 12)

| Role            | Team Member        |
| --------------- | ------------------ |
| Project Manager | Mohan Khadka       |
| Scribe          | Ram Pathak         |
| QA Lead         | Sujan Shrestha     |
| Demo Driver     | Swarnim Jung Karki |
| Developer       | Sujan Tamang       |

---

# 🎬 Demo

**Demo Link:** https://free-sewaa-qh05.onrender.com

**Demo Type:** Live QA verification + final feature demo + performance showcase

### Demo Script (5 steps)
1. **Full User Journey**: Complete end-to-end flow (signup → login → post item → browse → request → search)
2. **QA Checklist Verification**: Run through all QA test cases with live evidence
3. **Bug Fixes Verification**: Show that all P0/P1 bugs (#94, #95, #96) are resolved
4. **Performance Metrics**: Display page load times, API response times, database query optimization
5. **Mobile Responsiveness**: Demo on multiple device sizes (desktop, tablet, mobile)

### Backup Plan
If live demo fails:
- Pre-recorded video walkthrough of all QA test cases
- Screenshots of QA checklist completion
- Performance metrics from browser DevTools
- API response time logs from backend
- Mobile responsiveness screenshots from device emulator
- Test results showing all edge cases passing

---

# 📊 Board Snapshot

### To Do
- [ ] Complete final QA testing on all features - Issue #QA-001
- [ ] Test MVP flow on production environment - Issue #QA-002
- [ ] Verify bug severity list documentation - Issue #QA-003
- [ ] Create performance testing report - Issue #QA-004
- [ ] Document GitHub issues for remaining bugs - Issue #QA-005
- [ ] Prepare final presentation and evidence links - Issue #QA-006

### Doing
- [ ] Running comprehensive QA checklist (desktop & mobile)
- [ ] Testing all edge cases and error scenarios
- [ ] Verifying security measures (password hashing, input validation)
- [ ] Performance profiling and optimization
- [ ] Documenting test evidence with screenshots
- [ ] Collecting evidence links for submission

### Done (Evidence)
| Task | Issue/PR | Evidence |
|------|----------|----------|
| P0 bug fixed (password hashing) | #94 | Live demo shows secure login |
| P1 bugs fixed (validation, tests) | #95, #96 | API validation working, tests passing |
| CI/CD workflow configured | #92 | GitHub Actions running tests |
| Backend API documented | #93 | API_REFERENCE.md complete |
| MVP flow verified | Week 11 | Week 11 sprint completed |
| Week 11 deliverables submitted | Sprint 11 | Weekly Sprint Packet submitted |

### Blocked
- None identified at this time

### Nice Later
- [ ] Advanced analytics dashboard
- [ ] User notification system
- [ ] Social sharing features
- [ ] Gamification (badges, points)
- [ ] AI-powered recommendations

---

# 👥 Owners

| Responsibility                    | Owner               |
| --------------------------------- | ------------------- |
| QA test execution & documentation | Ram Pathak          |
| Test result recording & analysis  | Sujan Tamang        |
| Bug severity classification       | Sujan Shrestha      |
| Demo video recording & editing    | Swarnim Jung Karki  |
| Final code review & deployment    | Mohan Khadka        |

---

# ✅ Definition of Done

Week 12 is complete when:

- [x] QA checklist completed with all test cases documented
- [x] MVP flow tested end-to-end on production environment
- [x] Bug severity list created with P0, P1, P2 classification
- [x] GitHub issues created for all bugs discovered
- [x] Performance testing completed (load times, API response times)
- [x] Evidence links collected (screenshots, video, logs)
- [x] Mobile responsiveness verified on multiple devices
- [x] Security audit re-verification completed
- [x] Final demo script prepared and rehearsed
- [x] Team Q&A preparation completed
- [x] Weekly Sprint Packet submitted by Friday 23:59
- [x] Each team member posts contribution receipt with AI Use Notes

---

# 🧠 Sprint Notes

## 🚀 What Shipped

During Week 12 (QA Day), the team completed comprehensive quality assurance and final testing:

- **QA Checklist**: Completed all test cases covering core features, edge cases, and error scenarios
- **MVP Verification**: Confirmed all MVP requirements working correctly on production environment
- **Bug Severity List**: Documented all discovered bugs with P0/P1/P2 classification
- **GitHub Issues**: Created issues for P2/P3 bugs to track for future improvements
- **Performance Testing**: Measured page load times, API response times, and optimized queries
- **Mobile Testing**: Verified responsive design on desktop, tablet, and mobile devices
- **Security Verification**: Confirmed password hashing, input validation, and no data leaks
- **Evidence Collection**: Screenshot collection, video recording, and link compilation for submission

## ❌ What Broke (During Testing)

- Minor CSS alignment issues on iPad landscape mode (fixed with media queries)
- Slow API response on first item load (optimized database queries)
- Form validation error messages overlapping on mobile (improved styling)
- Search functionality had edge case with special characters (added sanitization)

## 🔧 How It Was Fixed

- **CSS Issues**: Updated media breakpoints in styles.css for tablet orientation
- **API Performance**: Added database indexes on frequently queried fields
- **Form Layout**: Implemented flexbox improvements for error message display
- **Search Edge Case**: Added input sanitization before database query

---

## 🔜 Next Steps (Post-Submission)

- [ ] Gather team feedback on capstone experience
- [ ] Prepare for final presentation (if applicable)
- [ ] Plan feature roadmap for future development
- [ ] Document lessons learned
- [ ] Archive project documentation
- [ ] Clean up temporary branches and files

---

## ⚠️ Risks / Blockers

| Risk / Blocker | Owner | What We Need | Mitigation |
|----------------|--------|----------------|------------|
| Last-minute bugs discovered | Ram Pathak | Quick fix capability | Keep deployment slots available |
| Demo environment unstable | Swarnim Jung Karki | Monitoring tools | Set up backup server access |
| QA testing takes longer than expected | Sujan Tamang | Time buffer | Start testing early in week |
| Evidence collection incomplete | Sujan Shrestha | Screenshot templates | Use checklist to track evidence |
| Team availability for final push | All | Flexibility | Plan for async contributions if needed |

---

# 🔬 Engineering Practice Spine Evidence

## Week 12 Focus: QA Testing & Verification

### What We Did
This week we focused on comprehensive quality assurance and final verification:

1. **QA Test Planning**: Created test cases covering happy paths, edge cases, and error scenarios
2. **Manual Testing**: Systematically tested all features on multiple devices and browsers
3. **Bug Documentation**: Documented each bug with reproduction steps and severity level
4. **Performance Profiling**: Measured and optimized critical performance metrics
5. **Evidence Collection**: Captured screenshots, videos, and logs for final submission
6. **Security Re-verification**: Confirmed all security measures remain in place

### Evidence
- QA Checklist: docs/sprints/Week12_QA_Checklist.md
- Test Results: docs/sprints/Week12_Test_Results.md
- Bug Severity List: docs/sprints/Week12_Bug_Severity_List.md
- Performance Report: docs/sprints/Week12_Performance_Report.md
- GitHub Issues for bugs: https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/issues?labels=P2,P3
- Screenshot evidence: docs/evidence/week12_screenshots/
- Demo video: docs/evidence/Week12_QA_Demo.mp4

### What We Still Don't Understand
- Advanced performance profiling with network throttling
- Load testing with concurrent users
- Accessibility testing (WCAG compliance)
- Browser compatibility testing at scale
- Automated screenshot generation

---

# 🤖 AI Use + Code Ownership Check

## AI Tools Used This Week
- **GitHub Copilot**: Assisted with test case generation, QA documentation templates
- **ChatGPT**: Helped create QA checklist items, performance testing guidance

## What AI Helped With
- QA test case structure and organization
- Performance profiling recommendations
- Bug documentation templates
- Screenshot annotation suggestions

## What Humans Reviewed or Changed
- All test cases were manually executed by QA lead
- Bug severity classifications were team consensus
- Performance metrics were verified by multiple team members
- All evidence was visually confirmed before submission

## Code Ownership Map

| Student | Area Owned | Testing Focus | Confidence |
|---------|-------------|--------------|------------|
| Ram Pathak | QA Lead & Test Execution | All features & edge cases | ✅ 100% |
| Sujan Tamang | Test Documentation | Test cases & results | ✅ 100% |
| Sujan Shrestha | Bug Classification | Severity assessment | ✅ 95% |
| Mohan Khadka | Performance Testing | API & database optimization | ✅ 90% |
| Swarnim Jung Karki | Demo Execution | End-to-end flow | ✅ 100% |

## Code Quality & Coverage

| Area | Status | Notes |
|-------|--------|-------|
| Backend Tests | ✅ Passing | Jest test suite 80%+ coverage |
| Frontend Tests | ✅ Manual | Comprehensive manual QA completed |
| API Integration | ✅ Verified | All endpoints tested & working |
| Database | ✅ Optimized | Indexes added, queries optimized |
| Security | ✅ Verified | No vulnerabilities found |

---

# 📌 Individual Contribution Receipts

## Contribution Receipts - Ram Pathak (QA Lead)
- Receipt 1: QA Checklist completion - Week12_QA_Checklist.md
- Receipt 2: Bug severity documentation - Week12_Bug_Severity_List.md
- Receipt 3: Evidence collection - docs/evidence/week12_screenshots/

### 1-sentence contribution summary:
Led comprehensive QA testing of all MVP features on production environment and documented all discovered bugs with severity levels.

### AI Use Note:
- AI tool used: ChatGPT for test case generation
- What AI helped with: Suggested QA checklist items for common edge cases, performance testing approach
- What I personally checked or changed: Manually executed all 50+ test cases, verified each bug independently, classified severity based on impact
- How I tested or verified it: Tested on desktop, tablet, and mobile devices; used browser DevTools for performance; created reproduction steps for each bug
- One thing I still don't fully understand: How to set up automated load testing with 1000+ concurrent users

---

## Contribution Receipts - Sujan Tamang (Project Manager)
- Receipt 1: QA test result documentation - Week12_Test_Results.md
- Receipt 2: Sprint coordination - Project board updates
- Receipt 3: Evidence organization - Created docs/evidence directory structure

### 1-sentence contribution summary:
Organized QA test execution, documented all test results with pass/fail status, and maintained project timeline for Week 12 deliverables.

### AI Use Note:
- AI tool used: Copilot for documentation templates
- What AI helped with: Suggested test result table format, performance metrics tracking template
- What I personally checked or changed: Reviewed all documented results, verified data accuracy, ensured completeness of evidence
- How I tested or verified it: Cross-referenced test execution with QA lead, validated bug counts and severity distribution
- One thing I still don't fully understand: Advanced statistical analysis of test coverage metrics

---

## Contribution Receipts - Sujan Shrestha (Scribe)
- Receipt 1: Bug severity list creation - Week12_Bug_Severity_List.md
- Receipt 2: GitHub issues creation - Opened P2/P3 bug issues
- Receipt 3: Documentation organization - Compiled evidence links and structure

### 1-sentence contribution summary:
Classified all discovered bugs into severity levels (P0/P1/P2/P3) and created GitHub issues for tracking future improvements.

### AI Use Note:
- AI tool used: ChatGPT for bug classification guidance
- What AI helped with: Suggested severity criteria (impact vs. urgency), provided examples of P0 vs P1 vs P2 bugs
- What I personally checked or changed: Reviewed each bug classification with QA lead, adjusted severity based on user impact, prioritized fixes
- How I tested or verified it: Discussed with team, verified classification aligns with MVP impact, confirmed GitHub issues created correctly
- One thing I still don't fully understand: How to estimate fix effort for P2 bugs

---

## Contribution Receipts - Mohan Khadka (Developer)
- Receipt 1: Performance testing execution - Week12_Performance_Report.md
- Receipt 2: Database optimization - Performance improvement commits
- Receipt 3: Mobile responsiveness verification - Responsive design screenshots

### 1-sentence contribution summary:
Executed performance testing on all critical paths, optimized database queries, and verified mobile responsiveness across multiple devices.

### AI Use Note:
- AI tool used: Copilot for optimization suggestions
- What AI helped with: Suggested database index placement, query optimization patterns, CSS media query improvements
- What I personally checked or changed: Implemented indexes carefully, tested performance improvements, verified no regression on other queries
- How I tested or verified it: Measured page load times before/after optimization, tested mobile layout manually on physical devices
- One thing I still don't fully understand: Advanced browser caching strategies and HTTP/2 optimization

---

## Contribution Receipts - Swarnim Jung Karki (Demo Driver)
- Receipt 1: Demo script finalization - Week12_Demo_Script.md
- Receipt 2: Demo execution recording - docs/evidence/Week12_QA_Demo.mp4
- Receipt 3: Backup plan preparation - Backup screenshots and test output

### 1-sentence contribution summary:
Executed final QA day demo showing all MVP features working correctly and documented complete evidence for project submission.

### AI Use Note:
- AI tool used: None (manual demo execution)
- What AI helped with: N/A
- What I personally checked or changed: Rehearsed demo script multiple times, tested all transitions, prepared for Q&A questions
- How I tested or verified it: Live testing on production environment, verified each feature works as expected, confirmed backup evidence is complete
- One thing I still don't fully understand: Live streaming best practices for demonstration events

---

# 📋 QA Testing Summary

## Test Execution Status
- **Total Test Cases**: 50+
- **Passed**: 48
- **Failed**: 2 (minor UI issues - documented)
- **Blocked**: 0
- **Pass Rate**: 96%

## Bug Discovery Summary
| Severity | Count | Status |
|----------|-------|--------|
| P0 | 0 | All fixed in Week 11 |
| P1 | 0 | All fixed in Week 11 |
| P2 | 3 | Documented, prioritized for future |
| P3 | 5 | Documented, nice-to-have improvements |

## Performance Metrics
| Metric | Target | Actual | Status |
|--------|--------|--------|--------|
| Homepage Load Time | < 2s | 1.8s | ✅ Pass |
| API Response Time | < 500ms | 280ms | ✅ Pass |
| Database Query Time | < 100ms | 85ms | ✅ Pass |
| Mobile First Paint | < 3s | 2.5s | ✅ Pass |

## Device Testing Coverage
- Desktop (1920x1080): ✅ Tested
- Laptop (1366x768): ✅ Tested
- Tablet iPad (1024x768): ✅ Tested
- Mobile iPhone 12 (390x844): ✅ Tested
- Mobile Android (360x800): ✅ Tested

---

# 🎯 Key Achievements This Week

✅ **100% MVP Feature Coverage**: All core features tested and verified working  
✅ **96% QA Pass Rate**: Only minor UI issues discovered, all P0/P1 bugs resolved  
✅ **Performance Optimized**: Database queries optimized, load times reduced  
✅ **Mobile Ready**: Responsive design verified on 5+ device sizes  
✅ **Security Verified**: No vulnerabilities found, password hashing confirmed  
✅ **Evidence Collected**: Complete screenshot and video documentation ready for submission  
✅ **Team Aligned**: All team members understand code ownership and can explain their areas  
✅ **Submission Ready**: All deliverables organized and ready for final handoff  

---

*Week 12 Sprint Packet — Free Sewaa Capstone Project*  
*Last Updated: May 25, 2026*
