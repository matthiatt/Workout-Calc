const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const excerciseSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.new,
    },
    name: [
      {
        type: {
          type: String,
          trim: true,
          required: "Please Enter a valid exercise name.",
        },
        time: {
          type: Number,
          required: "Please enter how long you worked-out for here.",
        },
        weight: {
          type: Number,
          required: "If needed - how much iron did you pump? (in LBS).",
        },
        reps: {
          type: Number,
          required: "How many reps did you complete of this task?",
        },
        sets: {
          type: Number,
          required: "How many sets did you comeplete?",
        },
        distance: {
          type: Number,
          required: "If you did cardio, then how far did you travel?",
        },
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

excerciseSchema.virtual("totalTime").get(function () {
  return this.name.reduce((total, exercise) => {
    return total + exercise.time;
  }, 0);
});

const Workout = mongoose.model("workout", excerciseSchema);
module.exports = Workout;
