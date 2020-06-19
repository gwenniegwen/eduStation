const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const emojiSchema = new Schema({
//   url: { type: String, required: true },
//   name: { type: String, required: true },
//   date: { type: Date, default: Date.now }
    // year:
    // week:
    // day:
    // emoji: []
});

const Emoji = mongoose.model("Emoji", emojiSchema);

module.exports = Emoji;
