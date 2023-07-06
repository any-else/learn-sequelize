const express = require('express');
const router = express.Router();

const sessionController = require('../controllers/session.controller');

//demo thao tác với cookie
router.get('/set', sessionController.setSession);

router.get('/get', sessionController.getSession);

router.get('/delete', sessionController.deleteSession);

module.exports = router;
