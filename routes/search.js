const express = require("express");
const path = require("path");

var router = express.Router();

router.get("/", (req, res) => {
  let dirPath = path.join(__dirname, "..", "views", "search.html");
  res.sendFile(dirPath);
});

module.exports = router;
