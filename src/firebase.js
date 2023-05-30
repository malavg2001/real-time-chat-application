import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBg94xcY6QCitzNCISKQcuxLC2JHCKBTz8",
  authDomain: "chat-5e120.firebaseapp.com",
  projectId: "chat-5e120",
  storageBucket: "chat-5e120.appspot.com",
  messagingSenderId: "144024502395",
  appId: "1:144024502395:web:c6d3b14031a2ec2e7222de",
  measurementId: "G-28XFTX1EFT"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
// export {admin, serviceAccount}