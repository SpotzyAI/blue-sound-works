import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-muted-foreground mb-12">Last Updated: January 2025</p>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                These Terms of Service (these "Terms") are entered into between you and <strong>SPOTZY TECH LTD</strong> ("SpotzyAI," "us," "we," or "our"), a Cyprus legal entity with registration number <strong>HE473593</strong>, headquartered at Austrias 6, 3083, Limassol, Cyprus ("Company" or "we").
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For the purposes of personal data protection legislation, we act as the "data controller" regarding the personal data provided and processed through the website https://spotzyai.com and https://platform.spotzyai.com ("Site" or "Service").
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                These Terms govern your use of the Service and are a legally binding contract between you and the Company.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>By accessing or using the Service, you agree that you have read, understood, and are bound by these Terms. If you do not agree, you do not have our permission to use the Service.</strong>
              </p>
              <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
                <p className="text-muted-foreground leading-relaxed">
                  <strong>ARBITRATION NOTICE:</strong> Except for certain kinds of disputes described in Section 18, you agree that disputes arising under these Terms will be resolved by binding, individual arbitration, and BY ACCEPTING THESE TERMS, YOU AND SPOTZYAI ARE EACH WAIVING THE RIGHT TO A TRIAL BY JURY OR TO PARTICIPATE IN ANY CLASS ACTION OR REPRESENTATIVE PROCEEDING.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">2. Definitions</h2>
              <p className="text-muted-foreground leading-relaxed">
                The "Service" includes all aspects of the websites located at https://spotzyai.com and https://platform.spotzyai.com, including related subdomains or portals (whether publicly accessible or behind a login), and any features, functionality, or content provided on or through them. This may include, without limitation, our automated or AI-driven phone call platform ("SpotzyAI Platform"), any web-based dashboards, user interfaces, or API endpoints, and any materials or communications you receive from SpotzyAI in connection with those services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">3. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Your use of certain features or portions of the Service may be subject to additional guidelines, terms, or rules ("Additional Terms"), which are incorporated by reference into these Terms. If there is any conflict between these Terms and any Additional Terms, the Additional Terms will control unless they explicitly state otherwise.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to change these Terms at any time on a going-forward basis, and we will notify you of material changes (e.g., by email or through the Service). If a revision materially modifies your rights or obligations, you may be required to accept the modified Terms to continue using the Service. By continuing to use the Service after any changes become effective, you agree to the new Terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">4. Eligibility</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By using the Service, you represent and warrant that:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>You are at least 18 years old (or the age of majority in your jurisdiction) or you have the express permission of a parent or legal guardian who has read and agreed to these Terms</li>
                <li>You have not been previously suspended or removed from the Service</li>
                <li>Your registration, use of the Service, and these Terms comply with all applicable laws, rules, and regulations</li>
                <li>If you are using the Service on behalf of a company or organization, you have the authority to bind that entity</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">5. Account Registration</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You may be required to create an account to access certain features of the Service. You agree to:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
                <li>Provide accurate and current information</li>
                <li>Keep such information updated</li>
                <li>Maintain the confidentiality of your login credentials</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You are responsible for all activity that occurs under your account, whether authorized by you or not. Notify us immediately at <strong>info@spotzyai.com</strong> if you suspect unauthorized use.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to suspend, restrict, or terminate your account or access to the Service at any time, for any or no reason, with or without notice.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">6. License to Use the Service</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Subject to your compliance with these Terms, SpotzyAI grants you a limited, revocable, non-exclusive, non-transferable, and non-sublicensable license to access and use the Service for your internal purposes, including business use, strictly in accordance with the Service's documentation and features.
              </p>

              <h3 className="text-2xl font-semibold mb-3">6.1 Restrictions</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You will not, except as expressly permitted under applicable law or by these Terms:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
                <li>Reverse engineer, decompile, disassemble, or attempt to discover the source code of the Service</li>
                <li>Modify, adapt, translate, or create derivative works based on the Service</li>
                <li>Rent, lease, loan, sell, sublicense, assign, distribute, publish, transfer, or otherwise make available the Service</li>
                <li>Use the Service for any illegal or unauthorized purpose, or in violation of any applicable laws</li>
                <li>Remove, obscure, or alter any proprietary rights notices on or in the Service</li>
                <li>Access or use the Service to build a competing product or service</li>
                <li>Use any automated means (including bots, scrapers, or spiders) to access the Service</li>
                <li>Attempt to circumvent any security measures or technological protections of the Service</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3">6.2 Ownership</h3>
              <p className="text-muted-foreground leading-relaxed">
                All right, title, and interest (including all intellectual property rights) in and to the Service, including any software, code, content, and other materials therein, is owned by SpotzyAI or its licensors. Nothing in these Terms grants you any right, title, or interest in or to any trademarks, service marks, logos, or domain names associated with or owned by SpotzyAI.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">7. Use of the SpotzyAI Platform</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Service may include access to a specialized platform for creating or scheduling automated, artificial intelligence-driven, or pre-recorded phone calls to your contacts (the "SpotzyAI Platform"). You acknowledge and agree that:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>You are solely responsible for all calls initiated via the SpotzyAI Platform and for compliance with all applicable telecommunications laws and regulations</li>
                <li>SpotzyAI provides the technology platform, but you control the content, timing, and recipients of all calls</li>
                <li>SpotzyAI makes no representations or warranties regarding the legal compliance or appropriateness of your use of the Platform</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">8. Fees and Payment</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Certain features of the Service may only be available through a paid subscription or usage-based fees ("Paid Plans"). By signing up for a Paid Plan, you agree to pay all applicable fees, including all taxes and surcharges, in accordance with the billing terms in effect.
              </p>

              <h3 className="text-2xl font-semibold mb-3">8.1 Payment Methods</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You must provide a valid credit card or other acceptable payment method to pay any fees owed. By providing SpotzyAI with your payment information, you authorize us to charge your payment method for the applicable fees when due.
              </p>

              <h3 className="text-2xl font-semibold mb-3">8.2 Automatic Renewal</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Unless otherwise stated in your plan, Paid Plans automatically renew at the end of the current subscription term for a renewal term of the same length, and you will be charged the then-current subscription fee unless you cancel prior to the renewal date.
              </p>

              <h3 className="text-2xl font-semibold mb-3">8.3 Refund Policy</h3>
              <p className="text-muted-foreground leading-relaxed">
                Except as required by law or expressly stated in Additional Terms, <strong>all fees are non-refundable</strong>. This includes any fees paid in advance for the entire subscription term.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">9. Legal Compliance</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You agree to comply with all applicable laws, regulations, and industry guidelines when using the Service, including the SpotzyAI Platform. This includes, but is not limited to:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
                <li><strong>Telecommunications regulations</strong> (e.g., GDPR in the EU, Cyprus telecommunications laws, TCPA in the United States, CASL in Canada)</li>
                <li><strong>Anti-spam laws</strong> and regulations regarding unsolicited commercial communications</li>
                <li><strong>Data protection and privacy laws</strong> (including obtaining proper consent for processing personal data)</li>
                <li><strong>Do-Not-Call registries</strong> and honoring opt-out requests</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                <strong>You are solely responsible for</strong> (a) obtaining any legally required consent from your contacts, including (where required) written consent for automated or pre-recorded calls; (b) providing appropriate disclosures; and (c) honoring any "do-not-call" requests or opt-outs.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">10. User Content</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Some features of the Service may allow you to upload, post, or transmit content, such as call scripts or audio files ("User Content"). You represent and warrant that you own or have the necessary rights to submit such User Content and that doing so does not violate any laws or infringe any third-party rights.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You retain ownership of your User Content. By uploading User Content, you grant SpotzyAI a worldwide, royalty-free, non-exclusive, transferable license to use, store, reproduce, and display the content as necessary to provide and improve the Service.
              </p>

              <h3 className="text-2xl font-semibold mb-3">10.1 Prohibited Content</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You will not submit content that:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Is illegal, fraudulent, threatening, abusive, harassing, defamatory, obscene, or otherwise objectionable</li>
                <li>Infringes any patent, trademark, trade secret, copyright, or other proprietary rights of any party</li>
                <li>Contains viruses, malware, or other harmful computer code</li>
                <li>Violates any applicable law or regulation</li>
                <li>Impersonates any person or entity</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">11. Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To the fullest extent permitted by law, you agree to defend, indemnify, and hold harmless SpotzyAI, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, and agents from and against any and all claims, liabilities, damages, judgments, awards, losses, costs, and expenses (including reasonable attorneys' fees) arising out of or relating to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Your access to or use of the Service</li>
                <li>Your User Content</li>
                <li>Your violation of these Terms or any Additional Terms</li>
                <li>Your violation of any third-party rights, including intellectual property rights or privacy rights</li>
                <li>Your violation of any applicable laws or regulations, including telecommunications regulations</li>
                <li>Any use of the SpotzyAI Platform or the Service by any person using your account or credentials</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">12. Disclaimers</h2>
              <div className="p-4 bg-muted/30 border border-border rounded-lg mb-4">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>EXCEPT AS EXPRESSLY STATED IN AN ADDITIONAL WRITTEN AGREEMENT BETWEEN YOU AND SPOTZYAI, AND TO THE FULLEST EXTENT PERMITTED BY LAW, THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT ANY WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED.</strong>
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>SPOTZYAI MAKES NO REPRESENTATIONS OR WARRANTIES:</strong>
                </p>
              </div>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>That the Service will meet your requirements or be available on an uninterrupted, secure, or error-free basis</li>
                <li>About the accuracy, completeness, quality, or reliability of any content, information, or services obtained through the Service</li>
                <li>That the Service or any servers or communications are free of viruses or other harmful components</li>
                <li>Regarding the results you may obtain from using the Service or the accuracy, reliability, or success rate of any calls placed through the SpotzyAI Platform</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">13. Limitation of Liability</h2>
              <div className="p-4 bg-muted/30 border border-border rounded-lg mb-4">
                <p className="text-muted-foreground leading-relaxed">
                  <strong>TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT WILL THE SPOTZYAI ENTITIES BE LIABLE TO YOU FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS, REVENUES, GOODWILL, BUSINESS OPPORTUNITIES, OR DATA ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE.</strong>
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                <strong>TO THE FULLEST EXTENT PERMITTED BY LAW, THE AGGREGATE LIABILITY OF THE SPOTZYAI ENTITIES FOR ALL CLAIMS ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICE IS LIMITED TO THE GREATER OF:</strong>
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                <li>The total amount of fees you paid to SpotzyAI in the 12 months immediately preceding the event giving rise to the liability; or</li>
                <li>€100 (one hundred euros)</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">14. Term and Termination</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                These Terms are effective as of the date you first access or use the Service and remain in full force and effect until terminated in accordance with these Terms.
              </p>

              <h3 className="text-2xl font-semibold mb-3">14.1 Termination by SpotzyAI</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                SpotzyAI may, at its sole discretion, suspend or terminate your account or your access to all or part of the Service at any time, with or without notice, for any or no reason.
              </p>

              <h3 className="text-2xl font-semibold mb-3">14.2 Termination by You</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                If you wish to terminate your account or any Paid Plan, you may do so in accordance with your account settings or by contacting us at <strong>info@spotzyai.com</strong>. Unless otherwise provided in Additional Terms, no refunds (full or partial) will be issued if you terminate your account prior to the end of your subscription term.
              </p>

              <h3 className="text-2xl font-semibold mb-3">14.3 Effect of Termination</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Upon any termination of these Terms:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>All licenses and rights granted to you in these Terms will immediately terminate</li>
                <li>You must immediately cease all use of the Service</li>
                <li>SpotzyAI may delete your account and any data associated with it</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">15. Governing Law and Dispute Resolution</h2>
              
              <h3 className="text-2xl font-semibold mb-3">15.1 Governing Law</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                These Terms (and any dispute or claim arising out of or in connection with them) shall be governed by and construed in accordance with the <strong>laws of Cyprus</strong>. The competent courts of Cyprus shall have exclusive jurisdiction over any disputes arising from or related to these Terms.
              </p>

              <h3 className="text-2xl font-semibold mb-3">15.2 Arbitration Agreement</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Except for certain types of disputes described below, or if otherwise prohibited by law, you and the Company agree that any dispute, claim, or controversy arising out of or relating to these Terms or the use of the Service will be resolved solely by binding, individual arbitration under Cyprus law.
              </p>
              <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
                <p className="text-muted-foreground leading-relaxed">
                  <strong>YOU AND SPOTZYAI ARE EACH WAIVING THE RIGHT TO A TRIAL BY JURY OR TO PARTICIPATE IN A CLASS ACTION.</strong>
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">16. Privacy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Your use of the Service is subject to SpotzyAI's Privacy Policy, which explains how we collect, use, and protect your personal information.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>SPOTZY TECH LTD</strong> acts as the "data controller" for purposes of applicable personal data protection legislation, including the GDPR, regarding the personal data you provide or that is processed through the Service. By using the Service, you acknowledge that you have read and understand our <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">17. General Provisions</h2>
              
              <h3 className="text-2xl font-semibold mb-3">17.1 Entire Agreement</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                These Terms (including all Additional Terms) constitute the entire agreement between you and SpotzyAI regarding the Service, and supersede any prior agreements, written or oral, relating to the same subject matter.
              </p>

              <h3 className="text-2xl font-semibold mb-3">17.2 Notices</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may provide notices to you under these Terms by email, a posting on the Service, or other reasonable means. Notices to the Company must be sent by email to <strong>info@spotzyai.com</strong> or to our registered address:
              </p>
              <p className="text-muted-foreground leading-relaxed mb-2">
                <strong>SPOTZY TECH LTD</strong>
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Austrias 6, 3083<br />
                Limassol, Cyprus<br />
                Email: info@spotzyai.com
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">18. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Service is offered by <strong>SPOTZY TECH LTD</strong>, operating as SpotzyAI.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                You may contact us by emailing <strong>info@spotzyai.com</strong>.
              </p>
            </section>

            <div className="border-t border-border pt-8 mt-12">
              <p className="text-center text-muted-foreground leading-relaxed mb-4">
                <strong>BY ACCESSING OR USING THE SERVICE, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS, AND YOU REPRESENT THAT YOU HAVE THE LEGAL CAPACITY TO ENTER INTO THESE TERMS.</strong>
              </p>
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

export default TermsOfService;