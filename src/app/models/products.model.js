const sequelize = require('../../libs/database/connect.mysql');
const { DataTypes } = require('sequelize'); // Import the built-in data types

// định nghĩa ra một bảng user gồm các trường id, name, address ...
const Products = sequelize.define(
  'Products',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(8, 2),
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);

Products.sync().then(() => {
  console.log('oke ss');
});

module.exports = Products;
