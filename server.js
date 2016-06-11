const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8888;



//view conf
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));
app.set('layout engine', 'css');
//logger
app.use(logger('dev'));

//static path
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'images')));
//load our routes
require('./http/route')(app);

// error handlers
//=============================================
// development error handler
// will print stacktrace
// export NODE_ENV=development for development
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error/error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
// export NODE_ENV=production for production
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error/error', {
    message: err.message,
    error: {}
  });
});


//create HTTP app
// launch =======================================
app.listen(port);
console.log('The magic happens on port ' + port);
console.log(app.get('env'));
