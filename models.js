
var mongoose = require('mongoose');

var book= mongoose.Schema({
	title: String,
	classname: String,
	edition: String,
	professor: String,
	price: String,
	email: String,
	date: { type: Date, default: Date.now },
});

var Book = mongoose.model('Book', book);



