import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

export const TopBar = () => {
  const { lang, changeLanguage, t } = useLanguage();
  const { openThemeDrawer } = useTheme();

  return (
    <div className="top-bar py-1 py-sm-1.5 d-print-none">
      <div className="container-fluid px-2 px-sm-3 px-lg-4 px-xxl-5 d-flex flex-wrap justify-content-between align-items-center text-sm gap-1">
        <div className="d-flex align-items-center gap-2 gap-sm-3 top-bar-info text-nowrap">
          <span className="d-inline-flex align-items-center text-nowrap">
            <i className="fa-solid fa-location-dot text-gold me-1 flex-shrink-0"></i>
            <span className="d-none d-lg-inline">{t('addressFull')}</span>
            <span className="d-inline d-lg-none">{t('addressShort')}</span>
          </span>
          <span className="d-none d-md-inline text-nowrap">
            <i className="fa-solid fa-clock text-gold me-1"></i>
            {t('timingsShort')}
          </span>
        </div>

        <div className="d-flex align-items-center gap-2 gap-sm-3 top-bar-actions flex-shrink-0 ms-auto">
          {/* Top Announcement Language Switcher */}
          <div className="lang-switch-top notranslate" translate="no" title="भाषा चुनें / Select Language">
            <i className="fa-solid fa-language text-gold"></i>
            <button
              type="button"
              className={`lang-top-btn ${lang === 'en' ? 'active' : ''}`}
              onClick={() => changeLanguage('en')}
            >
              <span className="d-none d-sm-inline">English</span>
              <span className="d-inline d-sm-none">EN</span>
            </button>
            <span className="text-white-50">|</span>
            <button
              type="button"
              className={`lang-top-btn ${lang === 'hi' ? 'active' : ''}`}
              onClick={() => changeLanguage('hi')}
            >
              <span className="d-none d-sm-inline">हिन्दी</span>
              <span className="d-inline d-sm-none">हि</span>
            </button>
          </div>

          {/* Theme Quick Toggle */}
          <button
            type="button"
            className="top-theme-btn notranslate btn btn-link p-0 text-decoration-none d-inline-flex align-items-center"
            onClick={openThemeDrawer}
            title="Theme & Colors / रंग एवं थीम"
            aria-label="Customize Theme & Colors"
          >
            <i className="fa-solid fa-palette text-gold"></i>
          </button>

          <a href="tel:+919795578700" className="top-link notranslate">
            <i className="fa-solid fa-phone me-1"></i>
            <span className="d-none d-sm-inline">097955 78700</span>
            <span className="d-inline d-sm-none">Call</span>
          </a>
          <a
            href="https://wa.me/919795578700?text=Namaste%20Dr.%20Sharvan%20Kumar,%20I%20want%20to%20consult%20at%20Nav%20Jeevan%20Ayurvedic"
            target="_blank"
            rel="noopener noreferrer"
            className="top-link text-whatsapp notranslate d-none d-md-inline"
          >
            <i className="fa-brands fa-whatsapp me-1"></i> WhatsApp
          </a>
          <a
            href="https://www.facebook.com/p/Nav-Jeevan-Ayurvedic-Upchar-Kendra-100093061388826/"
            target="_blank"
            rel="noopener noreferrer"
            className="top-link text-info d-none d-lg-inline"
          >
            <i className="fa-brands fa-facebook me-1"></i> Facebook Page
          </a>
          <Link
            to="/admin"
            className="doctor-portal-pill ms-1 d-none d-sm-inline-flex"
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
