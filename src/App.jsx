import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AdminAuthProvider } from './context/AdminAuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StickyMobileCTA from './components/StickyMobileCTA';
import ProtectedRoute from './routes/ProtectedRoute';


import Home from './pages/Home';
import FeaturesPage from './pages/Features';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import CommunityGuidelines from './pages/CommunityGuidelines';
import DeleteAccount from './pages/DeleteAccount';

// Admin routes are code-split: charting/CMS code only ships to visitors who
// actually navigate to /admin, keeping the public marketing bundle lean.
const AdminLogin = lazy(() => import('./pages/admin/AdminLogin'));
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'));

function PublicLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <StickyMobileCTA />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AdminAuthProvider>
        <Routes>
          <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
          <Route path="/features" element={<PublicLayout><FeaturesPage /></PublicLayout>} />
          <Route path="/about" element={<PublicLayout><About /></PublicLayout>} />
          <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />
          <Route path="/privacy" element={<PublicLayout><Privacy /></PublicLayout>} />
          <Route path="/terms" element={<PublicLayout><Terms /></PublicLayout>} />
          <Route path="/community-guidelines" element={<PublicLayout><CommunityGuidelines /></PublicLayout>} />
          <Route path="/delete-account" element={<PublicLayout><DeleteAccount /></PublicLayout>} />

          <Route
            path="/admin/login"
            element={
              <Suspense fallback={<div className="admin-loading">Loading…</div>}>
                <AdminLogin />
              </Suspense>
            }
          />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <Suspense fallback={<div className="admin-loading">Loading…</div>}>
                  <AdminDashboard />
                </Suspense>
              </ProtectedRoute>
            }
          />
        </Routes>
      </AdminAuthProvider>
    </ThemeProvider>
  );
}
