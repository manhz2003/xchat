// models/key.js
const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");

class Key extends Model {}

Key.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    algorithm: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    key: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Key",
    tableName: "Keys",
    timestamps: false,
  }
);

module.exports = Key;
