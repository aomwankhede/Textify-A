const mongoose = require("mongoose");

const connec = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Textify");
    console.log("Successfully Connected to database!!");
  } catch (err) {
    console.log(err.message);
  }
};
module.exports = { mongoose, connec };
