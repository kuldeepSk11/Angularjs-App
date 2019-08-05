
myApp.directive('searchResult', function() {
    return {
        templateUrl: 'partials/search-list.html',
		restrict:'EA',
    };
});

myApp.directive('loginModal', function() {
    return {
        restrict:'EA',    
        templateUrl: 'partials/login.html',
    };
});