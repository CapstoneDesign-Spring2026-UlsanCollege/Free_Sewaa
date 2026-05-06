# Week 10 Bug Triage Guide

## Purpose

This week is about making bugs visible and useful.

A bug is not a failure. A hidden bug is a problem.

Your team must prove that your MVP is becoming more stable by identifying, prioritizing, and documenting the bugs that matter most.

## Main Rule

If it affects the final demo, core user flow, setup, login, data, save/load, deployment, or team understanding, it belongs in GitHub.

Do not keep bug reports only in KakaoTalk, Discord, private notes, or someone’s laptop.

**If it is not linked, it did not happen.**

---

## Bug Severity Levels

Use these labels in your GitHub Issues and Weekly Sprint Packet.

| Severity | Meaning | Example |
|---|---|---|
| **P0** | Final demo cannot work | App does not run, deployment is broken, main flow impossible |
| **P1** | Core feature is broken or unreliable | Login fails, save button loses data, booking/payment/upload flow breaks |
| **P2** | Important, but a workaround exists | Search is buggy, profile image fails, filter sometimes wrong |
| **P3** | Polish or nice improvement | Button spacing, awkward text, ugly message, small style issue |

### Priority Rule

Fix or document **P0/P1** first.

Do not spend class time polishing P3 issues while the core demo path is broken.

---

## What Counts as a Real Bug Report?

A real bug report includes enough information for another person to reproduce or understand the problem.

### Required Parts

- **Short bug title**
- **Severity:** P0 / P1 / P2 / P3
- **Steps to reproduce**
- **Expected result**
- **Actual result**
- **Evidence:** screenshot, video, error log, test result, or console output
- **Owner**
- **Next action**

---

## Bug Issue Template

Copy this into a GitHub Issue.

```md
# Bug: [short name]

## Severity
P0 / P1 / P2 / P3

## What happened?


## Steps to reproduce
1.
2.
3.

## Expected result


## Actual result


## Evidence
- Screenshot:
- Error log:
- Demo/video:
- Related PR:

## Owner


## Definition of Done
- [ ] Bug is reproduced
- [ ] Cause is identified or documented
- [ ] Fix is made OR next step is clear
- [ ] Manual test completed
- [ ] Evidence linked
```

---

## Bug Hunt Procedure

Use this during class.

### Step 1: Run the main MVP flow

Write the flow first.

```md
Our main MVP flow:
1.
2.
3.
4.
5.
```

Examples:

- user signs up → logs in → creates post → saves post → views post
- user searches item → selects item → reserves item → sees confirmation
- user uploads file → views result → edits result → saves result

### Step 2: Try to break the flow

Check:

- empty fields
- wrong password
- invalid email
- missing file
- refresh page
- back button
- slow loading
- bad data
- mobile screen
- deployment link
- another team member’s computer

### Step 3: Create Issues

For every serious bug, create a GitHub Issue.

Minimum target this week:

- **2 bug Issues per team**, or
- proof that no P0/P1 bugs were found in the main MVP flow

### Step 4: Assign owners

Every bug needs one owner.

Owner does not mean “fix it alone.”

Owner means “make sure it moves forward.”

### Step 5: Choose one bug to work on

Pick one bug that is:

- high priority,
- small enough to investigate today,
- connected to the core MVP flow.

---

## Good Bug Evidence

Good evidence makes the problem visible.

Examples:

- screenshot of error message
- screen recording of broken flow
- browser console error
- terminal error
- failing test output
- CI failure link
- PR showing the fix
- comment explaining investigation results

---

## Weak Bug Evidence

These do not count by themselves:

- “It is broken”
- “It does not work”
- “We think login has a problem”
- “AI found some bugs”
- “It works on my laptop”
- screenshot with no explanation
- private chat messages

---

## Good Example

```md
# Bug: Empty password crashes login page

## Severity
P1

## What happened?
When a user clicks Login with an empty password field, the page shows a server error instead of a clear validation message.

## Steps to reproduce
1. Open the login page.
2. Enter a valid email.
3. Leave password empty.
4. Click Login.

## Expected result
The page should show: “Password is required.”

## Actual result
The app shows a server error and the login form freezes.

## Evidence
- Screenshot: [link]
- Console error: [link]

## Owner
Mina

## Definition of Done
- [ ] Empty password shows a clear message
- [ ] Login page does not freeze
- [ ] Manual test completed
- [ ] PR linked
```

---

## Common Mistakes

- Reporting bugs without steps to reproduce
- Calling a P1 bug “minor” because it is uncomfortable
- Fixing polish before fixing the core flow
- Creating one giant Issue for many bugs
- Not assigning an owner
- Not linking screenshots, logs, PRs, or tests
- Letting AI fix something without understanding the change

---

## What Good Looks Like This Week

By Friday, your team should be able to say:

```md
We tested our main MVP flow.

We found:
- P1: [bug + Issue link]
- P1/P2: [bug + Issue link]

We worked on:
- [selected Issue link]

Evidence:
- PR:
- screenshot/video:
- test/manual check:

Next step:
- [specific next action]
```

