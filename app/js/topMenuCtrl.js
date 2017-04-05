projectTrainingApp.controller('TopMenuCtrl', function ($scope, $location) {
	$scope.$on('$routeChangeSuccess', function(){
	    $scope.currentNavItem = $location.$$path;
	 });
  	$scope.currentNavItem = "home";
});
