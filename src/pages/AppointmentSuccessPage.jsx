import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { OpdSlip } from '../components/OpdSlip';

export const AppointmentSuccessPage = () => {
  const [searchParams] = useSearchParams();
  const refNo = searchParams.get('refNo');
  const { getAppointment, fetchAppointmentByRef } = useApp();
  const [queriedApp, setQueriedApp] = useState(null);
  const [isFetching, setIsFetching] = useState(() => Boolean(refNo && !getAppointment(refNo)));

  const localApp = getAppointment(refNo);
  const appointment = localApp || queriedApp;
  const isLoading = Boolean(!appointment && isFetching);

  useEffect(() => {
    if (!localApp && refNo && fetchAppointmentByRef) {
      let isMounted = true;
      fetchAppointmentByRef(refNo)
        .then((res) => {
          if (isMounted) {
            if (res) {
              setQueriedApp(res);
            }
            setIsFetching(false);
          }
        })
        .catch(() => {
          if (isMounted) {
            setIsFetching(false);
          }
        });
      return () => {
        isMounted = false;
      };
    }
  }, [localApp, refNo, fetchAppointmentByRef]);

  return (
    <section className="appointment-success-section py-4 py-md-5 bg-ayur-cream">
      <div className="container" style={{ maxWidth: '860px' }}>
        {/* Top Success Banner (Hidden during print) */}
        <div className="text-center mb-4 no-print d-print-none">
          <div
            className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-2 shadow-sm"
            style={{ width: '58px', height: '58px', fontSize: '1.6rem' }}
          >
            <i className="fa-solid fa-check"></i>
          </div>
          <h2 className="font-cinzel fw-bold mb-1 fs-3">Appointment Registered Successfully!</h2>
          <p className="text-muted small mb-0">
            Aapka appointment register ho chuka hai. Niche di gayi official OPD receipt ko aap print ya PDF me save kar sakte hain.
          </p>
        </div>

        {isLoading && !appointment ? (
          <div className="border rounded-4 p-5 bg-white text-center shadow-sm">
            <div className="spinner-border text-gold mb-3" role="status">
              <span className="visually-hidden">Loading OPD receipt...</span>
            </div>
            <p className="text-muted fw-semibold mb-0">
              Retrieving official clinic OPD receipt for reference "{refNo}"...
            </p>
          </div>
        ) : appointment ? (
          <OpdSlip appointment={appointment} />
        ) : (
          <div className="bg-white p-5 rounded-4 border text-center">
            <i className="fa-solid fa-triangle-exclamation text-warning fs-1 mb-3"></i>
            <h4 className="fw-bold">No Appointment Found</h4>
            <p className="text-muted">
              Reference number <strong>{refNo || 'N/A'}</strong> could not be found. Please check your reference number or book a new appointment.
            </p>
            <div className="d-flex flex-column flex-sm-row justify-content-center gap-2">
              <Link to="/book" className="btn btn-ayur-primary rounded-pill px-4 text-center">
                Book Appointment
              </Link>
              <Link to="/status" className="btn btn-outline-secondary rounded-pill px-4 text-center">
                Track Existing Booking
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
