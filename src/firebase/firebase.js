import { initializeApp } from "firebase/app";
import { getFirestore, getfirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCCs3utbGxJ57sEeL1AR1pn0dyij0ih2LM",
    authDomain: "marketplacemlsr.firebaseapp.com",
    projectId: "marketplacemlsr",
    storageBucket: "marketplacemlsr.appspot.com",
    messagingSenderId: "291117224563",
    appId: "1:291117224563:web:f197cdef74accf74991006"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);