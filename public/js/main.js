import FirebaseApp from "/js/utils/FirebaseApp.js";

const main = () => {
  const menuNav = document.getElementById("menu-nav");
  const openButton = document.getElementById("open-button");
  let isOpen = false;

  // const { firebase } = FirebaseApp();
  // const FirebaseUser = {};

  // firebase.auth().onAuthStateChanged((user) => {
  //   if (user != null) {
  //     //setRegisteredUser(user);
  //     FirebaseUser.uid = user.uid;
  //     FirebaseUser.displayName = user.displayName;
  //     FirebaseUser.email = user.email;
  //     FirebaseUser.emailVerified = user.emailVerified;
  //     FirebaseUser.photoURL = user.photoURL;
  //     console.log(FirebaseUser);
  //   }
  // });

  // Menu
  const handleOpenMenu = () => {
    isOpen = !isOpen;
    if (window.innerWidth < 750) {
      if (isOpen) {
        menuNav.style.left = "0";
        openButton.className = "close-button";
      } else {
        menuNav.style.left = "-100%";
        openButton.className = "open-button";
      }
    }
  };

  const checkUser = async () => {
    const { data } = await axios.get("/api/firebase");

    console.log("Auth: ", data);
    const auth = data.auth;
    // onAuthStateChanged(auth, (user) => {
    //   if (user) {
    //     console.log("user firebase: ", user);
    //     const uid = user.uid;
    //     // ...
    //   } else {
    //     console.log("No hay usuario");
    //   }
    // });
  };

  openButton.addEventListener("click", handleOpenMenu);
  window.addEventListener("load", checkUser);
};

window.addEventListener("load", main);

// (function () {})();
