const getCookie = (req, res) => {
  const username = req.cookies;
  res.status(200).json({
    username,
  });
};

const setCookie = (req, res) => {
  res
    .cookie('username', 'bui van vu', {
      httpOnly: true,
    })
    .cookie('huy', 'quanque', {
      expires: new Date(Date.now() + 5 * 1000), // maxAge  =>  thuong maxAge
      httpOnly: false,
    });
  res.send('set cookie');
};

const deleteCookie = (req, res) => {
  res.clearCookie('username');
  res.send('delete cookie');
};

module.exports = {
  getCookie,
  setCookie,
  deleteCookie,
};
