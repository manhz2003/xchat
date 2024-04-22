const routesUser = require("./routesUser");

function initRoutes(app) {
  app.use("/api/v1/user", routesUser);
}

module.exports = initRoutes;
