module.exports = function(app){
	var handlers = require ('./handlers');
	app.get('/', handlers.Home);
	app.get('/about',handlers.about);
	app.get('/textbooks', handlers.Textbooks);
	app.get('/rateclass', handlers.rateclass);
	app.get('/rateclass/:id', handlers.findByIdrate);
	app.get('/textbooks/:id', handlers.findById);

	app.post('/textbooks', handlers.createBook);
	app.post('/rateclass', handlers.createClass);


	app.get('/textbooks/:id/delete', handlers.deletebyId);
}
