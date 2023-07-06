const User = require('../models/user.model');

const checkUser = async (req, res, next) => {
  try {
    const dataUser = await User.findByPk(req.params.id);
    if (dataUser) {
      console.log(dataUser);
      next();
    } else {
      res.status(404).json({ message: 'Data not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Loi server' });
  }
};

module.exports = {
  checkUser,
};
