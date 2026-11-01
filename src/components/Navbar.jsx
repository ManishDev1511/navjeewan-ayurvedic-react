import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { useApp } from '../context/AppContext';

export const Navbar = () => {
  const { lang, changeLanguage, t } = useLanguage();
  const { openThemeDrawer } = useTheme();
  const { isDoctorAuthenticated } = useApp();
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const toggleNav = () => setIsNavCollapsed(!isNavCollapsed);
  const closeNav = () => setIsNavCollapsed(true);

  return (
    <header className="sticky-top bg-white border-bottom shadow-sm d-print-none">
      <nav className="navbar navbar-expand-lg navbar-light py-1 py-lg-1.5">
        <div className="container-fluid px-3 px-lg-4 px-xxl-5">
          <Link
            to="/"
            className="navbar-brand d-flex align-items-center gap-2 gap-sm-2.5 me-lg-3 me-xl-4 notranslate py-0"
            onClick={closeNav}
          >
            <div className="brand-logo-container position-relative">
              <img
                src="/images/navjeewan-logo.png"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/navjeewan-logo.svg';
                }}
                alt="Nav Jeevan Ayurvedic Upchar Kendra Logo"
                className="brand-logo-img rounded-circle shadow-sm"
                style={{
                  width: '38px',
                  height: '38px',
                  objectFit: 'cover',
                  border: '2px solid var(--ayur-gold)',
                  background: '#ffffff'
                }}
              />
            </div>
            <div className="lh-1">
              <span className="brand-title d-block mb-0" style={{ fontSize: '1.1rem', letterSpacing: '1.2px' }}>
                NAV JEEVAN
              </span>
              <span className="brand-subtitle d-block" style={{ fontSize: '0.58rem', letterSpacing: '1.4px' }}>
                AYURVEDIC UPCHAR KENDRA
              </span>
            </div>
          </Link>

          <button
            className="navbar-toggler py-1 px-2"
            type="button"
            onClick={toggleNav}
            aria-controls="navbarContent"
            aria-expanded={!isNavCollapsed}
            aria-label="Toggle navigation"
            style={{ fontSize: '0.9rem' }}
          >
            <span className="navbar-toggler-icon" style={{ width: '1.2em', height: '1.2em' }}></span>
          </button>

          <div className={`collapse navbar-collapse ${!isNavCollapsed ? 'show' : ''}`} id="navbarContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
              <li className="nav-item">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  onClick={closeNav}
                  style={{ padding: '0.35rem 0.55rem', fontSize: '0.88rem' }}
                >
                  {t('navHome')}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  onClick={closeNav}
                  style={{ padding: '0.35rem 0.55rem', fontSize: '0.88rem' }}
                >
                  {t('navAbout')}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/treatments"
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  onClick={closeNav}
                  style={{ padding: '0.35rem 0.55rem', fontSize: '0.88rem' }}
                >
                  {t('navTreatments')}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/dosha-quiz"
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  onClick={closeNav}
                  style={{ padding: '0.35rem 0.55rem', fontSize: '0.88rem' }}
                >
                  <span className="badge bg-gold text-dark fw-bold me-1 py-0.5 px-1.5" style={{ fontSize: '0.68rem' }}>Free</span>
                  <span>{t('navDoshaQuiz')}</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  onClick={closeNav}
                  style={{ padding: '0.35rem 0.55rem', fontSize: '0.88rem' }}
                >
                  {t('navContact')}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/status"
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  onClick={closeNav}
                  style={{ padding: '0.35rem 0.55rem', fontSize: '0.88rem' }}
                >
                  {t('navTrack')}
                </NavLink>
              </li>
            </ul>

            <div className="navbar-action-buttons d-flex flex-wrap align-items-center gap-1.5 mt-2 mt-lg-0 ms-lg-3">
              {/* Language Switcher Pill */}
              <div className="lang-btn-group notranslate shadow-sm py-0.5 px-1" role="group" aria-label="Language Selector">
                <button
                  type="button"
                  className={`lang-pill-btn ${lang === 'en' ? 'active' : ''} py-1 px-2`}
                  onClick={() => changeLanguage('en')}
                  style={{ fontSize: '0.78rem' }}
                >
                  <span className="lang-flag">🇬🇧</span> <span className="lang-text">EN</span>
                </button>
                <button
                  type="button"
                  className={`lang-pill-btn ${lang === 'hi' ? 'active' : ''} py-1 px-2`}
                  onClick={() => changeLanguage('hi')}
                  style={{ fontSize: '0.78rem' }}
                >
                  <span className="lang-flag">🇮🇳</span> <span className="lang-text">हिन्दी</span>
                </button>
              </div>

              {/* Theme Customizer Button */}
              <button
                type="button"
                className="btn btn-outline-ayur-theme px-2.5 py-1.5 rounded-pill shadow-sm d-flex align-items-center gap-1"
                onClick={openThemeDrawer}
                title="Customize Theme & Color"
                style={{ fontSize: '0.8rem' }}
              >
                <i className="fa-solid fa-palette text-gold"></i>
                <span className="small fw-semibold">{t('navTheme')}</span>
              </button>

              {/* Book Appointment CTA */}
              <Link
                to="/book"
                className="btn btn-ayur-primary px-3 py-1.5 rounded-pill shadow-sm"
                onClick={closeNav}
                style={{ fontSize: '0.82rem', whiteSpace: 'nowrap' }}
              >
                <i className="fa-solid fa-calendar-check me-1"></i>
                <span>{t('navBook')}</span>
              </Link>

              {/* Doctor Portal or Login */}
              {isDoctorAuthenticated ? (
                <Link
                  to="/admin"
                  className="btn btn-success px-2.5 py-1.5 rounded-pill shadow-sm"
                  onClick={closeNav}
                  style={{ fontSize: '0.8rem', whiteSpace: 'nowrap' }}
                >
                  <i className="fa-solid fa-gauge me-1"></i>
                  <span>Portal</span>
                </Link>
              ) : (
                <Link
                  to="/admin/login"
                  className="btn btn-ayur-gold px-2.5 py-1.5 rounded-pill shadow-sm"
                  onClick={closeNav}
                  style={{ fontSize: '0.8rem', whiteSpace: 'nowrap' }}
                >
                  <i className="fa-solid fa-right-to-bracket me-1"></i>
                  <span>{t('navLogin')}</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
