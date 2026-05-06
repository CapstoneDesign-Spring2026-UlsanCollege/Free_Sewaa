# Week 10 Safe Copilot Workflow Guide

## Purpose

GitHub Copilot can help your team debug faster.

But Copilot is not the team leader. Copilot is not responsible for your grade. Copilot is not allowed to create mystery code.

You are responsible for every line you accept.

## Core Rule

AI-assisted work only counts if your team can:

1. run it,
2. explain it,
3. test it,
4. debug it,
5. link evidence for it.

If no one can explain the code, it is **Not Yet**.

---

## Safe Workflow

Use this every time you use Copilot for code.

```md
Issue → Inspect → Plan → Small Change → Test → Review Diff → PR → AI Use Note → Sprint Packet Link
```

---

## Step 1: Start from a GitHub Issue

Do not ask Copilot to “improve the app.”

Start with one clear Issue.

Example:

```txt
Issue #18: Fix login error when password is empty.
```

Weak:

```txt
Fix all auth problems and make it better.
```

That is too big. That is how chaos enters the repo.

---

## Step 2: Ask Copilot to Inspect First

Use this prompt before any edits.

```txt
We are working on Issue #__.

First, inspect the relevant files and explain how this part of the app currently works.
Do not edit files yet.

Then identify the likely cause of the bug.
```

Your job:

- read the explanation,
- check if it matches the actual code,
- ask questions if you do not understand.

---

## Step 3: Ask for the Smallest Safe Plan

```txt
Suggest the smallest safe fix for Issue #__.
List the files you would change and why.
Do not make changes yet.
```

Before accepting the plan, ask:

- Is this connected to the Issue?
- Is it small?
- Does it avoid unrelated files?
- Does it avoid new dependencies?
- Can someone on the team explain it?

---

## Step 4: Apply a Small Change Only

```txt
Apply the smallest fix only.
Do not change unrelated files.
Do not add new dependencies.
After editing, summarize exactly what changed.
```

If Copilot changes many files, stop.

Review before committing.

---

## Step 5: Test It

Ask Copilot for test steps.

```txt
Tell me how to test this manually.
If useful, suggest one automated test.
```

Then actually test it.

Possible checks:

```bash
npm run dev
npm test
git status
git diff
```

Use the commands that match your project.

Manual test example:

```md
Manual test:
1. Open login page.
2. Enter valid email.
3. Leave password empty.
4. Click Login.
5. Confirm clear error message appears.
6. Confirm page does not crash.
```

---

## Step 6: Review the Diff

Before committing or opening a PR:

```bash
git status
git diff
```

Check:

- Did Copilot edit unrelated files?
- Did it add a dependency?
- Did it remove working code?
- Did it change formatting across many files?
- Do you understand the change?
- Can you explain why this fixes the Issue?

If the answer is no, do not merge.

---

## Step 7: Open a PR

Your PR must include:

- linked Issue,
- summary of what changed,
- screenshots or logs if useful,
- how you tested,
- AI Use Note.

Use `Closes #__` if the PR fully fixes the Issue.

Use `Related to #__` if it is only investigation or partial progress.

---

## Required AI Use Note

Every AI-assisted PR must include this.

```md
## AI Use Note

- AI tool used:
- What AI helped with:
- What I personally checked or changed:
- How I tested it:
- One part I still do not fully understand:
```

Be honest. “I still do not fully understand...” is not automatically bad.

Hiding confusion is bad.

---

## Good Copilot Prompts

```txt
We are working on Issue #18.
First inspect the relevant files and explain the current login flow.
Do not edit yet.
```

```txt
Suggest the smallest safe fix for this bug.
List the files you would change and why.
Do not edit yet.
```

```txt
Review this function for possible edge cases.
Do not rewrite it.
```

```txt
Suggest manual test steps for this bug fix.
```

```txt
Explain this file in beginner-friendly language so I can prepare for a code ownership check.
```

---

## Bad Copilot Prompts

```txt
Fix everything.
```

```txt
Make the app production ready.
```

```txt
Rewrite the whole project.
```

```txt
Add authentication, database, admin page, and deployment.
```

```txt
Improve the UI.
```

These are too vague or too large.

---

## Optional: Repo Custom Instructions

Recommended file:

```txt
.github/copilot-instructions.md
```

Starter text:

```md
# Copilot Instructions

This is a student capstone project.

Follow these rules:
- Make small, issue-focused changes.
- Explain the plan before editing.
- Do not change unrelated files.
- Do not add dependencies unless asked.
- Prefer clear beginner-readable code.
- Add or update tests when reasonable.
- After changes, explain how to test them.
- Be honest about uncertainty.
- Do not invent new features or change sprint scope.
```

---

## Common Mistakes

- Starting without a GitHub Issue
- Asking Copilot to fix too much
- Accepting changes without reading them
- Not running the project after a fix
- Not checking `git diff`
- Letting Copilot add dependencies without approval
- Merging code no one can explain
- Forgetting the AI Use Note
- Saying “Copilot fixed it” instead of explaining what changed

---

## What Good Looks Like

```md
We worked on Issue #21: Empty date crashes booking form.

Copilot inspected:
- `BookingForm.jsx`
- `bookingApi.js`

Copilot suggested changing three files.
We accepted only the validation change in `BookingForm.jsx`.

We tested:
- empty date
- valid date
- page refresh after submit

Evidence:
- Issue #21
- PR #24
- screenshot of fixed error state

AI Use Note included in PR.
```

