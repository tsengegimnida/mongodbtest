const jwt = require("jsonwebtoken");

const checkAuthorization = (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);
  const result = jwt.verify(
    token,
    process.env.JWT_SECRET,
    function (err, decoded) {
      console.log(decoded);
      res.locals.userId = decoded._id;
      console.log(err);
      if (err) return false;
      else return true;
    }
  );

  if (!result) {
    res.send("Invalid");
  }
  next();
};
module.exports = checkAuthorization;
