const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');

//get - post - update - delete

router.get('/', productController.getAllProducts);

module.exports = router;
