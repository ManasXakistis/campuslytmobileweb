import { Link } from 'react-router-dom';
import { brand, footerLinks } from '../content/websiteContent';
import DownloadButton from './DownloadButton';
import logo from '../assets/logo.png';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">

        {/* Brand Section */}
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <img
              src={logo}
              alt="CampusLYT logo"
              className="footer__logo-mark"
            />
            {brand.name}
          </Link>

          <p>{brand.tagline}</p>

          <DownloadButton variant="compact" />
        </div>


        {/* Navigate Section */}
        <nav className="footer__nav" aria-label="Footer Navigation">
          <span className="eyebrow">Navigate</span>

          {footerLinks.navigation.map((l) => (
            <div className="footer__link-row" key={l.label}>

              {/* Opens in the same tab */}
              <Link to={l.href}>
                {l.label}
              </Link>

              {/* Opens in a new tab */}
              <a
                className="footer__new-tab"
                href={`${window.location.origin}${l.href}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${l.label} in a new tab`}
                title={`Open ${l.label} in a new tab`}
              >
                ↗
              </a>

            </div>
          ))}
        </nav>


        {/* Account & Social Section */}
        <div className="footer__social">
          <span className="eyebrow">Account</span>

          {/* Account deletion page */}
          <Link to="/delete-account">
            Request account deletion
          </Link>

          <p className="footer__account-note">
            We'll review and process your request securely.
          </p>


          {/* Social Links */}
          {footerLinks.social.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {s.label}
            </a>
          ))}
        </div>

      </div>


      {/* Bottom Footer */}
      <div className="container footer__bottom">
        <p>
          © {new Date().getFullYear()} {brand.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}