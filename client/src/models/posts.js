const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  content: String,
  date: { type: Date, default: Date.now }
});

const Posts = mongoose.model("Posts", postSchema);

module.exports = Posts;
