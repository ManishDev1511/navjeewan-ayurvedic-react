import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export const ContactPage = () => {
  const { submitContactMessage, sendMessage } = useApp();
  const sendInquiry = submitContactMessage || sendMessage;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) return;

    sendInquiry(formData);
    setSubmitted(true);
    setFormData({
      name: '',
      phone: '',
      email: '',
      subject: '',
      message: ''
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 6000);
  };

  return (
    <>
      {/* Header */}
      <div className="py-5 bg-white border-bottom">
        <div className="container text-center max-w-700 mx-auto">
          <span className="badge bg-gold-subtle text-gold px-3 py-1 rounded-pill mb-2">
            Siktaur, Gorakhpur
          </span>
          <h1 className="font-cinzel fw-bold mb-2">Contact Nav Jeevan Ayurvedic Upchar Kendra</h1>
          <p className="text-muted">
            Have a query regarding therapies, appointments, or want to speak with Dr. Sharvan Kumar? Reach out to us directly.
          </p>
        </div>
      </div>

      <section className="py-5 bg-ayur-cream">
        <div className="container">
          <div className="row g-5">
            {/* Contact Info & Coordinates */}
            <div className="col-lg-5">
              <div className="bg-white p-3 p-sm-4 p-md-5 rounded-4 border shadow-sm h-100">
                <h4 className="font-cinzel fw-bold mb-4 text-ayur-primary">Clinic Coordinates</h4>

                <div className="d-flex align-items-start gap-3 mb-4">
                  <div className="treatment-icon-wrapper flex-shrink-0" style={{ width: '48px', height: '48px', fontSize: '1.2rem' }}>
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">Clinic Address</h6>
                    <p className="text-muted small mb-0">
                      Siktaur Chauraha, Deoria Bypass Road, Ramgarhtal, Gorakhpur, Uttar Pradesh - 273010
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-3 mb-4">
                  <div className="treatment-icon-wrapper flex-shrink-0" style={{ width: '48px', height: '48px', fontSize: '1.2rem' }}>
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">Helpline Phone</h6>
                    <p className="text-muted small mb-1">
                      <a href="tel:+919795578700" className="text-decoration-none text-dark fw-bold">
                        097955 78700
                      </a>
                    </p>
                    <p className="text-muted small mb-0">
                      <span className="badge bg-success-subtle text-success">Mon-Sun (9 AM - 8:30 PM)</span>
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-3 mb-4">
                  <div
                    className="treatment-icon-wrapper flex-shrink-0"
                    style={{ width: '48px', height: '48px', fontSize: '1.2rem', background: '#e8f8f0', color: '#25d366' }}
                  >
                    <i className="fa-brands fa-whatsapp"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">WhatsApp Consultation</h6>
                    <p className="text-muted small mb-0">
                      <a
                        href="https://wa.me/919795578700?text=Namaste%20Dr.%20Sharvan%20Kumar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-success fw-bold text-decoration-none"
                      >
                        097955 78700 (Chat Directly)
                      </a>
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-3 mb-4">
                  <div
                    className="treatment-icon-wrapper flex-shrink-0"
                    style={{ width: '48px', height: '48px', fontSize: '1.2rem', background: '#fff3cd', color: '#856404' }}
                  >
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">Official Email</h6>
                    <p className="text-muted small mb-0">
                      <a href="mailto:navjeewanayurvedic@gmail.com" className="text-dark fw-bold text-decoration-none">
                        navjeewanayurvedic@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-3 mb-4">
                  <div
                    className="treatment-icon-wrapper flex-shrink-0"
                    style={{ width: '48px', height: '48px', fontSize: '1.2rem', background: '#e7f1ff', color: '#0d6efd' }}
                  >
                    <i className="fa-solid fa-globe"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">Official Website &amp; Social</h6>
                    <p className="text-muted small mb-1">
                      <span className="fw-bold text-dark">navjeevanaayurvedik.com</span>
                    </p>
                    <p className="text-muted small mb-0">
                      <a
                        href="https://www.facebook.com/p/Nav-Jeevan-Ayurvedic-Upchar-Kendra-100093061388826/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary fw-semibold text-decoration-none"
                      >
                        Facebook: Nav Jeevan Upchar Kendra <i className="fa-solid fa-arrow-up-right-from-square small"></i>
                      </a>
                    </p>
                  </div>
                </div>

                <hr />

                <h5 className="fw-bold mb-3 font-cinzel text-ayur-primary">Consultation &amp; OPD Timings</h5>
                <div className="p-3 bg-light rounded-3 border">
                  <div className="d-flex justify-content-between small py-1 border-bottom">
                    <span>Monday - Sunday:</span>
                    <span className="fw-bold text-ayur-primary">09:00 AM - 08:30 PM</span>
                  </div>
                  <div className="d-flex justify-content-between small py-1">
                    <span>Emergency / Inquiries:</span>
                    <span className="fw-bold text-gold">Open 24 Hours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Online Message Inquiry Form */}
            <div className="col-lg-7">
              <div className="bg-white p-3 p-sm-4 p-md-5 rounded-4 border shadow-sm">
                <span className="badge bg-gold-subtle text-gold px-3 py-1 rounded-pill mb-2">
                  Direct Messaging
                </span>
                <h4 className="font-cinzel fw-bold mb-2 text-ayur-primary">Send an Online Inquiry</h4>
                <p className="text-muted small mb-4">
                  Send your question or clinical requirement directly to Dr. Sharvan Kumar's desk. Our clinical coordinator will respond via phone or WhatsApp.
                </p>

                {submitted && (
                  <div className="alert alert-success border-0 rounded-3 mb-4 shadow-sm" role="alert">
                    <i className="fa-solid fa-circle-check me-2 fs-5 align-middle"></i>
                    <strong>Thank you!</strong> Your inquiry has been sent to the Doctor Desk. We will get back to you shortly.
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label className="form-label fw-semibold small">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-control form-control-ayur"
                        placeholder="e.g. Anand Kumar"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold small">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-control form-control-ayur"
                        placeholder="10-digit mobile"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold small">Email Address (Optional)</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control form-control-ayur"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold small">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="form-control form-control-ayur"
                      placeholder="e.g. Panchakarma Package / Nadi Pariksha Query"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-semibold small">Your Message / Symptoms *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="form-control form-control-ayur"
                      placeholder="Type your question or requirements here..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-ayur-primary btn-lg rounded-pill px-4 px-sm-5 py-2 py-sm-3 shadow-sm fw-bold w-100 w-sm-auto"
                    style={{ fontSize: '0.95rem' }}
                  >
                    <i className="fa-solid fa-paper-plane me-2"></i> Submit Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
