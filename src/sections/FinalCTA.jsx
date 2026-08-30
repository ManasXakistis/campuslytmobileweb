import { motion } from 'framer-motion';
import { finalCTA } from '../content/websiteContent';
import DownloadButton from '../components/DownloadButton';
import './FinalCTA.css';

export default function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="container final-cta__inner">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {finalCTA.headline}
        </motion.h2>
        <p>{finalCTA.subhead}</p>
        <DownloadButton />
      </div>
    </section>
  );
}
