import FirebaseApp from "/js/utils/FirebaseApp.js";
// import { HomeIcon } from "/js/IconsSVG/Home/index.js";
import ChangeColorTheme from "/js/utils/ChangeColorTheme.js";

const admin = () => {
  const { detectColorScheme, handleColorTheme } = ChangeColorTheme();
  const buttonChangeTheme = document.getElementById("ButtonChangeTheme");
  const { firebase } = FirebaseApp();
  const FirebaseUser = {};
  detectColorScheme();

  firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
      //setRegisteredUser(user);
      FirebaseUser.uid = user.uid;
      FirebaseUser.displayName = user.displayName;
      FirebaseUser.email = user.email;
      FirebaseUser.emailVerified = user.emailVerified;
      FirebaseUser.photoURL = user.photoURL;
      console.log(FirebaseUser);
    }
  });

  buttonChangeTheme.addEventListener("click", () => {
    handleColorTheme();
  });

  buttonChangeTheme.innerText =
    document.documentElement.getAttribute("data-theme") || "Theme";
};

window.addEventListener("load", admin);

// (function () {})();
