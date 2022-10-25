// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlfPbIbivc34nBZBn5USngn6aPWFtmpdU",
  authDomain: "coder-point-a14f2.firebaseapp.com",
  projectId: "coder-point-a14f2",
  storageBucket: "coder-point-a14f2.appspot.com",
  messagingSenderId: "334989043012",
  appId: "1:334989043012:web:51ed1a2c1cd9855b43a311"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app