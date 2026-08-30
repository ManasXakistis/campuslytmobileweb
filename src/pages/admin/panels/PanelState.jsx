import { Loader2, AlertCircle, Inbox } from 'lucide-react';

export default function PanelState({ status, error, emptyLabel, isEmpty, children }) {
  if (status === 'loading') {
    return <div className="admin-state"><Loader2 size={18} className="spin" /> Loading…</div>;
  }
  if (status === 'error') {
    return <div className="admin-state admin-state--error"><AlertCircle size={18} /> {error}</div>;
  }
  if (isEmpty) {
    return <div className="admin-state"><Inbox size={18} /> {emptyLabel || 'Nothing here yet.'}</div>;
  }
  return children;
}
