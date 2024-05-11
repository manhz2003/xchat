const express = require("express");
const cors = require("cors");
require("dotenv").config();
const initRoutes = require("./routes/index");
const bodyParser = require("body-parser");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

app.use(bodyParser.json());

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

initRoutes(app);

const users = {};

io.on("connection", (socket) => {
  socket.on("user_connected", (userId) => {
    users[userId] = socket.id;
  });

  socket.on("message", (data) => {
    const { senderId, receiverId } = data;
    // console.log(senderId, receiverId);
    // Gửi sự kiện tới người gửi
    io.to(users[senderId]).emit("message", data);
    console.log(users[senderId]);
    // Gửi sự kiện tới người nhận
    io.to(users[receiverId]).emit("message", data);
    console.log(users[receiverId]);
  });
});

const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

server.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
