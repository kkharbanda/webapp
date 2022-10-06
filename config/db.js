const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongiURI");
const connectDb = async () => {
  try {
    await mongoose.connect(db);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error(err.message);
    // exit process immediately
    process.exit(1);
  }
};

module.exports = connectDb;
