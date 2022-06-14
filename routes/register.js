const express = require("express");
const path = require("path");
const passport = require("passport");

//Custom requires
const User = require("../models/User");

const router = express.Router();

router.get("/", (req, res) => {
  const RegisterPath = path.join(__dirname, "..", "views", "register.ejs");
  res.render(RegisterPath);
});

router.post("/", (req, res) => {
  User.register(
    { username: req.body.username },
    req.body.password,
    (err, user) => {
      if (err) {
        console.log(err);
      } else {
        passport.authenticate("local")(req, res, () => {
          res.redirect("/fruits");
        });
      }
    }
  );
});

module.exports = router;
