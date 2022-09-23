// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, query, getDocs, } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfiuVJmZFfhz-8t2RFVPGiZiQ-kbgUt_s",
  authDomain: "reactshopapp962.firebaseapp.com",
  projectId: "reactshopapp962",
  storageBucket: "reactshopapp962.appspot.com",
  messagingSenderId: "702789448245",
  appId: "1:702789448245:web:0f8b4d484de8b60c1a777c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

export const firestoreFech = async () => {
  const q = query(collection(db, 'products'));
  const querySnapshot = await getDocs(q);
  const dataFromFirestore = querySnapshot.docs.map(doc =>({ id: doc.id, ...doc.data() }))
  return dataFromFirestore
};