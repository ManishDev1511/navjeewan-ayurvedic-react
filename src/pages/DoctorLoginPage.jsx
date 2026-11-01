import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export const DoctorLoginPage = () => {
  const navigate = useNavigate();
  const { doctorLogin, isDoctorAuthenticated } = useApp();

  const [pin, setPin] = useState('');
  const [error, setError] = useState('');

  if (isDoctorAuthenticated) {
    navigate('/admin');
    return null;
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const res = doctorLogin(pin.trim());
    if (res.success) {
      navigate('/admin');
    } else {
      setError(res.error);
    }
  };

  return (
    <section className="py-5 bg-ayur-cream min-vh-75 d-flex align-items-center">
      <div className="container" style={{ maxWidth: '480px' }}>
        <div className="bg-white p-4 p-md-5 rounded-4 border shadow-sm text-center">
          <div
            className="treatment-icon-wrapper mx-auto mb-3"
            style={{ width: '60px', height: '60px', fontSize: '1.6rem' }}
          >
            <i className="fa-solid fa-user-doctor"></i>
          </div>
          <h3 className="font-cinzel fw-bold mb-1">Doctor Portal</h3>
          <p className="text-muted small mb-4">
            Nav Jeevan Ayurvedic Upchar Kendra (Dr. Sharvan Kumar - BAMS, NET, JRF, SRF, Ph.D.)
          </p>

          {error && (
            <div className="alert alert-danger py-2 small border-0 mb-3 text-start">
              <i className="fa-solid fa-circle-exclamation me-1"></i> {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="text-start">
            <div className="mb-3">
              <label className="form-label fw-bold small">Doctor Access Key / PIN:</label>
              <div className="input-group">
                <span className="input-group-text bg-light border-end-0">
                  <i className="fa-solid fa-lock text-muted"></i>
                </span>
                <input
                  type="password"
                  className="form-control form-control-ayur border-start-0"
                  placeholder="Enter access PIN"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  required
                  autoFocus
                />
              </div>
              <small className="text-muted d-block mt-1">
                Default demo access key: <code>admin123</code>
              </small>
            </div>

            <button
              type="submit"
              className="btn btn-ayur-primary w-100 py-2.5 rounded-pill fw-bold mt-2 shadow-sm"
            >
              <i className="fa-solid fa-right-to-bracket me-2"></i> Log In to Dashboard
            </button>
          </form>

          <div className="mt-4 pt-3 border-top">
            <Link to="/" className="text-muted small text-decoration-none">
              <i className="fa-solid fa-arrow-left me-1"></i> Back to Public Website
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
