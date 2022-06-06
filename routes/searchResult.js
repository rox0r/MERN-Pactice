const express = require("express");
const path = require("path");

var router = express.Router();

const err404 = require("./Errors/404");

//Middleware: pre-check/process before sending to actual route
//Order of these routes is very important.

router.use("/:query([a-zA-Z]{1,5})", (req, res, next) => {
  console.log("Middleware captured: " + req.params.query);
  next(); // this runs the next route, i.e the code just below this.
});

router.get("/:query([a-zA-Z]{1,5})", (req, res) => {
  let dirPath = path.join(__dirname, "..", "views", "searchResult.html");
  res.sendFile(dirPath);
});

router.use("*", err404);

module.exports = router;
