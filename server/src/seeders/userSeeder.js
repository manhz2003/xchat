"use strict";
const bcrypt = require("bcrypt");
const Chance = require("chance");
const chance = new Chance();

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const randomUsers = Array.from({ length: 20 }).map(() => ({
      fullname: chance.name(),
      email: chance.email(),
      password: bcrypt.hashSync("password", 10),
      created_at: new Date(),
      updated_at: new Date(),
    }));

    await queryInterface.bulkInsert("Users", randomUsers);

    const users = await queryInterface.sequelize.query(
      `SELECT id from \`Users\`;`
    );
    const userIds = users[0].map((user) => user.id);
    const userRoles = userIds.map((userId) => ({
      user_id: userId,
      role_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    }));

    await queryInterface.bulkInsert("UserRoles", userRoles);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("UserRoles", null, {});
    await queryInterface.bulkDelete("Users", null, {});
  },
};

// để thực hiện seeder này cần cd vào thư mục src
// sau đó chạy lệnh npx sequelize-cli db:seed --seed seeders/userSeeder.js
// nếu muốn rollback thì chạy lệnh npx sequelize-cli db:seed:undo --seed seeders/userSeeder.js
