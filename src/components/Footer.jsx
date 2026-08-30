import { Link } from 'react-router-dom';
import { brand } from '../content/websiteContent';
import { footerLinks } from '../content/websiteContent';
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
            <Link key={l.label} to={l.href}>{l.label}</Link>
          ))}
        </nav>

        {footerLinks.social.length > 0 && (
          <div className="footer__social">
            <span className="eyebrow">Follow</span>
            {footerLinks.social.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a>
            ))}
          </div>
        )}
      </div>

      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
