const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const performanceSchema = new Schema({
//   name: { type: String, required: true },
//   title: { type: String, required: true },
//   image: { type: String, required:true},

// });

const performanceSchema = new Schema({
  monday: { type: String, required: true },
  tuesday: { type: String, required: true },
  wednesday: { type: String, required: true },
  thursday: { type: String, required: true },
  friday: { type: String, required: true },
  comments: { type: String, required:true},
});

const Performance = mongoose.model("Performance", performanceSchema);

module.exports = Performance;
