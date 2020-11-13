const express = require("express");
const mongoose = require("mongoose");
const mongojs = require("mongojs");

const PORT = process.env.PORT || 3000;

const db = mongojs(databaseUrl, collections);

db.on("error", error => 
{
  console.log("Database Error:", error);
});


const app = express();

app.get("/", (req, res) => 
{
  res.send("Welcome");
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});