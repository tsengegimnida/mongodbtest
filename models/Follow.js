const mongoose = require("mongoose");
const { Schema } = mongoose;

const followSchema = new Schema(
  {
    follower: {
      type: mongoose.Schema.ObjectId,
      ref: "users",
    },
    following: {
      type: mongoose.Schema.ObjectId,
      ref: "users",
    },
  },
  {
    timestamps: true,
  }
);

const Follow = mongoose.model("follow", followSchema);

module.exports = Follow;
