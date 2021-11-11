// Imports
const express = require("express");
const app = express();
// const morgan = require("morgan");

//settings
app.set("port", process.env.PORT || 3000);
app.set("json spaces", 2);

// Static Files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));

//middlewares
// app.use(morgan("dev"));
app.use(express.json());

// Set Templating Engine
app.set("view engine", "ejs");

// Routes
app.use(require("./routes/index"));

// Starting the server
app.listen(app.get("port"), () => {
  console.log(`Aplicación escuchando en el puerto ${app.get("port")}`);
});
