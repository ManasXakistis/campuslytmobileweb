import { motion } from 'framer-motion';
import './CommunityCard.css';

const GRADIENTS = [
  'linear-gradient(135deg,#7C5CFC,#5A3DE0)',
  'linear-gradient(135deg,#2FD8CE,#5A3DE0)',
  'linear-gradient(135deg,#B98CFF,#7C5CFC)',
  'linear-gradient(135deg,#5A3DE0,#2FD8CE)',
];

export default function CommunityCard({ name, description, index = 0 }) {
  return (
    <motion.div
      className="community-card"
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: (index % 5) * 0.05 }}
      whileHover={{ y: -4 }}
    >
      <div className="community-card__badge" style={{ background: GRADIENTS[index % GRADIENTS.length] }}>
        {name.charAt(0)}
      </div>
      <h4>{name}</h4>
      <p>{description}</p>
    </motion.div>
  );
}
