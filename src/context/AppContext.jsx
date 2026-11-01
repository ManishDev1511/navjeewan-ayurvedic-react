import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  collection,
  doc,
  onSnapshot,
  setDoc,
  deleteDoc,
  getDoc,
  query,
  where,
  getDocs
} from 'firebase/firestore';
import { db } from '../firebase';
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

  // Local Storage synchronization fallback for appointments
  useEffect(() => {
    try {
      localStorage.setItem(APPOINTMENTS_KEY, JSON.stringify(appointments));
    } catch (e) {
      console.error('LocalStorage sync error for appointments:', e);
    }
  }, [appointments]);

  // Local Storage synchronization fallback for messages
  useEffect(() => {
    try {
      localStorage.setItem(MESSAGES_KEY, JSON.stringify(messages));
    } catch (e) {
      console.error('LocalStorage sync error for messages:', e);
    }
  }, [messages]);

  // Firestore Real-Time Listener for 'appointments'
  useEffect(() => {
    let unsubscribe;
    try {
      const colRef = collection(db, 'appointments');
      unsubscribe = onSnapshot(
        colRef,
        (snapshot) => {
          // If snapshot is from cache and empty, keep current local/fallback data (network is unavailable)
          if (snapshot.metadata.fromCache && snapshot.empty) {
            return;
          }

          const items = snapshot.docs.map((d) => {
            const data = d.data();
            return {
              id: d.id,
              referenceNumber: data.referenceNumber || d.id,
              ...data
            };
          });
          // Sort by newest created first
          items.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
          setAppointments(items);
        },
        (error) => {
          console.warn('Firestore appointments subscription error (falling back to local cache):', error);
        }
      );
    } catch (err) {
      console.warn('Failed to initialize Firestore appointments subscription:', err);
    }

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, []);

  // Firestore Real-Time Listener for 'inquiries'
  useEffect(() => {
    let unsubscribe;
    try {
      const colRef = collection(db, 'inquiries');
      unsubscribe = onSnapshot(
        colRef,
        (snapshot) => {
          // If snapshot is from cache and empty, keep current local/fallback data (network is unavailable)
          if (snapshot.metadata.fromCache && snapshot.empty) {
            return;
          }

          const items = snapshot.docs.map((d) => ({
            id: d.id,
            ...d.data()
          }));
          // Sort by newest submitted first
          items.sort((a, b) => new Date(b.submittedAt || 0) - new Date(a.submittedAt || 0));
          setMessages(items);
        },
        (error) => {
          console.warn('Firestore inquiries subscription error (falling back to local cache):', error);
        }
      );
    } catch (err) {
      console.warn('Failed to initialize Firestore inquiries subscription:', err);
    }

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, []);

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

  // Create Appointment (Returns synchronous object and triggers Firestore setDoc)
  const createAppointment = (formData) => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const dateStr = `${year}${month}${day}`;
    const randomPart = Math.floor(1000 + Math.random() * 9000);
    const refNo = `NAV-${dateStr}-${randomPart}`;

    const newAppointment = {
      id: refNo,
      referenceNumber: refNo,
      fullName: formData.fullName ? formData.fullName.trim() : '',
      phoneNumber: formData.phoneNumber ? formData.phoneNumber.trim() : '',
      email: formData.email ? formData.email.trim() : '',
      age: Number(formData.age) || 30,
      gender: formData.gender || 'Male',
      mode: formData.mode || 'InClinic',
      preferredDate: formData.preferredDate || `${year}-${month}-${day}`,
      timeSlot: formData.timeSlot || '10:00 AM - 11:00 AM',
      treatmentCategory: formData.treatmentCategory || 'General Consultation',
      symptoms: formData.symptoms ? formData.symptoms.trim() : '',
      status: 'Pending',
      doctorNotes: '',
      createdAt: new Date().toISOString()
    };

    // Optimistic local state update
    setAppointments((prev) => [newAppointment, ...prev.filter((a) => (a.referenceNumber || a.id || '').toUpperCase() !== refNo)]);

    // Persist to Firestore with Document ID equal to referenceNumber
    try {
      setDoc(doc(db, 'appointments', refNo), newAppointment).catch((err) => {
        console.warn('Firestore write appointment error (persisted in local state):', err);
      });
    } catch (err) {
      console.warn('Firestore setDoc threw error:', err);
    }

    return newAppointment;
  };

  // Get Appointment synchronously by reference from state
  const getAppointment = (refNo) => {
    if (!refNo) return null;
    const cleanRef = refNo.trim().toUpperCase();
    return appointments.find((a) => (a.referenceNumber || a.id || '').toUpperCase() === cleanRef) || null;
  };

  // Fetch Appointment asynchronously from Firestore if not yet loaded in state
  const fetchAppointmentByRef = async (refNo) => {
    if (!refNo) return null;
    const cleanRef = refNo.trim().toUpperCase();

    // 1. Check current state
    const existing = appointments.find((a) => (a.referenceNumber || a.id || '').toUpperCase() === cleanRef);
    if (existing) return existing;

    // 2. Query Firestore directly by Document ID
    try {
      const docRef = doc(db, 'appointments', cleanRef);
      const snap = await getDoc(docRef);
      if (snap.exists()) {
        const data = { id: snap.id, referenceNumber: snap.id, ...snap.data() };
        setAppointments((prev) => {
          if (prev.some((a) => (a.referenceNumber || a.id || '').toUpperCase() === cleanRef)) return prev;
          return [data, ...prev];
        });
        return data;
      }
    } catch (err) {
      console.warn('Error fetching appointment doc from Firestore:', err);
    }

    // 3. Fallback: Query collection by referenceNumber field
    try {
      const q = query(collection(db, 'appointments'), where('referenceNumber', '==', cleanRef));
      const qSnap = await getDocs(q);
      if (!qSnap.empty) {
        const firstDoc = qSnap.docs[0];
        const data = { id: firstDoc.id, referenceNumber: firstDoc.id, ...firstDoc.data() };
        setAppointments((prev) => {
          if (prev.some((a) => (a.referenceNumber || a.id || '').toUpperCase() === cleanRef)) return prev;
          return [data, ...prev];
        });
        return data;
      }
    } catch (err) {
      console.warn('Error querying appointment by referenceNumber:', err);
    }

    // 4. Fallback: Check local storage
    try {
      const stored = localStorage.getItem(APPOINTMENTS_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        const match = parsed.find((a) => (a.referenceNumber || a.id || '').toUpperCase() === cleanRef);
        if (match) {
          setAppointments((prev) => {
            if (prev.some((a) => (a.referenceNumber || a.id || '').toUpperCase() === cleanRef)) return prev;
            return [match, ...prev];
          });
          return match;
        }
      }
    } catch (err) {
      console.warn('Error checking localStorage fallback for appointment:', err);
    }

    return null;
  };

  // Update Status & Doctor Notes in Firestore and local state
  const updateAppointmentStatus = (refNo, status, doctorNotes) => {
    if (!refNo) return;
    const cleanRef = refNo.trim().toUpperCase();

    setAppointments((prev) =>
      prev.map((app) => {
        if ((app.referenceNumber || app.id || '').toUpperCase() === cleanRef) {
          return {
            ...app,
            status,
            doctorNotes: doctorNotes !== undefined ? doctorNotes : app.doctorNotes
          };
        }
        return app;
      })
    );

    const updateData = { status };
    if (doctorNotes !== undefined) {
      updateData.doctorNotes = doctorNotes;
    }

    try {
      setDoc(doc(db, 'appointments', cleanRef), updateData, { merge: true }).catch((err) => {
        console.warn('Firestore update appointment error (updated locally):', err);
      });
    } catch (err) {
      console.warn('Firestore update error:', err);
    }
  };

  // Add Doctor Notes in Firestore and local state
  const addDoctorNotes = (refNo, notes) => {
    if (!refNo) return;
    const cleanRef = refNo.trim().toUpperCase();

    setAppointments((prev) =>
      prev.map((app) => {
        if ((app.referenceNumber || app.id || '').toUpperCase() === cleanRef) {
          return {
            ...app,
            doctorNotes: notes
          };
        }
        return app;
      })
    );

    try {
      setDoc(doc(db, 'appointments', cleanRef), { doctorNotes: notes }, { merge: true }).catch((err) => {
        console.warn('Firestore add doctor notes error (updated locally):', err);
      });
    } catch (err) {
      console.warn('Firestore add notes error:', err);
    }
  };

  // Delete Appointment from Firestore and local state
  const deleteAppointment = (refNo) => {
    if (!refNo) return;
    const cleanRef = refNo.trim().toUpperCase();

    setAppointments((prev) =>
      prev.filter((app) => (app.referenceNumber || app.id || '').toUpperCase() !== cleanRef)
    );

    try {
      deleteDoc(doc(db, 'appointments', cleanRef)).catch((err) => {
        console.warn('Firestore delete appointment error (deleted locally):', err);
      });
    } catch (err) {
      console.warn('Firestore delete error:', err);
    }
  };

  // Submit Contact Message (Saves to Firestore collection 'inquiries' and local state)
  const submitContactMessage = (msgData) => {
    const msgId = `MSG-${Date.now().toString().slice(-6)}`;
    const newMessage = {
      id: msgId,
      name: msgData.name ? msgData.name.trim() : '',
      phone: msgData.phone ? msgData.phone.trim() : '',
      email: msgData.email ? msgData.email.trim() : '',
      subject: msgData.subject ? msgData.subject.trim() : 'General Inquiry',
      message: msgData.message ? msgData.message.trim() : '',
      submittedAt: new Date().toISOString()
    };

    setMessages((prev) => [newMessage, ...prev.filter((m) => m.id !== msgId)]);

    try {
      setDoc(doc(db, 'inquiries', msgId), newMessage).catch((err) => {
        console.warn('Firestore save inquiry error (kept locally):', err);
      });
    } catch (err) {
      console.warn('Firestore inquiry error:', err);
    }

    return newMessage;
  };

  // Delete Contact Message / Inquiry
  const deleteMessage = (msgId) => {
    if (!msgId) return;
    setMessages((prev) => prev.filter((m) => m.id !== msgId));
    try {
      deleteDoc(doc(db, 'inquiries', msgId)).catch((err) => {
        console.warn('Firestore delete inquiry error (deleted locally):', err);
      });
    } catch (err) {
      console.warn('Firestore delete error:', err);
    }
  };

  // On-demand seeding of initial demo data for testing or first-time clinic initialization
  const seedDemoData = async () => {
    try {
      const appPromises = initialAppointments.map((app) =>
        setDoc(doc(db, 'appointments', app.referenceNumber), app)
      );
      const msgPromises = initialMessages.map((msg) =>
        setDoc(doc(db, 'inquiries', msg.id), msg)
      );
      await Promise.all([...appPromises, ...msgPromises]);
      return { success: true };
    } catch (err) {
      console.warn('Error seeding demo data to Firestore:', err);
      setAppointments(initialAppointments);
      setMessages(initialMessages);
      return { success: false, error: err.message };
    }
  };

  // Alias for backward compatibility
  const sendMessage = submitContactMessage;

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
        fetchAppointmentByRef,
        updateAppointmentStatus,
        addDoctorNotes,
        deleteAppointment,
        submitContactMessage,
        sendMessage,
        deleteMessage,
        seedDemoData
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
