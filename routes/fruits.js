const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

// Custom Requires/Imports
const { dbConnect, dbDisconnect } = require("../config/db");
const Fruit = require("../models/Fruit");
const Person = require("../models/Person");

var router = express.Router();
dbConnect("fruitsDB");

// const fruit = new Fruit({
//   fruitName: "Banana",
//   review: "They provide instant energy.",
// });

// const person = new Person({
//   name: "Mike",
//   age: 18,
// });

// //fruit.save();
// //person.save();

router.get("/", (req, res) => {
  Fruit.find({}, (err, fruitsArr) => {
    if (err) {
      console.log(err);
    } else {
      dbDisconnect();
      let dirPath = path.join(__dirname, "..", "views", "fruit.ejs");
      res.render(dirPath, { fruits: fruitsArr });
    }
  });
});

module.exports = router;
