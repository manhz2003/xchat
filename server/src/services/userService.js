const connection = require("../config/database");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

function generateAccessToken(payload) {
  const secretKey = process.env.ACCESS_TOKEN_SECRET || "secret";
  const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });
  return token;
}

const generateRefreshToken = (data) => {
  const secretKey =
    process.env.REFRESH_TOKEN_SECRET || "your-refresh-token-secret";
  const refresh_token = jwt.sign(data, secretKey, {
    expiresIn: "365d",
  });
  return refresh_token;
};

const registerUser = async ({ fullname, email, password }) => {
  let connect;
  try {
    connect = await connection.pool.getConnection();
    if (!connect) {
      throw new Error("Connection is undefined or null.");
    }
    await connect.beginTransaction();
    const salt = +process.env.SALT;
    const hashPassword = bcrypt.hashSync(password, salt);
    const [users] = await connect.execute(
      "SELECT * FROM Users WHERE email = ?",
      [email]
    );

    if (users.length > 0) {
      return {
        status: 400,
        message: "Email đã được sử dụng.",
      };
    }

    const [userInsertResult] = await connect.execute(
      "INSERT INTO Users (fullname, email, password) VALUES (?, ?, ?)",
      [fullname, email, hashPassword]
    );

    const userId = userInsertResult.insertId;
    const defaultRoleId = 2;
    await connect.execute(
      "INSERT INTO UserRoles (user_id, role_id) VALUES (?, ?)",
      [userId, defaultRoleId]
    );

    await connect.commit();

    return {
      status: 200,
      message: "Đăng ký tài khoản thành công",
      data: userInsertResult,
    };
  } catch (err) {
    if (connect) {
      await connect.rollback();
    }

    throw err;
  }
};

const loginUser = async ({ email, password }) => {
  let connect;
  try {
    connect = await connection.pool.getConnection();
    if (!connect) {
      throw new Error("Connection is undefined or null.");
    }
    const [users] = await connect.execute(
      "SELECT * FROM Users WHERE email = ?",
      [email]
    );

    if (users.length === 0) {
      return {
        status: 400,
        message: "Email không tồn tại.",
      };
    }

    const user = users[0];
    const isPasswordMatch = bcrypt.compareSync(password, user.password);

    if (!isPasswordMatch) {
      return {
        status: 400,
        message: "Mật khẩu không chính xác.",
      };
    }

    await connect.execute("UPDATE Users SET status = ? WHERE id = ?", [
      1,
      user.id,
    ]);
    const accessToken = generateAccessToken({ userId: user.id, email });
    const refreshToken = generateRefreshToken({ userId: user.id, email });

    return {
      status: 200,
      message: "Đăng nhập thành công",
      data: user,
      accessToken,
      refreshToken,
      userId: user.id,
    };
  } catch (err) {
    if (connect) {
      connect.release();
    }

    throw err;
  }
};

const logoutUser = async ({ userId }) => {
  let connect;
  try {
    connect = await connection.pool.getConnection();
    if (!connect) {
      throw new Error("Connection is undefined or null.");
    }

    // Update user status to 0
    await connect.execute("UPDATE Users SET status = ? WHERE id = ?", [
      false,
      userId,
    ]);

    return {
      status: 200,
      message: "Đăng xuất thành công",
    };
  } catch (err) {
    if (connect) {
      connect.release();
    }

    throw err;
  }
};

const changePassword = async ({ email, oldPassword, newPassword }) => {
  let connect;
  try {
    connect = await connection.pool.getConnection();
    if (!connect) {
      throw new Error("Connection is undefined or null.");
    }
    const [users] = await connect.execute(
      "SELECT * FROM Users WHERE email = ?",
      [email]
    );

    if (users.length === 0) {
      return {
        status: 400,
        message: "Người dùng không tồn tại.",
      };
    }

    const user = users[0];
    const isPasswordMatch = bcrypt.compareSync(oldPassword, user.password);

    if (!isPasswordMatch) {
      return {
        status: 400,
        message: "Mật khẩu cũ không chính xác.",
      };
    }

    const salt = +process.env.SALT;
    const hashPassword = bcrypt.hashSync(newPassword, salt);
    await connect.execute("UPDATE Users SET password = ? WHERE email = ?", [
      hashPassword,
      email,
    ]);

    return {
      status: 200,
      message: "Đổi mật khẩu thành công",
    };
  } catch (err) {
    if (connect) {
      connect.release();
    }

    throw err;
  }
};

const getAllUsers = async () => {
  try {
    const [users] = await connection.pool.query(
      "SELECT id, fullname, avatar, status FROM Users"
    );

    return {
      status: 200,
      message: "Lấy danh sách người dùng thành công",
      data: users,
    };
  } catch (err) {
    throw err;
  }
};

const getUserAvatar = async (userId) => {
  let connect;
  try {
    connect = await connection.pool.getConnection();
    if (!connect) {
      throw new Error("Connection is undefined or null.");
    }

    const [users] = await connect.execute(
      "SELECT avatar, fullname FROM Users WHERE id = ?",
      [userId]
    );

    if (users.length === 0) {
      return {
        status: 404,
        message: "User not found",
      };
    }

    const user = users[0];

    return {
      status: 200,
      message: "User avatar and fullname retrieved successfully",
      data: {
        avatar: user.avatar,
        fullname: user.fullname,
      },
    };
  } catch (err) {
    throw err;
  } finally {
    if (connect) {
      connect.release();
    }
  }
};

const updateUserAvatar = async (userId, avatarUrl) => {
  let connect;
  try {
    connect = await connection.pool.getConnection();
    if (!connect) {
      throw new Error("Connection is undefined or null.");
    }

    await connect.execute("UPDATE Users SET avatar = ? WHERE id = ?", [
      avatarUrl,
      userId,
    ]);

    return {
      status: 200,
      message: "User avatar updated successfully",
    };
  } catch (err) {
    throw err;
  } finally {
    if (connect) {
      connect.release();
    }
  }
};

const getAllUsersWithLatestMessage = async (currentUserId) => {
  if (currentUserId === undefined) {
    throw new Error("currentUserId must not be undefined");
  }

  let connect;
  try {
    connect = await connection.pool.getConnection();
    if (!connect) {
      throw new Error("Connection is undefined or null.");
    }

    const [users] = await connect.execute(
      `SELECT Users.id, Users.fullname, Users.avatar, Users.status, Messages.content AS latestMessage, Messages.id AS latestMessageId
      FROM Users
      LEFT JOIN (
        SELECT content, id,
          CASE WHEN sender_id = ? THEN receiver_id ELSE sender_id END AS user_id
        FROM Messages
        WHERE id IN (
          SELECT MAX(id)
          FROM Messages
          WHERE sender_id = ? OR receiver_id = ?
          GROUP BY CASE WHEN sender_id = ? THEN receiver_id ELSE sender_id END
        )
      ) Messages ON Users.id = Messages.user_id
      WHERE Users.id != ?
      ORDER BY Messages.id DESC`,
      [
        currentUserId,
        currentUserId,
        currentUserId,
        currentUserId,
        currentUserId,
      ]
    );

    return users;
  } catch (err) {
    throw err;
  } finally {
    if (connect) {
      connect.release();
    }
  }
};

module.exports = {
  registerUser,
  changePassword,
  loginUser,
  logoutUser,
  getAllUsers,
  getUserAvatar,
  updateUserAvatar,
  getAllUsersWithLatestMessage,
};
