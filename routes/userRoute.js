const express = require("express");
const { getUserList, loginUser } = require("../controller/userController");
const checkAuthorization = require("../middlewares/authorization");
//const logUser = require('../controller/')

const userRouter = express.Router();

userRouter.get("/user/list", [checkAuthorization], getUserList);
userRouter.post("/login", loginUser);

module.exports = userRouter;
