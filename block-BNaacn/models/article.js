const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: String,
  description: String,
  tags: [String],
  createdAt: {
    type: Date,
    default: new Date(),
  },
  likes: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Article", articleSchema);
