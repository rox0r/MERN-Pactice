const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const path = require("path");

// Require: Custom Routers
const search = require("./routes/search");
const searchResult = require("./routes/searchResult");
const home = require("./routes/home");
const blogs = require("./routes/blogs");

var app = express();
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Use: Custom Routes
app.use("/", home);
app.use("/search", search);
app.use("/search", searchResult);
app.use("/blogs", blogs);

app.listen(3000, () => {
  console.log("Started listening at port 3000");
});
