import { motion } from 'framer-motion';
import { whyCampusLYT } from '../content/websiteContent';
import SectionHeading from '../components/SectionHeading';
import './WhyCampusLYT.css';

export default function WhyCampusLYT() {
  return (
    <section className="section why" id="why">
      <div className="container">
        <SectionHeading eyebrow="The problem" title={whyCampusLYT.heading} align="center" />

        <div className="why__grid">
          {whyCampusLYT.problems.map((p, i) => (
            <motion.div
              key={p.title}
              className="why__item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
            >
              <h4>{p.title}</h4>
              <p>{p.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="why__resolution"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {whyCampusLYT.resolution}
        </motion.p>
      </div>
    </section>
  );
}
