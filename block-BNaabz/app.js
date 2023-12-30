const express = require("express");
const mongoose = require("mongoose");

// connect mongoose
mongoose.connect("mongodb://127.0.0.1:27017/sample");
// initializing the app
const app = express();

app.get("/", (req, res) => {
  res.send(`Welcome to port 3000`);
});

app.listen(3000, () => {
  console.log(`Server is listening on port 3000`);
});
