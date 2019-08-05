
myApp.controller('topRatedCtrl', ['$scope','movieData', function($scope,movieData,$location, $state,$timeout) {
	
	
	$scope.currentPage = 1;
	$scope.pageSize = 20;
	$scope.loading = true;
	$scope.topRatedData =[];
	$scope.total_pages=0;
	$scope.totalPages=0;
	
	$scope.loadMore = function() {
			
		setTimeout(function() {
			$scope.loadData();	
			console.log("in loadmore");
			$scope.loading = true;
			$scope.currentPage++;
			console.log("current Page" +$scope.currentPage);

		}, 2000);
			
	};
	
	$scope.loadData = function(){
		var topRatedData= movieData.top_rated($scope.currentPage);
		topRatedData.then(function (data) {
			$scope.topRatedData = $scope.topRatedData.concat(data.results);
				$scope.itemCount = data.total_results;
	//			$scope.totalPages = data.total_pages;
	//			$scope.totalPages = Math.ceil($scope.itemCount/$scope.pageSize);
			});
	}

}]);







