const express = require("express");
const cors = require("cors");
require("dotenv").config();
const initRoutes = require("./routes/index");
const { authenticateToken, authorizeRole } = require("./middleware/auth");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use(cors());

initRoutes(app);

app.get("/protected", authenticateToken, (req, res) => {});

app.get("/admin", authenticateToken, authorizeRole("admin"), (req, res) => {});

const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
