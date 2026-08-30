import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LayoutDashboard, FileText, Sparkles, Image, Download, Quote, Megaphone, BarChart3, Settings, LogOut,
} from 'lucide-react';
import { useAdminAuth } from '../../context/AdminAuthContext';
import logo from '../../assets/logo.png';
import DashboardOverview from './panels/DashboardOverview';
import ContentManager from './panels/ContentManager';
import FeaturesManager from './panels/FeaturesManager';
import ScreenshotsManager from './panels/ScreenshotsManager';
import DownloadsManager from './panels/DownloadsManager';
import TestimonialsManager from './panels/TestimonialsManager';
import AnnouncementsManager from './panels/AnnouncementsManager';
import AnalyticsPanel from './panels/AnalyticsPanel';
import SettingsPanel from './panels/SettingsPanel';
import './AdminDashboard.css';

const NAV = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'content', label: 'Website Content', icon: FileText },
  { id: 'features', label: 'Features', icon: Sparkles },
  { id: 'screenshots', label: 'Screenshots', icon: Image },
  { id: 'downloads', label: 'Downloads', icon: Download },
  { id: 'testimonials', label: 'Testimonials', icon: Quote },
  { id: 'announcements', label: 'Announcements', icon: Megaphone },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'settings', label: 'Settings', icon: Settings },
];

const PANELS = {
  dashboard: DashboardOverview,
  content: ContentManager,
  features: FeaturesManager,
  screenshots: ScreenshotsManager,
  downloads: DownloadsManager,
  testimonials: TestimonialsManager,
  announcements: AnnouncementsManager,
  analytics: AnalyticsPanel,
  settings: SettingsPanel,
};

export default function AdminDashboard() {
  const [active, setActive] = useState('dashboard');
  const { logout, session } = useAdminAuth();
  const navigate = useNavigate();
  const ActivePanel = PANELS[active];

  const handleLogout = async () => {
    await logout();
    navigate('/admin/login');
  };

  return (
    <div className="admin">
      <aside className="admin__sidebar">
        <div className="admin__logo"><img src={logo} alt="CampusLYT logo" /> CampusLYT</div>
        <nav>
          {NAV.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                className={`admin__nav-item ${active === item.id ? 'is-active' : ''}`}
                onClick={() => setActive(item.id)}
              >
                <Icon size={17} /> {item.label}
              </button>
            );
          })}
        </nav>
        <div className="admin__sidebar-footer">
          <p>{session?.username}</p>
          <button className="admin__logout" onClick={handleLogout}><LogOut size={15} /> Sign out</button>
        </div>
      </aside>

      <main className="admin__main">
        <ActivePanel />
      </main>
    </div>
  );
}
