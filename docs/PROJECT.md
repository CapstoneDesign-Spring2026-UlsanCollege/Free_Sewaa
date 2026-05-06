# PROJECT.md — Capstone Design Project Overview

This document follows the **Capstone Design (Spring 2026)** project overview format from the [course startup template](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/capstone-team-startup-documents). It answers: **what problem we solve**, **what the system does**, and **what the demo shows**. An extended narrative lives in [`PROJECT/PROJECT.md`](PROJECT/PROJECT.md).

**Last updated:** May 2026 (through Week 7 documentation pass)

---

# Team information

**Team name:** Free Sewaa

**Repository:** https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa

**GitHub project board:** https://github.com/orgs/CapstoneDesign-Spring2026-UlsanCollege/projects/14

**Team members (standing roles — rotate weekly; see `docs/sprints` for each sprint’s PM / Scribe / QA / Demo):**

| Name | Primary responsibility (README snapshot) |
| --- | --- |
| Ram Pathak | Project management, coordination |
| Sujan Tamang | Lead development (frontend & backend) |
| Mohan Khadka | Demo driver, live presentation |
| Sujan Shrestha | QA lead, testing |
| Swarnim Jung Karki | Scribe / documentation, repo documentation |

---

# Project title

**Free Sewaa** — community donation platform for giving away reusable items for free.

---

# Problem statement

Usable goods are often discarded while others nearby need them. People who want to donate and people who need items lack a **simple, trustworthy place** to connect. Free Sewaa reduces waste by making **posting, browsing, and requesting** donations easy in one web application.

---

# Target users

- Community members who want to **donate** reusable items  
- People who need **free or low-barrier access** to those items  
- Students and residents interested in **sustainability and sharing**  
- **Administrators** who moderate listings (admin flows as implemented)

---

# Project goal

The system lets users **sign up / sign in**, **list donation items**, **browse and search listings**, **request items**, and **message** other users so donors and recipients can coordinate pickup. Deployed builds demonstrate a **real URL** the class can open for grading and demos.

---

# Core features (first version)

1. **Authentication** — signup, signin, session-style usage for the app shell  
2. **Post / donate items** — create listings with details donors want to share  
3. **Browse items** — discover what is available  
4. **Request items** — express interest in a listing  
5. **Messaging** — direct messages between users for coordination  

Backend (Node.js / Express) supports API routes documented in the root `README.md`; production may use **MongoDB** when `MONGO_URI` is configured.

---

# Demo scenario

**What we show in class / Sprint Packet (typical flow):**

1. Open the **live deployment** (see root `README.md` — Render URL) or local `http://localhost:3000`.  
2. **Sign in** (or sign up) as a donor or recipient demo account.  
3. **Post an item** (or show an existing listing), then **browse** the catalog.  
4. **Request** an item and show **messaging** or contact flow, plus **GitHub evidence**: Issues, Project board, and PRs for that sprint.

**Backup:** recorded video, screenshots of API or DB, and links to the same GitHub evidence.

---

# Minimum viable product (MVP)

The **MVP** is a **stable, demoable** build: landing + auth entry, core pages for browse / donate / request, and visible **GitHub workflow** (issues, PRs, sprint packet). It must **run without crashing** for the demo path above. The smallest slice is: **one user can post an item and another can see it and request it**, with evidence merged to `main`.

---

# Stretch goals (optional)

- Richer **search / filters** and categories  
- **Notifications** (email or in-app) for requests  
- Stronger **admin moderation** and reporting  
- **PWA / mobile** polish  
- **Real-time** chat beyond current messaging scope  

---

# Technology stack

| Area | Tool |
| --- | --- |
| Frontend | HTML5, CSS3, JavaScript (vanilla) |
| Backend | Node.js, Express |
| Data | JSON-backed demo / **MongoDB** when configured |
| Hosting | **Render** (see root `README` for live URL) |
| Version control | Git, GitHub |

---

# Project scope rules

- **Start small**, ship **weekly** slices (Sprint Packet + evidence).  
- Prefer **working software** over speculative features.  
- Avoid scope that **cannot be demoed** or traced in GitHub.

---

# Weekly development process

Aligned with [course non-negotiables](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/capstone-team-startup-documents):

```text
Idea → Issue → Branch → Pull Request → Merge → Evidence on Sprint Packet Issue
```

Each week: **one team Sprint Packet Issue**, **demo link or video**, **board snapshot**, **sprint notes**, **individual receipts** (2–3 links per person).

---

# Documentation captured so far

| Area | Location |
| --- | --- |
| Weekly Sprint Packets | [`docs/sprints/`](sprints/) |
| Questions / reflection | [`docs/question.md`](question.md) |
| Design & architecture | [`docs/DESIGN/`](DESIGN/) |
| MVP progress | [`docs/PROGRESS/`](PROGRESS/) |
| User stories & pitch | [`docs/PROJECT/`](PROJECT/) |
| Midterm artifacts | [`docs/MID-TERM/`](MID-TERM/) |
| Team agreement | [`TEAM_AGREEMENT.md`](TEAM_AGREEMENT.md) |

---

# Project evolution

Update this file when scope, stack, or **demo scenario** changes. Track changes with normal **Git commits** and mention updates in the **Weekly Sprint Packet** issue.
