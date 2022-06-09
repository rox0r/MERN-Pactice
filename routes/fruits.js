const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

// Custom Requires/Imports
const { dbConnect, dbDisconnect } = require("../config/db");
const { Fruit } = require("../models/Fruit");
const Person = require("../models/Person");

var router = express.Router();

// const fruit = new Fruit({
//   fruitName: "Pineapple",
//   review: "It's very juicy.",
// });

// fruit.save();

// const person = new Person({
//   name: "Kate",
//   age: 24,
//   favFruit: fruit,
// });

// person.save();

/* Fruit.findOne({ fruitName: "Apple" }, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    Person.updateOne({ name: "Mike" }, { favFruit: data }, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Successfully Updated");
      }
    });
  }
}); */

router.get("/", (req, res) => {
  async function findAndRenderFruits() {
    try {
      await dbConnect("fruitsDB");
      let fruitsArr = await Fruit.find();
      dbDisconnect();
      let dirPath = path.join(__dirname, "..", "views", "fruit.ejs");
      res.render(dirPath, { fruits: fruitsArr });
    } catch (err) {
      console.log("Error caught : " + err);
    }
  }
  findAndRenderFruits();
});

module.exports = router;
