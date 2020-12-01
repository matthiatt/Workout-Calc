const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");

const db = require("./models");

let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "/public")));
// app.use(require("./routes/htmlRoutes"));
// app.use(require("./routes/middleware"));

let PORT = process.env.PORT || 3001;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/workout",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "exercise.html"));
});

app.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "stats.html"));
});

app.get("/api/workouts", (req, res) => {
  db.Exercises.find({})
    .sort({ day: -1 })
    .limit(1)
    .then((workoutDb) => {
      res.json(workoutDb);
    });
});

app.get("/api/workouts/range", (req, res) => {
  db.Exercises.find({}).then((workoutDb) => {
    res.json(workoutDb);
  });
});

app.put("/api/workouts/:id", (req, res) => {
  let dataLinkUrl = req.params;
  let rawData = req.body;
  db.Exercises.update(
    { _id: dataLinkUrl.id },
    {
      $push: {
        exercises: [
          {
            type: rawData.type,
            name: rawData.name,
            duration: rawData.duration,
            distance: rawData.distance,
            weight: rawData.weight,
            reps: rawData.reps,
            sets: rawData.sets,
          },
        ],
      },
    }
  )
    .then((updateDb) => {
      res.json(updateDb);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.post("/api/workouts", (req, res) => {
  db.Exercises.create({
    day: new Date().setDate(new Date().getDate()),
  })
    .then((updateDb) => {
      res.json(updateDb);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});
