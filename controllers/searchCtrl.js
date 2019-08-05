
myApp.controller('searchListController', function($scope,$stateParams,movieData,$location, $state) {
	
		if($stateParams.movieName == null){
			 return $scope.errorss = "Please Enter Movie name ";
			
			
		}else{
			console.log(movieData,$stateParams.movieName);
			var serachList = movieData.search_movies($stateParams.movieName);
				serachList.then(function (data) {
				//console.log('data',data);
				$scope.movieSearchData = data.results;
				//console.log($scope.movieSearchData);
			});
		}
	
//	if($stateParams.movieName == null){
//       return $scope.errorss = "Please Enter Movie name ";
//    }
//    else{
//        var serachList = movieData.serach_movies($stateParams.movieName);
//        search.then(function (data) {
//        console.log($stateParams.movieName);
//        console.log($scope.movieName);
//        $scope.serachList = data.results;
//    });
//    }

});