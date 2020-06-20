const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const performanceSchema = new Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  image: { type: String, required:true},

});

const Performance = mongoose.model("Performance", performanceSchema);

module.exports = Performance;
