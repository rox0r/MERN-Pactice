require("dotenv").config();
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const session = require("express-session");

const User = require("../models/User");
const { dbConnect } = require("./db");

async function startPassport(app) {
  app.use(
    session({
      secret: process.env.SECRET,
      resave: false,
      saveUninitialized: false,
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());

  await dbConnect("fruitsDB");

  passport.use(User.createStrategy());
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());
}
module.exports = startPassport;
