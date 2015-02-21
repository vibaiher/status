var express = require('express');
var body_parser = require('body-parser');
var Project = require('./src/project.js');

var app = express();

app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));

app.set('views', './views');
app.set('view engine', 'jade');

app.get('/', function (req, res) {
  res.render('index', { title: 'Status', message: 'Welcome to Status!' });
});

app.post('/projects', function (req, res) {
  var project = new Project(req.body.title, req.body.description);

  res.status(201).send('Title: ' + project.title + ', Description: ' + project.description);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Status app listening on http://%s:%s', host, port);
});

module.exports = app;
