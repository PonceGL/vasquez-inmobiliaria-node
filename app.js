// Imports
const express = require("express");

const app = express();
//settings
app.set("port", process.env.PORT || 3000);

// Static Files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));

// Set Templating Engine
app.set("view engine", "ejs");

// Routes
app.use(require("./routes/index"));

// Starting the server
app.listen(app.get("port"), () => {
  console.log(`Aplicación escuchando en http://localhost:${app.get("port")}`);
});
