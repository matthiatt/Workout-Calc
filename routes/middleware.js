// app.get("/api/workouts", (req, res) => {
//   db.Workout.find({})
//     .sort({ day: -1 })
//     .limit(1)
//     .then((workoutDb) => {
//       res.json(workoutDb);
//     });
// });

// app.get("/api/workouts/range", (req, res) => {
//   db.Workout.find({}).then((workoutDb) => {
//     res.json(workoutDb);
//   });
// });

// app.put("/api/workouts/:id", (req, res) => {
//   let dataLinkUrl = req.params;
//   let rawData = req.body;
//   db.Workout.updateOne(
//     { _id: dataLinkUrl.id },
//     {
//       $push: {
//         exercises: [
//           {
//             type: rawData.type,
//             name: rawData.name,
//             duration: rawData.duration,
//             distance: rawData.distance,
//             weight: rawData.weight,
//             reps: rawData.reps,
//             sets: rawData.sets,
//           },
//         ],
//       },
//     }
//   )
//     .then((updateDb) => {
//       res.json(updateDb);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

// app.post("/api/workouts", (req, res) => {
//   db.Workout.create({
//     day: new Date().setDate(new Date().getDate()),
//   }).then((updateDb) => {
//     res.json(updateDb);
//   });
// });
