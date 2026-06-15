# Lessons Learned

**Project:** Free Sewaa
**Updated:** Week 11 — MVP Verification

---

## What Went Well

### 1. Team Communication
- Team responded quickly on GitHub issues and pull requests
- Roles were clear: PM, Dev, Demo, QA, Scribe
- Weekly sprint packets were submitted on time

### 2. Frontend Design
- Polished UI (Airbnb/Karrot inspired) made the app look professional
- Dark mode, animations, and responsive design impressed during demos 
- 18+ HTML pages created and integrated

### 3. Documentation
- Weekly sprint packets maintained consistently
- Bug reports, evidence links, and ownership maps documented
- README updated each week with current status

### 4. Live Deployment
- App deployed on Render and accessible 24/7
- Auto-deploy from main branch worked reliably
- Demo account allowed professor to test without signup

---

## What Could Be Better

### 1. Testing
- No unit tests were written until Week 11
- CI pipeline only counts files, does not run tests
- Code coverage was never measured

**Fix:** Jest setup guide created in CODE_COVERAGE.md. Add tests before Week 12.

### 2. Backend Implementation
- Password stored in plaintext (P0 bug)
- No JWT authentication (session stored in localStorage only)
- JSON file storage instead of MongoDB

**Fix:** Use bcrypt for passwords, implement JWT, migrate to MongoDB.

### 3. Planning Accuracy
- Some sprints took longer than expected (e.g., backend integration)
- Features were added without clear priority
- Bug triage started late (Week 10)

**Fix:** Set clearer priorities, fix P0/P1 bugs first, triage earlier.

### 4. Demo Preparation
- Screenshots not always taken before demo
- Classroom computer not always tested in advance
- Some team members could not explain all parts

**Fix:** Demo checklist created in WEEK_11_DEMO_SCRIPT.md. Test on lab PC.

---

## Key Takeaways

| Lesson | Action |
|--------|--------|
| Start testing early | Install Jest in Week 12, write tests alongside code |
| Fix security bugs first | Password hashing is P0 — do it before demo |
| Take screenshots every week | Save to docs/evidence/ before Friday class |
| Review as a team before submit | 10-minute team review before pushing sprint packet |
| Keep documentation in one place | All docs in docs/ folder, linked from README |

---

## What to Do Differently Next Sprint

1. Fix P0 and P1 bugs before adding new features
2. Write unit tests for every new endpoint
3. Run CI with test step before merging PRs
4. Take demo screenshots on Thursday, not Friday morning
5. Do a 5-minute team walkthrough before class
