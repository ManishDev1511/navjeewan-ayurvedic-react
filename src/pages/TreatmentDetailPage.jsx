import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getTreatmentById } from '../data/treatmentsData';

export const TreatmentDetailPage = () => {
  const { id } = useParams();
  const treatment = getTreatmentById(id);

  if (!treatment) {
    return (
      <div className="py-5 text-center container">
        <h2 className="font-cinzel fw-bold mb-3">Treatment Not Found</h2>
        <p className="text-muted">The requested Ayurvedic therapy could not be located in our records.</p>
        <Link to="/treatments" className="btn btn-ayur-primary rounded-pill px-4">
          Back to Treatments
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Header */}
      <div className="py-5 bg-white border-bottom">
        <div className="container">
          <nav aria-label="breadcrumb" className="mb-3">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item"><Link to="/treatments">Treatments</Link></li>
              <li className="breadcrumb-item active" aria-current="page">{treatment.title}</li>
            </ol>
          </nav>
          <div className="d-flex flex-wrap align-items-center gap-2 mb-2">
            <span className="badge bg-gold text-dark fw-bold">{treatment.tag}</span>
            <span className="badge bg-dark-green-glass text-gold border border-warning">
              {treatment.sanskritName}
            </span>
            <span className="text-muted small">• {treatment.category}</span>
          </div>
          <h1 className="font-cinzel fw-bold text-ayur-primary mb-2">{treatment.title}</h1>
          <p className="lead text-muted mb-0">{treatment.shortDescription}</p>
        </div>
      </div>

      <section className="py-5 bg-ayur-cream">
        <div className="container">
          <div className="row g-5">
            {/* Main Treatment Details */}
            <div className="col-lg-8">
              <div className="bg-white rounded-4 border shadow-sm p-4 p-md-5 mb-4">
                <div className="rounded-4 overflow-hidden mb-4 shadow-sm" style={{ maxHeight: '380px' }}>
                  <img
                    src={treatment.imageUrl}
                    alt={treatment.title}
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>

                <h4 className="font-cinzel fw-bold text-ayur-primary mb-3">Therapeutic Overview</h4>
                <p className="text-muted fs-6 mb-4" style={{ lineHeight: '1.8' }}>
                  {treatment.fullDescription}
                </p>

                <h4 className="font-cinzel fw-bold text-ayur-primary mb-3">Key Clinical Benefits</h4>
                <div className="row g-3 mb-4">
                  {treatment.keyBenefits.map((benefit, idx) => (
                    <div key={idx} className="col-md-6">
                      <div className="p-3 bg-light rounded-3 border d-flex align-items-start gap-2 h-100">
                        <i className="fa-solid fa-circle-check text-success fs-5 mt-0.5"></i>
                        <span className="small fw-semibold">{benefit}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-3 bg-ayur-cream rounded-3 border mb-4">
                  <h6 className="fw-bold font-cinzel text-ayur-primary mb-1">
                    <i className="fa-solid fa-user-check text-gold me-2"></i> Ideal Candidates
                  </h6>
                  <p className="small text-muted mb-0">{treatment.idealFor}</p>
                </div>

                <div className="d-flex flex-column flex-sm-row gap-2 justify-content-between align-items-stretch align-items-sm-center pt-3 border-top">
                  <Link to="/treatments" className="btn btn-outline-secondary rounded-pill btn-sm px-3 text-center">
                    <i className="fa-solid fa-arrow-left me-1"></i> Back to Treatments
                  </Link>
                  <Link
                    to={`/book?category=${encodeURIComponent(treatment.category)}`}
                    className="btn btn-ayur-primary rounded-pill px-4 text-center"
                  >
                    <i className="fa-solid fa-calendar-check me-2"></i> Book This Consultation
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar Booking Card */}
            <div className="col-lg-4">
              <div className="bg-white rounded-4 border shadow-sm p-4 sticky-lg-top" style={{ top: '100px' }}>
                <div className="text-center pb-3 border-bottom mb-3">
                  <span className="badge bg-success-subtle text-success px-3 py-1 rounded-pill mb-2">
                    OPD Consultation: ₹100 Only
                  </span>
                  <h5 className="font-cinzel fw-bold mb-1">Dr. Sharvan Kumar</h5>
                  <small className="text-muted">BAMS, NET, JRF, SRF, Ph.D. (आयुर्वेद)</small>
                </div>

                <div className="mb-3 small">
                  <div className="d-flex justify-content-between py-2 border-bottom">
                    <span className="text-muted">Session Duration:</span>
                    <strong className="text-dark">{treatment.duration}</strong>
                  </div>
                  <div className="d-flex justify-content-between py-2 border-bottom">
                    <span className="text-muted">Speciality:</span>
                    <strong className="text-ayur-primary">{treatment.category}</strong>
                  </div>
                  <div className="d-flex justify-content-between py-2 border-bottom">
                    <span className="text-muted">Clinic Location:</span>
                    <strong className="text-dark">Siktaur, Gorakhpur</strong>
                  </div>
                  <div className="d-flex justify-content-between py-2">
                    <span className="text-muted">Consultation Mode:</span>
                    <strong className="text-success">In-Clinic / Online</strong>
                  </div>
                </div>

                <div className="d-grid gap-2">
                  <Link
                    to={`/book?category=${encodeURIComponent(treatment.category)}`}
                    className="btn btn-ayur-primary py-2 py-sm-3 rounded-pill shadow-sm"
                  >
                    <i className="fa-solid fa-calendar-check me-2"></i> Book Appointment
                  </Link>
                  <a
                    href={`https://wa.me/919795578700?text=Namaste%20Dr.%20Sharvan%20Kumar,%20I%20want%20to%20know%20more%20about%20${encodeURIComponent(treatment.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-success py-2 rounded-pill"
                  >
                    <i className="fa-brands fa-whatsapp me-2"></i> Inquire on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
