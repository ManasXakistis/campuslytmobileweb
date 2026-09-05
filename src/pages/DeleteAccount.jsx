import Seo from '../components/Seo';
import './StaticPage.css';
import './Contact.css';

export default function DeleteAccount() {
  return (
    <>
      <Seo title="Delete Account" description="Request deletion of your CampusLYT account and associated data." path="/delete-account" />
      <header className="page-hero">
        <div className="container">
          <span className="eyebrow">Account request</span>
          <h1>Request account deletion</h1>
          <p>Submit your request and our team will verify the account before processing the deletion.</p>
        </div>
      </header>
      <section className="section static-page">
        <div className="container">
          <form action="https://formsubmit.co/campuslyt@gmail.com" method="POST" className="contact__form">
            <input type="hidden" name="_subject" value="CampusLYT Account Deletion Request" />
            <input type="hidden" name="_captcha" value="false" />
            <div className="contact__row">
              <label>Full name<input required type="text" name="name" placeholder="Your full name" /></label>
              <label>Email linked to CampusLYT<input required type="email" name="email" placeholder="you@example.com" /></label>
            </div>
            <label>Registration number (optional)<input type="text" name="registration_number" placeholder="Your university registration number" /></label>
            <label>Reason (optional)<select name="reason"><option value="No longer using CampusLYT">No longer using CampusLYT</option><option value="Privacy concern">Privacy concern</option><option value="Created another account">Created another account</option><option value="Other">Other</option></select></label>
            <label>Additional details (optional)<textarea name="details" rows={4} placeholder="Anything else you'd like us to know..." /></label>
            <label className="delete-confirm"><input required type="checkbox" name="confirmation" value="I confirm that I want my account deletion request processed" /> <span>I understand that this request may permanently remove my account and associated data.</span></label>
            <button className="btn btn-primary" type="submit">Submit deletion request</button>
          </form>
        </div>
      </section>
    </>
  );
}
