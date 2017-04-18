projectTrainingApp.controller('CheckoutCtrl', function ($scope,Workout, $sce) {
	$scope.eMenu = Workout.getMyWorkout();
	for(var i in $scope.eMenu){
		//$sce needed to get rid of them <p> tags in the string
		$scope.eMenu[i].description = $sce.trustAsHtml($scope.eMenu[i].description);
	}
});

