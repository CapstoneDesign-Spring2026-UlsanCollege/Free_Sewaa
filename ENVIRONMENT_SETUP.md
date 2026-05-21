# Environment Setup — Free Sewaa

## Prerequisites

- **Node.js** 18+ ([download](https://nodejs.org/))
- **MongoDB** 6+ running locally ([install guide](https://www.mongodb.com/docs/manual/installation/))

## Quick Setup

```bash
git clone https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa.git
cd Free_Sewaa
npm install
echo "MONGODB_URI=mongodb://localhost:27017/freesewaa" > .env
npm start
```

Open http://localhost:3000

## Environment Variables

Create a `.env` file in the project root:

```
MONGODB_URI=mongodb://localhost:27017/freesewaa
PORT=3000
```

## Troubleshooting

- **MongoDB not running:** `brew services start mongodb-community` (macOS)
- **Port in use:** Change `PORT` in `.env` or kill process on port 3000
- **Missing MONGODB_URI:** Server will not start without it

See full guide: [`docs/ENVIRONMENT_SETUP.md`](docs/ENVIRONMENT_SETUP.md)

---

*Last updated: May 2026*
