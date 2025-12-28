const express = require("express");
const mongoose = require("mongoose");
const Blog = require("./models/blog");
require("dotenv").config();

// Express app
const app = express();

// Set view engine
app.set("view engine", "ejs");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Db setup
const dbURI = process.env.MONGODB_URI;

mongoose
  .connect(dbURI)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// Blog Routes
app.get("/add-blog", (req, res) => {
  res.sendFile("./views/add-blog.html", { root: __dirname });
});

app.post("/blogs", async (req, res) => {
  try {
    const blog = new Blog(req.body);
    await blog.save();
    res.redirect("/blogs");
  } catch (error) {
    res.status(400).send("Error creating blog: " + error.message);
  }
});

app.get("/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.render("blogs", { blogs });
  } catch (error) {
    res.status(500).send("Error fetching blogs: " + error.message);
  }
});

app.get("/", (req, res) => {
  res.sendFile("./views/home.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root: __dirname });
});

// Redirects
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

// 404 Page
app.use((req, res) => {
  res.status(404).sendFile("./views/404.html", { root: __dirname });
});
