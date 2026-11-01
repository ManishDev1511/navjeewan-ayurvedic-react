import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(() => {
    return localStorage.getItem('navjeewan_lang') || 'en';
  });

  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-lang', lang);
    localStorage.setItem('navjeewan_lang', lang);
  }, [lang]);

  const changeLanguage = (newLang) => {
    setLangState(newLang);
    const msg = newLang === 'hi' ? 'वेबसाइट हिन्दी में प्रदर्शित हो रही है' : 'Website language switched to English';
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const toggleLanguage = () => {
    changeLanguage(lang === 'en' ? 'hi' : 'en');
  };

  const t = (key, fallback = '') => {
    const dict = translations[lang] || translations.en;
    if (dict && dict[key] !== undefined) {
      return dict[key];
    }
    const defaultDict = translations.en;
    if (defaultDict && defaultDict[key] !== undefined) {
      return defaultDict[key];
    }
    return fallback || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, changeLanguage, toggleLanguage, t, toastMessage }}>
      {children}
      {toastMessage && (
        <div className="lang-notification-toast shadow-lg d-flex align-items-center gap-2 animate__animated animate__fadeInDown">
          <i className="fa-solid fa-language text-gold fs-5"></i>
          <span className="small fw-bold">{toastMessage}</span>
        </div>
      )}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
