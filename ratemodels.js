
var mongoose = require('mongoose')

var rateSchema = mongoose.Schema({
	classname: String,
	professor: String,
	comment  : String,
	avggpa: String,
	percentage: String,
	fun: String,
	date: { type: Date, default: Date.now },

});

var rate = mongoose.model('rate', rateSchema);



