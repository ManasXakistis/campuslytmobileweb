import { trackDownloadClick, trackPageView } from './mockStore';

// In production, swap these for real analytics/backend calls (e.g. POST
// /api/analytics/download-click). Kept mock-only for now so the admin
// dashboard has something real to visualize during development.

export function recordDownloadClick(platform) {
  try {
    trackDownloadClick(platform);
  } catch {
    // analytics must never break the user-facing download action
  }
}

export function recordPageView(path) {
  try {
    trackPageView(path);
  } catch {
    // no-op
  }
}
