import Seo from '../components/Seo';
import usePageView from '../hooks/usePageView';
import './StaticPage.css';

export default function CommunityGuidelines() {
  usePageView();
  return (
    <>
      <Seo title="Community Guidelines" description="What's expected of everyone using CampusLYT." path="/community-guidelines" />
      <header className="page-hero">
        <div className="container">
          <span className="eyebrow">Legal</span>
          <h1>Community Guidelines</h1>
          <p>Placeholder guidelines — replace with your campus/legal-reviewed policy before launch.</p>
        </div>
      </header>
      <section className="section static-page">
        <div className="container static-page__content">
          <h2>Be respectful</h2>
          <p>Treat every student, senior and alumnus the way you'd want to be treated. Harassment, hate speech and bullying are not tolerated.</p>

          <h2>Be authentic</h2>
          <p>Use your real identity and campus details. Impersonation and fake profiles undermine trust for everyone.</p>

          <h2>Keep it safe</h2>
          <p>Don't share others' private information without consent. Report anything that makes you or someone else feel unsafe.</p>

          <h2>Reporting</h2>
          <p>Every profile, message and community has a report option. Our moderation team reviews reports and takes action according to these guidelines.</p>
        </div>
      </section>
    </>
  );
}
