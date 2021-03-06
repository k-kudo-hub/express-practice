const createError  = require('http-errors');
const express      = require('express');
const path         = require('path');
const cookieParser = require('cookie-parser');
const indexRouter  = require('./routes/index');
const usersRouter  = require('./routes/users');
const fs           = require('fs-extra');
const morgan       = require('./config/middlewares/morgan.js');
const app = express();

// writing access.log
const logDir = path.join(__dirname, '/log');
fs.existsSync(logDir) || fs.mkdirSync(logDir);
app.use(morgan('combined', { stream: morgan.accessLogStream(logDir) }));

// view engine setup
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'ejs');

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
