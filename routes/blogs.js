const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

// Custom Requires/Imports
const { dbConnect, dbDisconnect } = require("../config/db");
const Blog = require("../models/Blog");
const Author = require("../models/Author");
const { log } = require("console");

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

router.get("/", (req, res) => {
  Blog.find({}, (err, blogsArr) => {
    if (err) {
      console.log(err);
    } else {
      let dirPath = path.join(__dirname, "..", "views", "blogs.ejs");
      res.render(dirPath, { blogs: blogsArr });
    }
  });
});

module.exports = router;
