const express = require("express");
const path = require("path");

var router = express.Router();

router.get("/", (req, res) => {
  let dirPath = path.join(__dirname, "..", "views", "home.ejs");
  res.render(dirPath);
});

// app.post("/", (req, res) => {
//   console.log(req.body.fname);
//   res.redirect("/");
// });

module.exports = router;
