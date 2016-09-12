var express = require('express');
var test = require('./server/index.js');
var path = require('path');
var serverStatic = require('server-static');

app = express();

app.set('views', '.public/view');
app.set('views engine', 'jade');

app.use(serverStatic('build'));

app.use('/index', test);

module.exports = app;