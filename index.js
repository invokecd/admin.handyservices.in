var express = require('express');
var app = express();
var compression = require('compression');
app.use(compression());
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/public');
app.set('view engine', 'html');

app.get('/', function(request, response) {
  response.sendFile('public/index.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
