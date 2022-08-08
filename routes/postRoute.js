const express = require("express");
const {
  fileUpload,
  createPost,
  getTimeline,
} = require("../controller/postController");
const checkAuthorization = require("../middlewares/authorization");
//const logUser = require('../controller/')

const postRouter = express.Router();

postRouter.post("/upload", fileUpload);
postRouter.post("/createPost", checkAuthorization, createPost);
postRouter.get("/timeline", getTimeline);

module.exports = postRouter;
