// import { firebase } from "https://www.gstatic.com/firebasejs/8.6.4/firebase-app.js";

const FirebaseApp = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyAtoCXdglPujDUDKzzd4ioaeVlVprseNLk",
    authDomain: "vasquez-inmobiliaria-d0bce.firebaseapp.com",
    projectId: "vasquez-inmobiliaria-d0bce",
    storageBucket: "vasquez-inmobiliaria-d0bce.appspot.com",
    messagingSenderId: "811950688432",
    appId: "1:811950688432:web:2a4f7ce7993cbccb2dd375",
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  return {
    firebase,
  };
};

export default FirebaseApp;
