const express = require("express");
const path = require("path");

var router = express.Router();

const err404 = require("./Errors/404");

router.get("/:query([a-zA-Z]{1,5})", (req, res) => {
  let dirPath = path.join(__dirname, "..", "views", "searchResult.html");
  res.sendFile(dirPath);
});

router.use("*", err404);

module.exports = router;
