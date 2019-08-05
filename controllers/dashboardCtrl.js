
myApp.controller('dashboardCtrl', function($scope,$location,$http) {
      
    $scope.insertData={"titile":"","release_date":"","rating":"","popularity":"","runtime":"","overview":""};
    
    $scope.movieInsertData = function(){
        console.log($scope.insertData);
       $http({
           method:'POST',
           url:'./phpWebServices/movieDataInsert.php',
           cache: false,
           async: true,
           dataType:'json',
           data:{"titile": $scope.insertData.titile,"release_date":$scope.insertData.release_date,"rating":$scope.insertData.rating,"popularity":$scope.insertData.popularity,"runtime":$scope.insertData.runtime,"overview":$scope.insertData.overview}
           //data:$scope.registerData
       }).then(function (response){
           $scope.movieDataGet = response.data;
            console.log($scope.movieDataGet);
            //$scope.registerData = null;
       }).catch(function(e){
            alert("Some error occurred due to which feed could not be unliked, please try again.");
        });
    }
    
    $scope.movieFetchData = function(){
       $http({
           method:'GET',
           url:'./phpWebServices/movieDataFetch.php'
       }).then(function successCallback(response){
            $scope.movieDataGet = response.data;
          // console.log($scope.movieDataGet);
       }).catch(function(e){
            alert("Some error occurred due to which feed could not be unliked, please try again.");
        });
    }
    
    
$scope.movieViewData = function(id){
    console.log(id);
     $scope.modalbox = $("#movieDataView").modal();
       $http({
           method:'GET',
           url:'./phpWebServices/movieDataView.php',
           data:{'id':id, 'action':'view'}
       }).then(function successCallback(response){
            $scope.movieDataView = response.data;
          console.log($scope.movieDataView);
       }).catch(function(e){
            alert("Some error occurred due to which feed could not be unliked, please try again.");
        });
    }
    
    
$scope.movieEditData = function(id){
        $scope.modalbox = $("#movieDataUpdate").modal();
        console.log(id);
       $http({
           method:'POST',
           url:'./phpWebServices/movieUpdateDetails.php',
           cache: false,
           async: true,
           dataType:'json',
           data:{"titile": $scope.updateData.titile,"release_date":$scope.updateData.release_date,"rating":$scope.updateData.rating,"popularity":$scope.updateData.popularity,"runtime":$scope.updateData.runtime,"overview":$scope.updateData.overview}
           //data:$scope.registerData
       }).then(function (response){
            console.log(response.data);
            $scope.updateData = null;
            $scope.userLoginMeg = false;
            $scope.movieFetchData();
       }).catch(function(e){
            alert("Some error occurred due to which feed could not be unliked, please try again.");
        });
    }

    
$scope.deleteData = function(id){
    console.log(id);
  if(confirm("Are you sure you want to remove it?"))
  {
   $http({
    method:"POST",
    url:"./phpWebServices/movieDataDelete.php",
    data:{'id':id, 'action':'Delete'}
   }).then(function(response){
       $scope.movieDataDelete = response.data;
       console.log($scope.movieDataDelete);
    $scope.movieFetchData();
   });
  }
 };


});
