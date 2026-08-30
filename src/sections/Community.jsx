import { communities } from '../content/websiteContent';
import SectionHeading from '../components/SectionHeading';
import CommunityCard from '../components/CommunityCard';
import './Community.css';

export default function Community() {
  return (
    <section className="section" id="community">
      <div className="container">
        <SectionHeading eyebrow="Belong somewhere" title="Find your people" subtitle="Join communities built around what you're already into — or discover a new one." />
        <div className="community__grid">
          {communities.map((c, i) => (
            <CommunityCard key={c.id} name={c.name} description={c.description} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
