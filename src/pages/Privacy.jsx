import Seo from '../components/Seo';
import usePageView from '../hooks/usePageView';
import './StaticPage.css';

export default function Privacy() {
  usePageView();
  return (
    <>
      <Seo title="Privacy Policy" description="How CampusLYT collects, uses and protects your information." path="/privacy" />
      <header className="page-hero">
        <div className="container">
          <span className="eyebrow">Legal</span>
          <h1>Privacy Policy</h1>
          <p>Placeholder policy — replace with counsel-reviewed content before launch.</p>
        </div>
      </header>
      <section className="section static-page">
        <div className="container static-page__content">
          <p className="static-page__updated">Last updated: placeholder — set before launch</p>

          <h2>Information we collect</h2>
          <p>
            CampusLYT collects the information you provide when creating a profile (such as name, branch,
            year and interests), along with usage data needed to operate the app, such as messages you send
            and communities you join.
          </p>

          <h2>How we use information</h2>
          <p>
            We use your information to operate core features — profiles, discovery, messaging and
            communities — and to keep the platform safe through moderation and reporting tools.
          </p>

          <h2>Your controls</h2>
          <ul>
            <li>You choose what appears on your profile.</li>
            <li>You can report content or accounts that violate our guidelines.</li>
            <li>You can request account and data deletion.</li>
          </ul>

          <h2>Data sharing</h2>
          <p>
            We do not sell personal information. Data may be shared with service providers strictly to
            operate the app (such as hosting), under appropriate agreements.
          </p>

          <h2>Contact</h2>
          <p>Questions about this policy can be sent through our Contact page.</p>
        </div>
      </section>
    </>
  );
}
