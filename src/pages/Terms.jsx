import { useState } from 'react';
import Seo from '../components/Seo';
import usePageView from '../hooks/usePageView';
import './StaticPage.css';

export default function Terms() {
  usePageView();

  const [showFullTerms, setShowFullTerms] = useState(false);

  return (
    <>
      <Seo
        title="Terms & Conditions"
        description="The terms that govern use of the CampusLYT app and website."
        path="/terms"
      />

      <header className="page-hero">
        <div className="container">
          <span className="eyebrow">Legal</span>
          <h1>Terms & Conditions</h1>
          <p>
            The terms that govern your use of CampusLYT.
          </p>
        </div>
      </header>

      <section className="section static-page">
        <div className="container static-page__content">

          {/*<p className="static-page__updated">
            Last updated: August 30, 2026
          </p>*/}

          <h2>Using CampusLYT</h2>

          <p>
            Welcome to <strong>CampusLYT</strong> ("we," "our," "us," or the
            "Platform"). CampusLYT is an exclusive, hyper-local social and
            communication network engineered specifically for verified
            college students.
          </p>

          <p>
            These Terms and Conditions govern your access to and use of the
            CampusLYT mobile application, APIs, backend services, and any
            related software or web properties.
          </p>

          <p>
            By creating an account, downloading the app, logging in, or
            accessing any part of the Service, you represent that you have
            read, understood, and agreed to be bound by these Terms.
          </p>

          {/* READ MORE BUTTON */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              margin: '35px 0',
            }}
          >
            <button
              type="button"
              onClick={() => setShowFullTerms(true)}
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

          {/* FULL TERMS & CONDITIONS */}
          {showFullTerms && (
            <div>

              <h2>1. Eligibility & Access Restrictions</h2>

              <ol>
                <li>
                  <strong>Age Requirement:</strong> You must be at least{' '}
                  <strong>18 years of age</strong> to register for and use
                  CampusLYT. By using the Service, you represent and warrant
                  that you are at least 18 years old and possess the legal
                  capacity to enter into a binding contract.
                </li>

                <li>
                  <strong>Institutional Exclusivity:</strong> CampusLYT
                  operates as a closed campus network ("walled garden").
                  Access requires authentication through an approved
                  institutional Google account (e.g., @vitbhopal.ac.in).
                  You agree to provide accurate, current, and complete
                  registration information including Student Registration
                  Number, Academic Branch, and Academic Year.
                </li>

                <li>
                  <strong>Verification & Authenticity:</strong> To maintain
                  a safe and trustworthy community, accounts may undergo
                  automated or manual identity verification against
                  institutional records. Providing false, deceptive, or
                  misleading information, using another student's credentials,
                  or attempting to register unauthorized third-party accounts
                  is strictly prohibited and constitutes grounds for immediate,
                  permanent termination.
                </li>
              </ol>

              <h2>2. Account Security & Verification</h2>

              <ol>
                <li>
                  <strong>Authentication:</strong> Access to CampusLYT is tied
                  to your authorized Google OAuth single sign-on (SSO) and
                  secondary verification mechanisms, such as verified
                  secondary email with OTP. You are solely responsible for
                  maintaining the confidentiality and security of your login
                  credentials and device.
                </li>

                <li>
                  <strong>Account Responsibility:</strong> You accept full
                  legal responsibility for all activities, communications,
                  and transactions executed through your account.
                </li>

                <li>
                  <strong>Unauthorized Access:</strong> You agree to notify us
                  immediately at{' '}
                  <a href="mailto:campuslyt@gmail.com">
                    campuslyt@gmail.com
                  </a>{' '}
                  if you suspect or discover any unauthorized access, security
                  breach, or compromise of your account. We are not liable for
                  any loss or harm resulting from unauthorized use of your
                  credentials.
                </li>
              </ol>

              <h2>
                3. The CampusLYT Mechanics: Anonymity & The Mutual Reveal
                Protocol
              </h2>

              <p>
                CampusLYT features proprietary privacy and connection
                mechanics designed to reduce social pressure and prevent
                harassment. You agree to adhere strictly to these
                architectural mechanics.
              </p>

              <ol>
                <li>
                  <strong>One-Way Anonymity:</strong>

                  <ul>
                    <li>
                      When initiating an anonymous connection, the platform
                      assigns a pseudonymous, system-generated identifier
                      (e.g., "Adjective Noun 🎭") and masks your profile image
                      and identifying details from the recipient.
                    </li>

                    <li>
                      You acknowledge that while other users may see your
                      masked persona, your account remains cryptographically
                      mapped to your verified profile in our secure
                      administrative backend for trust and safety
                      accountability.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong>Exploitation & De-anonymization Prohibited:</strong>

                  <ul>
                    <li>
                      Any attempt to reverse engineer, scrape, de-anonymize,
                      exploit metadata, intercept network traffic, or
                      force-reveal another user's identity without their
                      explicit in-app consent is a severe violation of these
                      Terms.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong>The Mutual Reveal Protocol:</strong>

                  <ul>
                    <li>
                      Identity reveal (unmasking real names, registration
                      numbers, unmasked avatars, and bio details) requires
                      explicit, bilateral consent via a "Reveal Request."
                    </li>

                    <li>
                      If a reveal request is declined, the platform enforces a{' '}
                      <strong>48-hour cooling-off period</strong> during which
                      further reveal requests are restricted. You agree not
                      to harass or pressure any user to reveal their identity.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong>Direct Revealed Connections:</strong>

                  <ul>
                    <li>
                      Users may optionally initiate direct, unmasked
                      connections when mutually desired. Once a connection is
                      revealed or initiated directly, real profile details
                      are visible to that specific connected partner.
                    </li>
                  </ul>
                </li>
              </ol>

              <h2>
                4. User Conduct, Community Guidelines & Prohibited Content
              </h2>

              <p>
                CampusLYT is committed to fostering a respectful, safe, and
                positive collegiate environment. You agree to act responsibly
                and respectfully at all times.
              </p>

              <h3>Prohibited Conduct</h3>

              <p>
                You agree that you will <strong>NOT</strong>, under any
                circumstances:
              </p>

              <ul>
                <li>
                  <strong>Harass or Bully:</strong> Stalk, threaten, bully,
                  intimidate, defame, demean, or maliciously target any
                  student, faculty member, or staff member.
                </li>

                <li>
                  <strong>Post Illegal or Harmful Content:</strong> Share,
                  transmit, or display any content that is defamatory,
                  obscene, pornographic, sexually explicit, promotes
                  self-harm, or encourages illegal acts.
                </li>

                <li>
                  <strong>Hate Speech & Discrimination:</strong> Distribute
                  hate speech, promote violence, or incite discrimination
                  based on race, ethnicity, religion, caste, gender, sexual
                  orientation, disability, or nationality.
                </li>

                <li>
                  <strong>Impersonation & Fraud:</strong> Impersonate any
                  individual, organization, club, or authority, or
                  misrepresent your affiliation with any entity.
                </li>

                <li>
                  <strong>Spam & Solicitation:</strong> Distribute
                  unauthorized advertisements, promotional material, spam,
                  chain letters, surveys, MLM schemes, or solicit money or
                  cryptocurrency from users.
                </li>

                <li>
                  <strong>Doxxing & Privacy Invasions:</strong> Share private
                  phone numbers, physical addresses, private screenshots of
                  chats without mutual consent, financial details, or
                  personal sensitive information of any person.
                </li>

                <li>
                  <strong>Platform Abuse & Malware:</strong> Upload or
                  distribute viruses, malicious code, trojans, or attempt
                  unauthorized access to our servers, databases, AWS S3
                  buckets, Firebase Firestore instances, or backend APIs.
                </li>

                <li>
                  <strong>Automated Scraping:</strong> Use bots, crawlers,
                  scrapers, automated scripts, or headless browsers to access,
                  harvest data from, or interact with the Service.
                </li>
              </ul>

              <h2>
                5. User Content, Media Sharing & Intellectual Property
              </h2>

              <ol>
                <li>
                  <strong>Ownership of Content:</strong> You retain ownership
                  of any text messages, photos, voice notes, profile pictures,
                  and other media ("User Content") that you post or upload to
                  the platform.
                </li>

                <li>
                  <strong>License to CampusLYT:</strong> By uploading,
                  transmitting, or displaying User Content on or through the
                  Service, you grant CampusLYT a worldwide, non-exclusive,
                  royalty-free, fully paid-up license to host, store,
                  transfer, cache, transcode (e.g., image compression to WebP,
                  audio container validation), display, and distribute such
                  content solely for the purpose of operating, developing,
                  and providing the Service to you and your authorized
                  connections.
                </li>

                <li>
                  <strong>Media Security & Disclaimers:</strong>

                  <ul>
                    <li>
                      Chat media, including images and audio voice notes, are
                      stored in secure, access-controlled cloud object storage
                      (AWS S3) and accessed via short-lived, pre-signed URLs
                      or authorized token-gated proxy endpoints.
                    </li>

                    <li>
                      While we employ strict security measures, you recognize
                      that other users may capture screenshots, screen
                      recordings, or external photographs of content displayed
                      on their devices.{' '}
                      <strong>
                        Exercise caution and good judgment when sharing
                        sensitive media, even within anonymous or revealed
                        chats.
                      </strong>
                    </li>
                  </ul>
                </li>

                <li>
                  <strong>CampusLYT Intellectual Property:</strong> All logos,
                  design systems, UI components, codebases, algorithms,
                  trademarks, graphics, and backend architectures belonging
                  to CampusLYT are the exclusive intellectual property of the
                  CampusLYT development team. You may not copy, modify,
                  distribute, reverse engineer, or create derivative works
                  without explicit written permission.
                </li>
              </ol>

              <h2>
                6. Safety, Reporting, Blocking & Moderation
              </h2>

              <ol>
                <li>
                  <strong>Self-Service Safety Controls:</strong> CampusLYT
                  provides instant in-app blocking and reporting mechanisms.
                  Blocking a user immediately severs the connection, prevents
                  bidirectional messaging, hides profile updates, and
                  suppresses further connection requests.
                </li>

                <li>
                  <strong>Automated & Manual Moderation:</strong>

                  <ul>
                    <li>
                      We utilize automated moderation rules, including
                      cumulative community report thresholds triggering
                      automated account suspension.
                    </li>

                    <li>
                      Our authorized moderation team reserves the right to
                      review reported content, investigate policy violations,
                      issue warnings, restrict feature access, or permanently
                      ban accounts.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong>No Duty to Screen:</strong> While we maintain
                  safety protocols, we do not actively monitor every private
                  real-time communication and assume no liability for
                  user-generated content shared within chats.
                </li>
              </ol>

              <h2>
                7. Account Suspension, Termination & Deletion
              </h2>

              <ol>
                <li>
                  <strong>Termination by Us:</strong> We reserve the right to
                  suspend, restrict, or permanently terminate your access to
                  CampusLYT at any time, with or without prior notice, if we
                  believe you have violated these Terms, engaged in harmful or
                  disruptive behavior, or if required by legal or
                  institutional authorities.
                </li>

                <li>
                  <strong>Termination by You:</strong> You may stop using the
                  Service at any time. You can request account deletion,
                  unlinking of secondary emails, or Explore visibility toggles
                  directly within the app settings or by contacting{' '}
                  <a href="mailto:campuslyt@gmail.com">
                    campuslyt@gmail.com
                  </a>
                  .
                </li>

                <li>
                  <strong>Post-Termination Effect:</strong> Upon account
                  termination or ban, your right to access the Service
                  immediately ceases, and outstanding authentication tokens
                  (JWT and Firebase tokens) will be invalidated and
                  blacklisted.
                </li>
              </ol>

              <h2>8. Disclaimers & Limitation of Liability</h2>

              <ol>
                <li>
                  <strong>"AS IS" and "AS AVAILABLE":</strong> The Service is
                  provided on an "AS IS" and "AS AVAILABLE" basis without
                  warranties of any kind, whether express, statutory, or
                  implied, including warranties of merchantability, fitness
                  for a particular purpose, uptime, non-infringement, or
                  freedom from defects.
                </li>

                <li>
                  <strong>No Background Checks:</strong> CampusLYT does not
                  perform criminal background checks on its users. We do not
                  guarantee the authenticity, character, safety, or intentions
                  of any user on the platform.
                </li>

                <li>
                  <strong>Interpersonal Interactions:</strong> You are solely
                  responsible for all interactions with other users, both on
                  the platform and in real life.{' '}
                  <strong>
                    Never share confidential personal secrets, passwords, or
                    financial credentials with any user.
                  </strong>
                </li>

                <li>
                  <strong>Limitation of Liability:</strong> To the maximum
                  extent permitted by applicable law, in no event shall
                  CampusLYT, its developers, operators, moderators, or
                  affiliates be liable for any indirect, incidental, special,
                  consequential, or punitive damages, including loss of data,
                  loss of reputation, emotional distress, or device
                  malfunction arising from or relating to your use of or
                  inability to use the Service.
                </li>
              </ol>

              <h2>9. Modifications to the Terms</h2>

              <p>
                We may revise and update these Terms periodically to reflect
                platform updates, feature releases, legal compliance, or
                community safety enhancements. When material updates occur,
                we will notify you through an in-app notice, push notification,
                or updated timestamp. Your continued use of CampusLYT
                following any modifications constitutes your binding
                acceptance of the revised Terms.
              </p>

              <h2>10. Governing Law & Dispute Resolution</h2>

              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of India, without regard to conflict of law
                principles. Any legal suit, action, or proceeding arising out
                of or related to these Terms or the Service shall be
                instituted exclusively in the competent courts having
                jurisdiction over the platform administrators.
              </p>

              <h2>11. Contact & Support</h2>

              <p>
                If you have any questions, feedback, grievance reports, or
                safety inquiries regarding these Terms and Conditions, please
                contact us:
              </p>

              <ul>
                <li>
                  <strong>Support & Grievance Email:</strong>{' '}
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
                  <strong>Community:</strong> CampusLYT Developer & Safety
                  Operations Team
                </li>
              </ul>

              {/* READ LESS BUTTON */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  margin: '35px 0',
                }}
              >
                <button
                  type="button"
                  onClick={() => setShowFullTerms(false)}
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