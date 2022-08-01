const User = require("../models/User");
const jwt = require("jsonwebtoken");

const getUserList = async (req, res) => {
  console.log(req.headers);
  const token = req.headers.authorization;

  const result = jwt.verify(token, "secret", function (err, decoded) {
    if (err) return false;
    return decoded;
  });
  if (!result) {
    res.send("Invalid");
  }

  const users = await User.find({});
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
    const token = jwt.sign(user, process.env.JWT_SECRET, {
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
