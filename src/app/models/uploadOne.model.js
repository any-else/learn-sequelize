const sequelize = require('../../libs/database/connect.mysql');
const { DataTypes } = require('sequelize');

const UpLoadOneModel = sequelize.define(
  'UploadOne',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

UpLoadOneModel.sync().then(() => {
  console.log('create table UploadOne');
});

module.exports = UpLoadOneModel;
