const jwt = require("jsonwebtoken");
require("dotenv").config();

const SECRET_KEY = process.env.JWT_SECRET_KEY || "default_secret_key";

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      console.log("Token verification error:", err);
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
}

const authorizeRole = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) {
      console.log("User role:", req.user.role);
      return res.status(403).json({ message: "Forbidden" });
    }
    next();
  };
};

module.exports = {
  authenticateToken,
  authorizeRole,
};
