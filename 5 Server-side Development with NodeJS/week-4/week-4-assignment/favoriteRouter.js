var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Verify = require('./verify');

var Favorites = require('../models/favorites');

var favoriteRouter = express.Router();

favoriteRouter.use(bodyParser.json());

favoriteRouter.route('/')
.get(Verify.verifyOrdinaryUser, function (req, res, next) {
    Favorites.find({"postedBy":req.decoded._doc._id})
        .populate('postedBy')
        .populate('dishes')
        .exec(function(err,favorite){
            if(err) throw err;
            console.log("Get all favoirtes of user ID " + req.decoded._doc._id);
            res.json(favorite);
        });
})

.post(Verify.verifyOrdinaryUser, function (req, res, next) {
    Favorites.find({"postedBy":req.decoded._doc._id})
        .exec(function(err, favorite){
            if (err) throw err;
            if (favorite.length === 0) {
                req.body.postedBy = req.decoded._doc._id;
                req.body.dishes = req.body._id;
                req.body._id = null;
                Favorites.create(req.body, function (err, dish) {
                    if (err) throw err;
                    console.log("Add dish ID " + req.body._id + " to favorites.");
                    res.json(dish);
                });
            } else {
                var dish = favorite[0];
                dish.dishes.push(req.body._id);
                dish.save(function (err, dish) {
                    if (err) throw err;
                    console.log("Add dish ID " + req.body._id + " to favorites.");
                    res.json(dish);
                });
            }
        });
})    

.delete(Verify.verifyOrdinaryUser, function (req, res, next) {
    Favorites.find({"postedBy":req.decoded._doc._id})
        .exec(function (err, favorite) {
            if (err) throw err;
            if (favorite.length === 0){
                res.json(favorite);
            } else {
                if (favorite[0].dishes.length > 0) {
                    favorite[0].remove(function (err, resp) {
                        if (err) throw err;
                        console.log("Delete all favorites with user ID: " + req.decoded._doc._id);
                        res.json(resp);
                    });
                }
            }
        });
});

favoriteRouter.route('/:dishId')
.delete(Verify.verifyOrdinaryUser, function (req, res, next) {
    Favorites.find({"postedBy":req.decoded._doc._id})
        .exec(function (err, leader) {
            if (err) throw err;
            var index = favorite[0].dishes.indexOf(req.params.dishId);
            if (index >= 0){
                favorite[0].dishes.splice(index, 1);
                favorite[0].save(function (req, resp) {
                    if(err) throw err;
                    console.log("Delete favorite with ID " + index + " of user ID: " + req.decoded._doc._id);
                    res.json(resp);
                });
            }
        });
});

module.exports = favoriteRouter;