import React from 'react';
import { Link } from 'react-router-dom';

export const AboutPage = () => {

  return (
    <>
      {/* Breadcrumb Header */}
      <div className="py-4 bg-white border-bottom">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">About Doctor &amp; Clinic</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Doctor Profile & Story */}
      <section className="py-5 bg-ayur-cream">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-5">
              <div className="doctor-badge-card p-3 p-sm-4 shadow-lg border bg-white rounded-4">
                <div className="doctor-profile-preview position-relative rounded-4 overflow-hidden mb-3 shadow-sm bg-light text-center p-3">
                  <div
                    className="mx-auto rounded-circle overflow-hidden shadow-sm mb-2"
                    style={{
                      width: '180px',
                      height: '180px',
                      maxWidth: '100%',
                      border: '3px solid var(--ayur-gold)',
                      background: '#ffffff'
                    }}
                  >
                    <img
                      src="/images/dr-sharvan-kumar.png"
                      alt="Dr. Sharvan Kumar"
                      className="w-100 h-100"
                      style={{ objectFit: 'cover', objectPosition: '0% 50%' }}
                    />
                  </div>
                  <span className="badge bg-gold text-dark fw-bold mb-1">
                    <i className="fa-solid fa-certificate me-1"></i> डॉक्टर • थेरेपिस्ट • अस्पताल
                  </span>
                  <div className="fw-bold fs-6 text-ayur-primary">
                    Dr. Sharvan Kumar (डा. श्रवण कुमार)
                  </div>
                  <small className="text-muted d-block" style={{ fontSize: '0.75rem' }}>
                    Siktaur Chauraha, Deoria Bypass Road, Gorakhpur
                  </small>
                </div>

                <div className="text-center mb-3">
                  <span className="badge bg-gold text-dark px-3 py-1 rounded-pill mb-1">
                    Senior Ayurvedic Doctor in Gorakhpur
                  </span>
                  <h3 className="font-cinzel fw-bold mb-0 text-ayur-primary">Dr. Sharvan Kumar</h3>
                  <p className="text-dark fw-bold small mb-1">
                    BAMS, NET, JRF, SRF, Ph.D. (आयुर्वेद, अथर्ववेद)
                  </p>
                  <span className="badge bg-success px-3 py-1 rounded-pill mb-1">
                    <i className="fa-solid fa-tag me-1"></i> OPD Consultation Fee: ₹100/- Only
                  </span>
                  <p className="text-ayur-primary fw-semibold small mb-0">
                    Founder &amp; Chief Physician • Estd. 2011
                  </p>
                </div>

                <div className="bg-light p-3 rounded-3 mb-3 border">
                  <h6 className="fw-bold mb-2 text-ayur-primary">
                    <i className="fa-solid fa-graduation-cap me-2 text-gold"></i> Academic Qualifications
                  </h6>
                  <ul className="list-unstyled small mb-0">
                    <li className="mb-1">
                      <i className="fa-solid fa-check text-gold me-2"></i> <strong>BAMS</strong> (Bachelor of Ayurvedic Medicine &amp; Surgery)
                    </li>
                    <li className="mb-1">
                      <i className="fa-solid fa-check text-gold me-2"></i> <strong>NET Qualified</strong> (National Eligibility Test in Ayurvedic Sciences)
                    </li>
                    <li className="mb-1">
                      <i className="fa-solid fa-check text-gold me-2"></i> <strong>JRF &amp; SRF</strong> (Junior &amp; Senior Research Fellowships)
                    </li>
                    <li className="mb-1">
                      <i className="fa-solid fa-check text-gold me-2"></i> <strong>Ph.D. in Ayurveda &amp; Atharvaveda</strong> (आयुर्वेद, अथर्ववेद)
                    </li>
                    <li className="mb-1">
                      <i className="fa-solid fa-indian-rupee-sign text-gold me-2"></i> <strong>Consultation Fee:</strong> ₹100/- Only (परामर्श शुल्क)
                    </li>
                    <li className="mb-1">
                      <i className="fa-solid fa-location-dot text-gold me-2"></i> <strong>Address:</strong> Siktaur Chauraha, Deoria Bypass Road, Gorakhpur
                    </li>
                    <li className="mb-1">
                      <i className="fa-solid fa-phone text-gold me-2"></i> <strong>Phone:</strong> 097955 78700
                    </li>
                    <li>
                      <i className="fa-solid fa-globe text-gold me-2"></i> <strong>Council Regn:</strong> D-48192
                    </li>
                  </ul>
                </div>

                <div className="d-grid gap-2">
                  <Link to="/book" className="btn btn-ayur-primary py-2 py-sm-3 rounded-pill shadow-sm">
                    <i className="fa-solid fa-calendar-check me-2"></i> Book Appointment (₹100 OPD)
                  </Link>
                  <a
                    href="https://wa.me/919795578700?text=Namaste%20Dr.%20Sharvan%20Kumar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-success btn-sm rounded-pill"
                  >
                    <i className="fa-brands fa-whatsapp me-1"></i> WhatsApp: 097955 78700
                  </a>
                  <a
                    href="https://www.facebook.com/p/Nav-Jeevan-Ayurvedic-Upchar-Kendra-100093061388826/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary btn-sm rounded-pill"
                  >
                    <i className="fa-brands fa-facebook me-1"></i> Official Facebook Page
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <span className="text-gold fw-bold text-uppercase tracking-wider small">
                <i className="fa-solid fa-award me-1"></i> Established in 2011 • Gorakhpur
              </span>
              <h1 className="font-cinzel fw-bold mb-3">Nav Jeevan Aayurvedik Upchar Kendra Gorakhpur</h1>
              <p className="lead text-muted mb-4">
                <strong>Nav Jeevan Aayurvedik Upchar Kendra Gorakhpur</strong> was established in 2011 by <strong>Dr. Sharavan Kumar (BAMS, NET, JRF, SRF, Ph.D.)</strong>, Senior Ayurvedic Doctor in Gorakhpur, to provide the most authentic, classical Ayurvedic healthcare and comprehensive holistic treatments.
              </p>
              <p className="text-muted">
                Located at <strong>Siktaur Chauraha, Deoria Bypass Road, Ramgarhtal, Gorakhpur</strong>, our center has treated thousands of patients suffering from chronic joint pain, sciatica, slip disc, skin disorders, and metabolic illnesses under the clinical guidance of Dr. Sharvan Kumar. With high academic rigor and clinical mastery in <em>Nadi Pariksha</em> (Pulse Examination), our Vaidyas detect subtle metabolic toxins (Ama) and dosha imbalances before they turn into irreversible disorders.
              </p>
              <p className="text-muted">
                We combine classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Bhaishajya Ratnavali) with modern hygiene and specialized <strong>physiotherapy rehabilitation</strong>. Whether you need deep cellular purification through Panchakarma or targeted pain relief through Kati Basti and Marma therapy, our trained therapists provide compassionate, patient-centered healing.
              </p>

              <div className="row g-3 pt-3">
                <div className="col-sm-6">
                  <div className="p-3 bg-white rounded-3 border shadow-sm">
                    <h5 className="fw-bold text-ayur-primary mb-1">
                      <i className="fa-solid fa-bullseye text-gold me-2"></i> Our Mission
                    </h5>
                    <p className="text-muted small mb-0">
                      To make authentic, herbal Ayurveda and restorative physiotherapy accessible and effective for every family in Gorakhpur and Eastern UP.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="p-3 bg-white rounded-3 border shadow-sm">
                    <h5 className="fw-bold text-ayur-primary mb-1">
                      <i className="fa-solid fa-eye text-gold me-2"></i> Our Vision
                    </h5>
                    <p className="text-muted small mb-0">
                      A healthier community free from synthetic painkillers and chronic lifestyle ailments, living in harmony with nature and dosha balance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tridosha Philosophy Section */}
      <section className="py-5 bg-white border-top border-bottom">
        <div className="container">
          <div className="text-center max-w-700 mx-auto mb-5">
            <span className="badge bg-gold-subtle text-gold px-3 py-1 rounded-pill mb-2">
              Ayurvedic Science
            </span>
            <h2 className="font-cinzel fw-bold mb-2">Understanding Tridosha: Vata, Pitta &amp; Kapha</h2>
            <p className="text-muted">The core biological energies that govern all human physiology and psychology</p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="p-4 rounded-4 border bg-light h-100 shadow-sm">
                <div className="fs-1 mb-2">💨</div>
                <h4 className="font-cinzel fw-bold text-primary mb-2">Vata (वायु + आकाश)</h4>
                <p className="small text-muted mb-3">
                  Governs all physiological movement, nervous system impulses, breath, and circulation.
                </p>
                <div className="small border-top pt-2">
                  <strong>When Imbalanced:</strong> Joint pain, arthritis, sciatica, insomnia, anxiety, dry skin, gas/bloating.
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 rounded-4 border bg-light h-100 shadow-sm">
                <div className="fs-1 mb-2">🔥</div>
                <h4 className="font-cinzel fw-bold text-danger mb-2">Pitta (अग्नि + जल)</h4>
                <p className="small text-muted mb-3">
                  Governs digestion, metabolism, body temperature, enzymes, liver function, and vision.
                </p>
                <div className="small border-top pt-2">
                  <strong>When Imbalanced:</strong> Acidity, acid reflux, psoriasis, skin rashes, burning sensations, anger.
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 rounded-4 border bg-light h-100 shadow-sm">
                <div className="fs-1 mb-2">💧</div>
                <h4 className="font-cinzel fw-bold text-success mb-2">Kapha (जल + पृथ्वी)</h4>
                <p className="small text-muted mb-3">
                  Governs lubrication of joints, structural tissue stability, immunity (Ojas), and hydration.
                </p>
                <div className="small border-top pt-2">
                  <strong>When Imbalanced:</strong> Sluggish metabolism, obesity, diabetes, sinusitis, lethargy, respiratory mucus.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities & Clinic Chamber Showcase */}
      <section className="py-5 bg-ayur-cream">
        <div className="container">
          <div className="text-center max-w-700 mx-auto mb-5">
            <span className="badge bg-gold-subtle text-gold px-3 py-1 rounded-pill mb-2">
              Infrastructure
            </span>
            <h2 className="font-cinzel fw-bold mb-2">Clinic Facilities &amp; Treatment Chambers</h2>
            <p className="text-muted">Equipped with specialized wooden Droni tables, authentic steam boxes, and modern physiotherapy units</p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0 rounded-4 overflow-hidden shadow-sm h-100">
                <img
                  src="/images/clinic-opd-chamber.jpg"
                  alt="OPD Chamber"
                  className="w-100"
                  style={{ height: '220px', objectFit: 'cover' }}
                />
                <div className="card-body p-3 bg-white">
                  <h6 className="fw-bold font-cinzel mb-1 text-ayur-primary">Doctor OPD Chamber</h6>
                  <p className="small text-muted mb-0">
                    Quiet, hygienic consultation suite for confidential Nadi Pariksha and personalized clinical assessment.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 rounded-4 overflow-hidden shadow-sm h-100">
                <img
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80"
                  alt="Panchakarma Wing"
                  className="w-100"
                  style={{ height: '220px', objectFit: 'cover' }}
                />
                <div className="card-body p-3 bg-white">
                  <h6 className="fw-bold font-cinzel mb-1 text-ayur-primary">Classical Panchakarma Wing</h6>
                  <p className="small text-muted mb-0">
                    Traditional wooden Droni tables, copper Shirodhara vessels, and Swedana herbal steam chambers.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 rounded-4 overflow-hidden shadow-sm h-100">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80"
                  alt="Physiotherapy Unit"
                  className="w-100"
                  style={{ height: '220px', objectFit: 'cover' }}
                />
                <div className="card-body p-3 bg-white">
                  <h6 className="fw-bold font-cinzel mb-1 text-ayur-primary">Rehab &amp; Physiotherapy Unit</h6>
                  <p className="small text-muted mb-0">
                    Modern traction, TENS electro-therapy, ultrasonic therapy, and specialized Marma stimulation beds.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
