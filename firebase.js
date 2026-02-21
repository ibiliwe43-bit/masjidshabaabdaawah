// IMPORTS
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// CONFIG (WEKA YAKO HAPA)
const firebaseConfig = {
  apiKey: "AIzaSyCP9rS5F84AuO5QFyGv355GLlKxrfF7UT4",
  authDomain: "masjid-shabaab-daa-wah.firebaseapp.com",
  projectId: "masjid-shabaab-daa-wah",
  storageBucket: "masjid-shabaab-daa-wah.firebasestorage.app",
  messagingSenderId: "615883244718",
  appId: "1:615883244718:web:e4696fd47ea9d84ac6d93f",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);