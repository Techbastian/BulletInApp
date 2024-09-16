// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAdk1Ga9ma_ucEpWXbyTt4XvgL48cOMRuA",
    authDomain: "bulletinboard-5c5d8.firebaseapp.com",
    projectId: "bulletinboard-5c5d8",
    storageBucket: "bulletinboard-5c5d8.appspot.com",
    messagingSenderId: "61886218997",
    appId: "1:61886218997:web:5ea4bd798a688f6a6dbbbc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;