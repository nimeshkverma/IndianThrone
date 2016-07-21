angular.module('indianThroneApp.routes').
config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/view1', { templateUrl: 'app/components/view1/view1.html' });
	$routeProvider.when('/view2', { templateUrl: 'app/components/view2/view2.html' });
	$routeProvider.otherwise({ redirectTo: '/view2' });
}]);
