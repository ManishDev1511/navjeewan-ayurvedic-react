import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { treatmentsData } from '../data/treatmentsData';

export const HomePage = () => {
  const { t } = useLanguage();
  const featuredTreatments = treatmentsData.slice(0, 6);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section py-4 py-lg-5">
        <div className="container">
          <div className="row align-items-center g-4 g-lg-5">
            <div className="col-lg-7">
              {/* Facebook Verified & Rating Badge */}
              <div className="hero-badge mb-3 shadow-sm d-inline-flex flex-wrap align-items-center gap-2 p-2 px-3 rounded-pill bg-white border">
                <div className="d-flex align-items-center gap-2">
                  <i className="fa-brands fa-facebook text-primary fs-5"></i>
                  <span className="small">
                    Facebook: <strong>Nav Jeevan Upchar Kendra</strong>
                  </span>
                </div>
                <span className="badge bg-gold text-dark ms-auto ms-sm-1">
                  <i className="fa-solid fa-star me-1"></i>4.8 / 5 Rating
                </span>
              </div>

              <h1 className="hero-title mb-3">
                {t('heroTitlePart1')}
                <span
                  className="text-gold"
                  style={{
                    background: 'linear-gradient(135deg, #f5be38 0%, #c68a18 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  {t('heroTitlePart2')}
                </span>
                {t('heroTitlePart3')}
              </h1>

              <h2 className="h5 font-cinzel text-ayur-primary fw-bold mb-3">
                नवजीवन आयुर्वेदिक उपचार केंद्र एवं पंचकर्म (सिकटौर, गोरखपुर)
              </h2>

              <p className="lead text-ayur-text-muted mb-4 fs-6">
                {t('heroDesc')}
              </p>

              {/* Action Buttons: Sleek, proportional, responsive */}
              <div className="d-flex flex-wrap gap-2 gap-sm-3 mb-4 hero-cta-buttons position-relative">
                <Link
                  to="/book"
                  className="btn btn-ayur-primary px-3 px-sm-4 py-2 rounded-pill shadow-sm flex-fill flex-sm-grow-0 text-center"
                  style={{ fontSize: '0.9rem', whiteSpace: 'nowrap' }}
                >
                  <i className="fa-solid fa-calendar-check me-2"></i>
                  {t('btnBookOpd')}
                </Link>
                <a
                  href="https://wa.me/919795578700?text=Namaste%20Dr.%20Sharvan%20Kumar,%20I%20want%20to%20consult%20at%20Nav%20Jeevan%20Ayurvedic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ayur-outline px-3 px-sm-4 py-2 rounded-pill shadow-sm flex-fill flex-sm-grow-0 text-center"
                  style={{ fontSize: '0.9rem', whiteSpace: 'nowrap' }}
                >
                  <i className="fa-brands fa-whatsapp text-whatsapp me-2 fs-5 align-middle"></i>
                  097955 78700
                </a>
                <a
                  href="https://www.facebook.com/p/Nav-Jeevan-Ayurvedic-Upchar-Kendra-100093061388826/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary px-3 py-2 rounded-pill shadow-sm flex-fill flex-sm-grow-0 text-center"
                  title="Visit our official Facebook page"
                  style={{ fontSize: '0.9rem', whiteSpace: 'nowrap' }}
                >
                  <i className="fa-brands fa-facebook me-1"></i>
                  {t('btnFacebookPage')}
                </a>
              </div>

              {/* Trust Badges */}
              <div className="row g-3 pt-2">
                <div className="col-sm-4">
                  <div className="d-flex align-items-center gap-2">
                    <i className="fa-solid fa-award text-gold fs-3"></i>
                    <div>
                      <h6 className="mb-0 fw-bold">{t('statExp')}</h6>
                      <small className="text-muted">{t('statExpSub')}</small>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="d-flex align-items-center gap-2">
                    <i className="fa-solid fa-users text-gold fs-3"></i>
                    <div>
                      <h6 className="mb-0 fw-bold">{t('statCured')}</h6>
                      <small className="text-muted">{t('statCuredSub')}</small>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="d-flex align-items-center gap-2">
                    <i className="fa-solid fa-shield-virus text-gold fs-3"></i>
                    <div>
                      <h6 className="mb-0 fw-bold">{t('statPure')}</h6>
                      <small className="text-muted">{t('statPureSub')}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Doctor & Clinic Highlight Card */}
            <div className="col-lg-5">
              <div className="doctor-badge-card p-3 p-md-4 shadow-lg border bg-white rounded-4">
                {/* Doctor Portrait Header */}
                <div className="d-flex align-items-center gap-3 mb-3 p-2 bg-light rounded-4 border">
                  <div
                    className="position-relative overflow-hidden rounded-circle border border-3 border-white shadow-sm flex-shrink-0"
                    style={{ width: '80px', height: '80px' }}
                  >
                    <img
                      src="/images/dr-sharvan-kumar.png"
                      alt="Dr. Sharvan Kumar"
                      className="w-100 h-100"
                      style={{ objectFit: 'cover', objectPosition: '0% 50%' }}
                    />
                    <span
                      className="position-absolute bottom-0 end-0 bg-success border border-2 border-white rounded-circle"
                      style={{ width: '13px', height: '13px', zIndex: 2 }}
                      title="OPD Available"
                    ></span>
                  </div>
                  <div>
                    <span className="badge bg-gold text-dark fw-bold mb-1" style={{ fontSize: '0.75rem' }}>
                      {t('badgeDoctorClinic')}
                    </span>
                    <h5 className="font-cinzel fw-bold mb-0 text-ayur-primary">
                      {t('doctorName')}
                    </h5>
                    <div className="small fw-bold text-dark" style={{ fontSize: '0.78rem' }}>{t('doctorDegrees')}</div>
                    <div className="small text-muted" style={{ fontSize: '0.75rem' }}>
                      Senior Ayurvedic Doctor in Gorakhpur • Estd. 2011
                    </div>
                  </div>
                </div>

                {/* Clinic OPD Chamber Photo Banner */}
                <div
                  className="position-relative rounded-4 overflow-hidden mb-3"
                  style={{ height: '160px' }}
                >
                  <img
                    src="/images/clinic-opd-chamber.jpg"
                    alt="Nav Jeevan Clinic OPD Chamber"
                    className="w-100 h-100"
                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  />
                  <div
                    className="position-absolute bottom-0 start-0 end-0 p-2 px-3 text-white"
                    style={{ background: 'linear-gradient(to top, rgba(5,28,18,0.95), transparent)' }}
                  >
                    <span
                      className="badge bg-gold text-dark fw-bold mb-1 shadow-sm"
                      style={{ animation: 'goldPulse 2.8s infinite' }}
                    >
                      <i className="fa-solid fa-tag me-1"></i> {t('opdFee')}
                    </span>
                    <div className="fw-bold small text-white">{t('opdChamberTitle')}</div>
                  </div>
                </div>

                {/* Clinic Details List */}
                <div className="bg-light p-3 rounded-3 mb-3 border small">
                  <div className="d-flex justify-content-between align-items-center py-1 border-bottom">
                    <span className="text-muted"><i className="fa-solid fa-location-dot me-1.5 text-gold"></i> Location:</span>
                    <span className="fw-semibold text-end text-truncate ms-2" style={{ maxWidth: '180px' }}>
                      Siktaur Chauraha, Gorakhpur
                    </span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center py-1 border-bottom">
                    <span className="text-muted"><i className="fa-solid fa-clock me-1.5 text-ayur-primary"></i> OPD Hours:</span>
                    <span className="fw-semibold">Mon-Sun: 9:00 AM - 8:30 PM</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center py-1 border-bottom">
                    <span className="text-muted"><i className="fa-solid fa-phone me-1.5 text-ayur-primary"></i> Phone:</span>
                    <a href="tel:+919795578700" className="fw-bold text-ayur-primary text-decoration-none">097955 78700</a>
                  </div>
                  <div className="d-flex justify-content-between align-items-center py-1">
                    <span className="text-muted"><i className="fa-brands fa-facebook me-1.5 text-info"></i> Facebook:</span>
                    <a href="https://www.facebook.com/p/Nav-Jeevan-Ayurvedic-Upchar-Kendra-100093061388826/" target="_blank" rel="noopener noreferrer" className="fw-semibold text-primary text-decoration-none">
                      Nav Jeevan Official <i className="fa-solid fa-arrow-up-right-from-square small"></i>
                    </a>
                  </div>
                </div>

                <div className="d-grid gap-2">
                  <Link
                    to="/book"
                    className="btn btn-ayur-gold py-2 rounded-pill shadow-sm fw-bold text-dark text-center"
                    style={{ fontSize: '0.88rem' }}
                  >
                    <i className="fa-solid fa-calendar-plus me-1.5"></i> Book Appointment Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Foundations Section */}
      <section className="py-5 bg-white border-top border-bottom">
        <div className="container">
          <div className="text-center max-w-700 mx-auto mb-4">
            <span className="badge bg-gold-subtle text-gold px-3 py-1 rounded-pill mb-2">
              ॥ समग्र स्वास्थ्य ॥
            </span>
            <h2 className="font-cinzel fw-bold mb-2">{t('pillarsTitle')}</h2>
            <p className="text-muted small">{t('pillarsSubtitle')}</p>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="pillar-card text-center h-100 shadow-sm p-4 rounded-4 border">
                <div
                  className="treatment-icon-wrapper mx-auto mb-3"
                  style={{ width: '54px', height: '54px', fontSize: '1.4rem' }}
                >
                  <i className="fa-solid fa-fingerprint"></i>
                </div>
                <h6 className="fw-bold font-cinzel mb-2">{t('pillar1Title')}</h6>
                <p className="small text-muted mb-0">{t('pillar1Desc')}</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="pillar-card text-center h-100 shadow-sm p-4 rounded-4 border">
                <div
                  className="treatment-icon-wrapper mx-auto mb-3"
                  style={{ width: '54px', height: '54px', fontSize: '1.4rem' }}
                >
                  <i className="fa-solid fa-spa"></i>
                </div>
                <h6 className="fw-bold font-cinzel mb-2">{t('pillar2Title')}</h6>
                <p className="small text-muted mb-0">{t('pillar2Desc')}</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="pillar-card text-center h-100 shadow-sm p-4 rounded-4 border">
                <div
                  className="treatment-icon-wrapper mx-auto mb-3"
                  style={{ width: '54px', height: '54px', fontSize: '1.4rem' }}
                >
                  <i className="fa-solid fa-person-walking"></i>
                </div>
                <h6 className="fw-bold font-cinzel mb-2">{t('pillar3Title')}</h6>
                <p className="small text-muted mb-0">{t('pillar3Desc')}</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="pillar-card text-center h-100 shadow-sm p-4 rounded-4 border">
                <div
                  className="treatment-icon-wrapper mx-auto mb-3"
                  style={{ width: '54px', height: '54px', fontSize: '1.4rem' }}
                >
                  <i className="fa-solid fa-leaf"></i>
                </div>
                <h6 className="fw-bold font-cinzel mb-2">{t('pillar4Title')}</h6>
                <p className="small text-muted mb-0">{t('pillar4Desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Clinical Treatments Section */}
      <section className="py-5 bg-ayur-cream">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between align-items-end mb-4">
            <div>
              <span className="text-gold fw-bold text-uppercase tracking-wider small">
                Our Medical Specialities
              </span>
              <h2 className="font-cinzel fw-bold mb-1">Clinical Ayurvedic &amp; Physiotherapy Treatments</h2>
              <p className="text-muted mb-0 small">Certified treatments combining classical Ayurveda and rehabilitation therapies.</p>
            </div>
            <Link
              to="/treatments"
              className="btn btn-outline-ayur-theme btn-sm rounded-pill mt-3 mt-md-0 px-3 py-1 py-sm-2"
              style={{ fontSize: '0.84rem' }}
            >
              View All Treatments <i className="fa-solid fa-arrow-right ms-1"></i>
            </Link>
          </div>

          <div className="row g-4">
            {featuredTreatments.map((treatment) => (
              <div key={treatment.id} className="col-lg-4 col-md-6 mb-4">
                <div className="treatment-card border rounded-4 shadow-sm overflow-hidden bg-white h-100 d-flex flex-column">
                  {/* Treatment Image Thumbnail */}
                  <div className="treatment-img-wrap" style={{ height: '180px' }}>
                    <img
                      src={treatment.imageUrl}
                      alt={treatment.title}
                      className="treatment-img w-100 h-100 object-fit-cover"
                      loading="lazy"
                    />
                  <div className="treatment-img-overlay">
                      <span className="badge bg-gold text-dark fw-bold px-2 py-1 small rounded-pill">
                        {treatment.tag}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 d-flex flex-column flex-grow-1">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <div>
                        <h6 className="fw-bold mb-0 text-ayur-primary font-cinzel">{treatment.title}</h6>
                        <p className="text-gold small mb-0 fst-italic" style={{ fontSize: '0.78rem' }}>
                          {treatment.sanskritName}
                        </p>
                      </div>
                      <div className="treatment-icon-wrapper flex-shrink-0" style={{ width: '40px', height: '40px', fontSize: '1.1rem' }}>
                        <i className={treatment.iconClass}></i>
                      </div>
                    </div>

                    <p className="text-muted small flex-grow-1 mt-1 mb-3" style={{ fontSize: '0.82rem', lineHeight: '1.55' }}>
                      {treatment.shortDescription}
                    </p>

                    {/* Bottom Info: Row 1 = Duration + Category, Row 2 = Full-Width Neat Buttons */}
                    <div className="border-top pt-3 mt-auto">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <span className="small text-muted d-inline-flex align-items-center" style={{ fontSize: '0.8rem', whiteSpace: 'nowrap' }}>
                          <i className="fa-regular fa-clock me-1.5 text-gold"></i> {treatment.duration}
                        </span>
                        <span className="badge bg-light text-dark border px-2 py-1 text-truncate" style={{ fontSize: '0.74rem', maxWidth: '145px' }}>
                          {treatment.category}
                        </span>
                      </div>

                      {/* Two clean, proportional, side-by-side pill buttons with zero text wrapping */}
                      <div className="d-flex gap-2">
                        <Link
                          to={`/treatment/${treatment.id}`}
                          className="btn btn-outline-secondary btn-sm rounded-pill flex-fill text-center py-2"
                          style={{ fontSize: '0.82rem', padding: '0.42rem 0.6rem', whiteSpace: 'nowrap', fontWeight: 600 }}
                        >
                          Details
                        </Link>
                        <Link
                          to={`/book?category=${encodeURIComponent(treatment.category)}`}
                          className="btn btn-ayur-primary btn-sm rounded-pill flex-fill text-center py-2"
                          style={{ fontSize: '0.82rem', padding: '0.42rem 0.6rem', whiteSpace: 'nowrap', fontWeight: 600 }}
                        >
                          Book Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upchar Kendra Facility Gallery & Showcase (Faithful to original project) */}
      <section className="py-5 bg-white border-top border-bottom">
        <div className="container">
          <div className="text-center max-w-700 mx-auto mb-5">
            <span className="text-gold fw-bold text-uppercase tracking-wider small">Upchar Kendra Facilities</span>
            <h2 className="font-cinzel fw-bold mb-1">Our Clinic &amp; Therapy Facilities in Gorakhpur</h2>
            <p className="text-muted small">A glimpse into our authentic Ayurvedic consultation rooms, Panchakarma suites, and herbal dispensary.</p>
          </div>

          <div className="row g-4">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="gallery-card rounded-4 overflow-hidden position-relative shadow-sm" style={{ height: '260px', marginBottom: '1.5rem' }}>
                <img src="/images/clinic-opd-chamber.jpg" alt="Dr. Sharvan Kumar OPD Chamber" className="gallery-img w-100 h-100 object-fit-cover" />
                <div className="gallery-caption position-absolute bottom-0 start-0 end-0 p-3 text-white" style={{ background: 'linear-gradient(to top, rgba(5,28,18,0.95), transparent)' }}>
                  <span className="badge bg-gold text-dark fw-bold mb-1" style={{ fontSize: '0.72rem' }}>Doctor Chamber</span>
                  <h6 className="fw-bold mb-0 text-white">OPD Chamber &amp; State Honors</h6>
                  <small className="text-light-muted d-block" style={{ fontSize: '0.75rem' }}>Dr. Sharvan Kumar with awards &amp; patient desk</small>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="gallery-card rounded-4 overflow-hidden position-relative shadow-sm" style={{ height: '260px', marginBottom: '1.5rem' }}>
                <img src="/images/doctor-consultation-award.png" alt="Patient Consultation Dr Sarvan Kumar" className="gallery-img w-100 h-100 object-fit-cover" />
                <div className="gallery-caption position-absolute bottom-0 start-0 end-0 p-3 text-white" style={{ background: 'linear-gradient(to top, rgba(5,28,18,0.95), transparent)' }}>
                  <span className="badge bg-success fw-bold mb-1" style={{ fontSize: '0.72rem' }}>Live Clinical OPD</span>
                  <h6 className="fw-bold mb-0 text-white">Dr. Sarvan Kumar (आयुर्वेद, अथर्ववेद)</h6>
                  <small className="text-light-muted d-block" style={{ fontSize: '0.75rem' }}>Classical pulse analysis (नाड़ी परीक्षा) &amp; patient care</small>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="gallery-card rounded-4 overflow-hidden position-relative shadow-sm" style={{ height: '260px', marginBottom: '1.5rem' }}>
                <img src="/images/clinic-poster-100fee.png" alt="Ayurvedic Medical Center ₹100 Fee" className="gallery-img w-100 h-100 object-fit-cover" />
                <div className="gallery-caption position-absolute bottom-0 start-0 end-0 p-3 text-white" style={{ background: 'linear-gradient(to top, rgba(5,28,18,0.95), transparent)' }}>
                  <span className="badge bg-warning text-dark fw-bold mb-1" style={{ fontSize: '0.72rem' }}>OPD Fee ₹100/- Only</span>
                  <h6 className="fw-bold mb-0 text-white">Ayurvedic Medical Center</h6>
                  <small className="text-light-muted d-block" style={{ fontSize: '0.75rem' }}>Holistic natural healthcare at nominal ₹100 consultation fee</small>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="gallery-card rounded-4 overflow-hidden position-relative shadow-sm" style={{ height: '260px', marginBottom: '1.5rem' }}>
                <img src="/images/clinic-header-banner.png" alt="Nav Jeevan Aayurvedik Upchar Kendra Banner" className="gallery-img w-100 h-100 object-fit-cover" />
                <div className="gallery-caption position-absolute bottom-0 start-0 end-0 p-3 text-white" style={{ background: 'linear-gradient(to top, rgba(5,28,18,0.95), transparent)' }}>
                  <span className="badge bg-info text-dark fw-bold mb-1" style={{ fontSize: '0.72rem' }}>Official Kendra Banner</span>
                  <h6 className="fw-bold mb-0 text-white">Nav Jeevan Aayurvedik Upchar Kendra</h6>
                  <small className="text-light-muted d-block" style={{ fontSize: '0.75rem' }}>Serving Gorakhpur &amp; Eastern UP since 2011</small>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="gallery-card rounded-4 overflow-hidden position-relative shadow-sm" style={{ height: '260px', marginBottom: '1.5rem' }}>
                <img src="/images/ayurvedic-treatment-poster.png" alt="Ayurvedic Treatment & Eye Care" className="gallery-img w-100 h-100 object-fit-cover" />
                <div className="gallery-caption position-absolute bottom-0 start-0 end-0 p-3 text-white" style={{ background: 'linear-gradient(to top, rgba(5,28,18,0.95), transparent)' }}>
                  <span className="badge bg-gold text-dark fw-bold mb-1" style={{ fontSize: '0.72rem' }}>Treatment Awareness</span>
                  <h6 className="fw-bold mb-0 text-white">Netra Chikitsa &amp; Chronic Care</h6>
                  <small className="text-light-muted d-block" style={{ fontSize: '0.75rem' }}>Root cause therapy without steroid or chemical side-effects</small>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div
                className="gallery-card rounded-4 overflow-hidden position-relative shadow-sm d-flex flex-column align-items-center justify-content-center text-center p-3"
                style={{ height: '260px', marginBottom: '1.5rem', background: 'radial-gradient(circle at center, #0f3d25 0%, #051c12 100%)' }}
              >
                <div
                  className="rounded-circle overflow-hidden border border-2 border-warning shadow-sm mb-2"
                  style={{ width: '92px', height: '92px', flexShrink: 0, backgroundColor: '#ffffff' }}
                >
                  <img
                    src="/images/dr-sharvan-kumar.png"
                    alt="Dr. Sharvan Kumar Chief Physician"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '0% 50%' }}
                  />
                </div>
                <span className="badge bg-gold text-dark fw-bold mb-1.5 shadow-sm" style={{ fontSize: '0.74rem' }}>Senior Ayurvedic Doctor</span>
                <h5 className="fw-bold mb-1 text-white font-cinzel" style={{ letterSpacing: '0.5px' }}>Dr. Sharvan Kumar</h5>
                <div className="fw-bold mb-1" style={{ color: '#f5b938', fontSize: '0.82rem', textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
                  BAMS, NET, JRF, SRF, Ph.D. (आयुर्वेद, अथर्ववेद)
                </div>
                <div className="small text-light-muted" style={{ fontSize: '0.76rem', letterSpacing: '0.3px' }}>
                  Estd. 2011 • Siktaur Chauraha, Gorakhpur
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facebook Connect Strip Banner (From original project) */}
      <section className="py-4" style={{ background: 'linear-gradient(135deg, #0f2b1d, #194d33)', color: '#fff' }}>
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">
            <div className="d-flex align-items-center gap-3">
              <div
                className="bg-white rounded-circle d-flex align-items-center justify-content-center text-primary flex-shrink-0"
                style={{ width: '46px', height: '46px', fontSize: '1.5rem' }}
              >
                <i className="fa-brands fa-facebook"></i>
              </div>
              <div>
                <h6 className="fw-bold mb-0 text-white">Connect with Nav Jeevan Ayurvedic Upchar Kendra on Facebook</h6>
                <p className="text-light-muted small mb-0" style={{ fontSize: '0.8rem' }}>
                  Follow our official Facebook page for daily Ayurvedic home remedies, diet charts, and patient recovery stories.
                </p>
              </div>
            </div>
            <a
              href="https://www.facebook.com/p/Nav-Jeevan-Ayurvedic-Upchar-Kendra-100093061388826/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-warning btn-sm px-4 py-2 rounded-pill fw-bold text-dark shadow-sm"
              style={{ fontSize: '0.84rem', whiteSpace: 'nowrap' }}
            >
              <i className="fa-brands fa-facebook me-1"></i> Visit Facebook Page
            </a>
          </div>
        </div>
      </section>

      {/* Free Dosha Quiz Callout Banner */}
      <section className="py-5 bg-white border-top border-bottom">
        <div className="container">
          <div className="bg-dark-green-glass text-white rounded-4 p-4 p-md-5 position-relative overflow-hidden shadow-lg">
            <div className="row align-items-center g-4 position-relative" style={{ zIndex: 2 }}>
              <div className="col-lg-8">
                <span className="badge bg-gold text-dark px-3 py-1 rounded-pill fw-bold mb-3" style={{ fontSize: '0.8rem' }}>
                  <i className="fa-solid fa-sparkles me-1"></i> {t('quizBannerTag')}
                </span>
                <h2 className="font-cinzel fw-bold mb-3 text-white">
                  {t('quizBannerTitle')}
                </h2>
                <p className="text-light-muted mb-4 fs-6">
                  {t('quizBannerDesc')}
                </p>
                <div className="d-flex flex-wrap gap-2">
                  <Link
                    to="/dosha-quiz"
                    className="btn btn-ayur-gold px-4 py-2 rounded-pill shadow-sm text-dark fw-bold w-100 w-sm-auto text-center"
                    style={{ fontSize: '0.88rem' }}
                  >
                    <i className="fa-solid fa-clipboard-question me-2"></i>
                    {t('btnTakeQuiz')}
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 text-center">
                <div className="p-3 bg-white bg-opacity-10 rounded-4 border border-warning border-opacity-25">
                  <div className="d-flex justify-content-around mb-2">
                    <div className="text-center">
                      <div className="fs-3">💨</div>
                      <div className="small fw-bold text-gold">VATA</div>
                    </div>
                    <div className="text-center">
                      <div className="fs-3">🔥</div>
                      <div className="small fw-bold text-gold">PITTA</div>
                    </div>
                    <div className="text-center">
                      <div className="fs-3">💧</div>
                      <div className="small fw-bold text-gold">KAPHA</div>
                    </div>
                  </div>
                  <small className="text-white-50 d-block" style={{ fontSize: '0.75rem' }}>
                    Takes only 2 minutes • 100% Free • Instant Personalized Results
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us & Patient Testimonials */}
      <section className="py-5 bg-ayur-cream">
        <div className="container">
          <div className="text-center max-w-700 mx-auto mb-4">
            <span className="badge bg-gold-subtle text-gold px-3 py-1 rounded-pill mb-2">
              Patient Trust
            </span>
            <h2 className="font-cinzel fw-bold mb-2">{t('whyHeading')}</h2>
            <p className="text-muted small">{t('whySubheading')}</p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="p-4 bg-white rounded-4 border shadow-sm h-100">
                <div className="d-flex gap-1 text-gold mb-3 small">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <p className="text-muted small mb-3">
                  "I had severe cervical spondylosis and neck numbness for 3 years. Doctors advised surgery. Dr. Sharvan Kumar diagnosed nerve compression with Nadi Pariksha and did Greeva Basti with Physiotherapy. Today I am 100% pain free!"
                </p>
                <div className="d-flex align-items-center gap-2">
                  <div
                    className="rounded-circle bg-success text-white d-flex align-items-center justify-content-center fw-bold"
                    style={{ width: '38px', height: '38px', fontSize: '0.85rem' }}
                  >
                    RK
                  </div>
                  <div>
                    <h6 className="mb-0 fw-bold small">Rajesh Kumar Verma</h6>
                    <small className="text-muted" style={{ fontSize: '0.75rem' }}>Civil Lines, Gorakhpur</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 bg-white rounded-4 border shadow-sm h-100">
                <div className="d-flex gap-1 text-gold mb-3 small">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <p className="text-muted small mb-3">
                  "Best Ayurvedic clinic in Eastern UP. Dr. Sharvan Kumar gives adequate time to listen to every patient and the OPD fee is just ₹100. The Panchakarma therapies are authentic and hygiene standards are excellent."
                </p>
                <div className="d-flex align-items-center gap-2">
                  <div
                    className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center fw-bold"
                    style={{ width: '38px', height: '38px', fontSize: '0.85rem' }}
                  >
                    PS
                  </div>
                  <div>
                    <h6 className="mb-0 fw-bold small">Priya Srivastava</h6>
                    <small className="text-muted" style={{ fontSize: '0.75rem' }}>Deoria</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 bg-white rounded-4 border shadow-sm h-100">
                <div className="d-flex gap-1 text-gold mb-3 small">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <p className="text-muted small mb-3">
                  "Cured my chronic IBS and acidity problems which I suffered from for 5 years. Dr. Sharvan Kumar's dietary guidance and herbal formulation Kutajghan Vati completely restored my digestion within 2 months."
                </p>
                <div className="d-flex align-items-center gap-2">
                  <div
                    className="rounded-circle bg-warning text-dark d-flex align-items-center justify-content-center fw-bold"
                    style={{ width: '38px', height: '38px', fontSize: '0.85rem' }}
                  >
                    AT
                  </div>
                  <div>
                    <h6 className="mb-0 fw-bold small">Alok Tripathi</h6>
                    <small className="text-muted" style={{ fontSize: '0.75rem' }}>Kushinagar</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Booking Strip */}
      <section className="py-4 bg-white border-top">
        <div className="container">
          <div className="row align-items-center g-3">
            <div className="col-lg-8">
              <h5 className="font-cinzel fw-bold mb-1 text-ayur-primary">
                {t('quickBookTitle')}
              </h5>
              <p className="text-muted mb-0 small">{t('quickBookDesc')}</p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <Link
                to="/book"
                className="btn btn-ayur-primary px-4 py-2 rounded-pill shadow-sm w-100 w-sm-auto text-center"
                style={{ fontSize: '0.88rem' }}
              >
                <i className="fa-solid fa-calendar-check me-1.5"></i>
                {t('btnBookOpd')} ({t('quickBookOpd')})
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
