const mongoose = require("mongoose");
const { Schema } = mongoose;

const timelineSchema = new Schema(
  {
    follower: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    following: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    post: {
      type: Schema.Types.ObjectId,
      ref: "posts",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Timeline = mongoose.model("timelines", timelineSchema);

module.exports = Timeline;
