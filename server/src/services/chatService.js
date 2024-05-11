const connection = require("../config/database");
const CryptoJS = require("crypto-js");

const getMessagesBetweenUsers = async (currentUserId, otherUserId) => {
  let connect;
  try {
    connect = await connection.pool.getConnection();
    if (!connect) {
      throw new Error("Connection is undefined or null.");
    }

    const [messages] = await connect.execute(
      `SELECT messages.content, messages.created_at, 
              users1.id AS sender_id, users1.avatar AS sender_avatar, 
              users2.id AS receiver_id, users2.avatar AS receiver_avatar
          FROM messages
          JOIN users AS users1 ON users1.id = messages.sender_id
          JOIN users AS users2 ON users2.id = messages.receiver_id
          WHERE (sender_id = ? AND receiver_id = ?)
          OR (sender_id = ? AND receiver_id = ?)
          ORDER BY created_at ASC`,
      [currentUserId, otherUserId, otherUserId, currentUserId]
    );

    if (messages.length === 0) {
      return {
        status: 404,
        message: "No messages found",
      };
    }

    const formattedMessages = messages.map((message) => ({
      sender: {
        id: message.sender_id,
        avatar: message.sender_avatar,
        content: message.content,
        created_at: message.created_at,
      },
      receiverId: message.receiver_id,
    }));

    return {
      status: 200,
      message: "Messages retrieved successfully",
      data: formattedMessages,
    };
  } catch (err) {
    throw err;
  } finally {
    if (connect) {
      connect.release();
    }
  }
};

const getUserDetails = async (userId) => {
  let connect;
  try {
    connect = await connection.pool.getConnection();
    if (!connect) {
      throw new Error("Connection is undefined or null.");
    }

    const [user] = await connect.execute(
      `SELECT fullname, status AS statusUser
       FROM users
       WHERE id = ?`,
      [userId]
    );

    if (user.length === 0) {
      return {
        status: 404,
        message: "User not found",
      };
    }

    return {
      status: 200,
      message: "User details retrieved successfully",
      data: user[0],
    };
  } catch (err) {
    throw err;
  } finally {
    if (connect) {
      connect.release();
    }
  }
};

const saveMessage = async ({ senderId, receiverId, content }) => {
  try {
    // mã hoá tin nhắn trước khi lưu vào database
    const key = process.env.ENCRYPTION_KEY_PRO;
    const encryptedContent = CryptoJS.DES.encrypt(content, key).toString();

    const [result] = await connection.pool.execute(
      `INSERT INTO messages (sender_id, receiver_id, content) VALUES (?, ?, ?)`,
      [senderId, receiverId, encryptedContent]
    );

    return {
      status: 200,
      message: "Message saved successfully",
      data: result,
    };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getMessagesBetweenUsers,
  getUserDetails,
  saveMessage,
};
