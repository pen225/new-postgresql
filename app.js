var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// var {Client} = require('pg');

// const client = new Client({
//   user: 'lzdntrcnigsqge',
//   host: 'ec2-52-48-159-67.eu-west-1.compute.amazonaws.com',
//   database: 'dbruko73j9tpvu',
//   password: 'd81f03d43ea50e9017be095fef315f32d182ee28172da5e924f6d63a1d7894f4',
//   port: 5432,
// })
// client.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });


// var Pool = require('pg-pool');
// var pool = new Pool({
//   database: 'dbruko73j9tpvu',
//   user: 'lzdntrcnigsqge',
//   password: 'd81f03d43ea50e9017be095fef315f32d182ee28172da5e924f6d63a1d7894f4',
//   port: 5432,
//   ssl: true,
//   max: 20, // set pool max size to 20
//   idleTimeoutMillis: 1000, // close idle clients after 1 second
//   connectionTimeoutMillis: 1000, // return an error after 1 second if connection could not be established
//   maxUses: 7500, // close (and replace) a connection after it has been used 7500 times (see below for discussion)
// });

// pool.connect()

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
