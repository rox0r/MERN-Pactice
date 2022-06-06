const express = require("express");
const path = require("path");

var router = express.Router();

router.get("/:query", (req, res) => {
  var dirPath = path.join(__dirname, "..", "index.html");
  res.sendFile(dirPath);
});

module.exports = router;
