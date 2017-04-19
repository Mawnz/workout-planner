projectTrainingApp.controller('ExerciseMenuCtrl', function ($scope, Workout) {

  $scope.myExercises = Workout.getMyWorkout();

  $scope.removeExercise = function(id){
    Workout.removeFromMyList(id);
  }

});
