# Setup and Run Guide

## Prerequisites

- Node.js 18 or newer and npm
- MongoDB connection string for database features
- Firebase web configuration only when testing Firebase sign-in

## Install and Configure

```bash
git clone https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa.git
cd Free_Sewaa
npm install
cp .env.example .env
```

Set `PORT` and `MONGODB_URI` in `.env`. Optional Firebase variables are listed in [`.env.example`](../../.env.example). Never commit a real `.env`.

## Run and Build

```bash
npm start
npm run build
```

Open `http://localhost:3000`. Static pages and health checks can load without MongoDB, but database APIs require `MONGODB_URI` or `MONGO_URI`.

## Automated Server Tests

The root package has no test script. Use the server package:

```bash
cd server
npm install
npm test
```

The suite is in [`server/__tests__/api.test.js`](../../server/__tests__/api.test.js).

## Current Structure

| Path | Purpose |
|---|---|
| `server/server.js` | Native Node.js HTTP server, API routing, static serving, and MongoDB access |
| `html/`, root HTML files | Static application pages |
| `css/`, `js/` | Shared styling and browser behavior |
| `src/`, Vite configuration | React/Vite-oriented frontend assets |
| `docs/`, `portfolio/` | Technical, semester, and assessment evidence |

## Troubleshooting

- Database failure: verify URI, Atlas access, and credentials.
- Firebase failure: verify public configuration and authorized domains.
- Port conflict: change `PORT`.
- Slow live load: pre-warm Render or use Vercel/localhost.

See [Environment Setup](../../docs/ENVIRONMENT_SETUP.md) and [Troubleshooting](../../TROUBLESHOOTING.md).
