const express = require('express');
const router = express.Router();

const multer = require('multer');
const uuidv4 = require('uuid/v4');
const UpLoadOneModel = require('../models/uploadOne.model');

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

router.post('/', upload.single('uploadImage'), async (req, res) => {
  try {
    console.log('req.protocol', req.protocol);
    console.log('req.host', req.get('host'));
    const url = req.protocol + '://' + req.get('host');
    const fileData = {
      image: url + '/public/' + req.file.filename,
    };
    const result = await UpLoadOneModel.create(fileData);
    return res.status(200).json({ image: result });
  } catch (error) {
    res.status(500).json({ message: 'loi' });
  }
});

module.exports = router;
