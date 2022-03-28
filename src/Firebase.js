// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBvdNiY7n3S0C4E0j7F-471-5VdbnSTLq8",
	authDomain: "comision-25470-seugenio.firebaseapp.com",
	projectId: "comision-25470-seugenio",
	storageBucket: "comision-25470-seugenio.appspot.com",
	messagingSenderId: "35434892583",
	appId: "1:35434892583:web:2c391c78eba6a66a01ad02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);