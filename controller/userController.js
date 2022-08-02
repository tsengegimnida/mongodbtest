const User = require("../models/User");
const jwt = require("jsonwebtoken");

const getUserList = async (req, res) => {
  const users = await User.find({});
  //console.log(res.locals.id);
  res.send(users);
};

const loginUser = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = await User.findOne({
    username,
    password,
  }).lean();

  if (user) {
    const user_data = {
      _id: user._id,
    };
    const token = jwt.sign(user_data, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    console.log(token);
    const data = {
      token,
    };
    res.send(data);
  } else {
    // send response invalid login
  }
};

module.exports = { getUserList, loginUser };
