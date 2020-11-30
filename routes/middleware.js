app.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .sort({ day: -1 })
    .limit(1)
    .then((workoutDb) => {
      res.json(workoutDb);
    });
});

app.get("/api/workouts/range", (req, res) => {
  db.Workout.find({}).then((workoutDb) => {
    res.json(workoutDb);
  });
});
