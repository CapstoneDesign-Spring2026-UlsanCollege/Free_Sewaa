# Final Presentation Slides

This folder links the final Free Sewaa presentation deck and gives the team a simple driver for presenting the project in a clear, evidence-based 15-minute format.

## Slide Deck

| File | Format | Purpose |
|---|---|---|
| [FREE-SEWAA1.pptx](https://github.com/user-attachments/files/28965945/FREE-SEWAA1.pptx) | PowerPoint | Final presentation deck for the capstone demo and technical defense |
| [Slide attachment note](./final%20ppt.md) | Markdown | Repository note preserving the uploaded deck link |

## 15-Minute Slide Driver

| Time | Slide focus | Presenter goal | Best evidence |
|---|---|---|---|
| 0:00-1:00 | Title, team, and problem | Introduce Free Sewaa as a community donation platform that reduces waste and connects people with useful items. | [Portfolio home](../../README.md) |
| 1:00-2:30 | Users and MVP scope | Explain donors, receivers, and admins; separate completed MVP behavior from future production hardening. | [Final MVP demo](../../04-final-product/FINAL_MVP_DEMO.md) |
| 2:30-4:00 | Architecture | Show the current web app, Node.js backend, MongoDB data layer, Firebase identity integration, and Render/Vercel deployment story. | [Architecture final](../../04-final-product/ARCHITECTURE_FINAL.md) |
| 4:00-7:30 | Core demo flow | Drive the live flow: landing page, sign in, browse, donate/post, request, messages, and user dashboard. | [Final screenshots](../../../docs/assets/screenshots/README.md) |
| 7:30-9:00 | Authentication and Firebase | Explain Google sign-in, email verification/link support, phone OTP test flow, backend token verification, and admin separation. | [Technical defense prep](../TECHNICAL_DEFENSE_PREP.md) |
| 9:00-10:30 | QA and stabilization | Summarize automated tests, manual QA, known limitations, and why deferred issues are recorded honestly. | [QA and stabilization](../../05-qa-and-stabilization/README.md) |
| 10:30-12:00 | AI use and ownership | Explain how AI helped with drafts, debugging, and documentation while humans reviewed scope, code, and evidence. | [AI and code ownership](../../06-ai-and-code-ownership/README.md) |
| 12:00-13:30 | Limitations and future work | State deferred items without overselling: validation hardening, rate limiting, password recovery, broader E2E coverage, and frontend consolidation. | [Bugs and limitations](../../05-qa-and-stabilization/BUGS_AND_LIMITATIONS.md) |
| 13:30-15:00 | Closing and evidence map | Close with what is complete, where the professor can verify it, and how the repository is organized for grading. | [Final portfolio audit](../../FINAL_PORTFOLIO_AUDIT.md) |

## Demo Guidance

- Use the live Render deployment first: [https://free-sewaa-qh05.onrender.com](https://free-sewaa-qh05.onrender.com).
- Follow the prepared [final presentation script](../FINAL_PRESENTATION_SCRIPT.md) for timing and speaker flow.
- If the live site is slow or unavailable, switch to the [backup demo plan](../BACKUP_DEMO.md) and the saved [Final MVP screenshot gallery](../../../docs/assets/screenshots/README.md).
- Do not show real passwords, phone numbers, private emails, Firebase console secrets, MongoDB credentials, or personal browser data.
- Describe seeded listings, messages, screenshots, and admin records as demonstration data.
- Keep the defense honest: Free Sewaa is a working academic MVP with documented deferred production hardening, not a fully production-hardened public service.

## Quick Presenter Checklist

- Open the deck before class and confirm the attachment downloads.
- Open Render, the screenshot gallery, and the backup demo plan in separate tabs.
- Use a non-sensitive demo account only.
- Keep the demo focused on the MVP path: landing -> authentication -> browse -> donate -> request/message -> admin evidence.
- When asked technical questions, answer from [Technical Defense Prep](../TECHNICAL_DEFENSE_PREP.md) and link claims back to repository evidence.

[Back to Final Presentation](../README.md)
