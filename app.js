const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// Custom Routers
const search = require("./routes/search");
const searchResult = require("./routes/searchResult");
const home = require("./routes/home");

var app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/", home);
app.use("/search", search);
app.use("/search", searchResult);

app.listen(3000, () => {
  console.log("Started listening at port 3000");
});
