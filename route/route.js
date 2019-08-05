
myApp.config(routerConfig)
function routerConfig($stateProvider, $urlRouterProvider,$locationProvider) {
   $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: './partials/home.html',
            controller : 'mainController'
        })
        .state('popular', {
            url:'/popular',
            templateUrl : './partials/popular.html',
            controller : 'popularController'
        })
        .state('topRated', {
            url:'/topRated',
            templateUrl : './partials/top-rated.html',
            controller : 'topRatedCtrl'
        })
        .state('upcoming', {
            url:'/upcoming',
            templateUrl : './partials/upcoming.html',
            controller : 'upcomingController'
        })
        .state('detail', {
            url:'/movie/:id',
            templateUrl : './partials/single-muvi.html',
            controller : 'movieDetialController'
        })
        .state('hollywood', {
                url:'/hollywood',
                templateUrl : './partials/single-muvi.html',
                controller : 'movieDetialController'
            })
        .state('bollywood', {
                url:'/bollywood',
                templateUrl : './partials/single-muvi.html',
                controller : 'movieDetialController'
            })
        .state('animation', {
                url:'/animation',
                templateUrl : './partials/single-muvi.html',
                controller : 'movieDetialController'
            })
        .state('southMovie', {
                url:'/southMovie',
                templateUrl : './partials/single-muvi.html',
                controller : 'movieDetialController'
            })
        .state('search', {
            url:'/search/:movieName',
            template : '<search-Result></search-Result>',
            controller : 'searchListController'
        })
        .state('contact', {
            url:'/contactUs',
            templateUrl : './partials/contact.html',
            controller : 'mainController'
        })
//        .state('login', {
//            url:'/login',
//            templateUrl : './partials/login.html',
//            controller : 'loginController'
//        })
        .state('userdashboad', {
            url:'/dashboard',
            templateUrl : './partials/dashboard.html',
            controller : 'dashboardCtrl'
        })
        .state('userProfile', {
            url:'/dashboard',
            templateUrl : './partials/dashboard.html',
            controller : 'dashboardCtrl'
        })
        .state('404', {
            url:'/asd',
            templateUrl : './partials/404.html',
            controller : 'mainController'
        });
	
	//$locationProvider.html5Mode(true);
	$locationProvider.html5Mode({
    enabled:true,
        requiredBase:false
    });
	
};

//
//// configure our routes
//    myApp.config(function($routeProvider,$locationProvider) {
//        $routeProvider
//
//            // route for the home page
//            .when('/home', {
//                templateUrl : './partials/home.html',
//                controller  : 'mainController'
//            })
//
//            // route for the about page
//            .when('/popular', {
//                templateUrl : 'pages/about.html',
//                controller  : 'aboutController'
//            })
//
//            // route for the contact page
//            .when('/contact', {
//                templateUrl : 'pages/contact.html',
//                controller  : 'contactController'
//            })
//			.otherwise('/home', {
//                templateUrl : 'pages/contact.html',
//                controller  : 'contactController'
//            });
//		$locationProvider.html5Mode(true);
//    });