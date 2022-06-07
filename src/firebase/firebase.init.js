// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxRhuPkzBp4l6TZH63U5F4azGzQmGZEHE",
  authDomain: "hotel-bokking-room.firebaseapp.com",
  projectId: "hotel-bokking-room",
  storageBucket: "hotel-bokking-room.appspot.com",
  messagingSenderId: "305535538033",
  appId: "1:305535538033:web:a27d2958edeab88ec8dcd0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;