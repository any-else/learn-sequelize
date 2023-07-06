const getSession = (req, res) => {
  const user = req.session;

  res.status(200).json({ message: user });
};

const setSession = (req, res) => {
  req.session.username = {
    name: 'bui van vu',
    age: 23,
    gender: 'male',
  };
  res.status(200).json({ message: 'set' });
};

const deleteSession = (req, res) => {
  req.session.destroy();
  res.status(200).json({ message: 'delete' });
};

module.exports = {
  getSession,
  setSession,
  deleteSession,
};
