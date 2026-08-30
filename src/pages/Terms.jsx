import Seo from '../components/Seo';
import usePageView from '../hooks/usePageView';
import './StaticPage.css';

export default function Terms() {
  usePageView();
  return (
    <>
      <Seo title="Terms & Conditions" description="The terms that govern use of the CampusLYT app and website." path="/terms" />
      <header className="page-hero">
        <div className="container">
          <span className="eyebrow">Legal</span>
          <h1>Terms & Conditions</h1>
          <p>Placeholder terms — replace with counsel-reviewed content before launch.</p>
        </div>
      </header>
      <section className="section static-page">
        <div className="container static-page__content">
          <p className="static-page__updated">Last updated: placeholder — set before launch</p>

          <h2>Using CampusLYT</h2>
          <p>
            By creating an account, you agree to use CampusLYT respectfully, provide accurate profile
            information, and follow our Community Guidelines.
          </p>

          <h2>Accounts</h2>
          <p>
            You're responsible for the activity on your account and for keeping your login credentials
            secure. CampusLYT may suspend accounts that violate these terms.
          </p>

          <h2>Content</h2>
          <p>
            You retain ownership of content you post. By posting, you grant CampusLYT permission to display
            it within the app as intended (for example, in your profile or a community).
          </p>

          <h2>Limitation of liability</h2>
          <p>
            CampusLYT is provided "as is." We work to keep the platform reliable and safe but cannot
            guarantee uninterrupted availability.
          </p>

          <h2>Changes</h2>
          <p>We may update these terms from time to time. Continued use of CampusLYT means you accept the current terms.</p>
        </div>
      </section>
    </>
  );
}
