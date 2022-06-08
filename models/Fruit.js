const mongoose = require("mongoose");

const fruitSchema = new mongoose.Schema({
  fruitName: {
    type: String,
    required: [true, "Name is required."],
  },
  review: {
    type: String,
    required: [true, "Content is required."],
  },
});

const Fruit = new mongoose.model("Fruit", fruitSchema);

module.exports = { Fruit, fruitSchema };
