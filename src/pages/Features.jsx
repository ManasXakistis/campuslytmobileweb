import { motion } from 'framer-motion';
import Seo from '../components/Seo';
import usePageView from '../hooks/usePageView';
import Features from '../sections/Features';
import AppShowcase from '../sections/AppShowcase';
import FinalCTA from '../sections/FinalCTA';
import './StaticPage.css';

export default function FeaturesPage() {
  usePageView();
  return (
    <>
      <Seo
        title="Features"
        description="Explore everything CampusLYT offers: discover people, connect with seniors and alumni, join communities, message privately, and stay updated on campus news."
        path="/features"
      />
      <header className="page-hero">
        <div className="container">
          <motion.span className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>What's inside</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            Built for every part of campus life
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            From finding your people to staying on top of campus news — here's everything CampusLYT does.
          </motion.p>
        </div>
      </header>
      <Features />
      <AppShowcase />
      <FinalCTA />
    </>
  );
}
