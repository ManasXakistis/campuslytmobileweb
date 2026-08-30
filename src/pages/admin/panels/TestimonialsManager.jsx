import { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { useAdminData } from './useAdminData';
import PanelState from './PanelState';
import * as api from '../../../services/api';
import './panels.css';

const blank = () => ({ id: crypto.randomUUID(), name: '', role: '', quote: '', enabled: true });

export default function TestimonialsManager() {
  const { data, setData, status, error } = useAdminData(() => api.getTestimonials());
  const [saved, setSaved] = useState(false);

  const persist = async (list) => {
    const updated = await api.saveTestimonials(list);
    setData(updated);
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  };

  const update = (id, patch) => persist(data.map((t) => (t.id === id ? { ...t, ...patch } : t)));
  const remove = (id) => persist(data.filter((t) => t.id !== id));
  const add = () => persist([...data, blank()]);

  return (
    <div className="admin-panel">
      <div className="admin-panel__header">
        <h1>Testimonials</h1>
        <p>Manage the quotes shown in the social proof section.</p>
      </div>

      <PanelState status={status} error={error} isEmpty={data?.length === 0} emptyLabel="No testimonials yet.">
        <div className="admin-list">
          {data?.map((t) => (
            <div className="admin-list-item" key={t.id}>
              <div className="admin-form-grid">
                <label className="admin-field">Name
                  <input value={t.name} onChange={(e) => update(t.id, { name: e.target.value })} />
                </label>
                <label className="admin-field">Role / batch
                  <input value={t.role} onChange={(e) => update(t.id, { role: e.target.value })} />
                </label>
              </div>
              <label className="admin-field">Quote
                <textarea rows={2} value={t.quote} onChange={(e) => update(t.id, { quote: e.target.value })} />
              </label>
              <div className="admin-list-item__row">
                <label className="admin-toggle">
                  <input type="checkbox" checked={t.enabled !== false} onChange={(e) => update(t.id, { enabled: e.target.checked })} />
                  Enabled
                </label>
                <button className="admin-icon-btn admin-icon-btn--danger" onClick={() => remove(t.id)} aria-label="Delete"><Trash2 size={15} /></button>
              </div>
            </div>
          ))}
        </div>
      </PanelState>

      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <button className="btn btn-ghost btn-sm" onClick={add}><Plus size={15} /> Add testimonial</button>
        {saved && <span className="admin-save-note">Saved</span>}
      </div>
    </div>
  );
}
