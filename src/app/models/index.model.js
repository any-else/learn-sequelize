const User = require('./user.model');
const Products = require('./products.model');
const sequelize = require('../../libs/database/connect.mysql');

(async () => {
  try {
    await User.sync();
    await Post.sync();
    console.log('Cơ sở dữ liệu đã được đồng bộ hóa');
  } catch (error) {
    console.error('Lỗi khi đồng bộ hóa cơ sở dữ liệu:', error);
  }
})();
