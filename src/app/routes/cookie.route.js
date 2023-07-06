const express = require('express');
const router = express.Router();
const cookieController = require('../controllers/cookie.controller');

//demo thao tác với cookie
router.get('/set', cookieController.setCookie);

router.get('/get', cookieController.getCookie);

router.get('/delete', cookieController.deleteCookie);

module.exports = router;
