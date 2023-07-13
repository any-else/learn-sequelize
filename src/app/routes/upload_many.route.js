const express = require('express');
const router = express.Router();

const multer = require('multer');

//cấu hình multer upload one
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/');
  }, //folder để lưu trữ
  filename: function (req, file, cb) {
    const fileName = file.originalname.toLowerCase().split(' ').join('-'); //biến đổi ngẫu nhiên
    cb(null, uuidv4() + '-' + fileName);
  }, //tạo đường dẫn ảnh ngẫu nhiên
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, callback) => {
    if (file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg') {
      callback(null, true);
    } else {
      callback(null, false);
      return callback(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  },
});

module.exports = router;
