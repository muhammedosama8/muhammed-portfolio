import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBT3jdwHuEMunVZzjrAme42v8PCv-L2idc",
  authDomain: "my-portofolio-c7175.firebaseapp.com",
  projectId: "my-portofolio-c7175",
  storageBucket: "my-portofolio-c7175.appspot.com",
  messagingSenderId: "23344046276",
  appId: "1:23344046276:web:f76a6f6159893081dde991"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);