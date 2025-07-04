
// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";

// 🔥 Tumhara original config:
const firebaseConfig = {
  apiKey: "AIzaSyAyEGHMWoMKCEjEp6mYi29WgrZhT4TqjNM",
  authDomain: "miulisten-ed30a.firebaseapp.com",
  databaseURL: "https://miulisten-ed30a-default-rtdb.firebaseio.com",
  projectId: "miulisten-ed30a",
  storageBucket: "miulisten-ed30a.firebasestorage.app",
  messagingSenderId: "458601567579",
  appId: "1:458601567579:web:8990fbcca4b9bad66d767e",
  measurementId: "G-BW76S6NGKP"
};

// ✅ Firebase initialize
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// 🔄 Export for use in app.js
export { database, ref, onValue };
