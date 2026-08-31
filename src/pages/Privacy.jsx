import { useState } from 'react';
import Seo from '../components/Seo';
import usePageView from '../hooks/usePageView';
import './StaticPage.css';

export default function Privacy() {
  usePageView();

  const [showFullPolicy, setShowFullPolicy] = useState(false);

  return (
    <>
      <Seo
        title="Privacy Policy"
        description="How CampusLYT collects, uses and protects your information."
        path="/privacy"
      />

      <header className="page-hero">
        <div className="container">
          <span className="eyebrow">Legal</span>
          <h1>Privacy Policy</h1>
          <p>
            How CampusLYT collects, uses, protects, and manages your
            information.
          </p>
        </div>
      </header>

      <section className="section static-page">
        <div className="container static-page__content">

          <p className="static-page__updated">
            Last updated: August 30, 2026
          </p>

          <h2>Privacy at CampusLYT</h2>

          <p>
            Welcome to <strong>CampusLYT</strong> — a privacy-first
            collegiate communication network built to enable authentic,
            pressure-free connections among verified students.
          </p>

          <p>
            Your privacy is fundamental to our product design. CampusLYT
            collects information necessary to provide profiles, discovery,
            messaging, communities, authentication, notifications, and
            platform safety.
          </p>

          <p>
            We do <strong>not sell, rent, monetize, or trade</strong> your
            personal information or chat content to third-party advertisers
            or data brokers.
          </p>

          {/* READ MORE BUTTON */}
          <div
            style={{
              textAlign: 'center',
              margin: '35px 0',
            }}
          >
            <button
              onClick={() => setShowFullPolicy(true)}
              style={{
                display: 'inline-block',
                padding: '12px 28px',
                borderRadius: '999px',
                border: '1px solid #6c63ff',
                background: '#6c63ff',
                color: '#fff',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
              }}
            >
              Read More ↓
            </button>
          </div>

          {/* FULL POLICY */}
          {showFullPolicy && (
            <div>

              <h2>1. Information We Collect</h2>

              <p>
                We collect information necessary to provide a safe,
                authentic, and high-performance communication platform.
              </p>

              <h3>A. Information You Provide Directly</h3>

              <ul>
                <li>
                  <strong>Authentication Credentials:</strong> Institutional
                  Google account details (e.g., student email ending in
                  @vitbhopal.ac.in, Google User ID, and basic profile
                  verification).
                </li>

                <li>
                  <strong>Academic & Profile Details:</strong> Student
                  Registration Number, Full Name, Gender, Academic Branch,
                  Academic Year, State, City, optional Bio, Club Affiliation,
                  and Company/Internship Name.
                </li>

                <li>
                  <strong>Profile Media:</strong> Uploaded profile photos
                  which are automatically resized, optimized to WebP format,
                  and stored securely in cloud storage.
                </li>

                <li>
                  <strong>Secondary Email (Optional):</strong> If you link a
                  personal secondary recovery email, we verify it using a
                  time-limited, SHA-256 hashed 6-digit One-Time Password
                  (OTP).
                </li>

                <li>
                  <strong>Safety Reports & Feedback:</strong> Information you
                  provide when reporting another user for misconduct,
                  submitting feedback, or contacting support.
                </li>
              </ul>

              <h3>B. Chat & Communications Data</h3>

              <ul>
                <li>
                  <strong>Messages & Transmissions:</strong> Real-time text
                  messages, reply contexts, and interaction timestamps
                  processed through Firebase Firestore.
                </li>

                <li>
                  <strong>Chat Media:</strong> Images and audio voice notes
                  uploaded during conversations. Media files are validated
                  for MIME safety, optimized, and stored in private AWS S3
                  object storage with access granted through secure,
                  short-lived, pre-signed URLs or authorized token-gated
                  proxies.
                </li>

                <li>
                  <strong>Connection Preferences:</strong> In-app settings
                  such as muted chats, archived chats, blocked users, and
                  bilateral reveal statuses.
                </li>
              </ul>

              <h3>C. Automatically Collected Technical & Usage Data</h3>

              <ul>
                <li>
                  <strong>Device & Sync Tokens:</strong> Firebase Cloud
                  Messaging device push tokens and JSON Web Tokens (JWT)
                  for API authorization.
                </li>

                <li>
                  <strong>UI & App Preferences:</strong> Cloud-synchronized
                  theme colors, chat bubble styling presets, font sizes,
                  sound toggles, and haptic feedback settings.
                </li>

                <li>
                  <strong>Session & Analytics Data:</strong> Aggregated usage
                  metrics such as session duration, screens visited,
                  features utilized, search queries, and message counts.
                </li>

                <li>
                  <strong>Network & Diagnostics:</strong> IP address, device
                  model, operating system version, and crash logs.
                </li>
              </ul>

              <h2>2. How Anonymity & Privacy Work in CampusLYT</h2>

              <p>
                CampusLYT is architected around a{' '}
                <strong>One-Way Anonymity</strong> and{' '}
                <strong>Mutual Reveal</strong> model.
              </p>

              <h3>Anonymous Chat</h3>

              <p>
                Other users see a deterministically generated pseudonym,
                such as <em>"Adjective Noun 🎭"</em>, a masked avatar,
                and non-identifying filters such as gender and branch.
              </p>

              <p>
                The backend holds the verified account record, including
                Student Registration Number and Email, to ensure community
                safety.
              </p>

              <h3>Mutual Reveal</h3>

              <p>
                Once <strong>both</strong> participants explicitly accept
                a "Reveal Request", real names, registration numbers, bios,
                and full profile photos are unmasked for that specific chat.
              </p>

              <h3>Explore / Discovery</h3>

              <p>
                The Explore card stack displays public discovery attributes
                such as Branch, Year, State, City, Clubs, and Bio. You can
                toggle Explore visibility off at any time.
              </p>

              <p>
                <strong>Backend Accountability:</strong> While peers cannot
                see your identity during anonymous interactions, CampusLYT
                maintains backend accountability.
              </p>

              <h2>3. How We Use Your Information</h2>

              <ol>
                <li>
                  <strong>Authentication & Campus Exclusivity:</strong>{' '}
                  Verifying authentic campus students and preventing
                  unauthorized outside access.
                </li>

                <li>
                  <strong>Core Service Delivery:</strong> Routing real-time
                  chats, voice notes, media transmissions, search queries,
                  and Explore recommendations.
                </li>

                <li>
                  <strong>Notification Delivery:</strong> Transmitting
                  privacy-preserving push notifications via Firebase Cloud
                  Messaging.
                </li>

                <li>
                  <strong>Safety & Community Defense:</strong> Enforcing
                  Community Guidelines, processing abuse reports, preventing
                  spam, and mitigating malicious actors.
                </li>

                <li>
                  <strong>Personalization & Device Sync:</strong>{' '}
                  Synchronizing custom color palettes, read states, and
                  chat preferences.
                </li>

                <li>
                  <strong>Platform Reliability & Engineering:</strong>{' '}
                  Monitoring uptime, fixing crashes, and improving
                  application responsiveness.
                </li>
              </ol>

              <h2>4. How We Share and Disclose Information</h2>

              <p>
                <strong>
                  We do NOT sell, rent, monetize, or trade your personal
                  information or chat content to third-party advertisers
                  or data brokers.
                </strong>
              </p>

              <ul>
                <li>
                  <strong>Google Cloud Platform / Firebase:</strong>{' '}
                  Firestore, Google OAuth, and Firebase Cloud Messaging.
                </li>

                <li>
                  <strong>Amazon Web Services (AWS):</strong> Secure,
                  encrypted cloud object storage for profile images,
                  chat photos, and voice notes.
                </li>

                <li>
                  <strong>Gmail API / SMTP Services:</strong> Automated
                  transactional notifications and email verification.
                </li>

                <li>
                  <strong>Legal Compliance & Campus Safety:</strong> We may
                  disclose necessary information if required by law or to
                  protect users and the community against imminent harm.
                </li>
              </ul>

              <h2>5. Data Security Measures</h2>

              <ul>
                <li>
                  <strong>Transport Encryption:</strong> Network
                  communications use TLS / HTTPS.
                </li>

                <li>
                  <strong>Token-Based Authentication:</strong> JWT
                  authorization with short-lived access tokens and refresh
                  token rotation.
                </li>

                <li>
                  <strong>Private Object Storage:</strong> S3 media buckets
                  have public access blocked.
                </li>

                <li>
                  <strong>Hashed Secrets:</strong> Sensitive verification
                  tokens and OTPs are hashed using cryptographic algorithms
                  such as SHA-256.
                </li>

                <li>
                  <strong>Role-Based Moderation Access:</strong> Staff
                  access is restricted according to required safety tasks.
                </li>
              </ul>

              <h2>6. Data Retention & Account Deletion</h2>

              <ol>
                <li>
                  <strong>Active Retention:</strong> We retain profile data,
                  connection records, and chat history while your account
                  remains active.
                </li>

                <li>
                  <strong>Media Cleanup:</strong> Previous profile images
                  are automatically deleted when replaced.
                </li>

                <li>
                  <strong>Temporary Verification Data:</strong> Secondary
                  email OTPs expire within 10 minutes.
                </li>

                <li>
                  <strong>Account Deletion Rights:</strong> You can delete
                  your account at any time.
                </li>
              </ol>

              <p>
                You can initiate account deletion within the app profile
                settings or by emailing{' '}
                <a href="mailto:campuslyt@gmail.com">
                  campuslyt@gmail.com
                </a>
                .
              </p>

              <h2>7. Your Privacy Controls and Rights</h2>

              <ul>
                <li>
                  <strong>Explore Visibility:</strong> You can hide your
                  profile from the Explore card stack.
                </li>

                <li>
                  <strong>Block and Mute Controls:</strong> You can block
                  any user to terminate communications.
                </li>

                <li>
                  <strong>Secondary Email Management:</strong> You can
                  link, verify, or unlink your secondary email.
                </li>

                <li>
                  <strong>Access & Correction:</strong> You can update your
                  profile information directly within the app.
                </li>
              </ul>

              <h2>8. Children's Privacy</h2>

              <p>
                CampusLYT is strictly intended for college students who are{' '}
                <strong>18 years of age or older</strong>. We do not knowingly
                collect personal data from individuals under 18.
              </p>

              <h2>9. Changes to This Privacy Policy</h2>

              <p>
                We may update this Privacy Policy from time to time to
                accommodate new features, evolving technologies, or regulatory
                requirements. Material changes may be communicated through
                prominent in-app alerts or push notifications.
              </p>

              <h2>10. Contact Us & Grievance Redressal</h2>

              <p>
                If you have questions, concerns, feedback, or requests
                regarding this Privacy Policy, contact us:
              </p>

              <ul>
                <li>
                  <strong>Privacy & Grievance Contact:</strong>{' '}
                  <a href="mailto:campuslyt@gmail.com">
                    campuslyt@gmail.com
                  </a>
                </li>

                <li>
                  <strong>Instagram:</strong>{' '}
                  <a
                    href="https://instagram.com/campuslyt"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @campuslyt
                  </a>
                </li>

                <li>
                  <strong>Platform:</strong> CampusLYT (VIT Bhopal Student
                  Social Network)
                </li>
              </ul>

              {/* READ LESS */}
              <div
                style={{
                  textAlign: 'center',
                  margin: '35px 0',
                }}
              >
                <button
                  onClick={() => setShowFullPolicy(false)}
                  style={{
                    display: 'inline-block',
                    padding: '12px 28px',
                    borderRadius: '999px',
                    border: '1px solid #6c63ff',
                    background: '#6c63ff',
                    color: '#fff',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer',
                  }}
                >
                  Read Less ↑
                </button>
              </div>

            </div>
          )}

        </div>
      </section>
    </>
  );
}