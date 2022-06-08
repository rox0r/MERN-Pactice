const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required."],
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: [true, "Rating must be between 1-5."],
  },
  heading: {
    type: String,
    required: [true, "Heading is required."],
  },
  content: {
    type: String,
    required: [true, "Content is required."],
  },
});

const Blog = new mongoose.model("Blog", blogSchema);

module.exports = Blog;
