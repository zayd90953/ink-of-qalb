import React, { useState } from 'react';
import { Instagram, Facebook, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: { name?: string; email?: string; message?: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-white text-black">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          <div>
            <h2 className="font-serif text-5xl md:text-7xl mb-8 tracking-tighter">Get In Touch</h2>
            <p className="text-lg font-light text-gray-800 mb-12 max-w-sm">
              Collaborations, inquiries, or just to say hello. We are always listening.
            </p>

            <div className="space-y-4">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=inkofqalb@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-xl font-serif hover:text-gray-600 transition-colors"
              >
                <Mail size={24} />
                <span>inkofqalb@gmail.com</span>
              </a>
              <div className="flex gap-6 mt-8">
                <a
                  href="https://www.instagram.com/inkofqalb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-black rounded-full hover:bg-black hover:text-white transition-colors duration-300"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.facebook.com/share/1E28U4jrx3/"
                  target="_blank"
                    rel="noopener noreferrer"
                  className="p-3 border border-black rounded-full hover:bg-black hover:text-white transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-end">
            <form
              action="https://formspree.io/f/mdaldeoa"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-8"
            >
              <div className="relative border-b border-black/20 focus-within:border-black transition-colors">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-transparent py-4 text-xl outline-none placeholder:text-gray-400 ${errors.name ? 'border-b-2 border-red-500' : ''}`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              <div className="relative border-b border-black/20 focus-within:border-black transition-colors">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-transparent py-4 text-xl outline-none placeholder:text-gray-400 ${errors.email ? 'border-b-2 border-red-500' : ''}`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              <div className="relative border-b border-black/20 focus-within:border-black transition-colors">
                <textarea
                  rows={3}
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full bg-transparent py-4 text-xl outline-none placeholder:text-gray-400 resize-none ${errors.message ? 'border-b-2 border-red-500' : ''}`}
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>
              <fieldset className="mb-4">
                <legend className="block text-sm font-sans text-gray-300 mb-2">
                  I agree to the processing of my data as described in the{' '}
                  <a href="/privacy" className="text-white underline hover:text-gray-300" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                  .
                </legend>
                <input
                  type="checkbox"
                  id="formConsent"
                  name="consent"
                  required
                  aria-required="true"
                  className="mr-2 h-4 w-4 accent-black"
                />
                <label htmlFor="formConsent" className="text-sm font-sans text-gray-300">
                  I consent to having this website store and process the information I submit through this form.
                </label>
              </fieldset>
              <button type="submit" className="w-full md:w-auto bg-black text-white px-10 py-4 text-sm uppercase tracking-widest hover:bg-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black">
                Send Message
              </button>
              {submitted && <p className="text-green-600 text-sm mt-2" role="status" aria-live="polite">Message sent successfully!</p>}
            </form>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest text-gray-400">
          <div>
            <p>© {new Date().getFullYear()} Ink Of Qalb. All rights reserved.</p>
            <p className="mt-1 text-gray-400">
              Ink Of Qalb — Creative Products & Digital Art
            </p>
            <p className="mt-1 text-gray-400">
              Email: <a href="mailto:inkofqalb@gmail.com" className="text-gray-400 underline hover:text-white">inkofqalb@gmail.com</a>
            </p>
          </div>
          <div className="flex gap-8 mt-4 md:mt-0 flex-wrap justify-center">
            <a href="/privacy" className="hover:text-black">Privacy Policy</a>
            <a href="/terms" className="hover:text-black">Terms & Conditions</a>
            <a href="/cookies" className="hover:text-black">Cookie Policy</a>
            <a href="/refund" className="hover:text-black">Refund Policy</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;