```jsx
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
              display: 'flex',
              justifyContent: 'center',
              margin: '30px 0',
            }}
          >
            <button
              type="button"
              onClick={() => setShowFullPolicy(!showFullPolicy)}
              style={{
                background: 'none',
                border: 'none',
                padding: '10px 20px',
                color: 'var(--primary-color, #6c63ff)',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
              }}
            >
              {showFullPolicy ? 'Read Less ↑' : 'Read More ↓'}
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
                  Google account details, including student email ending in
                  @vitbhopal.ac.in, Google User ID, and basic profile
                  verification.
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
                  Messaging (FCM) device push tokens used for notifications
                  and JSON Web Tokens (JWT) for API authorization.
                </li>

                <li>
                  <strong>UI & App Preferences:</strong> Cloud-synchronized
                  theme colors, chat bubble styling presets, font sizes,
                  sound toggles, and haptic feedback settings.
                </li>

                <li>
                  <strong>Session & Analytics Data:</strong> Aggregated usage
                  metrics such as session duration, screens visited,
                  features utilized, search queries, and message counts used
                  to enhance app performance and eliminate bugs.
                </li>

                <li>
                  <strong>Network & Diagnostics:</strong> IP address, device
                  model, operating system version, and crash logs for
                  stability monitoring.
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
                such as <em>"Adjective Noun 🎭"</em>, a masked avatar, and
                non-identifying filters such as gender and branch.
              </p>

              <p>
                The backend holds the verified account record, including
                Student Registration Number and Email, to ensure community
                safety.
              </p>

              <h3>Mutual Reveal</h3>

              <p>
                Once <strong>both</strong> participants explicitly accept a
                "Reveal Request", real names, registration numbers, bios,
                and full profile photos are unmasked for that specific chat.
              </p>

              <h3>Explore / Discovery</h3>

              <p>
                Card stack displays public discovery attributes such as
                Branch, Year, State, City, Clubs, and Bio. You can toggle
                Explore visibility off at any time.
              </p>

              <p>
                <strong>Backend Accountability:</strong> While peers cannot
                see your identity during anonymous interactions, CampusLYT
                maintains backend accountability. Anonymity cannot be
                weaponized for harassment, hate speech, stalking, or
                malicious conduct.
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
                  Synchronizing custom color palettes, read states, and chat
                  preferences.
                </li>

                <li>
                  <strong>Platform Reliability & Engineering:</strong>{' '}
                  Monitoring uptime, optimizing image compression, fixing
                  crashes, and improving responsiveness.
                </li>
              </ol>

              <h2>4. How We Share and Disclose Information</h2>

              <p>
                <strong>
                  We do NOT sell, rent, monetize, or trade your personal
                  information or chat content to third-party advertisers or
                  data brokers.
                </strong>
              </p>

              <p>
                We only share data with trusted third-party service providers
                that enable core platform operations:
              </p>

              <ul>
                <li>
                  <strong>Google Cloud Platform / Firebase:</strong>{' '}
                  Firestore, Google OAuth single sign-on, and Firebase Cloud
                  Messaging.
                </li>

                <li>
                  <strong>Amazon Web Services (AWS):</strong> Secure,
                  encrypted AWS S3 cloud object storage for profile images,
                  chat photos, and voice notes.
                </li>

                <li>
                  <strong>Gmail API / SMTP Services:</strong> Automated
                  transactional notifications, onboarding emails, secondary
                  email OTP verification, and peer invitations.
                </li>

                <li>
                  <strong>Legal Compliance & Campus Safety:</strong> We may
                  disclose necessary information if required by law,
                  subpoena, court order, or to protect physical safety,
                  rights, or property against imminent harm.
                </li>
              </ul>

              <h2>5. Data Security Measures</h2>

              <p>
                We implement multi-layered technical, cryptographic, and
                operational safeguards to protect your personal information.
              </p>

              <ul>
                <li>
                  <strong>Transport Encryption:</strong> Network
                  communications between the application and backend
                  servers are encrypted using industry-standard TLS / HTTPS.
                </li>

                <li>
                  <strong>Token-Based Authentication:</strong> JWT
                  authorization with short-lived access tokens, refresh token
                  rotation, and blacklisting capabilities upon logout or ban.
                </li>

                <li>
                  <strong>Private Object Storage:</strong> S3 media buckets
                  have public access blocked. Chat media access is gated
                  behind short-lived pre-signed URLs or authenticated
                  proxy endpoints.
                </li>

                <li>
                  <strong>Hashed Secrets:</strong> Sensitive verification
                  tokens and OTPs are hashed using cryptographic algorithms
                  such as SHA-256 before database persistence.
                </li>

                <li>
                  <strong>Role-Based Moderation Access:</strong>{' '}
                  Administrative and moderator dashboard views use
                  multi-tiered permissions to limit staff access to data
                  required for specific safety tasks.
                </li>
              </ul>

              <h2>6. Data Retention & Account Deletion</h2>

              <ol>
                <li>
                  <strong>Active Retention:</strong> We retain profile data,
                  connection records, and chat history while your account
                  remains active and in good standing.
                </li>

                <li>
                  <strong>Media Cleanup:</strong> When you update or replace
                  your profile picture, the previous image file is
                  automatically deleted from our S3 storage buckets.
                </li>

                <li>
                  <strong>Temporary Verification Data:</strong> Secondary
                  email OTPs expire automatically within 10 minutes of
                  issuance and are marked as used.
                </li>

                <li>
                  <strong>Account Deletion Rights:</strong> You have the right
                  to delete your account at any time.
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

              <p>
                Upon confirmed deletion, your profile record, personal
                preferences, linked secondary emails, and active tokens are
                purged from our primary databases in accordance with our data
                destruction protocols.
              </p>

              <h2>7. Your Privacy Controls and Rights</h2>

              <ul>
                <li>
                  <strong>Explore Visibility:</strong> You can hide your
                  profile from the Explore card stack at any time.
                </li>

                <li>
                  <strong>Block and Mute Controls:</strong> You can block any
                  user to terminate bidirectional communications and hide
                  your profile updates from them.
                </li>

                <li>
                  <strong>Secondary Email Management:</strong> You can link,
                  verify, or unlink your secondary email address.
                </li>

                <li>
                  <strong>Access & Correction:</strong> You can update your
                  bio, branch, state, city, club name, company details, and
                  profile photo directly within the app.
                </li>
              </ul>

              <h2>8. Children's Privacy</h2>

              <p>
                CampusLYT is strictly intended for college students who are{' '}
                <strong>18 years of age or older</strong>. We do not knowingly
                collect, solicit, or maintain personal data from individuals
                under the age of 18. If we discover that a user under 18 has
                registered, we will promptly terminate the account and purge
                their data.
              </p>

              <h2>9. Changes to This Privacy Policy</h2>

              <p>
                We may update this Privacy Policy from time to time to
                accommodate new features, evolving technologies, or regulatory
                requirements. Any modifications will be posted within the
                application with an updated "Last Updated" date. Material
                changes may be communicated through prominent in-app alerts
                or push notifications.
              </p>

              <h2>10. Contact Us & Grievance Redressal</h2>

              <p>
                If you have questions, concerns, feedback, or requests
                regarding this Privacy Policy or our data handling practices,
                please reach out to us:
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
                  display: 'flex',
                  justifyContent: 'center',
                  margin: '30px 0',
                }}
              >
                <button
                  type="button"
                  onClick={() => setShowFullPolicy(false)}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: '10px 20px',
                    color: 'var(--primary-color, #6c63ff)',
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
```
