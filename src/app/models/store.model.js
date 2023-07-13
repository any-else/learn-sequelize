const sequelize = require('../../libs/database/connect.mysql');
const { DataTypes } = require('sequelize');

const StoreModel = sequelize.define(
  'Store',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nameImage: {
      type: DataTypes.TEXT,
      allowNull: false,
      get() {
        return this.getDataValue('nameImage').split(',');
      },
      set(val) {
        this.setDataValue('nameImage', val.toString());
      },
    },
  },
  {
    timestamps: true,
  }
);

StoreModel.sync().then(() => {
  console.log('create table Store');
});

module.exports = StoreModel;
