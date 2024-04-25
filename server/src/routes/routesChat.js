const express = require("express");
const router = express.Router();
const {
  getMessagesBetweenUsers,
  getUserDetailsController,
  saveMessageController,
} = require("../controllers/chatController");

router.post("/chatUser", getMessagesBetweenUsers);
router.get("/UserDetails/:id", getUserDetailsController);
router.post("/saveMessage", saveMessageController);

module.exports = router;
