import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { seniorsAlumni } from '../content/websiteContent';
import SectionHeading from '../components/SectionHeading';
import './SeniorsAlumni.css';

const ROLES = [
  { tag: 'Junior', tone: 'primary' },
  { tag: 'Senior', tone: 'accent' },
  { tag: 'Alumni', tone: 'secondary' },
];

export default function SeniorsAlumni() {
  return (
    <section className="section seniors">
      <div className="container seniors__inner">
        <div className="seniors__copy">
          <SectionHeading eyebrow="Beyond your batch" title={seniorsAlumni.heading} subtitle={seniorsAlumni.text} />
          <ul className="seniors__points">
            {seniorsAlumni.points.map((p) => (
              <li key={p}><CheckCircle2 size={17} /> {p}</li>
            ))}
          </ul>
        </div>

        <div className="seniors__visual">
          {ROLES.map((r, i) => (
            <motion.div
              key={r.tag}
              className={`seniors__card seniors__card--${r.tone}`}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.12 }}
            >
              <div className="seniors__avatar">{r.tag.charAt(0)}</div>
              <span>{r.tag}</span>
            </motion.div>
          ))}
          <svg className="seniors__lines" viewBox="0 0 200 220" aria-hidden="true">
            <line x1="40" y1="40" x2="40" y2="180" className="seniors__line" />
          </svg>
        </div>
      </div>
    </section>
  );
}
