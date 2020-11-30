const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

require("dotenv/config"); // Requesting connection to the DB
const connectDB = require("./config/connectDB.js");

const db = require("./models");

let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "/public")));
app.use(require("./routes/htmlRoutes"));
app.use(require("./routes/middleware"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
