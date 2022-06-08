const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  name: String,
  heading: String,
  content: String,
});

const Blog = new mongoose.model("Blog", blogSchema);

module.exports = Blog;
