const Products = require('../models/products.model');

const getAllProducts = async (req, res) => {
  try {
    const dataProducts = await Products.findAll();
    res.status(200).json({ data: dataProducts });
  } catch (error) {
    res.status(500).json({ message: 'loi server roi' });
  }
};

module.exports = {
  getAllProducts,
};
