// Connections needed
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
// const mongojs = require("mongojs");

const PORT = process.env.PORT || 3000;

const db = mongojs(databaseUrl, collections);

db.on("error", error => 
{
  console.log("Database Error:", error);
});

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan);
app.use(express.static("public"));
app.use(require("./routes/api.js"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", 
{
  useNewUrlParser: true,
  useFindAndModify: false
});

// get route set up with HTML.
app.get("/", (req,res) => 
{
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get("/exercise", (req,res) => 
{
    res.sendFile(path.join(__dirname, 'public', 'exercise.html'));
});

app.get("/stats", (req,res) => 
{
  res.sendFile(path.join(__dirname, 'public', 'stats.html'));
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});