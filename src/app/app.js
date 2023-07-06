const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const cookieRoute = require('./routes/cookie.route');
const cookieParser = require('cookie-parser');
const sessionRoute = require('./routes/session.route');
const session = require('express-session');
const baitapRoute = require('./routes/baitap.route');
const path = require('path');
const app = express();

//middleware
app.use(express.urlencoded());
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(cookieParser());

app.use(
  session({
    secret: 'vu ngau loi', //chua care
    resave: false, //
    saveUninitialized: true, // khi mới vào khởi tạo một sessionID có mã hóa
    cookie: {
      secure: false,
      httpOnly: true,
    },
  })
);
//config template engine ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/baitap', baitapRoute);

//database

//router
app.get('/', (req, res) => {
  res.status(200).json({ message: 'hello' });
});

app.use('/demo-cookie', cookieRoute);
app.use('/demo-session', sessionRoute);
//handle errors

module.exports = app;
