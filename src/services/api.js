// -----------------------------------------------------------------------------
// API SERVICE LAYER
//
// This module is the ONLY place that should know whether data is coming from
// a real backend or from local mock storage. Every component calls the
// functions below — never fetch() or localStorage directly from a component.
//
// REAL DATA:  once VITE_API_BASE_URL is set, every function here calls that
//             API and the mock layer is bypassed entirely.
// MOCK DATA:  until a backend exists, reads/writes fall back to localStorage
//             (see mockStore.js) so the admin dashboard is still usable for
//             content editing during development.
// -----------------------------------------------------------------------------

import * as mock from './mockStore';

const API_BASE = import.meta.env.VITE_API_BASE_URL || '';
const hasBackend = Boolean(API_BASE);

async function request(path, options = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json', ...options.headers },
    credentials: 'include',
    ...options,
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.message || `Request failed (${res.status})`);
  }
  return res.json();
}

// ---- Public content -----------------------------------------------------

export async function getWebsiteContent() {
  if (hasBackend) return request('/api/content');
  return mock.getContent();
}

export async function submitContactForm(payload) {
  if (hasBackend) return request('/api/contact', { method: 'POST', body: JSON.stringify(payload) });
  return mock.saveContactSubmission(payload);
}

// ---- Admin: auth ----------------------------------------------------------
// IMPORTANT: this mock login exists ONLY so the admin UI can be demonstrated
// without a backend. It is not secure and must never be used in production.
// A real deployment must replace this with server-issued session/JWT auth
// where the backend — not the frontend — decides who is an admin.

export async function adminLogin(credentials) {
  if (hasBackend) return request('/api/admin/login', { method: 'POST', body: JSON.stringify(credentials) });
  return mock.mockAdminLogin(credentials);
}

export async function adminLogout() {
  if (hasBackend) return request('/api/admin/logout', { method: 'POST' });
  return mock.mockAdminLogout();
}

export function getAdminSession() {
  if (hasBackend) return null; // real session lives in an httpOnly cookie, not readable here
  return mock.getMockSession();
}

// ---- Admin: content management --------------------------------------------

export async function updateWebsiteContent(section, data) {
  if (hasBackend) {
    return request(`/api/admin/content/${section}`, { method: 'PUT', body: JSON.stringify(data) });
  }
  return mock.updateContentSection(section, data);
}

export async function getFeatures() {
  if (hasBackend) return request('/api/features');
  return mock.getFeaturesList();
}

export async function saveFeatures(features) {
  if (hasBackend) return request('/api/admin/features', { method: 'PUT', body: JSON.stringify(features) });
  return mock.saveFeaturesList(features);
}

export async function getTestimonials() {
  if (hasBackend) return request('/api/testimonials');
  return mock.getTestimonialsList();
}

export async function saveTestimonials(testimonials) {
  if (hasBackend) return request('/api/admin/testimonials', { method: 'PUT', body: JSON.stringify(testimonials) });
  return mock.saveTestimonialsList(testimonials);
}

export async function getAnnouncements() {
  if (hasBackend) return request('/api/announcements');
  return mock.getAnnouncementsList();
}

export async function saveAnnouncements(items) {
  if (hasBackend) return request('/api/admin/announcements', { method: 'PUT', body: JSON.stringify(items) });
  return mock.saveAnnouncementsList(items);
}

export async function getDownloadLinks() {
  if (hasBackend) return request('/api/downloads');
  return mock.getDownloadLinksConfig();
}

export async function saveDownloadLinks(links) {
  if (hasBackend) return request('/api/admin/downloads', { method: 'PUT', body: JSON.stringify(links) });
  return mock.saveDownloadLinksConfig(links);
}

export async function getScreenshots() {
  if (hasBackend) return request('/api/screenshots');
  return mock.getScreenshotsList();
}

export async function saveScreenshots(items) {
  if (hasBackend) return request('/api/admin/screenshots', { method: 'PUT', body: JSON.stringify(items) });
  return mock.saveScreenshotsList(items);
}

export async function getAnalyticsSummary() {
  if (hasBackend) return request('/api/admin/analytics');
  return mock.getAnalyticsSummary();
}

export { hasBackend };
