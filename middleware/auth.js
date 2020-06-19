const config = require("config");
const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  //get token from header//
    const token = req.header("x-auth-token");

  //check for token//
  if (!token) {
      return res.status(401).json({ msg: "Access Denied " });
  }
  try {
    //Verify token
    const decoded = jwt.verify(token, config.get("jwtSecret"));

    //Add user
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({msg:'not valid'});
  }
}

