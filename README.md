# CampusLYT — Official Marketing Website

A React + Vite marketing website for the CampusLYT mobile app, plus a
content-management admin panel. Built to the brief: campus-network visual
identity, dark/light theme, interactive app showcase, download tracking, and
an admin CMS for non-developers to update content.

## Getting started

```bash
npm install
cp .env.example .env   # then fill in real values
npm run dev             # http://localhost:5173
npm run build            # production build → dist/
```

## What's real vs. mock (read this before deploying)

This repo ships a **complete, working frontend**. It does **not** ship a
backend/database — building and hosting that is a separate project. Until a
real backend exists, the site runs in a documented mock mode so nothing is
broken or fake-looking:

| Area | Current state | To go to production |
|---|---|---|
| Public marketing pages | Real, fully built | Ready as-is |
| Content (`src/content/websiteContent.js`) | Static default copy | Swap for `GET /api/content` (already wired in `src/services/api.js`) |
| Download links | Read from `VITE_ANDROID_DOWNLOAD_URL` / `VITE_IOS_DOWNLOAD_URL`. Shows "Coming soon" if unset — **never fabricates a store link** | Set real env vars, or let admin panel manage them once a backend exists |
| Screenshots | Clearly labelled placeholders until a URL is provided | Upload real screenshots via admin panel (needs backend + file storage) |
| Admin login | Local **demo-only** auth (`admin` / `campuslyt-demo`), stored in `localStorage`. **Not secure — do not ship this to production** | Replace with real JWT/session auth issued by a backend; frontend must never decide who is an admin |
| Admin content edits | Saved to `localStorage` (`src/services/mockStore.js`) so the CMS UI is demonstrable | Point `VITE_API_BASE_URL` at a real API; `src/services/api.js` already calls the real endpoints instead of the mock ones whenever that variable is set |
| Download click analytics | Tracked locally as "Download Button Clicks" (never claims verified installs) | Send events to a real analytics/backend endpoint |
| Contact form | Saved to `localStorage` | Wire to a real `/api/contact` endpoint or email service |

**The switch is centralized**: every function in `src/services/api.js` checks
`VITE_API_BASE_URL` and calls the real backend if it's set, otherwise falls
back to the mock store. No component needs to change when a backend is
introduced.

## Suggested backend shape (not included)

```
Frontend (this repo) -> REST/JSON API -> Database
```

Deploy independently on Render:
- **Static site** for this frontend (`npm run build`, publish `dist/`)
- **Web service** for the backend API, with its own database (Postgres, etc.)
- Backend issues httpOnly session cookies or JWTs for `/admin/*`; the backend
  — not this frontend — is the source of truth for who is an admin.

## Environment variables

See `.env.example`:

```
VITE_ANDROID_DOWNLOAD_URL=
VITE_IOS_DOWNLOAD_URL=
VITE_API_BASE_URL=
```

## Project structure

```
src/
  components/    Reusable UI: Navbar, Footer, DownloadButton, PhoneMockup, cards, NetworkGraph...
  sections/      Homepage sections (Hero, Features, Community, etc.)
  pages/         Route-level pages, including pages/admin/
  content/       Centralized copy + download config (no hardcoded strings in components)
  services/      api.js (real/mock switch), mockStore.js, analytics.js
  context/       Theme + admin auth React contexts
  routes/        ProtectedRoute for /admin/dashboard
  styles/        theme.css (CSS variables) + global.css
```

## Admin panel

- `/admin/login` — demo credentials: `admin` / `campuslyt-demo`
- `/admin/dashboard` — content, features, screenshots, download links,
  testimonials, announcements, analytics (Recharts), settings

## Notes

- Respects `prefers-reduced-motion`.
- No fake app screenshots — unset screenshots render as clearly labelled placeholders.
- No fake store links — an unset platform shows "Coming soon."
- Social stats are marked as illustrative until real numbers are supplied.
