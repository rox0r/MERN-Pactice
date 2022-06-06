const express = require("express");

var router = express.Router();

router.get("/", (req, res) => {
  console.log(req);
  res.send("URL not found: 404");
});

module.exports = router;
