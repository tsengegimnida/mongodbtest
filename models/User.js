const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: String,
  name: String,
  bio: String,
  email: String,
  phone: Number,
  gender: String,
  image: String,
  createdAt: { type: Date, default: Date.now },
  location: String,
  followers: Number,
  following: Number,
  posts: Number,
});

const User = mongoose.model("users", userSchema);

module.exports = User;
