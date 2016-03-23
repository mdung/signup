'use strict';

var app=  angular.module('signUp', ['ngMaterial','ngRoute']);

app.controller('inputController', inputController);

app.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'signUpCtrl'});
	  //$routeProvider.otherwise({redirectTo: '/home'});
}]);
	


app.config(function($httpProvider) { 
    //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;

    //Remove the header used to identify ajax call  that would prevent CORS from working
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});
	
	
 function inputController ($scope) {
   
 }                 


