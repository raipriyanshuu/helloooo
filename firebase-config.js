// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyA8qRpKJzvfnq_tNEyJ6Wgia0ptsaEXmEg",
    authDomain: "lloooo-b6a7c.firebaseapp.com",
    projectId: "lloooo-b6a7c",
    storageBucket: "lloooo-b6a7c.firebasestorage.app",
    messagingSenderId: "989829596546",
    appId: "1:989829596546:web:6a0a2eccec4dcbcedebb9b",
    measurementId: "G-NVJRGRL8EG"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase services
const storage = firebase.storage();
const db = firebase.firestore();

// Reference to photos collection
const photosCollection = db.collection('photos');
