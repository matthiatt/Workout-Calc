const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const excerciseSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.new,
    },
    exerciseArray: [
      {
        type: {
          type: String,
          trim: true,
          required: "Please Enter a valid exercise category.",
        },
        name: {
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
        },
        reps: {
          type: Number,
        },
        sets: {
          type: Number,
        },
        distance: {
          type: Number,
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
  return this.exerciseArray.reduce((total, exercise) => {
    return total + exercise.time;
  }, 0);
});

const Workout = mongoose.model("Workout", excerciseSchema);
module.exports = Workout;
