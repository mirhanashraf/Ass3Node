var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const prod = require('./data');

var app = express();
// var exphbs=require('exphbs');
// var hbs=require('handlebars');
// app.engine('handlebars', engines.handlebars);

// view engine setup
app.set('views', path.join(__dirname, 'views'));

// app.engine('handlebars', exphbs({
//   helpers: {
//     // Function to do basic mathematical operation in handlebar
//     del: function (id) {
//       const p = prod.find(p => (p.prodId === id));
//       p.splice(0, 1);
//     }
//   }
// }));
app.set('view engine', 'hbs');
// app.set('view engine', 'handlebars');

// hbs.registerHelper('del',function(id){
//   debugger
//   const p=prod.find(p=>(p.prodId===id));
//   p.splice(0,1);
// })

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/user', usersRouter);

app.use('/', indexRouter);

// app.use('/user/:id', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
