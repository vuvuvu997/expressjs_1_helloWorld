var express = require('express');
var app = express();

var port = 3000;

app.get('/', function(request, response) {
	response.send('<h1>Hi You</h1>');
});

app.get('/user', function (request, response) {
	response.send('User list');
});

app.listen(port, function() {
	console.log('Server listening on port '+port);
});