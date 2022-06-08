const mongoose = require("mongoose");
const { fruitSchema } = require("./Fruit");

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required."],
  },
  age: {
    type: String,
    required: [true, "Name is required."],
  },
  favFruit: fruitSchema,
});

const Person = new mongoose.model("Person", personSchema);

module.exports = Person;
