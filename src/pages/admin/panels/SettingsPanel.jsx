import { hasBackend } from '../../../services/api';
import './panels.css';

export default function SettingsPanel() {
  return (
    <div className="admin-panel">
      <div className="admin-panel__header">
        <h1>Settings</h1>
        <p>Environment and backend connection status.</p>
      </div>

      <div className="admin-card">
        <h3 style={{ marginBottom: 10, fontSize: 15 }}>Backend connection</h3>
        <p style={{ fontSize: 13.5, marginBottom: 6 }}>
          Status: <strong style={{ color: hasBackend ? 'var(--success)' : 'var(--danger)' }}>
            {hasBackend ? 'Connected to VITE_API_BASE_URL' : 'Not connected — using local mock data'}
          </strong>
        </p>
        <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>
          Set <code>VITE_API_BASE_URL</code> in your environment to point this dashboard at a real backend.
          Until then, all admin actions are stored in this browser's local storage only, and admin
          authentication is a demo login — not secure for production.
        </p>
      </div>

      <div className="admin-card">
        <h3 style={{ marginBottom: 10, fontSize: 15 }}>Security reminder</h3>
        <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>
          A production deployment must move authentication and authorization to the backend entirely.
          The frontend should never be trusted to decide who is an admin.
        </p>
      </div>
    </div>
  );
}
