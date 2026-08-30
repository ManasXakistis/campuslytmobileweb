import DownloadButton from './DownloadButton';
import './StickyMobileCTA.css';

export default function StickyMobileCTA() {
  return (
    <div className="sticky-cta">
      <div>
        <p className="sticky-cta__label">CampusLYT</p>
        <p className="sticky-cta__sub">Your campus. Your network.</p>
      </div>
      <DownloadButton variant="compact" />
    </div>
  );
}
