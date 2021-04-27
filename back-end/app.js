const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const createError = require('http-errors');
const bodyParser = require('body-parser');
require('dotenv').config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var dbRouter = require('./routes/dbTest');

const authRoutes = require('./routes/auth');

var app = express();

// db
mongoose
 .connect(process.env.DATABASE_URI,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
 .then(() => console.log('DB Connected'));

//middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', authRoutes);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/dbTest', dbRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;
