const express = require("express");
const app = express();
const cors = require("cors");

//settings
app.set("port", process.env.PORT || 3000);
app.set("json spaces", 2);

// Static Files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));

const whitelist = [
  "http://localhost:3000",
  "https://vasquez-inmobiliaria.herokuapp.com",
];

const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Domain not allowed"));
    }
  },
};

//middlewares
app.use(cors(options));
app.use(express.json());

// Set Templating Engine
app.set("view engine", "ejs");

// Routes
app.use(require("./routes/index"));

// Starting the server
app.listen(app.get("port"), () => {
  console.log(
    "========================================================================"
  );
  console.log(`Aplicación escuchando en el puerto ${app.get("port")}`);
  console.log(
    "========================================================================"
  );
});
