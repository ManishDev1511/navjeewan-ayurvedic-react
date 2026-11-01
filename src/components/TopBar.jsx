import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export const TopBar = () => {
  const { lang, changeLanguage, t } = useLanguage();

  return (
    <div className="top-bar py-2 d-print-none">
      <div className="container-fluid px-3 px-lg-4 px-xxl-5 d-flex flex-wrap justify-content-between align-items-center text-sm">
        <div className="d-flex align-items-center gap-3 top-bar-info">
          <span>
            <i className="fa-solid fa-location-dot text-gold me-1"></i>
            {t('addressShort')}
          </span>
          <span className="d-none d-md-inline">
            <i className="fa-solid fa-clock text-gold me-1"></i>
            {t('timingsShort')}
          </span>
        </div>

        <div className="d-flex align-items-center gap-3 top-bar-actions">
          {/* Top Announcement Language Switcher */}
          <div className="lang-switch-top notranslate" translate="no" title="भाषा चुनें / Select Language">
            <i className="fa-solid fa-language text-gold"></i>
            <button
              type="button"
              className={`lang-top-btn ${lang === 'en' ? 'active' : ''}`}
              onClick={() => changeLanguage('en')}
            >
              English
            </button>
            <span className="text-white-50">|</span>
            <button
              type="button"
              className={`lang-top-btn ${lang === 'hi' ? 'active' : ''}`}
              onClick={() => changeLanguage('hi')}
            >
              हिन्दी
            </button>
          </div>

          <a href="tel:+919795578700" className="top-link notranslate">
            <i className="fa-solid fa-phone me-1"></i> 097955 78700
          </a>
          <a
            href="https://wa.me/919795578700?text=Namaste%20Dr.%20Sharvan%20Kumar,%20I%20want%20to%20consult%20at%20Nav%20Jeevan%20Ayurvedic"
            target="_blank"
            rel="noopener noreferrer"
            className="top-link text-whatsapp notranslate"
          >
            <i className="fa-brands fa-whatsapp me-1"></i> WhatsApp
          </a>
          <a
            href="https://www.facebook.com/p/Nav-Jeevan-Ayurvedic-Upchar-Kendra-100093061388826/"
            target="_blank"
            rel="noopener noreferrer"
            className="top-link text-info d-none d-sm-inline"
          >
            <i className="fa-brands fa-facebook me-1"></i> Facebook Page
          </a>
          <Link
            to="/admin"
            className="doctor-portal-pill ms-1"
            title="Doctor & Staff Portal"
          >
            <span className="portal-icon-circle">
              <i className="fa-solid fa-user-doctor"></i>
            </span>
            <span>{t('navDoctorPortal')}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
