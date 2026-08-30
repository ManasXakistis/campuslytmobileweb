import { useState } from 'react';
import { Plus, Trash2, ChevronUp, ChevronDown, ImageOff } from 'lucide-react';
import { useAdminData } from './useAdminData';
import PanelState from './PanelState';
import * as api from '../../../services/api';
import './panels.css';

const blank = () => ({ id: crypto.randomUUID(), label: '', url: '' });

export default function ScreenshotsManager() {
  const { data, setData, status, error } = useAdminData(() => api.getScreenshots());
  const [saved, setSaved] = useState(false);

  const persist = async (list) => {
    const updated = await api.saveScreenshots(list);
    setData(updated);
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  };

  const update = (id, patch) => persist(data.map((s) => (s.id === id ? { ...s, ...patch } : s)));
  const remove = (id) => persist(data.filter((s) => s.id !== id));
  const add = () => persist([...data, blank()]);
  const move = (index, dir) => {
    const next = [...data];
    const swapWith = index + dir;
    if (swapWith < 0 || swapWith >= next.length) return;
    [next[index], next[swapWith]] = [next[swapWith], next[index]];
    persist(next);
  };

  return (
    <div className="admin-panel">
      <div className="admin-panel__header">
        <h1>App Screenshots</h1>
        <p>Manage the screenshots used in the interactive app showcase. Paste a hosted image URL for each screen.</p>
      </div>

      <PanelState
        status={status}
        error={error}
        isEmpty={data?.length === 0}
        emptyLabel="No screenshots uploaded — the site will show labelled placeholders until you add some."
      >
        <div className="admin-list">
          {data?.map((s, i) => (
            <div className="admin-list-item" key={s.id}>
              <div className="admin-form-grid">
                <label className="admin-field">Screen label
                  <input value={s.label} onChange={(e) => update(s.id, { label: e.target.value })} placeholder="e.g. Explore" />
                </label>
                <label className="admin-field">Image URL
                  <input value={s.url} onChange={(e) => update(s.id, { url: e.target.value })} placeholder="https://…" />
                </label>
              </div>
              <div className="admin-list-item__row">
                <span style={{ fontSize: 12, color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: 6 }}>
                  {!s.url && <><ImageOff size={13} /> No image set — placeholder will render on the site</>}
                </span>
                <div className="admin-list-item__actions">
                  <button className="admin-icon-btn" onClick={() => move(i, -1)} aria-label="Move up"><ChevronUp size={15} /></button>
                  <button className="admin-icon-btn" onClick={() => move(i, 1)} aria-label="Move down"><ChevronDown size={15} /></button>
                  <button className="admin-icon-btn admin-icon-btn--danger" onClick={() => remove(s.id)} aria-label="Delete"><Trash2 size={15} /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </PanelState>

      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <button className="btn btn-ghost btn-sm" onClick={add}><Plus size={15} /> Add screenshot</button>
        {saved && <span className="admin-save-note">Saved</span>}
      </div>
    </div>
  );
}
