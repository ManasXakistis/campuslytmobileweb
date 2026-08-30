import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';
import { useAdminAuth } from '../../context/AdminAuthContext';
import { hasBackend } from '../../services/api';
import logo from '../../assets/logo.png';
import './AdminLogin.css';

export default function AdminLogin() {
  const { session, login, error } = useAdminAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);

  if (session) return <Navigate to="/admin/dashboard" replace />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const ok = await login(form);
    setLoading(false);
    if (ok) navigate('/admin/dashboard');
  };

  return (
    <div className="admin-login">
      <form className="admin-login__card" onSubmit={handleSubmit}>
        <div className="admin-login__logo"><img src={logo} alt="CampusLYT logo" /> CampusLYT Admin</div>
        <p className="admin-login__sub">Sign in to manage website content and app links.</p>

        {!hasBackend && (
          <div className="admin-login__demo">
            Demo mode — no backend connected. Use <code>admin</code> / <code>campuslyt-demo</code>.
          </div>
        )}

        <label>
          Username
          <input required value={form.username} onChange={(e) => setForm((f) => ({ ...f, username: e.target.value }))} />
        </label>
        <label>
          Password
          <input required type="password" value={form.password} onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))} />
        </label>

        {error && <div className="admin-login__error"><AlertCircle size={15} /> {error}</div>}

        <button className="btn btn-primary" type="submit" disabled={loading}>
          {loading ? 'Signing in…' : 'Sign in'}
        </button>
      </form>
    </div>
  );
}
