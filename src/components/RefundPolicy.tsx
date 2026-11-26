import React from 'react';

const RefundPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24 px-6 md:px-12 pb-24">
      <div className="max-w-4xl mx-auto prose prose-invert">
        <h1 className="text-4xl md:text-5xl font-serif mb-8">Refund Policy</h1>
        <p className="text-gray-400 text-sm mb-8">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-serif text-white mb-4">1. Our Refund Policy</h2>
          <p className="text-gray-400 leading-relaxed">
            Ink Of Qalb is a creative brand that sells digital products and artistic goods. All products displayed on this
            website are sold through <strong>Gumroad</strong>, an external e-commerce platform. Ink Of Qalb does not directly
            process payments or handle financial transactions.
          </p>
          <p className="text-gray-400 leading-relaxed mt-4">
            Because we do not handle payments directly, refund requests must be directed to the platform where you made your
            purchase. By default, Gumroad allows refunds within <strong>60 days of purchase</strong> at the sole discretion
            of the seller.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif text-white mb-4">2. Digital Products</h2>
          <p className="text-gray-400 leading-relaxed">
            All products sold on this website are <strong>digital products</strong> (digital wallpapers, books, art files, etc.).
            Due to the nature of digital goods, refunds are handled at the discretion of the platform (Gumroad). Once a
            digital product has been downloaded or accessed, refunds may not be available depending on the platform's policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif text-white mb-4">3. How to Request a Refund</h2>
          <p className="text-gray-400 leading-relaxed">
            To request a refund:
          </p>
          <ol className="text-gray-400 list-decimal list-inside space-y-2 mb-4">
            <li>Identify the platform where you made your purchase (likely Gumroad).</li>
            <li>Log into your account on that platform.</li>
            <li>Navigate to your order history and select the order you wish to refund.</li>
            <li>Follow the platform's refund process or contact their support team.</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif text-white mb-4">4. Questions About Refunds</h2>
          <p className="text-gray-400 leading-relaxed">
            If you have questions about refunds or encounter issues with the refund process, please contact us:
          </p>
          <address className="text-gray-400 not-italic">
            <p>Ink Of Qalb</p>
            <p>Email: <a href="mailto:inkofqalb@gmail.com" className="text-white underline hover:text-gray-300">inkofqalb@gmail.com</a></p>
          </address>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif text-white mb-4">5. Changes to This Policy</h2>
          <p className="text-gray-400 leading-relaxed">
            We may update this Refund Policy from time to time. We will notify you of any changes by updating the "Last updated"
            date on this page. Please review this policy periodically.
          </p>
        </section>
      </div>
    </div>
  );
};

export default RefundPolicy;