const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  password: String,
  email: String,
  phone: Number,
  pan: String,
  userType: String
 
});

module.exports = mongoose.model("User", userSchema);