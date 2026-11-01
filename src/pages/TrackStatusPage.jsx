import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export const TrackStatusPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { getAppointment, appointments } = useApp();

  const qRef = searchParams.get('refNo') || '';
  const [inputRef, setInputRef] = useState(qRef);
  const [searchedRef, setSearchedRef] = useState(qRef);
  const [hasSearched, setHasSearched] = useState(Boolean(qRef));

  useEffect(() => {
    if (qRef && qRef !== searchedRef) {
      setInputRef(qRef);
      setSearchedRef(qRef);
      setHasSearched(true);
    }
  }, [qRef, searchedRef]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!inputRef.trim()) return;
    setSearchedRef(inputRef.trim());
    setHasSearched(true);
    setSearchParams({ refNo: inputRef.trim() });
  };

  const appointment = searchedRef ? getAppointment(searchedRef) : null;

  return (
    <>
      {/* Header */}
      <div className="py-5 bg-white border-bottom">
        <div className="container text-center max-w-700 mx-auto">
          <span className="badge bg-gold-subtle text-gold px-3 py-1 rounded-pill mb-2">
            Patient Services
          </span>
          <h1 className="font-cinzel fw-bold mb-2">Track Appointment Status</h1>
          <p className="text-muted">
            Enter your booking reference number to verify the status of your appointment and view Doctor advisory notes.
          </p>
        </div>
      </div>

      <section className="py-5 bg-ayur-cream">
        <div className="container" style={{ maxWidth: '700px' }}>
          <div className="bg-white p-3.5 p-sm-4 p-md-5 rounded-4 border shadow-sm mb-4">
            <form onSubmit={handleSearch} className="mb-4">
              <label htmlFor="refNoInput" className="form-label fw-bold small text-muted text-uppercase tracking-wider">
                Enter Appointment Reference Number:
              </label>
              <div className="input-group">
                <input
                  type="text"
                  id="refNoInput"
                  className="form-control form-control-ayur"
                  placeholder="e.g. NAV-20261101-1042"
                  value={inputRef}
                  onChange={(e) => setInputRef(e.target.value)}
                  required
                />
                <button type="submit" className="btn btn-ayur-primary px-3 px-sm-4 fw-bold">
                  <i className="fa-solid fa-magnifying-glass me-1"></i> Track
                </button>
              </div>
            </form>

            {/* Quick Demo Reference Pill Hints */}
            <div className="p-3 bg-light rounded-3 border mb-4">
              <small className="text-muted d-block fw-semibold mb-2">
                <i className="fa-solid fa-lightbulb text-gold me-1"></i> Quick Demo Test References (Click to test):
              </small>
              <div className="d-flex flex-wrap gap-2">
                {appointments.slice(0, 3).map((a) => (
                  <button
                    key={a.referenceNumber}
                    type="button"
                    className="btn btn-sm btn-outline-secondary rounded-pill font-monospace"
                    onClick={() => {
                      setInputRef(a.referenceNumber);
                      setSearchedRef(a.referenceNumber);
                      setHasSearched(true);
                      setSearchParams({ refNo: a.referenceNumber });
                    }}
                  >
                    {a.referenceNumber} ({a.status})
                  </button>
                ))}
              </div>
            </div>

            {/* Search Results Display */}
            {hasSearched && (
              appointment ? (
                <div className="border rounded-4 p-3 p-sm-4 bg-light shadow-sm">
                  <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-3">
                    <div>
                      <h5 className="fw-bold mb-0 text-ayur-primary">{appointment.fullName}</h5>
                      <small className="text-muted">Ref: {appointment.referenceNumber}</small>
                    </div>
                    <span
                      className={`badge px-3 py-2 rounded-pill fw-bold border ${
                        appointment.status === 'Confirmed'
                          ? 'bg-success text-white'
                          : appointment.status === 'Completed'
                          ? 'bg-info text-white'
                          : appointment.status === 'Cancelled'
                          ? 'bg-danger text-white'
                          : 'bg-warning text-dark'
                      }`}
                    >
                      {appointment.status}
                    </span>
                  </div>

                  <div className="row g-2 small text-muted mb-3">
                    <div className="col-sm-6">
                      <strong>Phone:</strong> {appointment.phoneNumber}
                    </div>
                    <div className="col-sm-6">
                      <strong>Appointment Date:</strong> {appointment.preferredDate}
                    </div>
                    <div className="col-sm-6">
                      <strong>Time Slot:</strong> {appointment.timeSlot}
                    </div>
                    <div className="col-sm-6">
                      <strong>Mode:</strong>{' '}
                      <span className="badge bg-secondary ms-1">
                        {appointment.mode === 'InClinic' ? 'In-Clinic (Siktaur)' : 'Online Video/Audio'}
                      </span>
                    </div>
                    <div className="col-sm-12">
                      <strong>Category:</strong> {appointment.treatmentCategory}
                    </div>
                  </div>

                  {appointment.doctorNotes && (
                    <div className="p-3 bg-white rounded-3 border border-success mb-3">
                      <h6 className="fw-bold text-success mb-1 small">
                        <i className="fa-solid fa-user-doctor me-2"></i> Doctor's Advisory &amp; Prescription:
                      </h6>
                      <p className="small text-muted mb-0">{appointment.doctorNotes}</p>
                    </div>
                  )}

                  <div className="text-center mt-3 pt-3 border-top">
                    <Link
                      to={`/success?refNo=${appointment.referenceNumber}`}
                      className="btn btn-outline-dark btn-sm rounded-pill px-4"
                    >
                      <i className="fa-solid fa-print me-1 text-gold"></i> View &amp; Print Official OPD Slip
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="alert alert-warning border-0 text-center py-4 rounded-3 shadow-sm">
                  <i className="fa-solid fa-circle-exclamation fs-3 mb-2 d-block text-warning"></i>
                  <strong>No appointment found</strong> with reference number "<strong>{searchedRef}</strong>".
                  <p className="small text-muted mb-0 mt-1">
                    Please check the spelling or contact clinic reception on <strong>097955 78700</strong>.
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
};
