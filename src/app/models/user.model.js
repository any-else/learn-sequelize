const sequelize = require('../../libs/database/connect.mysql');
const { DataTypes } = require('sequelize'); // Import the built-in data types

// định nghĩa ra một bảng user gồm các trường id, name, address ...
const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

User.sync().then(() => {
  console.log('ok');
});

module.exports = User;
