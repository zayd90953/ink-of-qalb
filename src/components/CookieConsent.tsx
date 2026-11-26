import React, { useState, useEffect } from 'react';

const COOKIE_CONSENT_KEY = 'inkofqalb_cookie_consent';
const COOKIE_CONSENT_EXPIRY_DAYS = 90;

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!stored) {
      setIsVisible(true);
    } else {
      try {
        const { timestamp } = JSON.parse(stored);
        const expiryDate = new Date(timestamp);
        expiryDate.setDate(expiryDate.getDate() + COOKIE_CONSENT_EXPIRY_DAYS);
        if (new Date() > expiryDate) {
          setIsVisible(true);
        }
      } catch {
        setIsVisible(true);
      }
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify({
      accepted: true,
      timestamp: new Date().toISOString(),
    }));
    setIsVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify({
      accepted: false,
      timestamp: new Date().toISOString(),
    }));
    setIsVisible(false);
  };

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isVisible) {
        rejectCookies();
      }
    };

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white z-50 shadow-2xl"
      role="region"
      aria-label="Cookie consent"
      aria-live="polite"
    >
      <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4" style={{ paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 1rem)' }}>
        <div className="flex-1">
          <h3 className="font-serif text-lg text-white mb-1">We value your privacy</h3>
          <p className="text-gray-400 text-sm">
            This website uses essential cookies only to remember your consent preferences.
            We do not use tracking cookies, analytics, or advertising cookies. By clicking
            "Accept", you consent to the use of essential cookies as described in our{' '}
            <a href="/cookies" className="text-white underline hover:text-gray-300" target="_blank" rel="noopener noreferrer">Cookie Policy</a>.
          </p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={acceptCookies}
            className="bg-white text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
            aria-label="Accept cookies"
          >
            Accept
          </button>
          <button
            onClick={rejectCookies}
            className="bg-transparent border border-white/30 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
            aria-label="Reject non-essential cookies"
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;