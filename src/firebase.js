import firebase from "firebase";


  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAzb8qKY6ew642CPl-lA6oFKDV3Tux23eQ",
    authDomain: "slack-b4952.firebaseapp.com",
    projectId: "slack-b4952",
    storageBucket: "slack-b4952.appspot.com",
    messagingSenderId: "1040967704110",
    appId: "1:1040967704110:web:8f8a438bb39a49eca209bf",
    measurementId: "G-E2XP7NL9G6"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig); 
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db ;
