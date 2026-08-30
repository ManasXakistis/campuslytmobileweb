import Seo from '../components/Seo';
import usePageView from '../hooks/usePageView';
import { story } from '../content/websiteContent';
import MeetYourCampus from '../sections/MeetYourCampus';
import FinalCTA from '../sections/FinalCTA';
import './StaticPage.css';

export default function About() {
  usePageView();
  return (
    <>
      <Seo
        title="About"
        description="CampusLYT brings students, seniors, juniors and alumni into one connected campus network."
        path="/about"
      />
      <header className="page-hero">
        <div className="container">
          <span className="eyebrow">About CampusLYT</span>
          <h1>One connected space for campus life</h1>
          <p>{story.text}</p>
        </div>
      </header>

      <section className="section static-page">
        <div className="container static-page__content">
          <h2>Why we built CampusLYT</h2>
          <p>
            Every campus already has a network — it just lives across scattered chat groups, noticeboards
            and word of mouth. CampusLYT gives that network a home: a single app where students discover
            each other, seniors and alumni stay reachable, and communities have somewhere real to grow.
          </p>
          <h2>Who it's for</h2>
          <p>
            Current students looking to meet people beyond their immediate circle. Seniors and alumni who
            want to stay connected to their campus and give back. Communities and clubs that want an easier
            way to reach the students who'd want to join them.
          </p>
        </div>
      </section>

      <MeetYourCampus />
      <FinalCTA />
    </>
  );
}
