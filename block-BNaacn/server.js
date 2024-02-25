const express = require("express");
const mongoose = require("mongoose");

// mongoose connection

mongoose.connect("mongodb://127.0.0.1:27017/sample");

// App initialization

const app = express();

// Middlewares

app.get("/", (req, res) => {
  res.send("Welcome");
});

// Server listening

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
