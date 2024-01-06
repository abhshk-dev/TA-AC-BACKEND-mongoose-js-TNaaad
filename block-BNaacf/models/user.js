const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    lowercase: true,
  },
  age: {
    type: Number,
    default: 0,
  },
});
