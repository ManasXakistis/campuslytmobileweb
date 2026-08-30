import { createContext, useContext, useEffect, useState } from 'react';
import * as api from '../services/api';

// NOTE: this context only tracks UI state ("does the dashboard render or not").
// It is never the actual authorization check — that must happen on the server
// for every admin request, regardless of what this context believes.

const AdminAuthContext = createContext(null);

export function AdminAuthProvider({ children }) {
  const [session, setSession] = useState(undefined); // undefined = still checking
  const [error, setError] = useState(null);

  useEffect(() => {
    setSession(api.getAdminSession());
  }, []);

  const login = async (credentials) => {
    setError(null);
    try {
      const result = await api.adminLogin(credentials);
      setSession(result.session || { username: credentials.username });
      return true;
    } catch (err) {
      setError(err.message || 'Login failed.');
      return false;
    }
  };

  const logout = async () => {
    await api.adminLogout();
    setSession(null);
  };

  return (
    <AdminAuthContext.Provider value={{ session, isChecking: session === undefined, error, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  const ctx = useContext(AdminAuthContext);
  if (!ctx) throw new Error('useAdminAuth must be used within AdminAuthProvider');
  return ctx;
}
