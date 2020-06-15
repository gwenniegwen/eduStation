const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const annoucementSeed = [
  {
    key: 1,
    id: "1",
    title: "Pop Quiz",
    content: "Reminder we will be having a pop quiz on chapter 11 of your text book",
    date: new Date(Date.now())
  },
  {
    key: 2,
    id: "2",
    title: "Stay Safe",
    content:
      "To My Favorite Students: Stay Safe --> Practice Social Distancing",
    date: new Date(Date.now())
  },
  {
    key: 3,
    id: "3",
    title: "Field Trip",
    content:
      "Our Field Trip will take place in a few weeks, remember to get your permission slips signed",
    date: new Date(Date.now())
  },
  {
    key: 4,
    id: "4",
    title: "Homework Due",
    content:
      "Your Homework titled,'why did the chicken cross the road' is due in two weeks",
    date: new Date(Date.now())
  },
  {
    key: 5,
    id: "5",
    title: "Surprise",
    content: "COVID19 is over and school is back in session, report to class tomorrow at 8am",
    date: new Date(Date.now())
  },

];

db.Annoucement
  .remove({})
  .then(() => db.Annoucement.collection.insertMany(annoucementSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
