const chatService = require("../services/chatService");

const getMessagesBetweenUsers = async (req, res) => {
  const currentUserId = req.body.currentUserId;
  const otherUserId = req.body.otherUserId;

  try {
    const messages = await chatService.getMessagesBetweenUsers(
      currentUserId,
      otherUserId
    );
    res.json(messages);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching messages" });
  }
};

const getUserDetailsController = async (req, res) => {
  try {
    const userId = req.params.id;
    const result = await chatService.getUserDetails(userId);
    res.status(result.status).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const saveMessageController = async (req, res) => {
  const { senderId, receiverId, content } = req.body;

  try {
    const result = await chatService.saveMessage({
      senderId,
      receiverId,
      content,
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getMessagesBetweenUsers,
  getUserDetailsController,
  saveMessageController,
};
