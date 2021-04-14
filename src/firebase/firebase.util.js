import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB-2JK38KFiIXZEg_sv4jT9t3Rbz8_VSj4",
    authDomain: "shopping-db-5dac0.firebaseapp.com",
    projectId: "shopping-db-5dac0",
    storageBucket: "shopping-db-5dac0.appspot.com",
    messagingSenderId: "389934776384",
    appId: "1:389934776384:web:ba2362955f12b965be9fa5",
    measurementId: "G-755HRJYLCL"
  };
  
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

