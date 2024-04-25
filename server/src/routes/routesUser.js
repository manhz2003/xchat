const express = require("express");
const router = express.Router();
const {
  UserRegister,
  UserLogin,
  changePassword,
  logout,
  getAllUsers,
  getUserAvatar,
  updateUserAvatar,
  getAllUsersWithLatestMessageController,
} = require("../controllers/userController");

router.post("/register", UserRegister.registerUser);
router.post("/login", UserLogin.loginUser);
router.put("/change-password", changePassword);
router.post("/logout", logout);
router.get("/users", getAllUsers);
router.get("/avatar-user/:id", getUserAvatar);
router.put("/avatar-user-update", updateUserAvatar);
router.get("/user-latest-message/:id", getAllUsersWithLatestMessageController);

module.exports = router;
