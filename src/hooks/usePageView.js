import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { recordPageView } from '../services/analytics';

export default function usePageView() {
  const location = useLocation();
  useEffect(() => {
    recordPageView(location.pathname);
  }, [location.pathname]);
}
