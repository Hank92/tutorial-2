var mongoose = require('mongoose'),
Book = mongoose.model('Book');
rate = mongoose.model('rate');


exports.Home = function(req, res){
	res.render('Home', function(err,html){
		res.send(html);
	})

}

exports.about = function(req, res){
	res.render('about', function(err,html){
		res.send(html);
	})

}

exports.Textbooks = function(req, res){
	console.log("Query: " + req.query);
	if (req.query.search) {
		Book.findByTitle(req.query.search, function(err, all_books) {
			console.log("Books: " + JSON.stringify(all_books) );
			res.render('Textbooks', { books: all_books }, function(err, html) {
				res.send(html);
			})
			// res.send(JSON.stringify(result))
		});
	} else {
		Book.find({}, function(err, all_books) {
			console.log("Books: " + JSON.stringify(all_books) );
			res.render('Textbooks', { books: all_books }, function(err, html) {
				res.send(html);
			})
			// res.send(JSON.stringify(result))
		});
	}
}

exports.createBook = function(req, res) {
	var newBook = new Book({ 
								title: req.body.title, 
								classname: req.body.classname,
								edition: req.body.edition,
								professor: req.body.professor, 
								price: req.body.price,
								email: req.body.email,
								comment: req.body.comment				
						});

	newBook.save(function(err) {
		if (err) {
			console.log("Error saving your textbook");
		} else {
			res.redirect('/Textbooks');
		};
	});	
}


exports.findById = function(req, res){
	Book.find({_id: req.params.id}, function(err, all_books){
			if(err)
			{
			 res.json(err);
			}
			else{  
			 res.render('textView', {books: all_books[0]});
			}
		});	
	};

exports.deletebyId = function(req, res){
	Book.remove({_id: req.params.id}, function(err){
		if(err) 
			{
			res.json(err);
			}
		else{
			res.redirect('/Textbooks');
		}    
	});
}

exports.rateclass = function(req, res){
	console.log("Query: " + req.query);
	if (req.query.search) {
		rate.findByTitle(req.query.search, function(err, all_classes) {
			console.log("classes: " + JSON.stringify(all_classes) );
			res.render('rateclass', { rates: all_classes }, function(err, html) {
				res.send(html);
			})
			// res.send(JSON.stringify(result))
		});
	} else {
		rate.find({}, function(err, all_classes) {
			console.log("classes: " + JSON.stringify(all_classes) );
			res.render('rateclass', { rates: all_classes }, function(err, html) {
				res.send(html);
			})
			// res.send(JSON.stringify(result))
		});
	}
}

exports.createClass = function(req, res) {
	var newClass = new rate({ 
								classname: req.body.classname, 
								professor: req.body.professor,
								date: req.body.date,
								comment:req.body.comment,
								avggpa: req.body.avggpa,
								fun: req.body.fun,
								percentage: req.body.percentage
						});
	newClass.save(function(err) {
		if (err) {
			console.log("Error saving your item");
		} else {
			res.redirect('/rateclass');
		};
	});	
}

exports.findByIdrate = function(req, res){
	rate.find({_id: req.params.id}, function(err, all_classes){
			if(err)
			{
			 res.json(err);
			}
			else{  
			 res.render('rateView', {rates: all_classes[0]});
			}
		});	
};



