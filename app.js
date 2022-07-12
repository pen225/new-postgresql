var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// var {Client} = require('pg');

// const client = new Client({
//   user: 'ljoggwullmsxxs',
//   host: 'ec2-3-219-52-220.compute-1.amazonaws.com',
//   database: 'd621k26bqnaiv7',
//   password: '51f1d03fe914d530b853fac9a0780276e3a6a8e1912caebdc5e380267eed45c9',
//   port: 5432,
//   ssl: {
//     rejectUnauthorized: false
//   }
// });

// client.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });
// client.connect()
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('d621k26bqnaiv7', 'ljoggwullmsxxs', '51f1d03fe914d530b853fac9a0780276e3a6a8e1912caebdc5e380267eed45c9', {
  host: 'ec2-3-219-52-220.compute-1.amazonaws.com',
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
          rejectUnauthorized: false
        }
  }
});

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

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
