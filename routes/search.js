const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

var router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", (req, res) => {
  let dirPath = path.join(__dirname, "..", "views", "search.html");
  res.sendFile(dirPath);
});

router.post("/", (req, res) => {
  res.redirect("/search/" + req.body.searchQuery);
});

module.exports = router;
