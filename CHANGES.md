# CampusLYT Fixes

## Navigation
- Fixed the top-navbar `Features`, `How It Works`, and `Community` links so they scroll to the correct homepage sections.
- Section links now also work when clicked from another route (for example `/about`).
- Added a scroll offset so sticky navigation does not cover section headings.
- Mobile navigation closes correctly after a section is selected.

## App showcase
- Connected the supplied screenshots to the `The app, screen by screen` tabs:
  - Explore -> `src/assets/Explore.png`
  - Profile -> `src/assets/Profile.png`
  - Connections -> `src/assets/Chat.png`
  - Chat -> `src/assets/Chat1.png`
  - News -> `src/assets/News.png`
- Added a Groups tab using the existing screenshot-placeholder UI because no Groups screenshot was present in the supplied project assets.
- Changed phone screenshots from `object-fit: cover` to `contain` so app screenshots are not cropped.

## Other bug fix
- Restored the `SocialProof` component. It had been accidentally commented out while `Home.jsx` still imported it, which could break the build.

## Responsive behavior
- Preserved the existing responsive grid and mobile tab wrapping, while ensuring the new screenshots use the same phone mockup at desktop and mobile sizes.
