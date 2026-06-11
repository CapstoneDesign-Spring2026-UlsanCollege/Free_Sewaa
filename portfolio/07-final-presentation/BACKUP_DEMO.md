# Backup Demo Plan

## Order of Operations

1. Primary: [Render](https://free-sewaa-qh05.onrender.com)
2. Secondary: [Vercel](https://free-sewaa.vercel.app)
3. Local: `npm start` after configuring `.env`
4. Evidence fallback: screenshots, architecture, and script walkthrough

## Before Presenting

- Pre-warm Render.
- Open Vercel in another tab.
- Prepare a non-sensitive demo account.
- Keep [Final MVP Demo](../04-final-product/FINAL_MVP_DEMO.md) open.
- Keep [Final Architecture](../04-final-product/ARCHITECTURE_FINAL.md) open.
- Keep screenshot evidence open.

## Local Backup

```bash
git clone https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa.git
cd Free_Sewaa
npm install
cp .env.example .env
npm start
```

Database-backed features require a valid MongoDB URI.

## If Everything Live Fails

Walk through the saved evidence and explain the intended data flow. A clear technical explanation is better than pretending the live system worked.
