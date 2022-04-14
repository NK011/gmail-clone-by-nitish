import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBGH5-cplAtt90h-X-nFo2C7BUbugqG-q4",
    authDomain: "clone-75312.firebaseapp.com",
    projectId: "clone-75312",
    storageBucket: "clone-75312.appspot.com",
    messagingSenderId: "495578901039",
    appId: "1:495578901039:web:3de0b05b5db96fff83b4da",
    measurementId: "G-7E201LHR8Q"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {db, auth, provider}