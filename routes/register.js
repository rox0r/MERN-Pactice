const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const passport = require("passport");

//Custom requires
const User = require("../models/user");

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", (req, res) => {
  const RegisterPath = path.join(__dirname, "..", "views", "register.html");
  res.sendFile(RegisterPath);
});

router.post("/", (req, res) => {
  User.register(
    { username: req.body.username },
    req.body.password,
    (err, user) => {
      if (err) {
        console.log("err: " + err);
      } else {
        passport.authenticate("local")(req, res, () => {
          res.redirect("/fruits");
        });
      }
    }
  );
});

module.exports = router;
