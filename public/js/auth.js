(function () {
  const formLogin = document.getElementById("form-login");
  const errorsText = document.getElementById("errors");

  // window
  //   .fetch("/api/firebase")
  //   .then((response) => response.json())
  //   .then(({ firebase }) => {
  //     console.log("firebase: ", firebase);

  //     // Initialize the FirebaseUI Widget using Firebase.
  //     const ui = new firebaseui.auth.AuthUI(firebase.auth());
  //   });

  // const errorsMessages = {
  //   '"password" length must be at least 8 characters long':
  //     'La longitud de la "contraseña" debe ser de al menos 8 caracteres',
  //   '"name" must only contain alpha-numeric characters':
  //     '"nombre" sólo debe contener caracteres alfanuméricos',
  //   '"email" must be a valid email':
  //     '"email" debe ser un correo electrónico válido',
  // };

  // Fetch
  const postData = async (user) => {
    const { data } = await axios.post("/login", user);

    // const response = await fetch(`/auth`, {
    //   method: "POST",
    //   mode: "cors",
    //   cache: "no-cache",
    //   credentials: "same-origin",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(user),
    // });
    // const data = await response.json();

    if (data.message === "success") {
      console.log(data);
      console.log("----------------------------");
      console.log(data.user);

      // window.localStorage.setItem(
      //   "uservasquezinmobiliaria",
      //   JSON.stringify(data.user)
      // );
    }

    if (data.message === "error") {
      errorsText.innerText = errorsMessages[data.error] || data.message;
    }
  };

  // Enviar el formulario de casa
  const handleSubmit = (e) => {
    e.preventDefault();
    const newLogin = new FormData(formLogin);

    const user = {
      name: newLogin.get("name"),
      email: newLogin.get("email"),
      password: newLogin.get("password"),
      role: newLogin.get("role"),
      verified: false,
    };

    postData(user);
  };

  formLogin.addEventListener("submit", handleSubmit);
})();

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjb3JyZW9AY29vcmVvLmNvbSIsInJvbGUiOiJhZG1pbiIsInZlcmlmaWVkIjpmYWxzZSwiaWF0IjoxNjM2ODQ5MDA5fQ.veHbzpl7o2ekGwagM5bLqUrI6aIrj5wAUAP9D9Sd1xE
