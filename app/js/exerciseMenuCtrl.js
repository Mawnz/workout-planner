projectTrainingApp.controller('ExerciseMenuCtrl', function ($scope, Workout) {

  $scope.myExercises = Workout.getMyWorkout();

});
