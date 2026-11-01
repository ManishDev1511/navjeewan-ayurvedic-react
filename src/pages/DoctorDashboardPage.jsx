import React, { useState, useMemo } from 'react';
import { useNavigate, Navigate, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const getTodayDateStr = () => new Date().toISOString().split('T')[0];

export const DoctorDashboardPage = () => {
  const navigate = useNavigate();
  const {
    appointments,
    messages,
    isDoctorAuthenticated,
    doctorLogout,
    updateAppointmentStatus
  } = useApp();

  const [activeTab, setActiveTab] = useState('appointments'); // 'appointments' or 'messages'
  const [statusFilter, setStatusFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Selected appointment for Doctor edit modal
  const [selectedApp, setSelectedApp] = useState(null);
  const [editStatus, setEditStatus] = useState('Pending');
  const [editNotes, setEditNotes] = useState('');

  const [todayStr] = useState(getTodayDateStr);

  // Filtered Appointments
  const filteredAppointments = useMemo(() => {
    return appointments.filter(a => {
      const matchesStatus = statusFilter === 'All' || a.status === statusFilter;
      const cleanSearch = searchTerm.toLowerCase();
      const matchesSearch =
        a.fullName.toLowerCase().includes(cleanSearch) ||
        a.phoneNumber.includes(cleanSearch) ||
        a.referenceNumber.toLowerCase().includes(cleanSearch) ||
        a.treatmentCategory.toLowerCase().includes(cleanSearch);
      return matchesStatus && matchesSearch;
    });
  }, [appointments, statusFilter, searchTerm]);

  if (!isDoctorAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  // Metrics
  const totalCount = appointments.length;
  const pendingCount = appointments.filter(a => a.status === 'Pending').length;
  const todayCount = appointments.filter(a => a.preferredDate === todayStr).length;
  const completedCount = appointments.filter(a => a.status === 'Completed').length;

  const handleOpenEditModal = (app) => {
    setSelectedApp(app);
    setEditStatus(app.status);
    setEditNotes(app.doctorNotes || '');
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    if (!selectedApp) return;
    updateAppointmentStatus(selectedApp.referenceNumber, editStatus, editNotes);
    setSelectedApp(null);
  };

  return (
    <>
      {/* Top Admin Header */}
      <div className="py-4 bg-white border-bottom">
        <div className="container d-flex flex-wrap justify-content-between align-items-center gap-3">
          <div>
            <span className="badge bg-gold text-dark fw-bold px-2.5 py-1 rounded small">
              Dr. Sharvan Kumar (BAMS, NET, JRF, SRF, Ph.D.)
            </span>
            <h2 className="font-cinzel fw-bold mb-0">Clinic Appointments &amp; Patients</h2>
          </div>
          <div className="d-flex align-items-center gap-2">
            <button
              type="button"
              className={`btn btn-sm rounded-pill px-3 ${
                activeTab === 'messages' ? 'btn-ayur-primary' : 'btn-outline-secondary'
              }`}
              onClick={() => setActiveTab(activeTab === 'messages' ? 'appointments' : 'messages')}
            >
              <i className="fa-solid fa-envelope me-1"></i>
              Inquiries &amp; Messages ({messages.length})
            </button>
            <button
              type="button"
              className="btn btn-outline-danger btn-sm rounded-pill px-3"
              onClick={() => {
                doctorLogout();
                navigate('/admin/login');
              }}
            >
              <i className="fa-solid fa-power-off me-1"></i> Logout
            </button>
          </div>
        </div>
      </div>

      <section className="py-4 bg-ayur-cream min-vh-75">
        <div className="container">
          {/* Metrics Row */}
          <div className="row g-3 mb-4">
            <div className="col-md-3 col-sm-6">
              <div className="bg-white p-3 rounded-4 border shadow-sm d-flex align-items-center gap-3">
                <div
                  className="treatment-icon-wrapper bg-light text-primary flex-shrink-0"
                  style={{ width: '48px', height: '48px' }}
                >
                  <i className="fa-solid fa-users"></i>
                </div>
                <div>
                  <h4 className="fw-bold mb-0">{totalCount}</h4>
                  <small className="text-muted">Total Appointments</small>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="bg-white p-3 rounded-4 border shadow-sm d-flex align-items-center gap-3">
                <div
                  className="treatment-icon-wrapper bg-light text-warning flex-shrink-0"
                  style={{ width: '48px', height: '48px' }}
                >
                  <i className="fa-solid fa-hourglass-half"></i>
                </div>
                <div>
                  <h4 className="fw-bold mb-0">{pendingCount}</h4>
                  <small className="text-muted">Pending Confirmation</small>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="bg-white p-3 rounded-4 border shadow-sm d-flex align-items-center gap-3">
                <div
                  className="treatment-icon-wrapper bg-light text-success flex-shrink-0"
                  style={{ width: '48px', height: '48px' }}
                >
                  <i className="fa-solid fa-calendar-check"></i>
                </div>
                <div>
                  <h4 className="fw-bold mb-0">{todayCount}</h4>
                  <small className="text-muted">Today's Schedule</small>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="bg-white p-3 rounded-4 border shadow-sm d-flex align-items-center gap-3">
                <div
                  className="treatment-icon-wrapper bg-light text-info flex-shrink-0"
                  style={{ width: '48px', height: '48px' }}
                >
                  <i className="fa-solid fa-circle-check"></i>
                </div>
                <div>
                  <h4 className="fw-bold mb-0">{completedCount}</h4>
                  <small className="text-muted">Completed Consults</small>
                </div>
              </div>
            </div>
          </div>

          {/* Main View: Appointments vs Inquiries */}
          {activeTab === 'appointments' ? (
            <>
              {/* Controls: Filter Pills & Search */}
              <div className="bg-white p-3 rounded-4 border shadow-sm mb-4">
                <div className="row g-3 align-items-center">
                  <div className="col-lg-6">
                    <div className="d-flex flex-wrap gap-2">
                      {['All', 'Pending', 'Confirmed', 'Completed', 'Cancelled'].map((status) => (
                        <button
                          key={status}
                          type="button"
                          className={`btn btn-sm rounded-pill px-3 ${
                            statusFilter === status
                              ? status === 'Pending'
                                ? 'btn-warning'
                                : status === 'Confirmed'
                                ? 'btn-success'
                                : status === 'Completed'
                                ? 'btn-info text-white'
                                : status === 'Cancelled'
                                ? 'btn-danger'
                                : 'btn-ayur-primary'
                              : 'btn-light border'
                          }`}
                          onClick={() => setStatusFilter(status)}
                        >
                          {status}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="input-group">
                      <span className="input-group-text bg-light border-end-0">
                        <i className="fa-solid fa-magnifying-glass text-muted"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control form-control-sm border-start-0"
                        placeholder="Search patient name, phone, or reference..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      {searchTerm && (
                        <button
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => setSearchTerm('')}
                        >
                          Clear
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Appointments List */}
              <div className="bg-white rounded-4 border shadow-sm overflow-hidden">
                <div className="table-responsive">
                  <table className="table table-hover align-middle mb-0">
                    <thead className="table-light small text-uppercase text-muted">
                      <tr>
                        <th>Ref / Date</th>
                        <th>Patient Info</th>
                        <th>Schedule</th>
                        <th>Category &amp; Mode</th>
                        <th>Status</th>
                        <th className="text-end">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredAppointments.length === 0 ? (
                        <tr>
                          <td colSpan="6" className="text-center py-5 text-muted">
                            <i className="fa-solid fa-inbox fs-2 mb-2 d-block text-secondary"></i>
                            No appointments found matching the current filters.
                          </td>
                        </tr>
                      ) : (
                        filteredAppointments.map((app) => {
                          const waLink = `https://wa.me/91${app.phoneNumber.replace(/[^0-9]/g, '').slice(-10)}?text=Namaste%20${encodeURIComponent(app.fullName)},%20this%20is%20Dr.%20Sharvan%20Kumar%20from%20Nav%20Jeevan%20Ayurvedic%20Upchar%20Kendra%20regarding%20your%20appointment%20${app.referenceNumber}.`;

                          return (
                            <tr key={app.referenceNumber}>
                              <td>
                                <strong className="font-monospace text-ayur-primary small d-block">
                                  {app.referenceNumber}
                                </strong>
                                <small className="text-muted">{app.preferredDate}</small>
                              </td>
                              <td>
                                <div className="fw-bold">{app.fullName}</div>
                                <div className="small text-muted">
                                  {app.age} Yrs / {app.gender} • <i className="fa-solid fa-phone small me-1"></i>
                                  {app.phoneNumber}
                                </div>
                              </td>
                              <td>
                                <div className="small fw-semibold">{app.timeSlot}</div>
                                <small className="text-muted">
                                  {app.preferredDate === todayStr ? (
                                    <span className="badge bg-success-subtle text-success">Today</span>
                                  ) : (
                                    app.preferredDate
                                  )}
                                </small>
                              </td>
                              <td>
                                <div className="small text-truncate" style={{ maxWidth: '180px' }}>
                                  {app.treatmentCategory}
                                </div>
                                <span className={`badge ${app.mode === 'InClinic' ? 'bg-light text-dark border' : 'bg-primary-subtle text-primary'}`}>
                                  {app.mode === 'InClinic' ? 'In-Clinic' : 'Online Video'}
                                </span>
                              </td>
                              <td>
                                <span
                                  className={`badge px-2.5 py-1 rounded-pill ${
                                    app.status === 'Confirmed'
                                      ? 'bg-success text-white'
                                      : app.status === 'Completed'
                                      ? 'bg-info text-white'
                                      : app.status === 'Cancelled'
                                      ? 'bg-danger text-white'
                                      : 'bg-warning text-dark'
                                  }`}
                                >
                                  {app.status}
                                </span>
                              </td>
                              <td className="text-end">
                                <div className="btn-group btn-group-sm">
                                  <button
                                    type="button"
                                    className="btn btn-outline-primary"
                                    title="Edit Status & Prescription"
                                    onClick={() => handleOpenEditModal(app)}
                                  >
                                    <i className="fa-solid fa-pen-to-square"></i>
                                  </button>
                                  <a
                                    href={waLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline-success"
                                    title="Chat with Patient on WhatsApp"
                                  >
                                    <i className="fa-brands fa-whatsapp"></i>
                                  </a>
                                  <Link
                                    to={`/success?refNo=${app.referenceNumber}`}
                                    className="btn btn-outline-secondary"
                                    title="View Printable OPD Slip"
                                  >
                                    <i className="fa-solid fa-print"></i>
                                  </Link>
                                </div>
                              </td>
                            </tr>
                          );
                        })
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          ) : (
            /* Messages Inbox */
            <div className="bg-white rounded-4 border shadow-sm p-4">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="font-cinzel fw-bold mb-0 text-ayur-primary">
                  Website Inquiries &amp; Messages ({messages.length})
                </h5>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary rounded-pill px-3"
                  onClick={() => setActiveTab('appointments')}
                >
                  <i className="fa-solid fa-arrow-left me-1"></i> Back to Appointments
                </button>
              </div>

              {messages.length === 0 ? (
                <div className="text-center py-5 text-muted">
                  <i className="fa-solid fa-inbox fs-2 mb-2 d-block text-secondary"></i>
                  No inquiry messages have been submitted yet.
                </div>
              ) : (
                <div className="d-flex flex-column gap-3">
                  {messages.map((msg) => {
                    const waLink = `https://wa.me/91${msg.phone.replace(/[^0-9]/g, '').slice(-10)}?text=Namaste%20${encodeURIComponent(msg.name)},%20this%20is%20Dr.%20Sharvan%20Kumar%20from%20Nav%20Jeevan%20Ayurvedic%20Clinic.`;

                    return (
                      <div key={msg.id} className="border rounded-3 p-3 bg-light">
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <div>
                            <h5 className="fw-bold mb-0">{msg.name}</h5>
                            <div className="small text-muted">
                              <i className="fa-solid fa-phone me-1 text-gold"></i> {msg.phone}
                              {msg.email && (
                                <span className="ms-2">
                                  <i className="fa-solid fa-envelope me-1"></i> {msg.email}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="text-end">
                            <small className="text-muted d-block mb-1">
                              {new Date(msg.submittedAt).toLocaleDateString('en-IN', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric'
                              })}
                            </small>
                            <a
                              href={waLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-sm btn-success rounded-pill px-3"
                            >
                              <i className="fa-brands fa-whatsapp me-1"></i> WhatsApp
                            </a>
                          </div>
                        </div>
                        <div className="p-2 bg-white rounded border">
                          <strong className="d-block text-ayur-primary small mb-1">
                            Subject: {msg.subject}
                          </strong>
                          <p className="small text-muted mb-0">{msg.message}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Edit Status & Notes Modal */}
      {selectedApp && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1060 }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content rounded-4 border-0 shadow-lg">
              <div className="modal-header border-bottom py-3">
                <h5 className="modal-title font-cinzel fw-bold">
                  Update Patient Consultation
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setSelectedApp(null)}
                ></button>
              </div>

              <form onSubmit={handleSaveEdit}>
                <div className="modal-body p-4">
                  <div className="p-3 bg-light rounded-3 mb-3 small">
                    <div>
                      <strong>Patient:</strong> {selectedApp.fullName} ({selectedApp.age} / {selectedApp.gender})
                    </div>
                    <div>
                      <strong>Ref:</strong> {selectedApp.referenceNumber} • <strong>Date:</strong> {selectedApp.preferredDate} ({selectedApp.timeSlot})
                    </div>
                    {selectedApp.symptoms && (
                      <div className="mt-1 text-muted">
                        <strong>Symptoms:</strong> {selectedApp.symptoms}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-bold small">Appointment Status:</label>
                    <select
                      className="form-select"
                      value={editStatus}
                      onChange={(e) => setEditStatus(e.target.value)}
                    >
                      <option value="Pending">Pending Confirmation</option>
                      <option value="Confirmed">Confirmed</option>
                      <option value="Completed">Completed</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-bold small">
                      Doctor Clinical Notes &amp; Prescription / Advice:
                    </label>
                    <textarea
                      rows="4"
                      className="form-control"
                      placeholder="e.g. Advised Nadi Pariksha and Janu Basti. Prescribed Yograj Guggulu & Mahanarayan Taila..."
                      value={editNotes}
                      onChange={(e) => setEditNotes(e.target.value)}
                    ></textarea>
                    <small className="text-muted">
                      These notes will be visible to the patient on their OPD slip and status tracker.
                    </small>
                  </div>
                </div>

                <div className="modal-footer border-top py-2">
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm rounded-pill px-3"
                    onClick={() => setSelectedApp(null)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-ayur-primary btn-sm rounded-pill px-4"
                  >
                    <i className="fa-solid fa-floppy-disk me-1"></i> Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
