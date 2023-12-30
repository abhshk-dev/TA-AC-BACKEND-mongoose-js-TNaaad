const express = require("express");
const mongoose = require("mongoose");

// App initialization

const app = express();

// Connecting to mongoose

mongoose.connect("mongodb://127.0.0.1:27017/articles");

// middleware

app.get("/", (req, res) => {
  res.send(`This is 2nd assignment`);
});
// Listening to server

app.listen(3000, () => {
  console.log(`Server Listening @ port 3000`);
});
