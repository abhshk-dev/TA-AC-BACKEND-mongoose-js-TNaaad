const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: String,
    age: {
      type: Number,
      default: 0,
    },
    favorites: [String],
    email: {
      type: String,
      lowercase: true,
    },
    password: {
      type: String,
      minlength: 5,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
