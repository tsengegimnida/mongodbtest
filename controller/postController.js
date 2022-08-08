const Post = require("../models/Post");
const Follow = require("../models/Follow");
const Timeline = require("../models/Timeline");

const fileUpload = async (req, res) => {
  let sampleFile;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  sampleFile = req.files.sampleFile;
  uploadPath = __dirname + "/../uploads/" + sampleFile.name;

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(uploadPath, function (err) {
    if (err) return res.status(500).send(err);

    res.send({
      filename: sampleFile.name,
      fullpath: "http://localhost:3000/uploads/" + sampleFile.name,
    });
  });
};
const createPost = async (req, res) => {
  const { description } = req.body;
  const userId = res.locals.userId;
  const post = await Post.create({ description, userId });

  // Follower-уудын timeline руу нэмэх
  const followers = await Follow.find({
    follower: userId,
  }).lean();
  console.log(followers);
  followers.forEach(async (user) => {
    console.log(user);
    Timeline.create({
      follower: userId,
      following: user._id,
      post: post._id,
    });
  });
  res.send({
    message: "Post added",
  });
};

const getTimeline = async (req, res) => {
  const userId = res.locals.userId;
  const timelines = await Timeline.find({
    following: userId,
  })
    .populate("following")
    .populate("post")
    .lean();
  res.status(200).send({
    data: timelines,
  });
};

module.exports = { fileUpload, createPost, getTimeline };
