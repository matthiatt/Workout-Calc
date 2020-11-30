const mongoose = require("mongoose");

require("dotenv/config");

const connectDb = process.env.MONGODB_URI;

async function connectDB() {
  await mongoose.connect(
    connectDb,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => console.log("Great Job!")
  );
}

module.exports = connectDB;
