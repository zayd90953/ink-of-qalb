import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24 px-6 md:px-12 pb-24">
      <div className="max-w-4xl mx-auto prose prose-invert">
        <h1 className="text-4xl md:text-5xl font-serif mb-8">Terms & Conditions</h1>
        <p className="text-gray-400 text-sm mb-8">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-serif text-white mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-400 leading-relaxed">
            By accessing and using the Ink Of Qalb website (the "Service"), you accept and agree to be bound by the provision of these
            Terms and Conditions. If you do not agree to these terms, you must not use our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif text-white mb-4">2. Use of Website</h2>
          <p className="text-gray-400 leading-relaxed">
            You agree to use our website only for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit
            the use and enjoyment of our website by any third party. You agree not to engage in any activity that interferes with or disrupts
            the website or the servers and networks connected to it.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif text-white mb-4">3. Intellectual Property</h2>
          <p className="text-gray-400 leading-relaxed">
            The content on this website, including but not limited to text, graphics, logos, images, and design elements, is the property of
            Ink Of Qalb and is protected by copyright and trademark laws. You may not reproduce, distribute, or commercially exploit any content
            from this website without our express written permission.
          </p>
          <p className="text-gray-400 leading-relaxed">
            All images sourced from Unsplash are licensed under the <a href="https://unsplash.com/license" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-gray-300">Unsplash License</a>
            and may be subject to the photographer's own terms. We do not claim ownership of any third-party images displayed on this website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif text-white mb-4">4. Product Information</h2>
          <p className="text-gray-400 leading-relaxed">
            All products displayed on this website are sold through external platforms (primarily Gumroad). Prices displayed are accurate at the
            time of publication but are subject to change. We do not process payments directly — all transactions are handled by the respective
            external platforms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif text-white mb-4">5. Refund Policy</h2>
          <p className="text-gray-400 leading-relaxed">
            Since all products are sold through external platforms (Gumroad), refunds are governed by the refund policies of those respective
            platforms. Ink Of Qalb does not directly process payments or handle refunds. For refund inquiries, please contact the platform
            where you made your purchase. By default, Gumroad allows refunds within 60 days of purchase at the sole discretion of the seller.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif text-white mb-4">6. Limitation of Liability</h2>
          <p className="text-gray-400 leading-relaxed">
            The materials on this website are provided on an "as is" basis. Ink Of Qalb makes no warranties, expressed or implied, and hereby
            disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability,
            fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif text-white mb-4">7. External Links</h2>
          <p className="text-gray-400 leading-relaxed">
            Our website contains links to third-party websites (including Gumroad, social media platforms, etc.) that are not owned or controlled
            by Ink Of Qalb. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party
            websites. By visiting these sites, you agree to be bound by their terms of service and privacy policies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif text-white mb-4">8. Governing Law</h2>
          <p className="text-gray-400 leading-relaxed">
            These Terms shall be governed and construed in accordance with the laws of your jurisdiction. You agree to submit to the exclusive
            jurisdiction of the courts located in your jurisdiction in any dispute arising out of or relating to these Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif text-white mb-4">9. Indemnification</h2>
          <p className="text-gray-400 leading-relaxed">
            You agree to indemnify and hold harmless Ink Of Qalb and its affiliates, officers, agents, partners, and employees from and against
            any claims, damages, obligations, losses, liabilities, costs, or debts, and expenses (including reasonable attorneys' fees) arising
            out of your use of or inability to use the Service, or your violation of these Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif text-white mb-4">10. Changes to Terms</h2>
          <p className="text-gray-400 leading-relaxed">
            We may modify these Terms at any time without prior notice. Your continued use of the website after changes are posted constitutes
            acceptance of those changes. You are advised to review these Terms periodically.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif text-white mb-4">11. Contact Us</h2>
          <p className="text-gray-400 leading-relaxed">
            If you have any questions about these Terms and Conditions, please contact us:
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

export default TermsAndConditions;