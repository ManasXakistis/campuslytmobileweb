// -----------------------------------------------------------------------------
// MOCK DATA STORE
//
// Simulates a database using localStorage so the admin CMS is usable before a
// real backend exists. CLEARLY NOT PRODUCTION-READY:
//   - No real authentication (see mockAdminLogin below)
//   - No server-side validation
//   - Data lives only in the current browser
//
// Replace this module's callers (in api.js) with real HTTP calls once a
// backend + database is deployed.
// -----------------------------------------------------------------------------

import {
  hero, whyCampusLYT, features, seniorsAlumni, communities, howItWorks,
  trust, socialProof, story, finalCTA,
} from '../content/websiteContent';
import { downloadConfig } from '../content/downloadConfig';

const KEYS = {
  content: 'campuslyt-mock-content',
  features: 'campuslyt-mock-features',
  testimonials: 'campuslyt-mock-testimonials',
  announcements: 'campuslyt-mock-announcements',
  downloads: 'campuslyt-mock-downloads',
  screenshots: 'campuslyt-mock-screenshots',
  session: 'campuslyt-mock-admin-session',
  contactSubmissions: 'campuslyt-mock-contact',
  analytics: 'campuslyt-mock-analytics',
};

function read(key, fallback) {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function write(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
  return value;
}

// ---- content ----

export function getContent() {
  return read(KEYS.content, { hero, whyCampusLYT, seniorsAlumni, communities, howItWorks, trust, socialProof, story, finalCTA });
}

export function updateContentSection(section, data) {
  const current = getContent();
  const updated = { ...current, [section]: data };
  return write(KEYS.content, updated);
}

// ---- features ----

export function getFeaturesList() {
  return read(KEYS.features, features);
}
export function saveFeaturesList(list) {
  return write(KEYS.features, list);
}

// ---- testimonials ----

export function getTestimonialsList() {
  return read(KEYS.testimonials, socialProof.testimonials);
}
export function saveTestimonialsList(list) {
  return write(KEYS.testimonials, list);
}

// ---- announcements ----

export function getAnnouncementsList() {
  return read(KEYS.announcements, []);
}
export function saveAnnouncementsList(list) {
  return write(KEYS.announcements, list);
}

// ---- download links ----

export function getDownloadLinksConfig() {
  return read(KEYS.downloads, downloadConfig);
}
export function saveDownloadLinksConfig(links) {
  return write(KEYS.downloads, links);
}

// ---- screenshots ----

export function getScreenshotsList() {
  return read(KEYS.screenshots, []);
}
export function saveScreenshotsList(list) {
  return write(KEYS.screenshots, list);
}

// ---- contact form ----

export function saveContactSubmission(payload) {
  const list = read(KEYS.contactSubmissions, []);
  list.unshift({ ...payload, id: crypto.randomUUID(), submittedAt: new Date().toISOString() });
  write(KEYS.contactSubmissions, list);
  return { success: true };
}

// ---- mock admin auth (DEMO ONLY — see file header) ----

const DEMO_ADMIN = { username: 'admin', password: 'campuslyt-demo' };

export function mockAdminLogin({ username, password }) {
  if (username === DEMO_ADMIN.username && password === DEMO_ADMIN.password) {
    const session = { username, issuedAt: Date.now(), expiresAt: Date.now() + 1000 * 60 * 60 * 4 };
    write(KEYS.session, session);
    return { success: true, session };
  }
  throw new Error('Invalid username or password.');
}

export function mockAdminLogout() {
  window.localStorage.removeItem(KEYS.session);
  return { success: true };
}

export function getMockSession() {
  const session = read(KEYS.session, null);
  if (!session) return null;
  if (Date.now() > session.expiresAt) {
    window.localStorage.removeItem(KEYS.session);
    return null;
  }
  return session;
}

// ---- analytics (download button clicks — NOT verified app installs) ----

export function trackDownloadClick(platform) {
  const data = read(KEYS.analytics, { android: [], ios: [], pageViews: [] });
  data[platform] = data[platform] || [];
  data[platform].push(new Date().toISOString());
  write(KEYS.analytics, data);
}

export function trackPageView(path) {
  const data = read(KEYS.analytics, { android: [], ios: [], pageViews: [] });
  data.pageViews = data.pageViews || [];
  data.pageViews.push({ path, at: new Date().toISOString() });
  write(KEYS.analytics, data);
}

function countSince(entries, days) {
  const cutoff = Date.now() - days * 24 * 60 * 60 * 1000;
  return entries.filter((iso) => new Date(iso).getTime() >= cutoff).length;
}

export function getAnalyticsSummary() {
  const data = read(KEYS.analytics, { android: [], ios: [], pageViews: [] });
  const android = data.android || [];
  const ios = data.ios || [];
  const pageViews = data.pageViews || [];

  const byDay = {};
  [...android.map((d) => ['android', d]), ...ios.map((d) => ['ios', d])].forEach(([platform, iso]) => {
    const day = iso.slice(0, 10);
    byDay[day] = byDay[day] || { day, android: 0, ios: 0 };
    byDay[day][platform] += 1;
  });
  const trend = Object.values(byDay).sort((a, b) => a.day.localeCompare(b.day));

  return {
    totalClicks: android.length + ios.length,
    androidClicks: android.length,
    iosClicks: ios.length,
    clicksLast7Days: countSince([...android, ...ios], 7),
    clicksLast30Days: countSince([...android, ...ios], 30),
    websiteVisits: pageViews.length,
    trend,
    isMockData: true,
  };
}
