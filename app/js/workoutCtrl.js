projectTrainingApp.controller('WorkoutCtrl', function ($scope,Workout, $sce) {
	$scope.myWorkout = Workout.getMyWorkout();
});

