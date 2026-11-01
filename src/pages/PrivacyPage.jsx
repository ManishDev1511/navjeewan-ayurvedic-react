import React from 'react';
import { Link } from 'react-router-dom';

export const PrivacyPage = () => {
  return (
    <>
      <div className="py-5 bg-white border-bottom">
        <div className="container text-center max-w-700 mx-auto">
          <span className="badge bg-gold-subtle text-gold px-3 py-1 rounded-pill mb-2">
            Confidentiality
          </span>
          <h1 className="font-cinzel fw-bold mb-2">Patient Privacy Policy</h1>
          <p className="text-muted">Nav Jeevan Ayurvedic Upchar Kendra (Dr. Sharvan Kumar) - Siktaur, Gorakhpur</p>
        </div>
      </div>

      <section className="py-5 bg-ayur-cream">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="bg-white p-4 p-md-5 rounded-4 border shadow-sm">
            <h5 className="font-cinzel fw-bold text-ayur-primary mb-3">1. Patient Confidentiality &amp; Medical Privacy</h5>
            <p className="text-muted small">
              At Nav Jeevan Ayurvedic Upchar Kendra, we place the utmost importance on the privacy and confidentiality of our patients. Any clinical data, pulse diagnosis observations (Nadi Pariksha), health complaints, and medical history shared during in-clinic or online consultations are held in strict medical confidence.
            </p>

            <h5 className="font-cinzel fw-bold text-ayur-primary mb-3 mt-4">2. Local Storage &amp; Data Security</h5>
            <p className="text-muted small">
              This application operates as a privacy-first, client-side progressive web application. Your appointment receipts and inquiry messages are securely processed and retained within your browser's private local storage and encrypted transmission channels.
            </p>

            <h5 className="font-cinzel fw-bold text-ayur-primary mb-3 mt-4">3. Direct WhatsApp Consultations</h5>
            <p className="text-muted small">
              When using our one-click WhatsApp consultation feature, communications are handled via end-to-end encrypted chats directly between you and Dr. Sharvan Kumar's official clinic line (+91 97955 78700). We do not share your contact number with any third-party marketing companies.
            </p>

            <h5 className="font-cinzel fw-bold text-ayur-primary mb-3 mt-4">4. Contact &amp; Grievances</h5>
            <p className="text-muted small mb-4">
              If you have any questions regarding your medical records, OPD slips, or clinical consultations, please contact Dr. Sharvan Kumar directly at:
              <br />
              <strong>Clinic Address:</strong> Siktaur Chauraha, Deoria Bypass Road, Ramgarhtal, Gorakhpur, UP - 273010
              <br />
              <strong>Helpline:</strong> 097955 78700 • <strong>Email:</strong> navjeewanayurvedic@gmail.com
            </p>

            <div className="pt-3 border-top">
              <Link to="/" className="btn btn-ayur-primary rounded-pill btn-sm px-4">
                <i className="fa-solid fa-arrow-left me-1"></i> Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
