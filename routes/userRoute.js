const express = require("express");
const {
  getUserList,
  loginUser,
  follow,
  following,
} = require("../controller/userController");
const checkAuthorization = require("../middlewares/authorization");
//const logUser = require('../controller/')

const userRouter = express.Router();

userRouter.get("/user/list", [checkAuthorization], getUserList);
userRouter.post("/login", loginUser);
userRouter.post("/follow", checkAuthorization, follow);
userRouter.get("/following", checkAuthorization, following);

module.exports = userRouter;
