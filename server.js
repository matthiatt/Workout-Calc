// Connections needed
const express = require("express");
const mongoose = require("mongoose");
// const morgan = require("morgan");
// const mongojs = require("mongojs");

const PORT = process.env.PORT || 3000;

const db = require("mongojs");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(morgan);
app.use(express.static("public"));

app.use(require("./routes/apiRoute"));
require("./routes/htmlRoutes")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", 
{
  useNewUrlParser: true,
  useFindAndModify: false
});

//port to listen to.
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

// I HATE HEROKU