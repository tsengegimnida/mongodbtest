const express = require("express");
const { fileUpload, createPost } = require("../controller/postController");
const checkAuthorization = require("../middlewares/authorization");
//const logUser = require('../controller/')

const postRouter = express.Router();

postRouter.post("/upload", fileUpload);
postRouter.post("/createPost", checkAuthorization, createPost);

module.exports = postRouter;
