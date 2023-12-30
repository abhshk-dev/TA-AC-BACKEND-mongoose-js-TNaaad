const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  age: { type: Number, default: 0 },
  email: { type: String, lowercase: true },
});
