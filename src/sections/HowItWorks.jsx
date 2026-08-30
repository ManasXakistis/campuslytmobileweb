import { motion } from 'framer-motion';
import { howItWorks } from '../content/websiteContent';
import SectionHeading from '../components/SectionHeading';
import './HowItWorks.css';

export default function HowItWorks() {
  return (
    <section className="section how" id="how-it-works">
      <div className="container">
        <SectionHeading eyebrow="Getting started" title="Three steps to your campus network" align="center" />
        <div className="how__steps">
          {howItWorks.map((s, i) => (
            <motion.div
              key={s.step}
              className="how__step"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="how__number">{s.step}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
