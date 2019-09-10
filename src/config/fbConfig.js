import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDsAL7YcEEUGJGdcJfU9zlUqenYDl2-mbI",
    authDomain: "react-basic-101.firebaseapp.com",
    databaseURL: "https://react-basic-101.firebaseio.com",
    projectId: "react-basic-101",
    storageBucket: "react-basic-101.appspot.com",
    messagingSenderId: "842641948787",
    appId: "1:842641948787:web:2acbf5cfe1c9ac51"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase