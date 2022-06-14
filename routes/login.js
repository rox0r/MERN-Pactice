const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/", (req, res) => {
  const loginPath = path.join(__dirname, "..", "views", "login.html");
  res.sendFile(loginPath);
});

router.post("/", (req, res) => {
  //check and authenticate, then redirect to fruits page
});

module.exports = router;
