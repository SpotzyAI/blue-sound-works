import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground mb-12">Last Updated: January 2025</p>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>SPOTZY TECH LTD</strong> is a Cyprus legal entity with registration number <strong>HE473593</strong>, headquartered in Cyprus ("Company," "we," "us," or "our").
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For the purposes of personal data protection legislation, including the <strong>General Data Protection Regulation (GDPR)</strong>, we are the "data controller" regarding the personal data provided and processed through the websites https://spotzyai.com and https://platform.spotzyai.com (collectively, the "Site" or "Service").
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This Privacy Policy explains how we collect, use, store, and protect your personal data when you use our Service. By using the Service, you acknowledge that you have read and understood this Privacy Policy and agree to the collection, use, and disclosure of your personal data as described herein.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">2. Data We Collect</h2>
              
              <h3 className="text-2xl font-semibold mb-3">2.1 Personal Data</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The personal data that the Company collects about you through the Site includes:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
                <li><strong>Contact Information:</strong> First name, last name, email address, phone number</li>
                <li><strong>Account Information:</strong> Username, password (encrypted), profile information</li>
                <li><strong>Billing Information:</strong> Payment method details, billing address, transaction history</li>
                <li><strong>Usage Data:</strong> IP address, browser type, device information, pages visited, time spent on pages</li>
                <li><strong>Call Data:</strong> Phone numbers dialed, call recordings, transcripts, call duration, timestamps</li>
                <li><strong>Communication Data:</strong> Messages you send us, support tickets, feedback</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3">2.2 How We Obtain Data</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We obtain your personal data in the following ways:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
                <li>When you create an account on the Service</li>
                <li>When you complete contact forms on the Site</li>
                <li>When you subscribe to our newsletter or marketing communications</li>
                <li>When you use the SpotzyAI Platform to make or receive calls</li>
                <li>When you contact us by email at info@spotzyai.com</li>
                <li>When you upload content or data to the Service</li>
                <li>Automatically through cookies and similar technologies</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">3. Legal Basis for Processing</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We process your personal data based on the following legal grounds under GDPR:
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">3.1 Contract Performance</h3>
                  <p className="text-muted-foreground leading-relaxed mb-2">We process your data to:</p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Provide the Service you have signed up for</li>
                    <li>Process your payments</li>
                    <li>Manage your account</li>
                    <li>Provide customer support</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3">3.2 Legitimate Interests</h3>
                  <p className="text-muted-foreground leading-relaxed mb-2">We process your data for our legitimate business interests, including:</p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Improving and developing our Service</li>
                    <li>Ensuring security and preventing fraud</li>
                    <li>Analyzing usage patterns</li>
                    <li>Marketing our services (you can opt-out at any time)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3">3.3 Legal Obligations</h3>
                  <p className="text-muted-foreground leading-relaxed mb-2">We process your data to comply with legal obligations, such as:</p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Tax and accounting requirements</li>
                    <li>Responding to legal requests from authorities</li>
                    <li>Maintaining records as required by law</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3">3.4 Consent</h3>
                  <p className="text-muted-foreground leading-relaxed mb-2">Where required by law, we obtain your explicit consent before:</p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Recording phone calls</li>
                    <li>Sending marketing communications</li>
                    <li>Using certain cookies and tracking technologies</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-2">
                    You may withdraw your consent at any time by contacting us at info@spotzyai.com.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">4. How We Use Your Data</h2>
              
              <h3 className="text-2xl font-semibold mb-3">4.1 Purposes of Processing</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use your personal data for the following purposes:
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-bold mb-2">Service Delivery:</h4>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>To provide access to the SpotzyAI Platform</li>
                    <li>To process and complete transactions</li>
                    <li>To enable you to make and receive AI-powered phone calls</li>
                    <li>To store call recordings and transcripts</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold mb-2">Communication:</h4>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>To send you service-related notifications</li>
                    <li>To respond to your inquiries and support requests</li>
                    <li>To send you updates about the Service</li>
                    <li>To communicate additional information about SpotzyAI</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold mb-2">Improvement and Development:</h4>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>To analyze how the Service is used</li>
                    <li>To improve our AI models and call quality</li>
                    <li>To develop new features and services</li>
                    <li>To conduct research and analytics</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold mb-2">Marketing:</h4>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>To send you promotional materials (with your consent)</li>
                    <li>To inform you about new features or services</li>
                    <li>To conduct surveys and gather feedback</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold mb-2">Security and Compliance:</h4>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>To detect and prevent fraud</li>
                    <li>To ensure platform security</li>
                    <li>To comply with legal obligations</li>
                    <li>To enforce our Terms of Service</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">5. Data Sharing and Disclosure</h2>
              
              <h3 className="text-2xl font-semibold mb-3">5.1 Third-Party Service Providers</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may disclose your personal data to trusted third parties who assist us in operating the Service, including:
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-bold mb-2">Technology Providers:</h4>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Cloud hosting services (e.g., AWS, Google Cloud)</li>
                    <li>Payment processors (e.g., Stripe, PayPal)</li>
                    <li>Email service providers</li>
                    <li>Analytics services (e.g., Google Analytics)</li>
                    <li>Customer support platforms</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold mb-2">Telecommunications Providers:</h4>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Voice API providers for call processing</li>
                    <li>SMS gateway providers</li>
                    <li>Phone number providers</li>
                  </ul>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4">
                All third-party service providers are contractually obligated to maintain confidentiality, implement appropriate security measures, and comply with GDPR and applicable data protection laws.
              </p>

              <h3 className="text-2xl font-semibold mb-3">5.2 Legal and Regulatory Authorities</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may disclose your personal data to courts, regulatory authorities, law enforcement agencies, and public administrations when required by law or when necessary to protect our rights or the rights of others.
              </p>

              <h3 className="text-2xl font-semibold mb-3">5.3 Business Transfers</h3>
              <p className="text-muted-foreground leading-relaxed">
                In the event of a merger, acquisition, reorganization, or sale of assets, your personal data may be transferred to the acquiring entity. We will notify you of any such change in ownership or control of your personal data.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">6. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We retain your personal data for as long as necessary to fulfill the purposes described in this Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>

              <h3 className="text-2xl font-semibold mb-3">Specific Retention Periods:</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold mb-2">Active Accounts:</h4>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Account data: Duration of your account plus 3 years</li>
                    <li>Call recordings: 6 months (unless you request longer retention)</li>
                    <li>Transaction records: 7 years (for tax and accounting purposes)</li>
                    <li>Support communications: 3 years</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold mb-2">Closed Accounts:</h4>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>We retain certain data for 3 years after account closure for legal and audit purposes</li>
                    <li>Call recordings are deleted within 6 months after account closure</li>
                    <li>Anonymized usage data may be retained indefinitely for analytics</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">7. Cookies and Tracking Technologies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Cookies are small text files stored on your device when you visit our Site. We use cookies and similar technologies to remember your preferences, analyze how you use the Service, and improve user experience.
              </p>

              <h3 className="text-2xl font-semibold mb-3">Types of Cookies We Use:</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
                <li><strong>Essential Cookies:</strong> Required for the Service to function properly and cannot be disabled</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use the Site</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and choices</li>
                <li><strong>Marketing Cookies:</strong> Track your browsing across websites and require your consent</li>
              </ul>

              <p className="text-muted-foreground leading-relaxed">
                You can control and manage cookies through your browser settings. Note that disabling essential cookies may prevent you from using certain features of the Service.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">8. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, use, disclosure, modification, or destruction, including:
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-bold mb-2">Technical Measures:</h4>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Encryption of data in transit (SSL/TLS)</li>
                    <li>Encryption of sensitive data at rest</li>
                    <li>Secure authentication mechanisms</li>
                    <li>Regular security audits and penetration testing</li>
                    <li>Firewall protection and intrusion detection</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold mb-2">Organizational Measures:</h4>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Access controls and authorization procedures</li>
                    <li>Employee training on data protection</li>
                    <li>Confidentiality agreements with staff and contractors</li>
                    <li>Incident response procedures</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">9. Your Rights Under GDPR</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Under the GDPR, you have the following rights regarding your personal data:
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-3 text-muted-foreground">
                <li><strong>Right to Access:</strong> Request confirmation of whether we process your personal data and obtain a copy</li>
                <li><strong>Right to Rectification:</strong> Request correction of inaccurate personal data</li>
                <li><strong>Right to Erasure ("Right to be Forgotten"):</strong> Request deletion of your personal data in certain circumstances</li>
                <li><strong>Right to Restriction of Processing:</strong> Request restriction when you contest data accuracy or processing is unlawful</li>
                <li><strong>Right to Data Portability:</strong> Receive your personal data in a machine-readable format</li>
                <li><strong>Right to Object:</strong> Object to processing based on legitimate interests or direct marketing</li>
                <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for processing at any time</li>
                <li><strong>Right to Lodge a Complaint:</strong> File a complaint with a supervisory authority</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3">How to Exercise Your Rights</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To exercise any of these rights, please contact us at:
              </p>
              <p className="text-muted-foreground leading-relaxed mb-2">
                <strong>Email:</strong> info@spotzyai.com
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Mail:</strong> SPOTZY TECH LTD, Cyprus
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We will respond to your request within one month of receipt.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">10. Call Recording and Consent</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All phone calls made through the SpotzyAI Platform are recorded for quality assurance, training AI models, compliance, and dispute resolution.
              </p>

              <h3 className="text-2xl font-semibold mb-3">Your Responsibility:</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When using the SpotzyAI Platform, you are responsible for:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-1 text-muted-foreground">
                <li>Informing call recipients that calls are being recorded</li>
                <li>Obtaining necessary consent under applicable laws</li>
                <li>Complying with telecommunications regulations in your jurisdiction</li>
              </ul>

              <p className="text-muted-foreground leading-relaxed">
                The SpotzyAI Platform can be configured to automatically announce call recording to recipients and allow them to opt-out.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">11. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Service is not intended for individuals under the age of 18. We do not knowingly collect personal data from children under 18. If you believe your child has provided personal data to us, please contact us at info@spotzyai.com, and we will delete such information.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">12. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We will notify you of any material changes by posting the updated Privacy Policy on the Site and sending an email to the address associated with your account. The "Last Updated" date at the top of this Privacy Policy indicates when it was last revised.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Your continued use of the Service after any changes become effective constitutes your acceptance of the updated Privacy Policy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">13. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <p className="text-muted-foreground leading-relaxed mb-2">
                <strong>SPOTZY TECH LTD</strong>
              </p>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Cyprus
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Email:</strong> info@spotzyai.com
              </p>
            </section>

            <div className="border-t border-border pt-8 mt-12">
              <p className="text-center text-sm text-muted-foreground">
                © 2025 SPOTZY TECH LTD. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;