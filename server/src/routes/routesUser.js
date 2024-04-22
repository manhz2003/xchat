const express = require("express");
const router = express.Router();
const {
  UserRegister,
  UserLogin,
  changePassword,
} = require("../controllers/userController");

router.post("/register", UserRegister.registerUser);
router.post("/login", UserLogin.loginUser);
router.put("/change-password", changePassword);

module.exports = router;
