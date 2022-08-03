const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = new Schema(
  {
    userId: { type: mongoose.Schema.ObjectId, ref: "User" },
    descriptoin: { type: String, maxlength: 255 },
  },
  { timestamps: true }
);

const postSchema = new Schema({
  userId: { type: mongoose.Schema.ObjectId, ref: "User" },
  description: { type: String, maxlength: 255 },
  photoUrl: { type: String, maxlength: 2048 }, // buten url bj bolno
  absoluteUrl: { type: String, maxlength: 255 }, // e.g. /uploads/image.jpg
  comments: { type: [commentSchema], default: [] },
});

const Post = mongoose.model("posts", postSchema);

module.exports = Post;
