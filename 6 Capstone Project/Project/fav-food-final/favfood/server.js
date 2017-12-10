var express = require('express');
var mongojs=require('mongojs');
var bodyParser = require('body-parser');

var app = express();
var db = mongojs('restaurantlist', ['restaurantlist']);

app.use(express.static(__dirname+"/public"));
app.use(bodyParser.json());

app.get('/restaurantlist', function (req, res) {
	console.log("I received a GET request");

	db.restaurantlist.find(function (err, docs) {
		console.log(docs);
		res.json(docs);
	});
});

app.post('/restaurantlist', function (req, res) {
	console.log(req.body);
	db.restaurantlist.insert(req.body, function(err, doc) {
		res.json(doc);
	});
});

app.delete('/restaurantlist/:id', function (req, res) {
	var id = req.params.id;
	console.log(id);
	db.restaurantlist.remove({_id: mongojs.ObjectId(id)}, function(err, doc) {
		res.json(doc);
	});
});

app.get('/restaurantlist/:id', function (req, res) {
	var id = req.params.id;
	console.log(id);
	db.restaurantlist.findOne({_id: mongojs.ObjectId(id)}, function (err, docs) {
		res.json(docs);
	});
});

app.put('/restaurantlist/:id', function (req, res) {
	var id = req.params.id;
	console.log(req.body.name);
	db.restaurantlist.findAndModify({query: {_id: mongojs.ObjectId(id)},
		update: {$set: {
			name: req.body.name,
			type: req.body.type,
			addr: req.body.addr,
			description: req.body.description,
			pic: req.body.pic,
			hour: req.body.hour,
			price: req.body.price,
			featured: req.body.featured
		}}, new: true}, function(err, doc) {
			res.json(doc);
		});
});


app.listen(3000);
console.log("Server running on port 3000.");