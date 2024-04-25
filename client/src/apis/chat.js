import axios from "../axios";

export const apiChatUser = (data) =>
  axios({
    url: "/api/v1/chat/chatUser",
    method: "post",
    data,
  });

export const apiUserDetails = (userIdOther) =>
  axios({
    url: `/api/v1/chat/UserDetails/${userIdOther}`,
    method: "get",
  });

export const apiSaveMessage = (data) =>
  axios({
    url: "/api/v1/chat/saveMessage",
    method: "post",
    data,
  });
