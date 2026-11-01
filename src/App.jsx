import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { ThemeDrawer } from './components/ThemeDrawer';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { TreatmentsPage } from './pages/TreatmentsPage';
import { TreatmentDetailPage } from './pages/TreatmentDetailPage';
import { DoshaQuizPage } from './pages/DoshaQuizPage';
import { BookAppointmentPage } from './pages/BookAppointmentPage';
import { AppointmentSuccessPage } from './pages/AppointmentSuccessPage';
import { TrackStatusPage } from './pages/TrackStatusPage';
import { ContactPage } from './pages/ContactPage';
import { DoctorLoginPage } from './pages/DoctorLoginPage';
import { DoctorDashboardPage } from './pages/DoctorDashboardPage';
import { PrivacyPage } from './pages/PrivacyPage';

export function App() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="d-flex flex-column min-vh-100">
      <TopBar />
      <Navbar />

      <main role="main" className="flex-grow-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/treatments" element={<TreatmentsPage />} />
          <Route path="/treatment/:id" element={<TreatmentDetailPage />} />
          <Route path="/dosha-quiz" element={<DoshaQuizPage />} />
          <Route path="/book" element={<BookAppointmentPage />} />
          <Route path="/success" element={<AppointmentSuccessPage />} />
          <Route path="/status" element={<TrackStatusPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admin/login" element={<DoctorLoginPage />} />
          <Route path="/admin" element={<DoctorDashboardPage />} />
          <Route path="/admin/messages" element={<DoctorDashboardPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      <Footer />
      <FloatingActions />
      <ThemeDrawer />
    </div>
  );
}

export default App;
