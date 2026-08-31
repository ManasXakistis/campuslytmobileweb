import { useState } from 'react';
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import Seo from '../components/Seo';
import usePageView from '../hooks/usePageView';
import { contactCategories } from '../content/websiteContent';
import './StaticPage.css';
import './Contact.css';

const initialForm = {
  name: '',
  email: '',
  category: contactCategories[0],
  subject: '',
  message: '',
};

export default function Contact() {
  usePageView();

  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const response = await fetch(
        'https://formsubmit.co/ajax/campuslyt@gmail.com',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            category: form.category,
            subject: form.subject,
            message: form.message,

            _subject: `New CampusLYT Feedback - ${form.category}`,
            _captcha: 'false',
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to send message. Please try again.');
      }

      setStatus('success');
      setForm(initialForm);
    } catch (err) {
      setStatus('error');
      setErrorMsg(
        err.message || 'Something went wrong. Please try again.'
      );
    }
  };

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
            Questions, feedback, or something not working right? Send us a
            message.
          </p>
        </div>
      </header>

      <section className="section static-page">
        <div className="container">
          {status === 'success' ? (
            <div className="contact__state contact__state--success">
              <CheckCircle2 size={28} />

              <h2>Message sent</h2>

              <p>
                Thanks for reaching out — our team will get back to you soon.
              </p>

              <button
                className="btn btn-ghost"
                onClick={() => setStatus('idle')}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__row">
                <label>
                  Name

                  <input
                    required
                    value={form.name}
                    onChange={update('name')}
                    placeholder="Your name"
                  />
                </label>

                <label>
                  Email

                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={update('email')}
                    placeholder="you@campus.edu"
                  />
                </label>
              </div>

              <label>
                Category

                <select
                  value={form.category}
                  onChange={update('category')}
                >
                  {contactCategories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                Subject

                <input
                  required
                  value={form.subject}
                  onChange={update('subject')}
                  placeholder="How can we help?"
                />
              </label>

              <label>
                Message

                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={update('message')}
                  placeholder="Tell us more..."
                />
              </label>

              {status === 'error' && (
                <div className="contact__error">
                  <AlertCircle size={16} />
                  {errorMsg}
                </div>
              )}

              <button
                className="btn btn-primary"
                type="submit"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={16} className="spin" />
                    Sending...
                  </>
                ) : (
                  'Send message'
                )}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}