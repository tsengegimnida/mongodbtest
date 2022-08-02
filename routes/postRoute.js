const express = require("express");
const fileUpload = require("../controller/postController");
//const checkAuthorization = require("../middlewares/authorization");
//const logUser = require('../controller/')

const postRouter = express.Router();

postRouter.post("/upload", fileUpload);

module.exports = postRouter;
