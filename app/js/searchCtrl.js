projectTrainingApp.controller('SearchCtrl', ['$scope', function($scope,Workout) {

  var query = '145';

  $scope.search = function(){
    console.log('test');
    Workout.ExerciseSearch.get({query : query}, function(data){

    });
  }

}]);
