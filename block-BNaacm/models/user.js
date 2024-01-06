const mongoose = require("mongoose");

const Schema = new mongoose.Schema();

const userSchema = new Schema({
  name: String,
  age: { type: Number, default: 0 },
  email: { type: String, lowercase: true },
  marks: [Number],
  password: {
    type: String,
    minlength: 5,
    maxlength: 15,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("User", userSchema);
