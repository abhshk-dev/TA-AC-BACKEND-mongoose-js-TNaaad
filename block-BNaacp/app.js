const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");
// MongoDB connection

mongoose
  .connect("mongodb://127.0.0.1:27017/crudSample")
  .then(() => {
    console.log(`mongodb connection established`);
  })
  .catch((err) => {
    console.log(err);
  });

// Initializing the app
const app = express();

// Middlewares

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome...");
});

// Create route
app.post("/users", (req, res) => {
  // capture the data
  // console.log(req.body);
  // save the data to database
  User.create(req.body)
    .then((data) => res.json(data))
    .catch((err) => console.log(err));

  // send a response
});

// Read route
app.get("/users", (req, res) => {
  User.findOne({ _id: "65dcc54e86bcd9c3c0c816dd" }).then((data) =>
    res.json(data)
  );
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  User.findById(id)
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
});

// Update route
app.put("/users/:id", (req, res) => {
  console.log(req.params);
  const id = req.params.id;
  User.findByIdAndUpdate(id, req.body, { new: true })
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
});

// Delete Route

app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  User.findByIdAndDelete(id)
    .then((data) => res.send(`${data.id}  was deleted`))
    .catch((err) => console.log(err));
});

// app.delete("/users/:id", (req, res) => {
//   const id = req.params.id;
//   User.findOneAndDelete({ email: "ungabunga@gmail.com" })
//     .then((data) => res.send(`${data.id}  was deleted`))
//     .catch((err) => console.log(err));
// });
// Server listener.

app.listen(3000, () => {
  console.log(`Server listening on port 3000`);
});
