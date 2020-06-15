const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const annoucementSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Annoucement = mongoose.model("Annoucement", annoucementSchema);

module.exports = Annoucement;
