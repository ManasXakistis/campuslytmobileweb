import { features } from '../content/websiteContent';
import SectionHeading from '../components/SectionHeading';
import FeatureCard from '../components/FeatureCard';
import './Features.css';

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="container">
        <SectionHeading
          eyebrow="Inside the app"
          title="Everything your campus needs, in one app"
          subtitle="CampusLYT brings discovery, networking, communities and campus news together — designed around how students actually connect."
        />
        <div className="features__grid">
          {features.map((f, i) => (
            <FeatureCard key={f.id} icon={f.icon} title={f.title} description={f.description} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
