const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://yechan:Password1!@cluster0-u3bak.mongodb.net/edustation?retryWrites=true&w=majority", { useNewUrlParser: true });


const announcementSeed = [
  {
    title: "Pop Quiz",
    content: "Reminder we will be having a pop quiz on chapter 11 of your text book",
    date: new Date(Date.now())
  },
  {
    title: "Stay Safe",
    content:
      "To My Favorite Students: Stay Safe --> Practice Social Distancing",
    date: new Date(Date.now())
  },
  {
    title: "Field Trip",
    content:
      "Our Field Trip will take place in a few weeks, remember to get your permission slips signed",
    date: new Date(Date.now())
  },
  {
    title: "Homework Due",
    content:
      "Your Homework titled,'why did the chicken cross the road' is due in two weeks",
    date: new Date(Date.now())
  },
  {
    title: "Surprise",
    content: "COVID19 is over and school is back in session, report to class tomorrow at 8am",
    date: new Date(Date.now())
  },

];

db.Announcement.deleteMany({})
  .then(() => db.Announcement.collection.insertMany(announcementSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
  