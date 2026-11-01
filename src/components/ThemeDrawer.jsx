import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export const ThemeDrawer = () => {
  const { theme, color, setTheme, setColor, isThemeDrawerOpen, closeThemeDrawer } = useTheme();
  const { lang, changeLanguage } = useLanguage();

  if (!isThemeDrawerOpen) return null;

  const colorPresets = [
    { id: 'forest', name: 'Forest Green (Default)', hex: '#0b492c', desc: 'Classical Neem & Tulsi' },
    { id: 'gold', name: 'Royal Gold', hex: '#c68a18', desc: 'Ayurvedic Swarna Bhasma' },
    { id: 'sandalwood', name: 'Sandalwood Warmth', hex: '#a85d26', desc: 'Chandan & Rakta Chandana' },
    { id: 'bronze', name: 'Vedic Bronze', hex: '#7c5835', desc: 'Kansa & Copper Rejuvenation' }
  ];

  return (
    <>
      <div
        className="offcanvas-backdrop fade show"
        style={{ zIndex: 1045 }}
        onClick={closeThemeDrawer}
      ></div>

      <div
        className="offcanvas offcanvas-end show theme-offcanvas shadow-lg d-print-none"
        tabIndex="-1"
        style={{ zIndex: 1050, visibility: 'visible', width: '380px', maxWidth: '90vw' }}
        aria-labelledby="themeOffcanvasLabel"
      >
        <div className="offcanvas-header border-bottom py-3">
          <div className="d-flex align-items-center gap-2">
            <div className="theme-icon-badge">
              <i className="fa-solid fa-wand-magic-sparkles text-gold"></i>
            </div>
            <div>
              <h5 className="offcanvas-title font-cinzel fw-bold mb-0" id="themeOffcanvasLabel">
                Theme &amp; Colors
              </h5>
              <small className="text-muted">Personalize clinic appearance</small>
            </div>
          </div>
          <button
            type="button"
            className="btn-close"
            onClick={closeThemeDrawer}
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body p-4">
          {/* Language Selection */}
          <div className="mb-4 pb-3 border-bottom notranslate" translate="no">
            <label className="form-label fw-bold small text-uppercase tracking-wider text-muted mb-2">
              <i className="fa-solid fa-language me-1 text-gold"></i> भाषा / Language
            </label>
            <div className="row g-2">
              <div className="col-6">
                <button
                  type="button"
                  className={`btn w-100 lang-card-btn text-start p-2.5 border rounded-3 position-relative ${
                    lang === 'en' ? 'active' : ''
                  }`}
                  onClick={() => changeLanguage('en')}
                >
                  <div className="d-flex align-items-center justify-content-between mb-1">
                    <span className="fs-5 text-gold"><i className="fa-solid fa-globe"></i></span>
                    {lang === 'en' && <i className="fa-solid fa-circle-check text-gold check-indicator fs-5"></i>}
                  </div>
                  <span className="fw-bold d-block small">English</span>
                  <small className="text-muted d-block" style={{ fontSize: '0.72rem' }}>
                    Default Language
                  </small>
                </button>
              </div>

              <div className="col-6">
                <button
                  type="button"
                  className={`btn w-100 lang-card-btn text-start p-2.5 border rounded-3 position-relative ${
                    lang === 'hi' ? 'active' : ''
                  }`}
                  onClick={() => changeLanguage('hi')}
                >
                  <div className="d-flex align-items-center justify-content-between mb-1">
                    <span className="fs-5 text-gold"><i className="fa-solid fa-language"></i></span>
                    {lang === 'hi' && <i className="fa-solid fa-circle-check text-gold check-indicator fs-5"></i>}
                  </div>
                  <span className="fw-bold d-block small">हिन्दी (Hindi)</span>
                  <small className="text-muted d-block" style={{ fontSize: '0.72rem' }}>
                    सम्पूर्ण वेबसाइट हिन्दी में
                  </small>
                </button>
              </div>
            </div>
          </div>

          {/* Theme Mode Selection */}
          <div className="mb-4">
            <label className="form-label fw-bold small text-uppercase tracking-wider text-muted mb-2">
              <i className="fa-solid fa-circle-half-stroke me-1 text-gold"></i> Theme Mode
            </label>
            <div className="row g-2">
              <div className="col-6">
                <button
                  type="button"
                  className={`btn w-100 theme-mode-card ${theme === 'light' ? 'active' : ''}`}
                  onClick={() => setTheme('light')}
                >
                  <i className="fa-solid fa-sun fs-4 text-warning mb-1 d-block"></i>
                  <span className="fw-bold d-block small">Light Mode</span>
                  <small className="text-muted d-block" style={{ fontSize: '0.72rem' }}>
                    Calm Cream &amp; Herbal
                  </small>
                </button>
              </div>
              <div className="col-6">
                <button
                  type="button"
                  className={`btn w-100 theme-mode-card ${theme === 'dark' ? 'active' : ''}`}
                  onClick={() => setTheme('dark')}
                >
                  <i className="fa-solid fa-moon fs-4 text-info mb-1 d-block"></i>
                  <span className="fw-bold d-block small">Dark Mode</span>
                  <small className="text-muted d-block" style={{ fontSize: '0.72rem' }}>
                    Sleek Deep Ayurvedic
                  </small>
                </button>
              </div>
            </div>
          </div>

          {/* Accent Color Palette */}
          <div className="mb-4">
            <label className="form-label fw-bold small text-uppercase tracking-wider text-muted mb-2">
              <i className="fa-solid fa-palette me-1 text-gold"></i> Accent Color Palette
            </label>
            <div className="d-flex flex-column gap-2">
              {colorPresets.map((preset) => (
                <button
                  key={preset.id}
                  type="button"
                  className={`btn color-preset-card text-start d-flex align-items-center gap-3 p-2.5 border rounded-3 ${
                    color === preset.id ? 'active' : ''
                  }`}
                  onClick={() => setColor(preset.id)}
                >
                  <div
                    className="color-swatch-circle rounded-circle shadow-sm flex-shrink-0"
                    style={{
                      width: '28px',
                      height: '28px',
                      backgroundColor: preset.hex,
                      border: '2px solid rgba(255,255,255,0.8)'
                    }}
                  ></div>
                  <div className="flex-grow-1">
                    <span className="fw-bold d-block small">{preset.name}</span>
                    <small className="text-muted d-block" style={{ fontSize: '0.72rem' }}>
                      {preset.desc}
                    </small>
                  </div>
                  {color === preset.id && (
                    <i className="fa-solid fa-check text-gold me-1"></i>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Reset Button */}
          <div className="pt-2 border-top">
            <button
              type="button"
              className="btn btn-outline-secondary btn-sm w-100 rounded-pill"
              onClick={() => {
                setTheme('light');
                setColor('forest');
              }}
            >
              <i className="fa-solid fa-rotate-left me-1"></i> Reset to Default
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
