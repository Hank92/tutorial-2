var express = require('express');

var app = express();
var port = 8000;
app.listen(port);
console("Express app listening on port" + port);

app.get('/', function(rec, res)){
	res.send('Hello, welcome to CS1501');}
