const express = require("express");
const bodyParser = require("body-parser");
const search = require("./routes/search");
const searchResult = require("./routes/searchResult");
const path = require("path");

var app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/search", search);
app.use("/search", searchResult);

app.get("/", (req, res) => {
  let dirPath = path.join(__dirname, "views", "index.html");
  res.sendFile(dirPath);
});

// app.post("/", (req, res) => {
//   console.log(req.body.fname);
//   res.redirect("/");
// });

app.listen(3000, () => {
  console.log("Started listening at port 3000");
});
