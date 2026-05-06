# Week 10 What to Submit

## Week 10 Focus

**Copilot Workflow + Bug Triage**

This week, your team must show that you can find, prioritize, investigate, and fix or document important bugs.

The goal is not to add many new features.

The goal is to make your MVP more stable and prove your work with GitHub evidence.

---

## Due Date

**Friday by 23:59**

Submit one **Weekly Sprint Packet Issue** per team.

The PM or Scribe submits the team packet.

Every student must comment on the Sprint Packet with individual Contribution Receipts.

---

## Required Submission

Submit one GitHub Issue using the Weekly Sprint Packet format.

Your Week 10 packet must include:

1. Weekly Progress Demo evidence
2. Board snapshot
3. What shipped or improved
4. P0/P1 bug evidence
5. Risks / blockers
6. Engineering Practice Spine evidence
7. AI Use + Code Ownership Check
8. Plan for next week
9. Individual Contribution Receipts in comments

---

## 1. Weekly Progress Demo Evidence

Include:

- demo type: live / video / screenshots / code walkthrough
- demo link or evidence
- 3-bullet demo script
- backup plan

### Good example

```md
## Weekly Progress Demo

Demo type: live + screenshots
Demo evidence: [link]

What changed:
1. We found and documented two P1 bugs.
2. We fixed the empty-password login crash.
3. We added a manual test checklist for login.

Backup plan:
If the live demo fails, we will show the recorded video and PR screenshots.
```

---

## 2. Board Snapshot

Show your GitHub Project board or issue list.

Your board should include:

- Done
- Doing
- To Do
- Blocked, if needed
- Nice Later, if needed

Every active task should have:

- owner,
- Definition of Done,
- priority,
- evidence link when available.

---

## 3. What Shipped or Improved

List 3–8 linked items if possible.

Examples:

```md
## What We Shipped

- Fixed login empty-password crash: PR #24
- Created bug report for duplicate booking: Issue #25
- Added manual QA checklist for booking flow: docs link
- Updated setup instructions after install error: PR #26
```

Every item needs a link.

No link = not counted.

---

## 4. P0/P1 Bug Evidence

This is the most important Week 10 requirement.

You must include either:

- P0/P1 bugs found and linked, or
- evidence that the main MVP flow was tested and no P0/P1 bugs were found.

### Bug table

```md
| Bug / problem | Severity | Owner | Evidence / Issue link | Next step |
|---|---|---|---|---|
| Login crashes when password is empty | P1 | Mina | Issue #21 | Fix validation |
| Duplicate booking allowed | P1 | Joon | Issue #22 | Investigate API |
```

### Severity guide

- **P0:** final demo cannot work
- **P1:** core feature broken or unreliable
- **P2:** important but workaround exists
- **P3:** polish / nice improvement

---

## 5. Risks / Blockers

Include anything that could stop your team from making progress.

Examples:

- deployment does not work,
- database setup unclear,
- one member owns too much code,
- team cannot explain AI-generated files,
- core flow only works on one laptop,
- missing API keys or environment variables.

Use this format:

```md
| Risk / blocker | Owner | What we need | Evidence link | Mitigation |
|---|---|---|---|---|
| App only runs on one laptop | QA Lead | Setup check from another member | Issue #30 | Update README and test setup |
```

---

## 6. Engineering Practice Spine

Week 10 spine:

**Issue-based AI use + debugging**

Your packet must show one piece of evidence for this spine.

Examples:

- Copilot-assisted bug investigation comment
- PR with AI Use Note
- bug Issue with reproduction steps
- manual test checklist
- screenshot/log showing bug before and after fix
- `git diff` reviewed and summarized in PR

### Required explanation

```md
## Engineering Practice Spine

This week we focused on issue-based AI use + debugging.

What we did:
- We started from Issue #21.
- Copilot inspected the login files before editing.
- We accepted only one small validation change.
- We tested empty password and valid login manually.

Evidence:
- Issue:
- PR:
- Screenshot/test:
```

---

## 7. AI Use + Code Ownership Check

Include what AI helped with and what humans verified.

```md
## AI Use + Code Ownership Check

### AI tools used this week
- GitHub Copilot:
- ChatGPT / Claude / Gemini / other:

### What AI helped with
-

### What humans reviewed or changed
-

### Code ownership map

| Student | Area owned | Evidence link | Can explain? |
|---|---|---|---|
|  |  |  | Clear / Needs work |

### Code we do not fully understand yet

| Area | What is confusing? | Owner | Plan to understand/fix |
|---|---|---|---|
|  |  |  |  |
```

Be honest.

Confusing code is allowed.

Hidden confusing code is not allowed.

---

## 8. Plan for Next Week

Week 11 is MVP Verification.

Your Week 10 packet should prepare for that.

Include:

```md
## Plan for Next Week

Top 3 goals:
1.
2.
3.

First task next class:
-

What we will demo next week:
-
```

Your next-week goals should focus on:

- core MVP flow,
- P0/P1 fixes,
- setup reliability,
- demo path stability,
- code ownership.

---

## 9. Individual Contribution Receipts

Each student must comment on the Sprint Packet Issue with **2–3 links**.

Copy/paste this as your comment:

```md
## Contribution Receipts - Name

- Receipt 1:
- Receipt 2:
- Receipt 3:

### 1-sentence contribution summary


### AI Use Note

- AI tool used:
- What AI helped with:
- What I personally checked or changed:
- How I tested or verified it:
- One thing I still do not fully understand:
```

Good receipts:

- PR link
- Issue link
- review comment
- screenshot
- test result
- CI run
- docs update
- bug report
- demo video

Weak receipts:

- “I helped”
- “I worked on the code”
- “We talked about bugs”
- “AI helped us”
- “Almost done”

---

## Minimum Standard for Week 10

Your team meets the minimum standard if:

- [ ] Weekly Sprint Packet is submitted by Friday 23:59
- [ ] Weekly Progress Demo evidence is included
- [ ] Board snapshot is included
- [ ] P0/P1 bugs are documented OR core flow testing evidence is linked
- [ ] At least one bug/fix/investigation has clear GitHub evidence
- [ ] AI Use + Code Ownership Check is completed
- [ ] Each student comments with 2–3 linked receipts

---

## What Good Looks Like

```md
This week we tested our main MVP booking flow.

We found:
- P1: Empty date crashes booking form, Issue #21
- P1: Duplicate booking allowed, Issue #22
- P2: Confirmation message unclear, Issue #23

We worked on Issue #21.
Copilot inspected the relevant files before editing.
We accepted one small validation change.
We tested the fix manually.

Evidence:
- Issue #21
- PR #24
- Screenshot of fixed error state
- Manual test checklist

Next week, we will verify the full MVP flow for the Week 11 demo.
```

---

## Common Mistakes

- Submitting without links
- Listing bugs without severity
- Saying “fixed” without PR or test evidence
- Using AI but not writing an AI Use Note
- Adding new features while P0/P1 bugs remain
- No individual receipt comments
- Board says Done but has no evidence
- Only one student can explain the work

---

## Final Reminder

A feature is not done because it exists in the code.

A feature is done when your team can:

- run it,
- explain it,
- test it,
- debug it,
- link evidence for it.

No mystery code.
