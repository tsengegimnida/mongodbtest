const Post = require("../models/Post");

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
  res.send(post);
};
module.exports = { fileUpload, createPost };
