import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPn7EpqE3DXppjGpoS9hsJK7R2TlcEWcE",
  authDomain: "navjeewan-ayurvedic.firebaseapp.com",
  projectId: "navjeewan-ayurvedic",
  storageBucket: "navjeewan-ayurvedic.firebasestorage.app",
  messagingSenderId: "530173264256",
  appId: "1:530173264256:web:6b198fa1ca17034c6c0165"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app;
