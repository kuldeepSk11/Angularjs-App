
myApp.controller('upcomingController', ['$scope','movieData', function($scope,movieData,$location, $state) {
  var upcoming= movieData.upcoming_movies();
    upcoming.then(function (data) {
        $scope.upcoming = data.results;
		//console.log($scope.upcoming);
    });
    
}]);

// this sencaond way to give 
//app.controller ('upcomingController',upcomingController);
//var upcomingController = function ($scope,movieData) {
//    var upcoming= movieData.upcoming_movies();
//    upcoming.then(function (data) {
//        $scope.upcoming = data.results;
//    });
//
//};



