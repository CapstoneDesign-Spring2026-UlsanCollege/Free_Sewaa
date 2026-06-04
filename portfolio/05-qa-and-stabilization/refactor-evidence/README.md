# Refactor Evidence

## React Migration

The frontend underwent a migration from static HTML pages to React components using Vite build system.

### Relevant Commits
- [7dc196f](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/7dc196f) — Convert frontend pages to React
- [b38c79d](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/b38c79d) — Ensure React build runs on Render start
- [9614646](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/9614646) — Preload React page styles

### Frontend Architecture Changes
- [Frontend Guide](../../../docs/FRONTEND_GUIDE.md) — Updated with React migration section
- `vite.config.js` — Vite build configuration (archived in git history at commit `c57d2ab` before cleanup)
- [Generated pages (git history)](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commits/main/client/src/generated-pages/) — React page components (removed in final cleanup; see git history)

## UI Polish (Weeks 9-13)

The team matched UI to Figma design reference across multiple pages:
- [7399ae8](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/7399ae8) — Match homepage to Figma
- [d26a904](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/d26a904) — Match browse page to Figma marketplace
- [a0362c5](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/a0362c5) — Match auth pages to Figma theme
- [807aff0](https://github.com/CapstoneDesign-Spring2026-UlsanCollege/Free_Sewaa/commit/807aff0) — Fix auth header scroll layout

[Back to QA and Stabilization](../README.md)
