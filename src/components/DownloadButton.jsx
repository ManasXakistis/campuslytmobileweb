import { Smartphone, Apple } from 'lucide-react';
import { downloadConfig, isAndroidAvailable, isIOSAvailable } from '../content/downloadConfig';
import { recordDownloadClick } from '../services/analytics';
import './DownloadButton.css';

function handleClick(platform) {
  recordDownloadClick(platform);
}

/**
 * variant: 'primary' | 'ghost' | 'compact'
 * If neither store URL is configured, shows a disabled "coming soon" state
 * instead of a fake link.
 */
export default function DownloadButton({ variant = 'primary', className = '' }) {
  if (!isAndroidAvailable && !isIOSAvailable) {
    return (
      <button className={`btn btn-${variant === 'compact' ? 'ghost btn-sm' : variant} dl-btn dl-btn--soon ${className}`} disabled>
        <Smartphone size={17} /> Download
      </button>
    );
  }

  return (
    <div className={`dl-group ${className}`}>
      {isAndroidAvailable && (
        <a
          href={downloadConfig.android}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn btn-${variant === 'compact' ? 'ghost btn-sm' : variant} dl-btn`}
          onClick={() => handleClick('android')}
        >
          <Smartphone size={17} /> Download for Android
        </a>
      )}
      {/*{isIOSAvailable ? (
        <a
          href={downloadConfig.ios}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn btn-ghost ${variant === 'compact' ? 'btn-sm' : ''} dl-btn`}
          onClick={() => handleClick('ios')}
        >
          <Apple size={17} /> App Store
        </a>
      ) : isAndroidAvailable ? (
        <span className="dl-note">iOS coming soon</span>
      ) : null}*/}
    </div>
  );
}
