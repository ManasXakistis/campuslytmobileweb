import { motion } from 'framer-motion';
import { story } from '../content/websiteContent';
import logo from '../assets/logo.png';
import './Story.css';

export default function Story() {
  return (
    <section className="section story">
      <div className="container story__inner">
        <motion.div
          className="story__mark"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <img src={logo} alt="CampusLYT logo" />
        </motion.div>
        <div>
          <span className="eyebrow">{story.heading}</span>
          <p className="story__text">{story.text}</p>
        </div>
      </div>
    </section>
  );
}
