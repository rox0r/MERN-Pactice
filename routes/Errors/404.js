const express = require("express");

var router = express.Router();

router.get("/", (req, res) => {
  let errObj = {
    statusCode: 404,
    statusMsg: "URL not found",
  };
  res.send(errObj);
});

module.exports = router;
