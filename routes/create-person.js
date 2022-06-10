const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// Custom Requires
const { dbConnect, dbDisconnect } = require("../config/db");
const { Fruit } = require("../models/Fruit");
const Person = require("../models/Person");

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", (req, res) => {
  const dirPath = path.join(__dirname, "..", "views", "create-person");
  res.render(dirPath);
});

router.post("/", (req, res) => {
  const fruitObj = new Fruit({
    fruitName: req.body.favFruit,
    review: req.body.review,
  });

  const personObj = new Person({
    name: req.body.name,
    age: req.body.age,
    favFruit: fruitObj,
  });

  async function createPerson() {
    await dbConnect("fruitsDB");
    await fruitObj.save();
    await personObj.save();
    dbDisconnect();
    res.redirect("/fruits");
  }
  createPerson();
});

module.exports = router;
