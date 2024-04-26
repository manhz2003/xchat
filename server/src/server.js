const express = require("express");
const cors = require("cors");
require("dotenv").config();
const initRoutes = require("./routes/index");
const { authenticateToken, authorizeRole } = require("./middleware/auth");
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

app.get("/protected", authenticateToken, (req, res) => {});
app.get("/admin", authenticateToken, authorizeRole("admin"), (req, res) => {});

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on("message", (msg) => {
    console.log("message: ", msg);
    io.emit("message", msg);
  });
});

const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

server.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
