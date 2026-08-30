import { useState } from 'react';
import { Plus, Trash2, ChevronUp, ChevronDown } from 'lucide-react';
import { useAdminData } from './useAdminData';
import PanelState from './PanelState';
import * as api from '../../../services/api';
import './panels.css';

const blankFeature = () => ({ id: crypto.randomUUID(), title: '', description: '', icon: 'Sparkles', enabled: true });

export default function FeaturesManager() {
  const { data, setData, status, error } = useAdminData(() => api.getFeatures());
  const [saved, setSaved] = useState(false);

  const persist = async (list) => {
    const updated = await api.saveFeatures(list);
    setData(updated);
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  };

  const update = (id, patch) => persist(data.map((f) => (f.id === id ? { ...f, ...patch } : f)));
  const remove = (id) => persist(data.filter((f) => f.id !== id));
  const add = () => persist([...data, blankFeature()]);
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
        <h1>Features</h1>
        <p>Add, edit, reorder or disable feature cards shown on the public site.</p>
      </div>

      <PanelState status={status} error={error} isEmpty={data?.length === 0} emptyLabel="No features yet — add one below.">
        <div className="admin-list">
          {data?.map((f, i) => (
            <div className="admin-list-item" key={f.id}>
              <div className="admin-form-grid">
                <label className="admin-field">Title
                  <input value={f.title} onChange={(e) => update(f.id, { title: e.target.value })} />
                </label>
                <label className="admin-field">Lucide icon name
                  <input value={f.icon} onChange={(e) => update(f.id, { icon: e.target.value })} />
                </label>
              </div>
              <label className="admin-field">Description
                <textarea rows={2} value={f.description} onChange={(e) => update(f.id, { description: e.target.value })} />
              </label>
              <div className="admin-list-item__row">
                <label className="admin-toggle">
                  <input type="checkbox" checked={f.enabled !== false} onChange={(e) => update(f.id, { enabled: e.target.checked })} />
                  Enabled
                </label>
                <div className="admin-list-item__actions">
                  <button className="admin-icon-btn" onClick={() => move(i, -1)} aria-label="Move up"><ChevronUp size={15} /></button>
                  <button className="admin-icon-btn" onClick={() => move(i, 1)} aria-label="Move down"><ChevronDown size={15} /></button>
                  <button className="admin-icon-btn admin-icon-btn--danger" onClick={() => remove(f.id)} aria-label="Delete"><Trash2 size={15} /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </PanelState>

      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <button className="btn btn-ghost btn-sm" onClick={add}><Plus size={15} /> Add feature</button>
        {saved && <span className="admin-save-note">Saved</span>}
      </div>
    </div>
  );
}
