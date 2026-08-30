import Seo from '../components/Seo';
import usePageView from '../hooks/usePageView';
import Hero from '../sections/Hero';
import WhyCampusLYT from '../sections/WhyCampusLYT';
import Features from '../sections/Features';
import AppShowcase from '../sections/AppShowcase';
import MeetYourCampus from '../sections/MeetYourCampus';
import SeniorsAlumni from '../sections/SeniorsAlumni';
import Community from '../sections/Community';
import HowItWorks from '../sections/HowItWorks';
import Trust from '../sections/Trust';
import SocialProof from '../sections/SocialProof';
import Story from '../sections/Story';
import FinalCTA from '../sections/FinalCTA';

export default function Home() {
  usePageView();
  return (
    <>
      <Seo
        title="Your Campus. Your Network."
        description="CampusLYT connects students, seniors, juniors and alumni through one campus-focused social network. Download the app today."
        path="/"
      />
      <Hero />
      <WhyCampusLYT />
      <Features />
      <AppShowcase />
      <MeetYourCampus />
      <SeniorsAlumni />
      <Community />
      <HowItWorks />
      <Trust />
      <SocialProof />
      <Story />
      <FinalCTA />
    </>
  );
}
