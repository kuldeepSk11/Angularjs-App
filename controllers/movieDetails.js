
myApp.controller('movieDetialController', function($scope,$stateParams,movieData,$location, $state) {
		
	var movieDetails = movieData.movies_details($stateParams.id);
		movieDetails.then(function (data) {
		//console.log('data',data);
		$scope.movieDetails = data;
		console.log($scope.movieDetails);
	});
	
	var costarDetails = movieData.costar_Details($stateParams.id);
		costarDetails.then(function (data) {
		//console.log('data',data);
		$scope.costarDetails = data;
		console.log($scope.costarDetails);
	});
});