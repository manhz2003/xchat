const routesUser = require("./routesUser");
const routesChat = require("./routesChat");

function initRoutes(app) {
  app.use("/api/v1/user", routesUser);
  app.use("/api/v1/chat", routesChat);
}

module.exports = initRoutes;
