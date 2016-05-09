var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('www'));

app.use(bodyParser.json());

app.post('/connect', function(req, res){

	console.log('connected', req.body.id);

	res.send('connected - ' + req.body.id);
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});