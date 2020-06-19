const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const calendarSchema = new Schema({
  title: { type: String, required: true },
  content: {type: String, default: ""},
  start: { type: String, required: true},
  end: { type: String, default: ""},
});

const Calendar = mongoose.model("Calendar", calendarSchema);

module.exports = Calendar;
