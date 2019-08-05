
myApp.controller('popularController', ['$scope','movieData', function($scope,movieData,$location, $state) {
  var popularMovie= movieData.popular_movies();
    popularMovie.then(function (data) {
        $scope.popularMovie = data.results;
		//console.log($scope.upcoming);
    });
    
}]);




