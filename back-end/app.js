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
const { json } = require('body-parser');

var app = express();

var AWS = require('aws-sdk'),
    region = "us-east-1",
    secretName = "Secrets-for-I2P",
    secret,
    decodedBinarySecret;

var client = new AWS.SecretsManager({
    region: region
});

// db
client.getSecretValue({SecretId: secretName}, function(err, data) {
    if (err) {
        if (err.code === 'DecryptionFailureException')
            throw err;
        else if (err.code === 'InternalServiceErrorException')
            throw err;
        else if (err.code === 'InvalidParameterException')
            throw err;
        else if (err.code === 'InvalidRequestException')
            throw err;
        else if (err.code === 'ResourceNotFoundException')
            throw err;
    }

    secrets = JSON.parse(data.SecretString);
    
    mongoose
      .connect(secrets.DATABASE_URI,{
          useNewUrlParser: true,
          useCreateIndex: true,
          useUnifiedTopology: true
      })
      .then(() => console.log('DB Connected'));
});

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
