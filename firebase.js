// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCOMPbN73yCy1mHJs3LpRylzYz8VnoZ9QU",
  authDomain: "dax-network.firebaseapp.com",
  projectId: "dax-network",
  storageBucket: "dax-network.firebasestorage.app",
  messagingSenderId: "414157722246",
  appId: "1:414157722246:web:bf2594737120e8a2ac7707",
  measurementId: "G-66ZWEQ1E8L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
    
