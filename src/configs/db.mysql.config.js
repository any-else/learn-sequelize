//  level 0
const dev = {
  db: {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: 'Vuvanbui@18',
    DATABASE: 'learnSequelize',
    dialect: 'mysql',
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

module.exports = dev;
