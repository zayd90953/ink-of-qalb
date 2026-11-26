import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24 px-6 md:px-12 pb-24">
      <div className="max-w-4xl mx-auto prose prose-invert">
        <h1 className="text-4xl md:text-5xl font-serif mb-8">Privacy Policy</h1>
        <p className="text-gray-400 text-sm mb-8">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-serif text-white mb-4">1. Information We Collect</h2>
          <p className="text-gray-400 leading-relaxed">
            We collect personally identifiable information that you voluntarily provide to us when you contact us through our website.
            This may include your name, email address, and message content submitted through our contact form.
            We do not collect any personal data automatically when you visit our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif text-white mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-400 leading-relaxed">
            We use the information you provide to respond to your inquiries, improve our website, and communicate with you
            regarding products, services, or updates. Your data is processed securely and is not sold, rented, or traded
            to third parties for marketing purposes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif text-white mb-4">3. Data Sharing and Third Parties</h2>
          <p className="text-gray-400 leading-relaxed">
            We use the following third-party services that may process your data:
          </p>
          <ul className="text-gray-400 list-disc list-inside space-y-2 mb-4">
            <li><strong>Formspree</strong> — Handles contact form submissions. Your name, email, and message are sent to Formspree's servers to deliver them to us.</li>
            <li><strong>Sanity.io</strong> — Our content management system. We use it to manage and display product and wallpaper data. Only publicly published content is accessible.</li>
            <li><strong>Google Fonts</strong> — We load fonts from Google's servers for display purposes. Google may collect usage data for font requests.</li>
            <li><strong>Tailwind CSS CDN</strong> — We load styling utilities from a CDN for development purposes.</li>
            <li><strong>Gumroad</strong> — External platform where all product purchases are processed. We do not handle any payment information directly.</li>
          </ul>
          <p className="text-gray-400 leading-relaxed">
            We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except as described above.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif text-white mb-4">4. Data Retention</h2>
          <p className="text-gray-400 leading-relaxed">
            We retain your contact information for as long as necessary to respond to your inquiry and for our legitimate business purposes.
            You may request that we delete your data at any time by contacting us at the address below.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif text-white mb-4">5. Your Rights (GDPR)</h2>
          <p className="text-gray-400 leading-relaxed">
            If you are located in the European Economic Area (EEA) or the United Kingdom, you have the following rights:
          </p>
          <ul className="text-gray-400 list-disc list-inside space-y-2 mb-4">
            <li><strong>Right to Access</strong> — You can request a copy of the personal data we hold about you.</li>
            <li><strong>Right to Rectification</strong> — You can ask us to correct inaccurate or incomplete data.</li>
            <li><strong>Right to Erasure</strong> — You can ask us to delete your personal data.</li>
            <li><strong>Right to Restrict Processing</strong> — You can ask us to stop processing your data.</li>
            <li><strong>Right to Data Portability</strong> — You can request your data in a portable format.</li>
            <li><strong>Right to Object</strong> — You can object to the processing of your data, including for direct marketing.</li>
            <li><strong>Right to Withdraw Consent</strong> — You can withdraw consent at any time without affecting the lawfulness of prior processing.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif text-white mb-4">6. Cookies</h2>
          <p className="text-gray-400 leading-relaxed">
            We do not use cookies to track your behaviour on our website. Our website uses essential cookies only (via our cookie consent banner)
            to remember your consent preference. For more details, please read our <Link to="/cookies" className="text-white underline hover:text-gray-300">Cookie Policy</Link>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif text-white mb-4">7. Security</h2>
          <p className="text-gray-400 leading-relaxed">
            We take reasonable measures to protect your data. However, please note that no method of transmission over the internet
            or electronic storage is 100% secure. We cannot guarantee absolute security.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif text-white mb-4">8. Children's Privacy</h2>
          <p className="text-gray-400 leading-relaxed">
            Our website is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13.
            If we become aware that we have collected such information, we will delete it immediately.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif text-white mb-4">9. Changes to This Policy</h2>
          <p className="text-gray-400 leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page
            and updating the "Last updated" date. You are advised to review this policy periodically.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif text-white mb-4">10. Contact Us</h2>
          <p className="text-gray-400 leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <address className="text-gray-400 not-italic">
            <p>Ink Of Qalb</p>
            <p>Email: <a href="mailto:inkofqalb@gmail.com" className="text-white underline hover:text-gray-300">inkofqalb@gmail.com</a></p>
            <p>Instagram: <a href="https://www.instagram.com/inkofqalb" className="text-white underline hover:text-gray-300">@inkofqalb</a></p>
          </address>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;