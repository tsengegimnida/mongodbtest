const express = require("express");
const { getUserList, loginUser } = require("../controller/userController");
//const logUser = require('../controller/')

const userRouter = express.Router();

userRouter.get("/user/list", getUserList);
userRouter.post("/login", loginUser);

module.exports = userRouter;
