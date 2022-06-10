const express = require("express");
const ejs = require("ejs");
const path = require("path");

// Require: Custom Routers
const search = require("./routes/search");
const searchResult = require("./routes/searchResult");
const home = require("./routes/home");
const blogs = require("./routes/fruits");
const createPerson = require("./routes/create-person");

var app = express();
app.set("view engine", "ejs");

app.use(express.static("public"));

// Use: Custom Routes
app.use("/", home);
app.use("/search", search);
app.use("/search", searchResult);
app.use("/fruits", blogs);
app.use("/create-person", createPerson);

app.listen(3000, () => {
  console.log("Started listening at port 3000");
});
