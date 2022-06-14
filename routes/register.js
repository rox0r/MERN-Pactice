const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/", (req, res) => {
  const RegisterPath = path.join(__dirname, "..", "views", "register.html");
  res.sendFile(RegisterPath);
});

module.exports = router;
