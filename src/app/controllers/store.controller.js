const Store = require('../models/store.model');
const uploadStore = async (req, res, next) => {
  try {
    const url = req.protocol + '://' + req.get('host');
    console.log('req.protocol', req.protocol);
    console.log('req.get', req.get('host'));
    console.log('files', req.files);
    const files = req.files;
    let imageArr = [];
    const fileData = files.map((file) => ({
      nameImage: url + '/public/' + file.filename,
    }));
    //handle test
    fileData.map((data) => {
      imageArr.push(data.nameImage);
    });
    const user = await Store.create({ nameImage: imageArr });
    res.status(200).json({
      message: 'oke',
      userCreate: {
        id: user.id,
        dataImage: user.nameImage,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error,
    });
  }
};

const getUpload = async (req, res, next) => {
  try {
    const data = await Store.findAll();
    res.status(200).json({
      message: 'ok',
      data: data,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  uploadStore,
  getUpload,
};
