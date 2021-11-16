const { Router, application } = require("express");
const router = Router();
require("dotenv").config();

// MongoDB
const { MongoClient } = require("mongodb");
const client = new MongoClient(process.env.MONGO_URI);

// Firebase
const { initializeApp } = require("firebase/app");
const admin = require("firebase-admin");
const serviceAccount = require("../assets/serviceAccountKey.json");
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROYECT_ID,
  storageBucket: process.env.FIREBASE_STOREGAE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGIN_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};
const firebase = initializeApp(firebaseConfig);
const {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} = require("firebase/auth");

router.get("/", (req, res) => {
  res.status(200).render("index", {
    title: "Vasquez Inmobiliaria",
    page: "Vasquez Inmobiliaria",
    des: "Bienes Raíces, Casas y Departamentos en venta y renta, Asesores y Asesoría inmobiliaria",
  });
});

router.get("/casas", (req, res) => {
  res.status(200).render("casas", {
    title: "Casas",
    page: "Casas | Vasquez Inmobiliaria",
    des: "Casas en venta y renta",
  });
});

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
router.get("/admin", (req, res) => {
  admin
    .auth()
    .listUsers(1000)
    .then((listUsersResult) => {
      listUsersResult.users.forEach((userRecord) => {
        // console.log("user", userRecord.toJSON());
      });
      if (listUsersResult.pageToken) {
        // List next batch of users.
        listAllUsers(listUsersResult.pageToken);
      }
    })
    .catch((error) => {
      console.log("Error listing users:", error);
    });

  res.status(200).render("admin", {
    title: "Admin",
    page: "Admin | Vasquez Inmobiliaria",
    des: "Página de administración",
  });
});

//  Api Routes ::::::::::::::::::::::::::::::::::

router.get("/api/casas", async (req, res) => {
  await client.connect();
  const database = client.db(process.env.DATABASE);
  const collection = database.collection("casas");

  collection
    .find()
    .toArray()
    .then((data) => {
      res.status(200).json({ name: "Casas", total: data.length, data });
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
});

router.get("/api/fraccionamientos", async (req, res) => {
  await client.connect();
  const database = client.db(process.env.DATABASE);
  const collection = database.collection("fraccionamiento");

  collection
    .find()
    .toArray()
    .then((data) => {
      res.status(200).json({ name: "Casas", total: data.length, data });
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
});

router.get("/api/firebase", (req, res) => {
  const auth = getAuth();
  res
    .status(200)
    .json({ name: "Firebase", firebase, auth, check: onAuthStateChanged });
});

//  Auth Routes ::::::::::::::::::::::::::::::::::

router.get("/auth", (req, res) => {
  res.status(200).render("auth", {
    title: "Registro",
    page: "Registro | Vasquez Inmobiliaria",
    des: "Página de registro de usuario",
  });
});

router.post("/auth", async (req, res) => {
  const newUser = req.body;

  const auth = getAuth();
  createUserWithEmailAndPassword(auth, newUser.email, newUser.password)
    .then((userCredential) => {
      console.log("userCredential: ", userCredential);
      res.status(200).json({ message: "success", user: userCredential.user });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      res.status(200).json({ message: errorMessage, errorCode });
    });
});

router.post("/login", async (req, res) => {
  const newUser = req.body;
  console.log("newUser: ", newUser);

  const auth = getAuth();
  signInWithEmailAndPassword(auth, newUser.email, newUser.password)
    .then((userCredential) => {
      console.log("userCredential: ", userCredential);
      res.status(200).json({ message: "success", user: userCredential.user });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      res.status(200).json({ message: errorMessage, errorCode });
    });
});

module.exports = router;
