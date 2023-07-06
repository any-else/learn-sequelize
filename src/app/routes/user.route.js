const express = require('express');
const checkUser = require('../middlewares/checkUser');
const router = express.Router();
const userController = require('../controllers/user.controller');

//get - post - update - delete

router.get('/', userController.getAllUsers);

router.post('/', userController.createUser);

router.patch('/:id', checkUser.checkUser, userController.updateUser);

router.delete('/:id', checkUser.checkUser, userController.deleteUser);

router.get('/:id', checkUser.checkUser, userController.getDetailUser);
module.exports = router;
