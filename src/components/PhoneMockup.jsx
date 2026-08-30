import './PhoneMockup.css';


/**
 * Renders a smartphone frame. If `screenshot` (image src) is provided it is
 * shown as the screen; otherwise a clearly-labelled placeholder is rendered
 * so nobody mistakes it for a real app screenshot.
 */
export default function PhoneMockup({ screenshot, label, size = 'md', tilt = 0, children }) {
  return (
    <div className={`phone-mockup phone-mockup--${size}`} style={{ '--tilt': `${tilt}deg` }}>
      <div className="phone-mockup__notch" />
      <div className="phone-mockup__screen">
        {screenshot ? (
          <img src={screenshot} alt={label ? `CampusLYT ${label} screen` : 'CampusLYT app screen'} loading="lazy" />
        ) : children ? (
          children
        ) : (
          <div className="phone-mockup__placeholder">
            <span className="eyebrow">Screenshot placeholder</span>
            <p>{label || 'App screen'}</p>
          </div>
        )}
        
      </div>
    </div>
  );
}
