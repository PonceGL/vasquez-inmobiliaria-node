// Imports
const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const port = 3000;

// Static Files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));

// Set Templating Engine
// app.use(expressLayouts);
// app.set("layout", "./layouts/full-width");
app.set("view engine", "ejs");

// Routes
app.use(require("./routes/index"));

// Listen on Port 5000
app.listen(port, () => console.info(`App listening on port ${port}`));
