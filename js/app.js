var app = angular.module('myApp', ['ngRoute']);

app.filter('to_trusted', ['$sce', function($sce){
    return function(text) {
        return $sce.trustAsHtml(text);
    };
}]);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
 $routeProvider
	  	.when('/', {
	  		controller: 'MainController',
	    	templateUrl: 'views/home.html'
	  	})
	  	.when('/blog', {
	  		controller: 'BlogController',
	    	templateUrl: 'views/blog.html'
	  	})
	  	.otherwise({
	  		redirectTo: '/'
	  	});
}]); 


