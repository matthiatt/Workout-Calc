// https://www.programcreek.com/java-api-examples/?class=com.mongodb.client.MongoCollection&method=findOneAndUpdate -- Used this to learn more about the findOneAndUpdate method.

const db = require("mongojs");

app.get("/api/workouts", (req, res) => {
    db.workout.find({},(workouts));
    console.log(workouts);
});

app.put("/api/workouts/:id", (req, res) => {
var webUrlInfo = req.params;
var workoutData = req.body;
console.log(webUrlInfo);
console.log(workoutData);

    db.workout.findOneAndUpdate({ _id: webUrlInfo.id }, {$push: {execises: [ // Copy and pasted what the array needed within the object from the seed.js file.
        // Replaced the strings and numbers with my variables I created. Along with this, I need to connect them to the element.
      {
        "type": workoutData.type,
        "name": workoutData.name,
        "duration": workoutData.duration,
        "weight": workoutData.weight,
        "reps": workoutData.reps,
        "sets": workoutData.sets
      }  // I added string to the start of every data line to tell the code that not everything is data, just the variable I created and what its refering to.
    ]
}}).then(updateDbCollecition => {
    res.json(updateDbCollecition);
    console.log(updateDbCollecition);
});
});

app.post("/api/workouts", (req, res) => {
    var workoutData = req.body;

    db.workout.create({
        
    })
})