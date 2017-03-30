projectTrainingApp.controller('SearchCtrl', function ($scope,Workout) {

  $scope.greeting = 'Hej Hej';

  $scope.search = function(){
    Workout.ExerciseSearch.get(function(data){
      console.log(data);

    });
  };

});
