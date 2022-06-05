const express = require("express");
const bodyParser = require("body-parser");

var app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  console.log(req.body.fname);
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Started listening at port 3000");
});
