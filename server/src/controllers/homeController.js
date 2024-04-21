const pool = require("../config/database");

const getHomePages = (req, res) => {
  pool.query("SELECT * FROM users", (error, results, fields) => {
    if (error) {
      console.error(error);
    } else {
      res.send(results);
    }
  });
};

const getCheck = (req, res) => {
  res.render("Example.ejs");
};

module.exports = {
  getHomePages,
  getCheck,
};
