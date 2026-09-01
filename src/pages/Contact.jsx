import Seo from '../components/Seo';
import './StaticPage.css';
import './Contact.css';

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact"
        description="Get in touch with the CampusLYT team for support, feedback, partnerships or reports."
        path="/contact"
      />

      <header className="page-hero">
        <div className="container">
          <span className="eyebrow">Support</span>
          <h1>We're here to help</h1>
          <p>
            Questions, feedback, or something not working right? Send us a message.
          </p>
        </div>
      </header>

      <section className="section static-page">
        <div className="container">

          <form
            action="https://formsubmit.co/campuslyt@gmail.com"
            method="POST"
            className="contact__form"
          >
            <input
              type="hidden"
              name="_subject"
              value="New CampusLYT Feedback"
            />

            <input
              type="hidden"
              name="_captcha"
              value="false"
            />

            <div className="contact__row">

              <label>
                Name
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Your name"
                />
              </label>

              <label>
                Email
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="you@campus.edu"
                />
              </label>

            </div>

            <label>
              Category
              <select name="category">
                <option value="General">General</option>
                <option value="Feedback">Feedback</option>
                <option value="Bug Report">Bug Report</option>
                <option value="Partnership">Partnership</option>
                <option value="Support">Support</option>
              </select>
            </label>

            <label>
              Subject
              <input
                required
                type="text"
                name="subject"
                placeholder="How can we help?"
              />
            </label>

            <label>
              Message
              <textarea
                required
                name="message"
                rows={5}
                placeholder="Tell us more..."
              />
            </label>

            <button
              className="btn btn-primary"
              type="submit"
            >
              Send message
            </button>

          </form>

        </div>
      </section>
    </>
  );
}