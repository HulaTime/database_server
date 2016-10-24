var express = require('express');
var app = express();
var routes = require('./app/routes');

// Morgan is a module that outputs request response information to the console while the server is running
var logger = require('morgan');

app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.use(express.static('app/public'));
app.use(logger('dev'));
app.use('/', routes);


//--------------Server--------------
var server = app.listen(4000, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("database_server listening at localhost:", port)
})