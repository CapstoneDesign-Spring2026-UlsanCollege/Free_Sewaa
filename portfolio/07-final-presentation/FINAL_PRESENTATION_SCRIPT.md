# Final Presentation Script

**Total time: 15 minutes**

---

## Part 1: Project Story (2 minutes)

"Good morning/afternoon. Our capstone project is **Free Sewaa** — a web-based community donation platform that connects donors with people in need.

The problem we identified is simple: many usable items go to waste while community members lack access to essential goods. There was no centralized platform for item donation that ensured transparency and ease of use.

Our solution is Free Sewaa: a platform where anyone can donate items, request what they need, and communicate directly with other users — all through a clean, responsive web interface.

Over this semester, our team of 5 built this platform from the ground up: starting with wireframes and project pitches, moving through frontend and backend development, testing and QA, and finally deploying a live MVP on Render."

---

## Part 2: Live Demo (5 minutes)

*Navigate to [free-sewaa-qh05.onrender.com](https://free-sewaa-qh05.onrender.com)*

### Flow:
1. **Landing Page** — Overview of the platform, navigation
2. **Sign Up** — Create a new user account (or use demo credentials)
3. **Sign In** — Show authenticated state
4. **Browse Items** — View available donation items with filtering
5. **Post a Donation** — Fill out the form, upload an image
6. **Request an Item** — Submit a request
7. **Messages** — Show the messaging interface
8. **Dashboard** — User activity overview
9. **Admin Panel** — User management, content moderation

*See [FINAL_MVP_DEMO.md](../04-final-product/FINAL_MVP_DEMO.md) for detailed demo steps.*

---

## Part 3: Semester Journey (2 minutes)

"Our journey spanned 16 weeks:

- **Weeks 1-4:** Foundation — Repository setup, team agreement, frontend pages, initial backend
- **Weeks 5-8:** Core development — Backend API, database integration, midterm delivery
- **Weeks 9-12:** QA and stabilization — Bug triage, testing, QA Day with 96% pass rate
- **Weeks 13-16:** Final polish — Figma design matching, React migration, portfolio

Key challenges we overcame:
- Shifting from marketplace to focused donation platform (Sprint 2)
- Debugging auth session and item timestamp issues
- Balancing feature development with testing

Key wins:
- Live deployment on Render with all core features working
- 50+ QA test cases with 96% pass rate
- Comprehensive documentation with 20 structured bug reports"

---

## Part 4: QA and Testing Evidence (2 minutes)

"Our testing approach was comprehensive:

**Manual Testing:** 50+ test cases across all features
- Auth, Browse, Donate, Requests, Messages, Admin
- Mobile (390×844 viewport), Cross-browser (Chrome, Firefox, Safari, Edge)
- Form validation, Accessibility, Security

**Automated Testing:** 3 Jest tests for critical backend paths
- Health endpoint, signup validation, weak password detection

**Bug Tracking:** 20 structured bug reports (P0-P3 severity)

**Week 12 QA Day Results:**
- 96% pass rate
- 0 P0 bugs remaining
- Performance: Homepage 1.8s, API 280ms, DB 85ms

*All checklists and evidence are linked in our portfolio.*"

---

## Part 5: AI and Code Ownership (1 minute)

"We used GitHub Copilot as an assistive tool throughout the semester. Every piece of AI-generated code was:

1. Reviewed by at least one team member
2. Modified for correctness and consistency
3. Tested before merging

No code was accepted without human understanding. Each team member can explain the code areas they own. Our full AI Code Ownership Audit documents every AI-assisted area, the human review process, and our team's code understanding.

**Key principle:** AI-assisted, not AI-replaced."

---

## Part 6: Technical Defense (3 minutes)

*Be prepared to answer questions about:*
- Authentication flow and JWT implementation
- Backend API structure and endpoints
- MongoDB database design and collections
- Frontend routing and page architecture
- Admin panel functionality
- Security limitations and known gaps
- Testing strategy and coverage
- Deployment on Render
- Known bugs and future improvements

*See [TECHNICAL_DEFENSE_PREP.md](./TECHNICAL_DEFENSE_PREP.md) for detailed Q&A preparation.*
