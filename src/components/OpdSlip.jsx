import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const OpdSlip = ({ appointment }) => {
  useEffect(() => {
    const handleBeforePrint = () => {
      document.documentElement.setAttribute('data-theme', 'light');
      document.documentElement.setAttribute('data-bs-theme', 'light');
    };
    const handleAfterPrint = () => {
      const savedTheme = localStorage.getItem('navjeewan_theme') || 'light';
      document.documentElement.setAttribute('data-theme', savedTheme);
      document.documentElement.setAttribute('data-bs-theme', savedTheme);
    };

    window.addEventListener('beforeprint', handleBeforePrint);
    window.addEventListener('afterprint', handleAfterPrint);
    return () => {
      window.removeEventListener('beforeprint', handleBeforePrint);
      window.removeEventListener('afterprint', handleAfterPrint);
    };
  }, []);

  if (!appointment) return null;

  const handlePrint = () => {
    const prevTheme = document.documentElement.getAttribute('data-theme');
    const prevBsTheme = document.documentElement.getAttribute('data-bs-theme');
    try {
      document.documentElement.setAttribute('data-theme', 'light');
      document.documentElement.setAttribute('data-bs-theme', 'light');
    } catch {
      // ignore
    }

    window.print();

    setTimeout(() => {
      try {
        if (prevTheme) document.documentElement.setAttribute('data-theme', prevTheme);
        if (prevBsTheme) document.documentElement.setAttribute('data-bs-theme', prevBsTheme);
      } catch {
        // ignore
      }
    }, 1500);
  };

  const waMessage = encodeURIComponent(
    `Namaste Dr. Sharvan Kumar, I have booked an appointment at Nav Jeevan Ayurvedic Upchar Kendra.\nReference No: ${appointment.referenceNumber}\nPatient: ${appointment.fullName}\nDate: ${appointment.preferredDate}\nSlot: ${appointment.timeSlot}\nMode: ${appointment.mode}`
  );

  return (
    <div
      className="opd-slip bg-white rounded-4 border shadow-sm p-3 p-md-4"
      id="printableSlip"
      style={{
        backgroundColor: '#ffffff',
        color: '#111827'
      }}
    >
      {/* Letterhead Top Bar */}
      <div className="opd-letterhead pb-2 mb-2">
        <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
          {/* Clinic Brand & Details */}
          <div className="d-flex align-items-center gap-3">
            <img
              src="/images/navjeewan-logo.png"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/images/navjeewan-logo.svg';
              }}
              alt="Nav Jeevan Logo"
              className="rounded-circle shadow-sm"
              style={{
                width: '64px',
                height: '64px',
                objectFit: 'cover',
                border: '2.5px solid var(--ayur-gold)',
                background: '#ffffff'
              }}
            />
            <div>
              <h4 className="opd-clinic-name mb-0 font-cinzel fw-bold text-ayur-primary">
                NAV JEEVAN AYURVEDIC
              </h4>
              <div className="opd-clinic-tagline text-muted">
                UPCHAR KENDRA &amp; PANCHAKARMA CENTRE
              </div>
              <div className="opd-reg-info text-muted small">
                <span>Regd. Upchar Kendra</span>
                <span className="mx-1">&bull;</span>
                <span>Rated 4.8★ on Facebook</span>
              </div>
            </div>
          </div>

          {/* Senior Vaidya Profile */}
          <div className="d-flex align-items-center gap-3 justify-content-md-end opd-doctor-info">
            <img
              src="/images/dr-sharvan-kumar.png"
              alt="Dr. Sharvan Kumar"
              className="rounded-circle object-fit-cover shadow-sm d-none d-sm-block opd-dr-img"
              style={{
                width: '58px',
                height: '58px',
                border: '2px solid var(--ayur-gold)',
                objectPosition: '0% 50%',
                backgroundColor: '#ffffff'
              }}
            />
            <div className="text-md-end">
              <div className="opd-dr-name fw-bold text-ayur-primary font-cinzel">
                Dr. Sharvan Kumar
              </div>
              <div className="small fw-semibold text-dark opd-dr-degree">
                BAMS, NET, JRF, SRF, Ph.D. (आयुर्वेद, अथर्ववेद)
              </div>
              <div className="opd-dr-sub text-muted small">
                Senior Ayurvedic Doctor in Gorakhpur &bull; Estd. 2011
              </div>
              <div className="opd-dr-reg text-muted small">
                Council Regn: <strong>D-48192</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Address & Contact Strip */}
        <div className="opd-contact-bar mt-2 pt-2 border-top d-flex justify-content-between flex-wrap gap-2 text-muted small">
          <div>
            <i className="fa-solid fa-location-dot text-gold me-1"></i>
            Siktaur Chauraha, Deoria Bypass Road, Ramgarhtal, Gorakhpur, UP - 273010
          </div>
          <div>
            <i className="fa-solid fa-phone text-gold me-1"></i> 097955 78700
            <span className="mx-1">&bull;</span>
            <i className="fa-solid fa-envelope text-gold me-1"></i> navjeewanayurvedic@gmail.com
          </div>
        </div>
      </div>

      {/* Double Separation Line */}
      <div className="opd-divider-double mb-3"></div>

      {/* Ribbon */}
      <div className="opd-ribbon d-flex justify-content-between align-items-center flex-wrap gap-2 p-2 px-3 rounded-2 mb-3">
        <div className="d-flex align-items-center gap-2">
          <span className="badge bg-success px-2 py-1 text-uppercase fw-bold letter-spacing-1">
            OPD PASS
          </span>
          <strong className="font-cinzel opd-title text-ayur-primary">
            PATIENT CONSULTATION SLIP (ओ.पी.डी. परामर्श पर्ची)
          </strong>
        </div>
        <div className="d-flex align-items-center gap-3">
          <div>
            <span className="text-muted small text-uppercase">Token / Ref No:</span>
            <span className="opd-ref-pill ms-1 font-cinzel fw-bold text-ayur-primary">
              {appointment.referenceNumber}
            </span>
          </div>
          <span
            className={`badge px-3 py-1 rounded-pill fw-bold border ${
              appointment.status === 'Confirmed'
                ? 'bg-success-subtle text-success border-success'
                : appointment.status === 'Completed'
                ? 'bg-info-subtle text-info border-info'
                : appointment.status === 'Cancelled'
                ? 'bg-danger-subtle text-danger border-danger'
                : 'bg-gold-subtle text-gold border-warning'
            }`}
          >
            {appointment.status}
          </span>
        </div>
      </div>

      {/* Patient Particulars Table */}
      <div className="opd-details-table-wrap mb-3 table-responsive">
        <table className="table table-bordered opd-table mb-0 align-middle">
          <tbody>
            <tr>
              <th className="table-label bg-light" style={{ width: '20%' }}>Patient Name:</th>
              <td className="table-val fw-bold fs-6 text-dark" style={{ width: '30%' }}>
                {appointment.fullName}
              </td>
              <th className="table-label bg-light" style={{ width: '20%' }}>Contact / WhatsApp:</th>
              <td className="table-val fw-semibold" style={{ width: '30%' }}>
                {appointment.phoneNumber}
              </td>
            </tr>
            <tr>
              <th className="table-label bg-light">Age &amp; Gender:</th>
              <td className="table-val">
                {appointment.age} Years / {appointment.gender}
              </td>
              <th className="table-label bg-light">Consultation Mode:</th>
              <td className="table-val">
                {appointment.mode === 'InClinic' ? (
                  <span className="badge bg-success-subtle text-success">
                    <i className="fa-solid fa-hospital me-1"></i> In-Clinic (Siktaur)
                  </span>
                ) : (
                  <span className="badge bg-primary-subtle text-primary">
                    <i className="fa-solid fa-video me-1"></i> Online Video/Audio
                  </span>
                )}
              </td>
            </tr>
            <tr>
              <th className="table-label bg-light">Appointment Date:</th>
              <td className="table-val text-ayur-primary fw-bold">
                {appointment.preferredDate}
              </td>
              <th className="table-label bg-light">Time Slot:</th>
              <td className="table-val fw-bold text-dark">
                {appointment.timeSlot}
              </td>
            </tr>
            <tr>
              <th className="table-label bg-light">Speciality / Category:</th>
              <td className="table-val">{appointment.treatmentCategory}</td>
              <th className="table-label bg-light">OPD Consultation Fee:</th>
              <td className="table-val text-success fw-bold">
                ₹100/- Only (परामर्श शुल्क)
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Presenting Symptoms */}
      {appointment.symptoms && (
        <div className="opd-symptoms-box p-3 rounded-2 mb-3 bg-light border">
          <strong className="d-block text-ayur-primary small mb-1">
            <i className="fa-solid fa-notes-medical me-1 text-gold"></i> Presenting Symptoms / Chief Complaints:
          </strong>
          <p className="mb-0 small text-dark">{appointment.symptoms}</p>
        </div>
      )}

      {/* Doctor Clinical Notes (if available) */}
      {appointment.doctorNotes && (
        <div className="opd-doctor-box p-3 rounded-2 mb-3 bg-white border border-success">
          <strong className="d-block text-success small mb-1">
            <i className="fa-solid fa-user-doctor me-1"></i> Doctor's Clinical Advisory / Recommendations:
          </strong>
          <p className="mb-0 small text-dark">{appointment.doctorNotes}</p>
        </div>
      )}

      {/* Instructions & Guidelines */}
      <div className="opd-instructions p-3 rounded-2 mb-3 bg-light border">
        <h6 className="fw-bold text-ayur-primary small mb-2">
          <i className="fa-solid fa-circle-info text-gold me-1"></i> Patient Instructions for Consultation:
        </h6>
        <ul className="small text-muted mb-0 ps-3">
          <li>Please arrive 15 minutes prior to your allocated slot for Nadi Pariksha pulse settling.</li>
          <li>Bring any previous MRI, X-Ray, blood test reports or prescription slips with you.</li>
          <li>For pulse examination (Nadi Pariksha), avoid heavy greasy food at least 2 hours prior.</li>
          <li>Consultation fee is ₹100/- only, payable at clinic reception desk.</li>
        </ul>
      </div>

      {/* Action Buttons (Hidden when printing) */}
      <div className="d-flex flex-column flex-sm-row flex-wrap gap-2 justify-content-between align-items-stretch align-items-sm-center pt-3 border-top d-print-none">
        <Link to="/status" className="btn btn-outline-secondary btn-sm rounded-pill px-3 text-center w-100 w-sm-auto">
          <i className="fa-solid fa-arrow-left me-1"></i> Track Another Booking
        </Link>

        <div className="d-flex flex-column flex-sm-row gap-2">
          <button
            type="button"
            onClick={handlePrint}
            className="btn btn-ayur-primary btn-sm rounded-pill px-3 px-sm-4 text-center w-100 w-sm-auto"
          >
            <i className="fa-solid fa-print me-1"></i> Print / Save Slip (PDF)
          </button>
          <a
            href={`https://wa.me/919795578700?text=${waMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success btn-sm rounded-pill px-3 text-center w-100 w-sm-auto"
          >
            <i className="fa-brands fa-whatsapp me-1"></i> Confirm on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};
