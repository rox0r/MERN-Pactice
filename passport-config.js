const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const session = require("express-session");

const User = require("./models/user");

async function startPassport(app) {
  app.use(
    session({
      secret: "secretString",
      resave: false,
      saveUninitialized: false,
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());

  mongoose.connect("mongodb://localhost:27017/fruitsDB", {
    useNewUrlParser: true,
  });

  passport.use(User.createStrategy());
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());
}
module.exports = startPassport;
