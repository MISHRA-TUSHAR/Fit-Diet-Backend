const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGODB_URI, {});

const db = mongoose.connection;

db.on("connected", () => {
  console.log("connected to dietplan database");
});

db.on("error", (error) => {
  console.log("error connecting to dietplan database");
});

db.on("disconnected", () => {
  console.log("disconnected from dietplan data  database");
});

module.exports = db;
