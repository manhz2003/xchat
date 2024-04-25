import axios from "../axios";

export const apiRegister = (data) =>
  axios({
    url: "/api/v1/user/register",
    method: "post",
    data,
  });

export const apiLogin = (data) =>
  axios({
    url: "/api/v1/user/login",
    method: "post",
    data,
  });

export const apiResetPassWord = (data) =>
  axios({
    url: "/api/v1/user/change-password",
    method: "put",
    data,
  });

export const apiLogOut = (data) =>
  axios({
    url: "/api/v1/user/logout",
    method: "post",
    data,
  });

export const getUser = (data) =>
  axios({
    url: "/api/v1/user/users",
    method: "get",
    data,
  });

export const getAvartarUser = (userId) =>
  axios({
    url: `/api/v1/user/avatar-user/${userId}`,
    method: "get",
  });

export const apiUpdateAvatar = (data) =>
  axios({
    url: "/api/v1/user/avatar-user-update",
    method: "put",
    data,
  });

export const getAllUsersWithLatestMessage = (userId) =>
  axios({
    url: `/api/v1/user/user-latest-message/${userId}`,
    method: "get",
  });
