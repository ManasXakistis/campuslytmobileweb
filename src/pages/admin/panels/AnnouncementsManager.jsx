import { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { useAdminData } from './useAdminData';
import PanelState from './PanelState';
import * as api from '../../../services/api';
import './panels.css';

const TYPES = ['App update', 'New feature', 'Important notice'];
const blank = () => ({ id: crypto.randomUUID(), type: TYPES[0], title: '', body: '', createdAt: new Date().toISOString() });

export default function AnnouncementsManager() {
  const { data, setData, status, error } = useAdminData(() => api.getAnnouncements());
  const [saved, setSaved] = useState(false);

  const persist = async (list) => {
    const updated = await api.saveAnnouncements(list);
    setData(updated);
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  };

  const update = (id, patch) => persist(data.map((a) => (a.id === id ? { ...a, ...patch } : a)));
  const remove = (id) => persist(data.filter((a) => a.id !== id));
  const add = () => persist([blank(), ...data]);

  return (
    <div className="admin-panel">
      <div className="admin-panel__header">
        <h1>Announcements</h1>
        <p>Post app updates, new feature notices, or important notices.</p>
      </div>

      <PanelState status={status} error={error} isEmpty={data?.length === 0} emptyLabel="No announcements yet.">
        <div className="admin-list">
          {data?.map((a) => (
            <div className="admin-list-item" key={a.id}>
              <div className="admin-form-grid">
                <label className="admin-field">Type
                  <select value={a.type} onChange={(e) => update(a.id, { type: e.target.value })}>
                    {TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </label>
                <label className="admin-field">Title
                  <input value={a.title} onChange={(e) => update(a.id, { title: e.target.value })} />
                </label>
              </div>
              <label className="admin-field">Body
                <textarea rows={2} value={a.body} onChange={(e) => update(a.id, { body: e.target.value })} />
              </label>
              <div className="admin-list-item__row">
                <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>
                  {new Date(a.createdAt).toLocaleDateString()}
                </span>
                <button className="admin-icon-btn admin-icon-btn--danger" onClick={() => remove(a.id)} aria-label="Delete"><Trash2 size={15} /></button>
              </div>
            </div>
          ))}
        </div>
      </PanelState>

      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <button className="btn btn-ghost btn-sm" onClick={add}><Plus size={15} /> New announcement</button>
        {saved && <span className="admin-save-note">Saved</span>}
      </div>
    </div>
  );
}
