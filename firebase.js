
import firebase from 'firebase/app';
import { initializeApp } from '@firebase/app';
import { getAuth } from '@firebase/auth';
import {getFirestore} from 'firebase/firestore/lite'
export const firebaseConfig = {
  apiKey: "***",
  authDomain: "******",
  projectId: "********",
  storageBucket: "*********",
  messagingSenderId: "*****",
  appId: "****",
  measurementId: "*****"
};

export const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const db = getFirestore(app);
