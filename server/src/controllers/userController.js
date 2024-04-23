const UserService = require("../services/UserService.js");

const UserRegister = {
  registerUser: async (req, res) => {
    try {
      const { fullname, email, password } = req.body;

      if (fullname && email && password) {
        const response = await UserService.registerUser({
          fullname,
          email,
          password,
          email,
        });
        return res.status(200).json(response);
      } else {
        return res.status(400).json({
          status: 400,
          message: "Please enter complete information to continue",
        });
      }
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        status: 500,
        message: "An error occurred on the server",
      });
    }
  },
};

const UserLogin = {
  loginUser: async (req, res) => {
    try {
      const { email, password } = req.body;

      if (email && password) {
        const response = await UserService.loginUser({ email, password });

        if (response.status === 200) {
          res.cookie("accessToken", response.accessToken, { httpOnly: true });
          res.cookie("refreshToken", response.refreshToken, { httpOnly: true });
        }

        return res.status(response.status).json(response);
      } else {
        return res.status(400).json({
          status: 400,
          message: "Please enter both email and password to continue",
        });
      }
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        status: 500,
        message: "An error occurred on the server",
      });
    }
  },
};

const logout = async (req, res) => {
  try {
    const userId = req.body.userId;
    const result = await UserService.logoutUser({ userId });

    return res.status(result.status).json(result);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const changePassword = async (req, res) => {
  try {
    const { email, oldPassword, newPassword } = req.body;

    if (email && oldPassword && newPassword) {
      const response = await UserService.changePassword({
        email,
        oldPassword,
        newPassword,
      });

      return res.status(response.status).json(response);
    } else {
      return res.status(400).json({
        status: 400,
        message: "Vui lòng nhập email, mật khẩu cũ và mật khẩu mới để tiếp tục",
      });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      status: 500,
      message: "An error occurred on the server",
    });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const result = await UserService.getAllUsers();

    res.status(result.status).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getUserAvatar = async (req, res) => {
  try {
    const userId = req.params.id;
    const result = await UserService.getUserAvatar(userId);

    return res.status(result.status).json(result);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const updateUserAvatar = async (req, res) => {
  try {
    const userId = req.body.userId;
    const avatarUrl = req.body.avatarUrl;
    const result = await UserService.updateUserAvatar(userId, avatarUrl);

    return res.status(result.status).json(result);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  UserRegister,
  UserLogin,
  changePassword,
  logout,
  getAllUsers,
  getUserAvatar,
  updateUserAvatar,
};
