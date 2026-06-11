# Project Summary

## Problem and Audience

Usable items are often discarded while nearby people need affordable access to everyday goods. Free Sewaa explores whether a focused donation platform can make giving, discovering, requesting, and discussing items easier.

The primary users are donors and recipients. Administrators are a supporting user group responsible for reviewing users, listings, and platform activity.

## Value Statement

Free Sewaa connects the donation journey in one web application:

> Account access -> post or browse -> request -> message -> monitor activity

Unlike a marketplace, the MVP prioritizes reuse and community exchange instead of payment, auctions, shipping, or commercial seller tools.

## Current Product

| Area | Current repository evidence |
|---|---|
| Interface | Static HTML, CSS, and JavaScript pages plus React/Vite assets |
| Server | Native Node.js HTTP server in [`server/server.js`](../../server/server.js) |
| Data | MongoDB through the official `mongodb` driver |
| Authentication | Local account endpoints and Firebase identity-token support |
| Deployment | [Render](https://free-sewaa-qh05.onrender.com) and [Vercel](https://free-sewaa.vercel.app) |
| Testing | Server API tests plus manual QA documents and recorded test evidence |

## Core MVP Flow

1. Open the application and access an account.
2. Browse available donations or post a new item.
3. Open an item and submit a request.
4. Continue communication through messaging.
5. Review activity through user or administration views.

The [Final MVP Demo](../04-final-product/FINAL_MVP_DEMO.md) gives the presentation sequence. The [Final MVP Scope](./FINAL_MVP_SCOPE.md) records partial and future work so the portfolio does not imply production readiness.

## Strongest Evidence

- [Repository README](../../README.md)
- [Project idea pitch](../../docs/PROJECT/PROJECT_IDEA_PITCH.md)
- [User stories](../../docs/PROJECT/USER_STORIES.md)
- [Final architecture](../04-final-product/ARCHITECTURE_FINAL.md)
- [QA report](../05-qa-and-stabilization/QA_REPORT.md)
