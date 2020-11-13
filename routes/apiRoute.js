const db = require("mongojs");

app.get("/api/workouts", (req, res) => {
    db.workout.find({},(workouts));
    console.log(workouts);
}