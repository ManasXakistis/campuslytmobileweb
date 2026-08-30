import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { useAdminData } from './useAdminData';
import PanelState from './PanelState';
import * as api from '../../../services/api';
import './panels.css';

export default function AnalyticsPanel() {
  const { data, status, error } = useAdminData(() => api.getAnalyticsSummary());

  return (
    <div className="admin-panel">
      <div className="admin-panel__header">
        <h1>Analytics</h1>
        <p>Download Button Clicks — not verified app installs — tracked separately for Android and iOS.</p>
      </div>

      <PanelState status={status} error={error}>
        {data && (
          <>
            <div className="admin-stat-grid">
              <Stat label="Total Clicks" value={data.totalClicks} />
              <Stat label="Last 7 Days" value={data.clicksLast7Days} />
              <Stat label="Last 30 Days" value={data.clicksLast30Days} />
              <Stat label="Website Visits" value={data.websiteVisits} />
            </div>

            <div className="admin-card">
              <h3 style={{ marginBottom: 16, fontSize: 15 }}>Download clicks by day</h3>
              {data.trend.length === 0 ? (
                <p style={{ fontSize: 13.5, color: 'var(--text-secondary)' }}>
                  No clicks recorded yet. Visit the public site and use a download button to generate sample data.
                </p>
              ) : (
                <div style={{ width: '100%', height: 280 }}>
                  <ResponsiveContainer>
                    <LineChart data={data.trend}>
                      <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                      <XAxis dataKey="day" tick={{ fontSize: 11 }} />
                      <YAxis allowDecimals={false} tick={{ fontSize: 11 }} />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="android" stroke="#7C5CFC" strokeWidth={2} name="Android" />
                      <Line type="monotone" dataKey="ios" stroke="#2FD8CE" strokeWidth={2} name="iOS" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              )}
            </div>
          </>
        )}
      </PanelState>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="admin-stat">
      <span className="admin-stat__label">{label}</span>
      <span className="admin-stat__value">{value}</span>
    </div>
  );
}
