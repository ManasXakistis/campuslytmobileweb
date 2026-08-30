import { Navigate } from 'react-router-dom';
import { useAdminAuth } from '../context/AdminAuthContext';


export default function ProtectedRoute({ children }) {
  const { session, isChecking } = useAdminAuth();

  if (isChecking) {
    return <div className="admin-loading">Checking session…</div>;
  }

  if (!session) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}
