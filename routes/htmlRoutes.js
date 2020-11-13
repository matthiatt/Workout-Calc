// showing required modules
// const db = require("mongojs");
const express = require("express");
const app = express();

app.get("/", (req,res) => //main / index html
{
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get("/exercise", (req,res) => //exercise html
{
    res.sendFile(path.join(__dirname, 'public', 'exercise.html'));
});

app.get("/stats", (req,res) => // stats html
{
  res.sendFile(path.join(__dirname, 'public', 'stats.html'));
});

// module.exports = Workout;