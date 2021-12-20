
import firebase from 'firebase/app';
import { initializeApp } from '@firebase/app';
import { getAuth } from '@firebase/auth';
import {getFirestore} from 'firebase/firestore/lite'
export const firebaseConfig = {
  apiKey: "AIzaSyAGwOaQw0-oedaYbhnfTiv7QVa5fYEJRkA",
  authDomain: "dukkanproje.firebaseapp.com",
  projectId: "dukkanproje",
  storageBucket: "dukkanproje.appspot.com",
  messagingSenderId: "909717008381",
  appId: "1:909717008381:web:06cd55b2009a565fcfb394",
  measurementId: "G-RZZN3DXS6J"
};

export const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const db = getFirestore(app);
