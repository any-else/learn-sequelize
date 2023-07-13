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
const userRoute = require('./routes/user.route');
const productRoute = require('./routes/product.route');
const storeRoute = require('./routes/store.route');
const uploadOne = require('./routes/upload_one.route');
const uploadMany = require('./routes/upload_many.route');
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
//read public
app.use('/public', express.static('public'));

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
app.use('/api/v1/users', userRoute);
app.use('api/v1/products', productRoute);
app.use('/api/v1/stores', storeRoute);
app.use('/api/v1/upload-one', uploadOne);
app.use('/api/v1/upload-many', uploadMany);
//handle errors

module.exports = app;
