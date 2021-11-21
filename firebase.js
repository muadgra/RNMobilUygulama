// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGwOaQw0-oedaYbhnfTiv7QVa5fYEJRkA",
  authDomain: "dukkanproje.firebaseapp.com",
  projectId: "dukkanproje",
  storageBucket: "dukkanproje.appspot.com",
  messagingSenderId: "909717008381",
  appId: "1:909717008381:web:06cd55b2009a565fcfb394",
  measurementId: "G-RZZN3DXS6J"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0){
    app = initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}
const auth = firebase.auth();
export {auth};
