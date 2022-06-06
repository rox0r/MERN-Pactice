const express = require("express");
const path = require("path");

var router = express.Router();

router.get("/search", (req, res) => {
  var dirPath = path.join(__dirname, "..", "views", "search.html");
  res.sendFile(dirPath);
});

module.exports = router;
