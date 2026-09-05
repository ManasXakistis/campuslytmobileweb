import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import DownloadButton from './DownloadButton';
import logo from '../assets/logo.png';
import './Navbar.css';

const LINKS = [
  { label: 'Home', href: '/#home' },
  { label: 'Features', href: '/#features' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Community', href: '/#community' },
  { label: 'About', href: '/#about' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (event, href) => {
    if (!href.startsWith('/#')) return;

    event.preventDefault();
    const hash = href.slice(1);

    if (location.pathname !== '/') {
      navigate('/' + hash);
      window.setTimeout(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 0);
      setOpen(false);
      return;
    }

    document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.replaceState(null, '', hash);
    setOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo" onClick={() => setOpen(false)}>
          <img src={logo} alt="CampusLYT logo" className="navbar__logo-mark" />
          CampusLYT
        </Link>

        <nav className="navbar__links" aria-label="Primary">
          {LINKS.map((l) => (
            <NavLink key={l.label} to={l.href} className="navbar__link" onClick={(e) => handleNav(e, l.href)}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="navbar__actions">
          <button
            className="navbar__icon-btn"
            onClick={toggleTheme}
            aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <DownloadButton variant="compact" className="navbar__download" />
          <button className="navbar__icon-btn navbar__menu-btn" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="navbar__mobile">
          {LINKS.map((l) => (
            <NavLink key={l.label} to={l.href} className="navbar__mobile-link" onClick={(e) => { handleNav(e, l.href); if (!l.href.startsWith("/#")) setOpen(false); }}>
              {l.label}
            </NavLink>
          ))}
          <DownloadButton />
        </div>
      )}
    </header>
  );
}
