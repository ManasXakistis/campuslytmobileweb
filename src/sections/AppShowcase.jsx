import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { appShowcaseScreens } from '../content/websiteContent';
import SectionHeading from '../components/SectionHeading';
import PhoneMockup from '../components/PhoneMockup';
import Explore from '../assets/Explore.png';
import Profile from '../assets/Profile.png';
import Connections from '../assets/Chat.png';
import Chat from '../assets/Chat1.png';
import News from '../assets/News.png';
import './AppShowcase.css';

const SCREENSHOTS = {
  Explore,
  Profile,
  Connections,
  Chat,
  News,
};

export default function AppShowcase() {
  const [active, setActive] = useState(appShowcaseScreens[0].id);
  const current = appShowcaseScreens.find((s) => s.id === active);

  return (
    <section className="section showcase">
      <div className="container showcase__inner">
        <div className="showcase__copy">
          <SectionHeading eyebrow="See it in action" title="The app, screen by screen" />
          <div className="showcase__tabs" role="tablist" aria-label="App screens">
            {appShowcaseScreens.map((s) => (
              <button
                key={s.id}
                role="tab"
                aria-selected={active === s.id}
                className={`showcase__tab ${active === s.id ? 'is-active' : ''}`}
                onClick={() => setActive(s.id)}
              >
                {s.label}
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.p
              key={current.id}
              className="showcase__caption"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              {current.caption}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="showcase__phone">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, rotateY: 20 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: -20 }}
              transition={{ duration: 0.35 }}
            >
              <PhoneMockup screenshot={SCREENSHOTS[current.screenshot]} label={current.label} size="lg" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
