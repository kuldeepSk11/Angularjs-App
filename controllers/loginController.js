myApp.controller('loginController', function($scope,$location, $http,userService) {
    // create a blank object to handle form data.
    $scope.registerData={"name":"","phone":"","email":"","password":""};
    $scope.userData={"name":"","phone":""};
    
    $scope.erorr = $scope.erorr;
    
    $scope.userLoginForm = true;
    $scope.userLoginMeg = false;
    
    $scope.closeMess =function(){
        $scope.userLoginMeg = false;
    }

    $scope.loginOpenForm = function(){
        $scope.modalbox = $("#join_login").modal();
    };  
    
    $scope.goToRegister = function(){
        $scope.userLoginForm = false;
        $scope.userRegisterForm = true;
        $scope.userForgotPassword = false;
         $scope.userLoginMeg = false; 
    }
    
    $scope.goTologin = function(){
        $scope.userLoginForm = true;
        $scope.userRegisterForm = false;
        $scope.userForgotPassword = false;
         $scope.userLoginMeg = false;  
    }
    
    $scope.goToForgotPassword = function(){
        $scope.userLoginForm = false;
        $scope.userRegisterForm = false;
        $scope.userForgotPassword = true;
         $scope.userLoginMeg = false; 
    }
    
    
    $scope.userLoginSubmit = function(){
        var email = $scope.email;
        var password = $scope.password;
        
        $scope.validatereturn  = $scope.validatForm($scope.userData);
        console.log($scope.validatereturn);
        console.log($scope.userData);
        
       $http({
           method:'post',
           url:'userLoginData.php',
           header:{'Content-Type':'application/x-www-form-urlencoded'},
           data:"email"+email+"&password"+password
       }).then(function(data){
           console.log(data);
           $scope.userData = null;
           //userService.userLoggedIn(); 
           $location.path('/home');
//            if(data.data.status == 'LoggidIn'){
//                $location.path('/home');
//            }else{
//                alert(' Please login');
//            }
//           if(data.error != ''){
//               $scope.alertMess= true;
//               $scope.alertClass = 'alert-danger';
//               $scope.alertMessage = data.error;
//               
//           }else{
//               $location.path('/home');
//           }
       });
    }
   
    $scope.validatForm = function(data){
      console.log(data);
        //alert("hi");  
        if(data.name==""){
            alert("Please Enter name");
            return false;
        }
        if(data.phone==""){
            alert("Please Enter phone");
            return false;
        }
        if(data.email==""){
            alert("Please Enter E-mail");
            return false;
        }
        if(data.password==""){
            alert("Please Enter Password");
            return false;
        }
        return false;
    };
    
    $scope.userRegisterSubmit = function(){
        $scope.validatereturn  = $scope.validatForm($scope.registerData);
        console.log($scope.validatereturn);
        console.log($scope.registerData);
       $http({
           method:'POST',
           url:'userRegisterData.php',
           cache: false,
           async: true,
           dataType:'json',
           data:{"name": $scope.registerData.name,"phone":$scope.registerData.phone,"email":$scope.registerData.email,"password":$scope.registerData.password}
           //data:$scope.registerData
       }).then(function (data){
            console.log(data);
            $scope.registerData = null;
            $scope.userLoginMeg = false;
           if(data.error != ''){
               $scope.alertClass =   'alert-danger';
               $scope.alertMessage = data.error;
               $location.path('/home');
           }else{
               $scope.alertClass = 'alert-success';
               $scope.alertMessage = data.message;
               $scope.registerData = {};
           }
       }).catch(function(e){
            alert("Some error occurred due to which feed could not be unliked, please try again.");
        });
    }
});