import firebase from "firebase/compat/app";
import "firebase/compat/firestore"
import "firebase/compat/auth"

// Your web app's Firebase configuration
const app = firebase.initializeApp({
  apiKey: "AIzaSyCsUcf1Dsd0yPwDm6NsUvweOFCvZRBjzdM",
  authDomain: "e-finance-of-lms.firebaseapp.com",
  projectId: "e-finance-of-lms",
  storageBucket: "e-finance-of-lms.appspot.com",
  messagingSenderId: "557335517258",
  appId: "1:557335517258:web:0fa78a7e656e65adc92eb3"
});

export const auth = app.auth()

export const store = app.firestore()

// const store = !firebase.apps.length 
//   ? firebase.initializeApp(firebaseConfig).firestore()
//   : firebase.app().firestore();


export default app