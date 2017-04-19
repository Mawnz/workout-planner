projectTrainingApp.controller('CheckoutCtrl', function ($scope,Workout, $sce) {
	$scope.eMenu = Workout.getMyWorkout();
});

