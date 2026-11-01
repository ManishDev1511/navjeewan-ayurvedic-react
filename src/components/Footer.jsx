import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = CURRENT_YEAR;

  return (
    <footer className="ayurveda-footer mt-5 pt-5 text-white d-print-none">
      <div className="container pb-4">
        <div className="row g-4">
          {/* Clinic Brand & Info */}
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center gap-3 mb-3">
              <img
                src="/images/navjeewan-logo.png"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/navjeewan-logo.svg';
                }}
                alt="Nav Jeevan Ayurvedic Upchar Kendra Logo"
                className="rounded-circle shadow-sm"
                style={{
                  width: '56px',
                  height: '56px',
                  objectFit: 'cover',
                  border: '2.5px solid var(--ayur-gold)',
                  background: '#ffffff'
                }}
              />
              <div>
                <h5 className="mb-0 text-white font-cinzel">NAV JEEVAN AYURVEDIC</h5>
                <small className="text-gold-light">Upchar Kendra &amp; Panchakarma Centre</small>
                <span className="d-block text-light-muted" style={{ fontSize: '0.7rem' }}>
                  ॥ सर्वे सन्तु निरामयाः ॥ • Estd. 2011
                </span>
              </div>
            </div>
            <p className="text-light-muted mb-3">{t('footerAbout')}</p>
            <div className="d-flex gap-2 social-links">
              <a
                href="https://www.facebook.com/p/Nav-Jeevan-Ayurvedic-Upchar-Kendra-100093061388826/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                title="Follow us on Facebook"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a
                href="https://wa.me/919795578700"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                title="Chat on WhatsApp"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a href="tel:+919795578700" className="social-icon" title="Direct Call">
                <i className="fa-solid fa-phone"></i>
              </a>
              <a href="mailto:navjeewanayurvedic@gmail.com" className="social-icon" title="Send Email">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h5 className="footer-heading font-cinzel mb-3">{t('quickLinks')}</h5>
            <ul className="list-unstyled footer-nav">
              <li><Link to="/">{t('navHome')}</Link></li>
              <li><Link to="/about">{t('navAbout')}</Link></li>
              <li><Link to="/treatments">{t('navTreatments')}</Link></li>
              <li><Link to="/dosha-quiz">{t('navDoshaQuiz')}</Link></li>
              <li><Link to="/book">{t('navBook')}</Link></li>
              <li><Link to="/status">{t('navTrack')}</Link></li>
            </ul>
          </div>

          {/* Key Treatments */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-heading font-cinzel mb-3">{t('keyTreatments')}</h5>
            <ul className="list-unstyled footer-nav">
              <li><Link to="/treatment/nadi-pariksha">Nadi Pariksha (Pulse Exam)</Link></li>
              <li><Link to="/treatment/panchakarma-detox">Panchakarma Bio-Cleansing</Link></li>
              <li><Link to="/treatment/sandhi-vata-joint-care">Joint, Spine &amp; Arthritis Care</Link></li>
              <li><Link to="/treatment/physiotherapy-marma-rehab">Physiotherapy &amp; Rehabilitation</Link></li>
              <li><Link to="/treatment/shirodhara-stress-relief">Shirodhara &amp; Mental Peace</Link></li>
              <li><Link to="/treatment/kayachikitsa-skin-allergies">Psoriasis &amp; Skin Allergies</Link></li>
            </ul>
          </div>

          {/* Timings & Contact */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-heading font-cinzel mb-3">{t('timingsHeading')}</h5>
            <div className="timings-box p-3 rounded-3 mb-3 bg-dark-green-glass">
              <div className="d-flex justify-content-between mb-1">
                <span className="text-gold">Monday - Sunday:</span>
              </div>
              <div className="small text-light">09:00 AM - 08:30 PM</div>
              <div className="small text-light mb-2">Emergency / 24x7 Support Available</div>
              <div className="d-flex justify-content-between mb-1">
                <span className="text-gold">Official Address:</span>
              </div>
              <div className="small text-light">
                Siktaur Chauraha, Deoria Bypass Road, Ramgarhtal, Gorakhpur, UP
              </div>
            </div>
            <div className="contact-pill small mb-2">
              <i className="fa-solid fa-phone text-gold me-2"></i> 097955 78700
            </div>
            <div className="contact-pill small mb-2">
              <i className="fa-solid fa-envelope text-gold me-2"></i> navjeewanayurvedic@gmail.com
            </div>
            <div className="contact-pill small mb-2">
              <i className="fa-solid fa-globe text-gold me-2"></i> navjeevanaayurvedik.com
            </div>
            <a
              href="https://www.facebook.com/p/Nav-Jeevan-Ayurvedic-Upchar-Kendra-100093061388826/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-outline-light rounded-pill w-100 text-truncate"
            >
              <i className="fa-brands fa-facebook me-1 text-info"></i> Visit Facebook Page
            </a>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        <div className="d-flex flex-wrap justify-content-between align-items-center text-sm text-light-muted">
          <div>
            &copy; {currentYear} <strong>Nav Jeevan Ayurvedic Upchar Kendra</strong>. Siktaur, Gorakhpur. {t('rightsReserved')}
          </div>
          <div>
            <span className="me-3">सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः</span>
            <Link to="/privacy" className="text-light-muted">
              {t('privacyPolicy')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
