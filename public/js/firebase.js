import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";
// import config from "../utils/config.js";

const firebase = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyAtoCXdglPujDUDKzzd4ioaeVlVprseNLk",
    authDomain: "vasquez-inmobiliaria-d0bce.firebaseapp.com",
    projectId: "vasquez-inmobiliaria-d0bce",
    storageBucket: "vasquez-inmobiliaria-d0bce.appspot.com",
    messagingSenderId: "811950688432",
    appId: "1:811950688432:web:2a4f7ce7993cbccb2dd375",
  };

  const app = initializeApp(firebaseConfig);
  console.log("firebaseConfig: ", app);

  return app;
};

export default firebase;
