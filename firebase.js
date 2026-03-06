// Importaciones

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDNiP3U-1-zLTD0e_c45H73lEg1o",
  authDomain: "escueladominicalrebaseapp.com",
  projectId: "escueladnicalreydereyes",
  storageBucket: "escueladominicalreydereyes.firebasestorage.app",
  messagingSenderId: "891420656",
  appId: "1:891424130656:web:8b0e94cf00ace505"
};

// Inicializar
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
