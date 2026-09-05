import { Link } from 'react-router-dom';
import { brand, footerLinks } from '../content/websiteContent';
import DownloadButton from './DownloadButton';
import logo from '../assets/logo.png';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <img src={logo} alt="CampusLYT logo" className="footer__logo-mark" /> {brand.name}
          </Link>
          <p>{brand.tagline}</p>
          <DownloadButton variant="compact" />
        </div>

        <nav className="footer__nav" aria-label="Footer">
          <span className="eyebrow">Navigate</span>
          {footerLinks.navigation.map((l) => (
            <div className="footer__link-row" key={l.label}>
              <Link to={l.href}>{l.label}</Link>
              <Link
                className="footer__new-tab"
                to={l.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${l.label} in a new tab`}
                title="Open in new tab"
              >
                ↗
              </Link>
            </div>
          ))}
        </nav>

        <div className="footer__social">
          <span className="eyebrow">Account</span>
          <Link to="/delete-account">Request account deletion</Link>
          <p className="footer__account-note">We'll review and process your request securely.</p>
          {footerLinks.social.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a>
          ))}
        </div>
      </div>
      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
