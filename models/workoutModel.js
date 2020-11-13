const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Looked at previous examples, used discord group for help, and got some help from tutor.
var excerciseSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.new
        },
        name: [
    {
          type: {
          type: String,
          trim: true,
          required: "Please Enter a valid exercise name."
        },
        duration: {
          type: Number,
          required: "Please enter how long you worked-out for here."
        },
        weight: {
          type: Number,
          required: "If needed - how much iron did you pump? (in LBS)."
        },
        reps: {
          type: Number,
          required: "How many reps did you complete of this task?"
        },
        sets: {
          type: Number,
          required: "How many sets did you comeplete?"
        },
        distance: {
          type: Number,
          required: "If you did cardio, then how far did you travel?"
        }
    }]
});

const Workout = mongoose.model("Workout", excerciseSchema);
module.exports = Workout;