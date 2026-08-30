import { motion } from 'framer-motion';
import { ArrowRight, Bell, Users } from 'lucide-react';
import { hero } from '../content/websiteContent';
import DownloadButton from '../components/DownloadButton';
import NetworkGraph from '../components/NetworkGraph';
import PhoneMockup from '../components/PhoneMockup';
import Login from '../assets/Login.png';
import Chat from '../assets/Chat.png';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__inner">
        <motion.div
          className="hero__copy"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="eyebrow hero__eyebrow">The campus network app</span>
          <h1 className="hero__headline">{hero.headline}</h1>
          <p className="hero__sub">{hero.subhead}</p>
          <div className="hero__ctas">
            <DownloadButton />
            <a href="#why" className="btn btn-ghost">
              {hero.ctaSecondary} <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
        >
          <div className="hero__graph-wrap">
            <NetworkGraph />
          </div>

          <div className="hero__phones">
            <PhoneMockup
                 screenshot={Login}
                 label="Login"
                 tilt={-6}
                 size="md"/>
            <PhoneMockup 
                screenshot={Chat}
                label="App Screen" 
                tilt={6} 
                size="md" 
                className="hero__phone-front" />
          </div>
       

          <motion.div
            className="hero__float-card hero__float-card--top"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            {/*<Users size={16} /> <span>Ananya connected with a senior</span>*/}
          </motion.div>

          <motion.div
            className="hero__float-card hero__float-card--bottom"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            <Bell size={16} /> <span>New event in Coding community</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
