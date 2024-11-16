const mongoose = require("mongoose");

require('dotenv').config();
const url = process.env.DB_URL;

mongoose.connect(url);

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Database connected");
});

db.on("error", (error) => {
  console.log("Database connection error : ",error);
});

db.on("disconnected", () => {
  console.log("Database disconnected");
});

module.exports = db;
