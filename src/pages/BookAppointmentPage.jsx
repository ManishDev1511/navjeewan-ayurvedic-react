import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const getTodayDateStr = () => new Date().toISOString().split('T')[0];

export const BookAppointmentPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { createAppointment } = useApp();

  const categoryParam = searchParams.get('category');
  const [todayStr] = useState(getTodayDateStr);

  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    age: '',
    gender: 'Male',
    mode: 'InClinic',
    preferredDate: todayStr,
    timeSlot: '10:00 AM - 11:00 AM',
    treatmentCategory: categoryParam || 'General Consultation',
    symptoms: ''
  });

  const [errors, setErrors] = useState({});
  const [prevCategoryParam, setPrevCategoryParam] = useState(categoryParam);

  if (categoryParam !== prevCategoryParam) {
    setPrevCategoryParam(categoryParam);
    if (categoryParam && formData.treatmentCategory !== categoryParam) {
      setFormData(prev => ({ ...prev, treatmentCategory: categoryParam }));
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone Number is required.';
    } else if (!/^[0-9]{10}$/.test(formData.phoneNumber.replace(/[\s+-]/g, '').slice(-10))) {
      newErrors.phoneNumber = 'Please enter a valid 10-digit mobile number.';
    }
    if (!formData.age || Number(formData.age) < 1 || Number(formData.age) > 120) {
      newErrors.age = 'Please enter a valid age (1-120).';
    }
    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred date.';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const created = createAppointment(formData);
    navigate(`/success?refNo=${created.referenceNumber}`);
  };

  const categories = [
    'General Consultation',
    'Nadi Pariksha (Pulse Diagnosis)',
    'Panchakarma Detoxification',
    'Musculoskeletal Care (Joint, Spine & Back Pain)',
    'Pain & Rehabilitation (Physiotherapy & Paralysis)',
    'Dermatology (Psoriasis & Skin Allergies)',
    'Digestive Health (IBS, Acidity & Liver Care)',
    'Mental Health (Shirodhara & Anxiety)',
    "Women's Health (PCOD/PCOS)",
    'Metabolic Health (Diabetes & Weight Care)'
  ];

  return (
    <>
      {/* Header */}
      <div className="py-5 bg-white border-bottom">
        <div className="container text-center max-w-700 mx-auto">
          <span className="badge bg-gold-subtle text-gold px-3 py-1 rounded-pill mb-2">
            Patient Registration
          </span>
          <h1 className="font-cinzel fw-bold mb-2">Book Your Doctor Consultation</h1>
          <p className="text-muted">
            Consult with <strong>Dr. Sharavan Kumar</strong> (BAMS, NET, JRF, SRF, Ph.D.), Senior Ayurvedic Doctor in Gorakhpur, in-clinic at Siktaur or through a secure online audio/video consultation.
          </p>
        </div>
      </div>

      <section className="py-5 bg-ayur-cream">
        <div className="container" style={{ maxWidth: '950px' }}>
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="bg-white p-3 p-sm-4 p-md-5 rounded-4 border shadow-sm">
                <form onSubmit={handleSubmit} id="appointmentForm">
                  <h5 className="fw-bold text-ayur-primary mb-3 border-bottom pb-2">
                    <i className="fa-solid fa-user me-2 text-gold"></i> Patient Details
                  </h5>

                  <div className="row g-3 mb-3">
                    <div className="col-md-12">
                      <label className="form-label fw-semibold small">Full Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={`form-control form-control-ayur ${errors.fullName ? 'is-invalid' : ''}`}
                        placeholder="e.g. Ramesh Kumar"
                      />
                      {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-semibold small">WhatsApp / Mobile Number *</label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className={`form-control form-control-ayur ${errors.phoneNumber ? 'is-invalid' : ''}`}
                        placeholder="10-digit mobile number"
                      />
                      {errors.phoneNumber && <div className="invalid-feedback">{errors.phoneNumber}</div>}
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-semibold small">Email Address (Optional)</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control form-control-ayur"
                        placeholder="patient@example.com"
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-semibold small">Age *</label>
                      <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        min="1"
                        max="120"
                        className={`form-control form-control-ayur ${errors.age ? 'is-invalid' : ''}`}
                        placeholder="e.g. 42"
                      />
                      {errors.age && <div className="invalid-feedback">{errors.age}</div>}
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-semibold small">Gender *</label>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="form-select form-select-ayur"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <h5 className="fw-bold text-ayur-primary mb-3 border-bottom pb-2 pt-2">
                    <i className="fa-solid fa-calendar-days me-2 text-gold"></i> Appointment Preferences
                  </h5>

                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label className="form-label fw-semibold small">Consultation Mode *</label>
                      <select
                        name="mode"
                        value={formData.mode}
                        onChange={handleChange}
                        className="form-select form-select-ayur"
                      >
                        <option value="InClinic">In-Clinic Consultation (Siktaur, Gorakhpur)</option>
                        <option value="OnlineVideoAudio">Online Video/Audio Consultation (WhatsApp)</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-semibold small">Preferred Date *</label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        min={todayStr}
                        className={`form-control form-control-ayur ${errors.preferredDate ? 'is-invalid' : ''}`}
                      />
                      {errors.preferredDate && <div className="invalid-feedback">{errors.preferredDate}</div>}
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-semibold small">Preferred Time Slot *</label>
                      <select
                        name="timeSlot"
                        value={formData.timeSlot}
                        onChange={handleChange}
                        className="form-select form-select-ayur"
                      >
                        <optgroup label="Morning Session (10:00 AM - 01:30 PM)">
                          <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
                          <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
                          <option value="12:00 PM - 01:30 PM">12:00 PM - 01:30 PM</option>
                        </optgroup>
                        <optgroup label="Evening Session (04:30 PM - 08:30 PM)">
                          <option value="04:30 PM - 05:30 PM">04:30 PM - 05:30 PM</option>
                          <option value="05:30 PM - 06:30 PM">05:30 PM - 06:30 PM</option>
                          <option value="06:30 PM - 07:30 PM">06:30 PM - 07:30 PM</option>
                          <option value="07:30 PM - 08:30 PM">07:30 PM - 08:30 PM</option>
                        </optgroup>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-semibold small">Speciality / Treatment Category *</label>
                      <select
                        name="treatmentCategory"
                        value={formData.treatmentCategory}
                        onChange={handleChange}
                        className="form-select form-select-ayur"
                      >
                        {categories.map((cat, idx) => (
                          <option key={idx} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-semibold small">
                      Presenting Symptoms &amp; Health Concerns (Optional)
                    </label>
                    <textarea
                      name="symptoms"
                      value={formData.symptoms}
                      onChange={handleChange}
                      rows="3"
                      className="form-control form-control-ayur"
                      placeholder="Briefly describe what issues you are experiencing (e.g. chronic back pain, indigestion, skin rash, knee stiffness)..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-ayur-primary btn-lg w-100 rounded-pill py-2 py-sm-3 shadow-sm fw-bold"
                    style={{ fontSize: '0.95rem' }}
                  >
                    <i className="fa-solid fa-circle-check me-2"></i> Confirm &amp; Generate OPD Slip
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar Information Card */}
            <div className="col-lg-4">
              <div className="bg-white p-3 p-sm-4 rounded-4 border shadow-sm sticky-lg-top" style={{ top: '100px' }}>
                <div className="text-center pb-3 border-bottom mb-3">
                  <div className="badge bg-gold text-dark px-3 py-1 rounded-pill fw-bold mb-2">
                    <i className="fa-solid fa-tag me-1"></i> OPD Fee: ₹100/- Only
                  </div>
                  <h5 className="font-cinzel fw-bold mb-0 text-ayur-primary">Dr. Sharvan Kumar</h5>
                  <small className="text-muted d-block">BAMS, NET, JRF, SRF, Ph.D.</small>
                  <span className="badge bg-light text-dark border mt-1">Estd. 2011 • Gorakhpur</span>
                </div>

                <h6 className="fw-bold font-cinzel text-ayur-primary mb-2 small">Why Book With Us:</h6>
                <ul className="list-unstyled small text-muted mb-4">
                  <li className="mb-2">
                    <i className="fa-solid fa-circle-check text-success me-2"></i>
                    <strong>Authentic Nadi Pariksha:</strong> Radial pulse examination to detect root causes.
                  </li>
                  <li className="mb-2">
                    <i className="fa-solid fa-circle-check text-success me-2"></i>
                    <strong>Clinical Physiotherapy:</strong> Synergy of electrotherapy &amp; Marma stimulation.
                  </li>
                  <li className="mb-2">
                    <i className="fa-solid fa-circle-check text-success me-2"></i>
                    <strong>Affordable Healthcare:</strong> Genuine OPD consultation fee of just ₹100/-.
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check text-success me-2"></i>
                    <strong>Zero Waiting Time:</strong> Allocated slots prioritize registered patients.
                  </li>
                </ul>

                <div className="p-3 bg-light rounded-3 border mb-3">
                  <div className="small fw-bold text-dark mb-1">
                    <i className="fa-solid fa-location-dot text-gold me-1"></i> Clinic Address:
                  </div>
                  <div className="small text-muted">
                    Siktaur Chauraha, Deoria Bypass Road, Ramgarhtal, Gorakhpur
                  </div>
                </div>

                <a
                  href="https://wa.me/919795578700?text=Namaste%20Dr.%20Sharvan%20Kumar,%20I%20have%20a%20question%20about%20booking%20an%20appointment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-success btn-sm w-100 rounded-pill"
                >
                  <i className="fa-brands fa-whatsapp me-1"></i> Help on WhatsApp (097955 78700)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
