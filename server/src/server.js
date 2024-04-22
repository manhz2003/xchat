const express = require("express");
const webRoutes = require("./routes/api");
require("dotenv").config();
const connectDatabase = require("./config/database");

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// app.use("/", webRoutes);

connectDatabase();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
