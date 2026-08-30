import { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import { useAdminData } from './useAdminData';
import PanelState from './PanelState';
import * as api from '../../../services/api';
import './panels.css';

export default function DownloadsManager() {
  const { data, setData, status, error } = useAdminData(() => api.getDownloadLinks());
  const [saved, setSaved] = useState(false);

  const save = async () => {
    const updated = await api.saveDownloadLinks(data);
    setData(updated);
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  };

  return (
    <div className="admin-panel">
      <div className="admin-panel__header">
        <h1>App Download Links</h1>
        <p>Update the Play Store / App Store URLs the whole site uses — no code changes needed.</p>
      </div>

      <PanelState status={status} error={error}>
        {data && (
          <div className="admin-card">
            <div className="admin-form-grid">
              <label className="admin-field">Android (Google Play) URL
                <input value={data.android} onChange={(e) => setData({ ...data, android: e.target.value })} placeholder="https://play.google.com/store/apps/details?id=..." />
              </label>
             {/*<label className="admin-field">iOS (App Store) URL
                <input value={data.ios} onChange={(e) => setData({ ...data, ios: e.target.value })} placeholder="https://apps.apple.com/app/..." />
              </label>*/}
            </div>
            <p style={{ fontSize: 12.5, color: 'var(--text-secondary)', marginTop: 12, display: 'flex', gap: 6, alignItems: 'flex-start' }}>
              <AlertCircle size={14} style={{ marginTop: 2, flexShrink: 0 }} />
              Leave a field blank to show "Coming soon" for that platform instead of a broken link. In production this
              updates the VITE_ANDROID_DOWNLOAD_URL / VITE_IOS_DOWNLOAD_URL values via the backend.
            </p>
            <div style={{ marginTop: 16, display: 'flex', gap: 12, alignItems: 'center' }}>
              <button className="btn btn-primary btn-sm" onClick={save}>Save links</button>
              {saved && <span className="admin-save-note">Saved</span>}
            </div>
          </div>
        )}
      </PanelState>
    </div>
  );
}
