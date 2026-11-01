import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

export const FloatingActions = () => {
  const { lang, toggleLanguage } = useLanguage();
  const { openThemeDrawer } = useTheme();

  return (
    <>
      {/* Floating Language Switcher */}
      <button
        type="button"
        className="floating-lang-toggle notranslate d-print-none"
        translate="no"
        onClick={toggleLanguage}
        title="Switch Language: Hindi / English"
        aria-label="Switch Language"
      >
        <i className="fa-solid fa-language fs-5"></i>
        <span className="floating-lang-text">
          {lang === 'en' ? 'हिन्दी' : 'English'}
        </span>
        <span className="lang-tooltip">
          {lang === 'en' ? 'हिन्दी में पढ़ें' : 'Read in English'}
        </span>
      </button>

      {/* Floating Theme Switcher */}
      <button
        type="button"
        className="floating-theme-toggle d-print-none"
        onClick={openThemeDrawer}
        title="Customize Theme & Colors"
        aria-label="Customize Theme & Colors"
      >
        <i className="fa-solid fa-palette"></i>
        <span className="theme-tooltip">Theme &amp; Colors</span>
      </button>

      {/* Floating Action Button for WhatsApp */}
      <a
        href="https://wa.me/919795578700?text=Namaste%20Dr.%20Sharvan%20Kumar,%20I%20would%20like%20to%20consult%20at%20Nav%20Jeevan%20Ayurvedic"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp d-print-none notranslate"
        title="Chat with Dr. Sharvan Kumar on WhatsApp"
        aria-label="Chat with Dr. Sharvan Kumar on WhatsApp"
      >
        <i className="fa-brands fa-whatsapp"></i>
        <span className="wa-tooltip">Direct WhatsApp: 097955 78700</span>
      </a>
    </>
  );
};
