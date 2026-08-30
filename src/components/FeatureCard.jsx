import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import './FeatureCard.css';

export default function FeatureCard({ icon, title, description, index = 0 }) {
  const Icon = Icons[icon] || Icons.Sparkles;
  return (
    <motion.div
      className="feature-card"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.06, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
    >
      <div className="feature-card__icon">
        <Icon size={22} strokeWidth={2} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
}
