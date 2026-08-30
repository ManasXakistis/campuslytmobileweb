import { motion } from 'framer-motion';
import { socialProof } from '../content/websiteContent';
import SectionHeading from '../components/SectionHeading';
import TestimonialCard from '../components/TestimonialCard';
import './SocialProof.css';

export default function SocialProof() {
  return (
    <section className="section proof">
      <div className="container">
        <div className="proof__stats">
          {socialProof.stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="proof__stat"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <span className="proof__value">{s.value}</span>
              <span className="proof__label">{s.label}</span>
            </motion.div>
          ))}
        </div>

        <SectionHeading eyebrow="What students say" title="From the community" />
        <div className="proof__testimonials">
          {socialProof.testimonials.map((t) => (
            <TestimonialCard key={t.id} name={t.name} role={t.role} quote={t.quote} />
          ))}
        </div>
      </div>
    </section>
  );
}
