const express = require("express");
const ejs = require("ejs");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const session = require("express-session");

const User = require("./models/user");

var app = express();
app.set("view engine", "ejs");

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

// Require: Custom Routers
const search = require("./routes/search");
const searchResult = require("./routes/searchResult");
const home = require("./routes/home");
const fruits = require("./routes/fruits");
const createPerson = require("./routes/create-person");
const login = require("./routes/login");
const register = require("./routes/register");

app.use(express.static("public"));

// Use: Custom Routes
app.use("/", home);
app.use("/search", search);
app.use("/search", searchResult);
app.use("/fruits", fruits);
app.use("/create-person", createPerson);
app.use("/login", login);
app.use("/register", register);

app.listen(3000, () => {
  console.log("Started listening at port 3000");
});
