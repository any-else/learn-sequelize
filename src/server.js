const app = require('./app/app');
const sequelize = require('./libs/database/connect.mysql');
const PORT = 8080;
app.listen(PORT, async () => {
  console.log(`Server Express running at http://localhost:${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('connect mysql successfully');
  } catch (error) {
    console.log('err', error);
  }
});
