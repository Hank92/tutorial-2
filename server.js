var express = require ("express")
, path = require ('path')
var app = express();
var mongoose = require('mongoose')
var configDB = require('./config/database.js');
var models = require('./models');
var ratemodels = require('./ratemodels');



// configuration ===============================================================
mongoose.connect(configDB.url); // connect to our database

app.use(express.static(path.normalize(__dirname) + '/public'))


	app.use(express.logger('dev'));
	app.use(express.json());
	app.use(express.urlencoded());
	app.use(express.errorHandler());
	app.use(express.bodyParser());
	app.use(express.methodOverride()); // put & delete
	app.use(app.router);


require('./routes')(app);
//Points Express to a folder where you keep static files
// e.g. css or client side js files

//these 3 lines tell express that we are going to be rendering html files
//held in the public directory which should be in the same diretory as this file

app.set('views', path.normalize(__dirname) + '/public/html');
app.set('view engine' , 'html');
app.engine('html', require('ejs').renderFile);



var port = Number(process.env.PORT || 8000);
app.listen(port);
console.log('App listening on port:'+ port);