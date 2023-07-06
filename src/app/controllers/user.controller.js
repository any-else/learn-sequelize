const User = require('../models/user.model');
const { Op } = require('sequelize');

const createUser = async (req, res) => {
  try {
    const { name, email, password, address } = req.body;
    const result = await User.create({ name, address, email, password });
    res.status(200).json({
      message: 'thêm thành công',
      data: result,
    });
  } catch (error) {
    res.status(500).json({ message: 'loi server roi' });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const dataUser = await User.findAll();
    res.status(200).json({ data: dataUser });
  } catch (error) {
    res.status(500).json({ message: 'loi server roi' });
  }
};

const deleteUser = async (req, res) => {
  try {
    const dataUser = await User.destroy({
      where: {
        [Op.or]: [{ id: req.params.id }, { name: 'BUI VAN VU2' }],
      },
    });
    res.status(200).json({ message: 'delete successfully' });
  } catch (error) {
    res.status(500).json({ message: 'loi server roi' });
  }
};

const updateUser = async (req, res) => {
  try {
    const dataUser = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: 'update successfully' });
  } catch (error) {
    res.status(500).json({ message: 'loi server roi' });
  }
};

const getDetailUser = async (req, res) => {
  try {
    const dataUser = await User.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: 'find successfully', data: dataUser });
  } catch (error) {
    res.status(500).json({ message: 'loi server roi' });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  deleteUser,
  updateUser,
  getDetailUser,
};
