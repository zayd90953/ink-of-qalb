import React from 'react';
import { Link } from 'react-router-dom';

const CookiesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24 px-6 md:px-12 pb-24">
      <div className="max-w-4xl mx-auto prose prose-invert">
        <h1 className="text-4xl md:text-5xl font-serif mb-8">Cookie Policy</h1>
        <p className="text-gray-400 text-sm mb-8">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-serif text-white mb-4">1. What Are Cookies?</h2>
          <p className="text-gray-400 leading-relaxed">
            Cookies are small text files that are stored on your device (computer or mobile) when you visit a website. They help the website
            remember your actions and preferences (such as login details, language, font size, and other display preferences) over a period of time.
            This means you don't have to re-enter them each time you visit the site or navigate between pages.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif text-white mb-4">2. Our Use of Cookies</h2>
          <p className="text-gray-400 leading-relaxed">
            Our website uses the following categories of cookies:
          </p>
          <ul className="text-gray-400 list-disc list-inside space-y-2 mb-4">
            <li><strong>Essential Cookies</strong> — These cookies are strictly necessary. They enable core functionality such as remembering your cookie consent preference. Without these cookies, the website cannot function properly.</li>
            <li><strong>Analytics Cookies</strong> — We do <em>not</em> currently use analytics tracking cookies (such as Google Analytics) on this website.</li>
            <li><strong>Marketing Cookies</strong> — We do <em>not</em> use marketing or advertising cookies at this time.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif text-white mb-4">3. Third-Party Cookies</h2>
          <p className="text-gray-400 leading-relaxed">
            While we do not set cookies directly from third parties, some third-party services connected to our website may set their own cookies:
          </p>
          <ul className="text-gray-400 list-disc list-inside space-y-2 mb-4">
            <li><strong>Google Fonts</strong> — May set cookies to manage font loading preferences.</li>
            <li><strong>Formspree</strong> — May set cookies for form submission functionality.</li>
            <li><strong>Gumroad</strong> — External e-commerce platform with its own cookie policy.</li>
            <li><strong>Sanity.io</strong> — Content management platform that may use cookies for operational purposes.</li>
          </ul>
          <p className="text-gray-400 leading-relaxed">
            We have no control over third-party cookies. You should check the respective third-party websites for more information about their
            cookie practices and how to opt out.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif text-white mb-4">4. Cookie Consent</h2>
          <p className="text-gray-400 leading-relaxed">
            When you first visit our website, you will be asked to consent to our use of cookies through a cookie consent banner. You may choose
            to accept or reject non-essential cookies at any time. Your consent is valid for 90 days from the time of acceptance.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif text-white mb-4">5. Managing Cookies</h2>
          <p className="text-gray-400 leading-relaxed">
            You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer, and you can set most
            browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you
            visit a site, and some services and functionalities may not work.
          </p>
          <p className="text-gray-400 leading-relaxed">
            To manage cookies, use your browser settings. Common options include:
          </p>
          <ul className="text-gray-400 list-disc list-inside space-y-2 mb-4">
            <li><strong>Chrome</strong>: Settings → Privacy and security → Cookies and other site data</li>
            <li><strong>Firefox</strong>: Settings → Privacy & Security → Cookies and Site Data</li>
            <li><strong>Safari</strong>: Preferences → Privacy → Manage Website Data</li>
            <li><strong>Edge</strong>: Settings → Cookies and site permissions → Manage and delete cookies</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif text-white mb-4">6. Your Rights (GDPR / ePrivacy Directive)</h2>
          <p className="text-gray-400 leading-relaxed">
            Under the General Data Protection Regulation (GDPR) and the ePrivacy Directive, you have the right to:
          </p>
          <ul className="text-gray-400 list-disc list-inside space-y-2 mb-4">
            <li>Withdraw your consent at any time</li>
            <li>Request information about the cookies we use</li>
            <li>Request deletion of data collected through cookies</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif text-white mb-4">7. Changes to This Policy</h2>
          <p className="text-gray-400 leading-relaxed">
            We may update this Cookie Policy from time to time. We will notify you of any changes by updating the "Last updated" date on this page.
            Please review this policy periodically.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif text-white mb-4">8. Contact Us</h2>
          <p className="text-gray-400 leading-relaxed">
            If you have any questions about our Cookie Policy, please contact us:
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

export default CookiesPage;