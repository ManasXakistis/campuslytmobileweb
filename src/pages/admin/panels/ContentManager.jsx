import { useState } from 'react';
import { useAdminData } from './useAdminData';
import PanelState from './PanelState';
import * as api from '../../../services/api';
import './panels.css';

export default function ContentManager() {
  const { data, setData, status, error } = useAdminData(() => api.getWebsiteContent());
  const [saved, setSaved] = useState('');

  const save = async (section, value) => {
    const updated = await api.updateWebsiteContent(section, value);
    setData(updated);
    setSaved(section);
    setTimeout(() => setSaved(''), 2000);
  };

  return (
    <div className="admin-panel">
      <div className="admin-panel__header">
        <h1>Website Content</h1>
        <p>Edit copy shown on the public site without touching code.</p>
      </div>

      <PanelState status={status} error={error}>
        {data && (
          <>
            <HeroCard hero={data.hero} onSave={(v) => save('hero', v)} saved={saved === 'hero'} />
            <FinalCTACard cta={data.finalCTA} onSave={(v) => save('finalCTA', v)} saved={saved === 'finalCTA'} />
            <StoryCard story={data.story} onSave={(v) => save('story', v)} saved={saved === 'story'} />
          </>
        )}
      </PanelState>
    </div>
  );
}

function HeroCard({ hero, onSave, saved }) {
  const [form, setForm] = useState(hero);
  return (
    <div className="admin-card">
      <h3 style={{ marginBottom: 14, fontSize: 15 }}>Hero section</h3>
      <div className="admin-form-grid">
        <label className="admin-field">Headline
          <input value={form.headline} onChange={(e) => setForm({ ...form, headline: e.target.value })} />
        </label>
        <label className="admin-field">Primary CTA text
          <input value={form.ctaPrimary} onChange={(e) => setForm({ ...form, ctaPrimary: e.target.value })} />
        </label>
      </div>
      <label className="admin-field" style={{ marginTop: 14 }}>Supporting text
        <textarea rows={3} value={form.subhead} onChange={(e) => setForm({ ...form, subhead: e.target.value })} />
      </label>
      <div style={{ marginTop: 14, display: 'flex', gap: 12, alignItems: 'center' }}>
        <button className="btn btn-primary btn-sm" onClick={() => onSave(form)}>Save hero</button>
        {saved && <span className="admin-save-note">Saved</span>}
      </div>
    </div>
  );
}

function FinalCTACard({ cta, onSave, saved }) {
  const [form, setForm] = useState(cta);
  return (
    <div className="admin-card">
      <h3 style={{ marginBottom: 14, fontSize: 15 }}>Final CTA section</h3>
      <div className="admin-form-grid">
        <label className="admin-field">Headline
          <input value={form.headline} onChange={(e) => setForm({ ...form, headline: e.target.value })} />
        </label>
        <label className="admin-field">Supporting text
          <input value={form.subhead} onChange={(e) => setForm({ ...form, subhead: e.target.value })} />
        </label>
      </div>
      <div style={{ marginTop: 14, display: 'flex', gap: 12, alignItems: 'center' }}>
        <button className="btn btn-primary btn-sm" onClick={() => onSave(form)}>Save CTA</button>
        {saved && <span className="admin-save-note">Saved</span>}
      </div>
    </div>
  );
}

function StoryCard({ story, onSave, saved }) {
  const [form, setForm] = useState(story);
  return (
    <div className="admin-card">
      <h3 style={{ marginBottom: 14, fontSize: 15 }}>About / Story section</h3>
      <label className="admin-field">Heading
        <input value={form.heading} onChange={(e) => setForm({ ...form, heading: e.target.value })} />
      </label>
      <label className="admin-field" style={{ marginTop: 14 }}>Body text
        <textarea rows={4} value={form.text} onChange={(e) => setForm({ ...form, text: e.target.value })} />
      </label>
      <div style={{ marginTop: 14, display: 'flex', gap: 12, alignItems: 'center' }}>
        <button className="btn btn-primary btn-sm" onClick={() => onSave(form)}>Save story</button>
        {saved && <span className="admin-save-note">Saved</span>}
      </div>
    </div>
  );
}
