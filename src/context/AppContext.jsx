import React, { createContext, useContext, useState, useEffect } from 'react';
import { initialAppointments, initialMessages } from '../data/initialData';

const AppContext = createContext();

const APPOINTMENTS_KEY = 'navjeewan_appointments_v1';
const MESSAGES_KEY = 'navjeewan_messages_v1';
const DOCTOR_AUTH_KEY = 'navjeewan_doctor_auth';

export const AppProvider = ({ children }) => {
  const [appointments, setAppointments] = useState(() => {
    try {
      const stored = localStorage.getItem(APPOINTMENTS_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error(e);
    }
    return initialAppointments;
  });

  const [messages, setMessages] = useState(() => {
    try {
      const stored = localStorage.getItem(MESSAGES_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error(e);
    }
    return initialMessages;
  });

  const [isDoctorAuthenticated, setIsDoctorAuthenticated] = useState(() => {
    return localStorage.getItem(DOCTOR_AUTH_KEY) === 'true';
  });

  // Sync appointments
  useEffect(() => {
    try {
      localStorage.setItem(APPOINTMENTS_KEY, JSON.stringify(appointments));
    } catch (e) {
      console.error(e);
    }
  }, [appointments]);

  // Sync messages
  useEffect(() => {
    try {
      localStorage.setItem(MESSAGES_KEY, JSON.stringify(messages));
    } catch (e) {
      console.error(e);
    }
  }, [messages]);

  // Doctor Auth
  const doctorLogin = (pin) => {
    if (pin === 'admin123' || pin === 'doctor123') {
      setIsDoctorAuthenticated(true);
      localStorage.setItem(DOCTOR_AUTH_KEY, 'true');
      return { success: true };
    }
    return { success: false, error: 'Invalid Doctor Access Key / PIN. Try demo PIN: admin123' };
  };

  const doctorLogout = () => {
    setIsDoctorAuthenticated(false);
    localStorage.removeItem(DOCTOR_AUTH_KEY);
  };

  // Create Appointment
  const createAppointment = (formData) => {
    const today = new Date();
    const dateStr = today.toISOString().slice(0, 10).replace(/-/g, '');
    const randomPart = Math.floor(1000 + Math.random() * 9000);
    const refNo = `NAV-${dateStr}-${randomPart}`;

    const newAppointment = {
      id: refNo,
      referenceNumber: refNo,
      fullName: formData.fullName,
      phoneNumber: formData.phoneNumber,
      email: formData.email || '',
      age: Number(formData.age) || 30,
      gender: formData.gender || 'Male',
      mode: formData.mode || 'InClinic',
      preferredDate: formData.preferredDate || new Date().toISOString().split('T')[0],
      timeSlot: formData.timeSlot || '10:00 AM - 11:00 AM',
      treatmentCategory: formData.treatmentCategory || 'General Consultation',
      symptoms: formData.symptoms || '',
      status: 'Pending',
      doctorNotes: '',
      createdAt: new Date().toISOString()
    };

    setAppointments(prev => [newAppointment, ...prev]);
    return newAppointment;
  };

  // Get Appointment by reference
  const getAppointment = (refNo) => {
    if (!refNo) return null;
    const cleanRef = refNo.trim().toUpperCase();
    return appointments.find(a => a.referenceNumber.toUpperCase() === cleanRef) || null;
  };

  // Update Status & Doctor Notes
  const updateAppointmentStatus = (refNo, status, doctorNotes = '') => {
    setAppointments(prev =>
      prev.map(app => {
        if (app.referenceNumber.toUpperCase() === refNo.toUpperCase()) {
          return {
            ...app,
            status,
            doctorNotes: doctorNotes !== undefined ? doctorNotes : app.doctorNotes
          };
        }
        return app;
      })
    );
  };

  // Send Message
  const sendMessage = (msgData) => {
    const newMessage = {
      id: `MSG-${Date.now().toString().slice(-4)}`,
      name: msgData.name,
      phone: msgData.phone,
      email: msgData.email || '',
      subject: msgData.subject || 'General Inquiry',
      message: msgData.message,
      submittedAt: new Date().toISOString()
    };
    setMessages(prev => [newMessage, ...prev]);
    return newMessage;
  };

  return (
    <AppContext.Provider
      value={{
        appointments,
        messages,
        isDoctorAuthenticated,
        doctorLogin,
        doctorLogout,
        createAppointment,
        getAppointment,
        updateAppointmentStatus,
        sendMessage
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
