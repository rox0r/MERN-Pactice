const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

var router = express.Router();

router.use(express.static("public"));
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", (req, res) => {
  let dirPath = path.join(__dirname, "..", "views", "search.ejs");
  res.render(dirPath);
});

router.post("/", (req, res) => {
  res.redirect("/search/" + req.body.searchQuery);
});

module.exports = router;
