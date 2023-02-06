import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyC0D7OajHWsx7ah05EwtIwNIhmi2mBYSzo",
    authDomain: "disneyplus-clone-c828f.firebaseapp.com",
    projectId: "disneyplus-clone-c828f",
    storageBucket: "disneyplus-clone-c828f.appspot.com",
    messagingSenderId: "262588988589",
    appId: "1:262588988589:web:79a539fc3a9b21ec45da24",
    measurementId: "G-48BYW656HE"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  const storage = firebase.storage();

  export { auth, provider, storage};
  export default db;