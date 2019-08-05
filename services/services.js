
myApp.service('userService', function(){
            
    var username;
    var loggedIn = false;
            
    this.setname =function(name){
        username= name;
    };
    this.getname =function(){
      return username;  
    };
    
     this.setId =function(userId){
        loginId = userId;
    };
    this.getId =function(){
      return loginId;  
    };
    
    this.isUserLoggedIn = function(){
      return  loggedIn;
    };
    this.userLoggedIn = function(){
      loggedIn = true;   
    };
    
});