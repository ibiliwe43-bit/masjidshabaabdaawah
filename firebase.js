<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
  import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDsuZ_Ks_VMEo62P-9n0G2Q-UShD_FD6rE",
    authDomain: "masjid-shabaab-daa-wah-4f49b.firebaseapp.com",
    projectId: "masjid-shabaab-daa-wah-4f49b",
    storageBucket: "masjid-shabaab-daa-wah-4f49b.firebasestorage.app",
    messagingSenderId: "287019093594",
    appId: "1:287019093594:web:1b343aed72f3433b36d263",
    measurementId: "G-7FDEXT4DMB"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
</script>
