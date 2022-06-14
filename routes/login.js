const express = require("express");
const path = require("path");
const passport = require("passport");

//Custom requires
const User = require("../models/User");

const router = express.Router();

router.get("/", (req, res) => {
  const loginPath = path.join(__dirname, "..", "views", "login.html");
  res.sendFile(loginPath);
});

router.post("/", (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });
  req.login(user, (err) => {
    if (err) {
      console.log(err);
    } else {
      passport.authenticate("local")(req, res, () => {
        res.redirect("/fruits");
      });
    }
  });
});

module.exports = router;
