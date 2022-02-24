const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/code_bucket_dev");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error in Connection to Mongodb"));

db.once("open", function () {
  console.log("Connected to db :: Mongodb");
});

module.exports = db;
