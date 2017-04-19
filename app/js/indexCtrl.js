projectTrainingApp.controller('IndexCtrl', function ($scope, Workout, Scopes) {
  //store this scope so we can use the $scope.show variable in the results.html
  Scopes.store('IndexCtrl', $scope);
  var images = [];
  $scope.show = false;
  $scope.exercise;

//init exercises that will be used in application
  $scope.init = function () {
    Workout.emptyList();
    Workout.ExerciseSearch.get({language : 2, status : 2, limit : 1000}, function(data){
      Workout.addExerciseToList(data.results);
      images();
      return;
    }, function(){
      console.log("something went wrong");
    });
  };

  var images = function(){
    Workout.ExerciseImages.get({ismain : "True", limit : 1000}, function(data){
      for (var i in data.results){
        Workout.addImageToList(data.results[i]);
      }

      $scope.show = true;
    });
  }
});
