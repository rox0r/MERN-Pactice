const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

// Custom Requires/Imports
const { dbConnect, dbDisconnect } = require("../config/db");
const Blog = require("../models/Blog");
const Author = require("../models/Author");

var router = express.Router();
dbConnect("blogsDB");

const blog = new Blog({
  name: "John",
  heading: "Apple",
  content: "Pretty solid as a fruit",
});

const author = new Author({ name: "John", age: "28" });

//author.save();
//blog.save();

var blogsArr = [
  {
    heading: "Lorem Ipsum simply",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
  {
    heading: "Printing and typesetting",
    content:
      "Lorem Ipsum is dummy text of the printing and typesetting industry. ",
  },
];

router.get("/", (req, res) => {
  let dirPath = path.join(__dirname, "..", "views", "blogs.ejs");
  res.render(dirPath, { blogs: blogsArr });
});

module.exports = router;
