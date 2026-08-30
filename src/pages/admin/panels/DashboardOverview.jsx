import { Eye, MousePointerClick, Smartphone, Apple, Sparkles } from 'lucide-react';
import { useAdminData } from './useAdminData';
import PanelState from './PanelState';
import * as api from '../../../services/api';
import './panels.css';

export default function DashboardOverview() {
  const { data, status, error } = useAdminData(async () => {
    const [analytics, features] = await Promise.all([api.getAnalyticsSummary(), api.getFeatures()]);
    return { analytics, features };
  });

  return (
    <div className="admin-panel">
      <div className="admin-panel__header">
        <h1>Dashboard</h1>
        <p>Overview of website activity and download engagement.</p>
      </div>

      <PanelState status={status} error={error}>
        {data && (
          <>
            {data.analytics.isMockData && (
              <p className="admin-save-note" style={{ color: 'var(--text-secondary)' }}>
                Showing local mock analytics — connect a backend to track real traffic.
              </p>
            )}
            <div className="admin-stat-grid">
              <Stat icon={Eye} label="Website Visits" value={data.analytics.websiteVisits} />
              <Stat icon={MousePointerClick} label="Download Button Clicks" value={data.analytics.totalClicks} />
              <Stat icon={Smartphone} label="Android Clicks" value={data.analytics.androidClicks} />
              <Stat icon={Apple} label="iOS Clicks" value={data.analytics.iosClicks} />
              <Stat icon={Sparkles} label="Active Features" value={data.features.filter((f) => f.enabled !== false).length} />
            </div>
          </>
        )}
      </PanelState>
    </div>
  );
}

function Stat({ icon: Icon, label, value }) {
  return (
    <div className="admin-stat">
      <span className="admin-stat__label"><Icon size={13} style={{ marginRight: 6, verticalAlign: '-2px' }} />{label}</span>
      <span className="admin-stat__value">{value}</span>
    </div>
  );
}
