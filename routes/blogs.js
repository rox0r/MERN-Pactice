const express = require("express");
const path = require("path");

var router = express.Router();

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
