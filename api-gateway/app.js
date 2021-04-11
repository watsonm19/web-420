/*
============================================
; Title:  API-Gateway
; Author: Mark Watson
; Date: 21 March 2021
; Description: app.js file for the gateway project.
;===========================================
*/

// imports required modules
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

// connect to the MongoDB database
mongoose.connect('mongodb+srv://admin:admin@main-cluster.5we8u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true, useUnifiedTopology: true
}).then (() => console.log('connection successful'))
.catch((err) => console.error(err));

var indexRouter = require('./routes/index');
var apiCatalog = require('./routes/api-catalog');

// initializes app
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// use statements
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', apiCatalog);

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

// export app for use
module.exports = app;
