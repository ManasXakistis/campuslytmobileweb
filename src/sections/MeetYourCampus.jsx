import SectionHeading from '../components/SectionHeading';
import NetworkGraph from '../components/NetworkGraph';
import './MeetYourCampus.css';

const LEGEND = [
  { label: 'You', kind: 'primary' },
  { label: 'Seniors & communities', kind: 'accent' },
  { label: 'Alumni & Clubs', kind: 'secondary' },
];

export default function MeetYourCampus() {
  return (
    <section className="section meet">
      <div className="container meet__inner">
        <SectionHeading
          eyebrow="The network"
          title="Meet your campus"
          subtitle="Every connection on CampusLYT starts with you — and branches out to seniors, alumni, friends and the communities you join."
          align="center"
        />
        <div className="meet__graph">
          <NetworkGraph />
        </div>
        <div className="meet__legend">
          {LEGEND.map((l) => (
            <span key={l.label} className="meet__legend-item">
              <span className={`meet__dot meet__dot--${l.kind}`} /> {l.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
