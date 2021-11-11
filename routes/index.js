const { Router } = require("express");
const router = Router();
require("dotenv").config();
const { MongoClient, ObjectID } = require("mongodb");

const client = new MongoClient(process.env.MONGO_URI);

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

module.exports = router;
