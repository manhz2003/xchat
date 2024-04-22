const connection = require("../config/database");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

function generateAccessToken(payload) {
  const secretKey = process.env.JWT_SECRET || "your-secret-key";
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

    const accessToken = generateAccessToken({ userId: user.id, email });
    const refreshToken = generateRefreshToken({ userId: user.id, email });

    return {
      status: 200,
      message: "Đăng nhập thành công",
      data: user,
      accessToken,
      refreshToken,
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

module.exports = {
  registerUser,
  changePassword,
  loginUser,
};
