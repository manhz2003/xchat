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
