import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyB0GXaslAcsVt8BLU1_lCF3uKK9XNZDvsI",
    authDomain: "portfolio-11ee7.firebaseapp.com",
    projectId: "portfolio-11ee7",
    storageBucket: "portfolio-11ee7.appspot.com",
    messagingSenderId: "582399276309",
    appId: "1:582399276309:web:9008f0e19c7e4320c4251c",
    measurementId: "G-DS2WYL2Z4E"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);