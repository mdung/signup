'use strict';

app.controller('signUpCtrl', ['$scope', 'signUpService', function ($scope,signUpService) {
	$scope.signUp=function(data){ 
		signUpService.signUp(data,$scope);
	};
}]);