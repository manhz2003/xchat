const mysql = require("mysql2/promise");
require("dotenv").config();

// Tạo một đối tượng Pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Kiểm tra kết nối thông qua promise
pool
  .getConnection()
  .then((connection) => {
    connection.release(); // release the connection back to the pool
    console.log("Connect DB Success");
  })
  .catch((err) => {
    console.error("Connect DB Error", err);
  });

// Export pool
module.exports = { pool };
