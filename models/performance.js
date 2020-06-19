const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const performanceSchema = new Schema({
  user: { type: String, required: true },
  content: { type: String, required: true },
  postID: { type: String, required:true},
  date: { type: Date, default: Date.now }
});

const Performance = mongoose.model("Performance", performanceSchema);

module.exports = Performance;
