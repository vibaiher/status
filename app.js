var express = require('express');
var app = express();

app.set('views', './views');
app.set('view engine', 'jade');

app.get('/', function (req, res) {
  res.render('index', { title: 'Status', message: 'Welcome to Status!' });
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Status app listening on http://%s:%s', host, port);
});
