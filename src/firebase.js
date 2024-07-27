import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBsp6aiF-9u-ooYzAiecGnsqWmDNldDKRQ",
    authDomain: "whatsapp-clone-mern-vs.firebaseapp.com",
    projectId: "whatsapp-clone-mern-vs",
    storageBucket: "whatsapp-clone-mern-vs.appspot.com",
    messagingSenderId: "52576692893",
    appId: "1:52576692893:web:21679c7d8eef24b5ddc274"
  };
  
  const app = initializeApp(firebaseConfig);

  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  export { app, auth, provider };