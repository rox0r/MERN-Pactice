const express = require("express");
const path = require("path");

var router = express.Router();

router.get("/:query([a-zA-Z]{1,5})", (req, res) => {
  let dirPath = path.join(__dirname, "..", "views", "searchResult.html");
  res.sendFile(dirPath);
});

module.exports = router;
