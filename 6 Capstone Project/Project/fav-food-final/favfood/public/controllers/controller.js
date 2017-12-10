var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', function($scope, $http) {
	console.log("WELCOME FROM CONTROLLER");
	
	var refresh = function() {
		$http.get('/restaurantlist').success(function (res) {
				console.log("I got the data I requested");
				$scope.restaurantlist = res;
				$scope.restaurant = "";
		});
	};

	var clear = function() {
		$scope.restaurant = ""
	};

	refresh();

	$scope.addRestaurant = function() {
		console.log($scope.restaurant);
		$http.post('/restaurantlist', $scope.restaurant).success(function (res) {
			console.log(res);
			refresh();
		});
	};

	$scope.removeRestaurant = function(id) {
		console.log(id);
		$http.delete('/restaurantlist/' + id).success(function (res) {
			refresh();
		});
	};

	$scope.edit = function(id) {
		console.log(id);
		$http.get('/restaurantlist/' + id).success(function (res) {
			$scope.restaurant = res;
		});
	};

	$scope.update = function() {
		console.log($scope.restaurant._id);
		$http.put('/restaurantlist/' + $scope.restaurant._id, $scope.restaurant).success(function (res) {
			refresh();
		});
	};

	$scope.deselect = function() {
		clear();
	};
});