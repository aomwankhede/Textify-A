const mongoose = require("./config.js");
const { Schema } = mongoose.mongoose;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  dob: Date,
  gender: String,
  email: String,
  password: String,
  recoveryEmail: String,
});

const User = mongoose.mongoose.model("User", userSchema);

module.exports = User;
