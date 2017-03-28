projectTrainingApp.controller('SearchCtrl', function ($scope,Workout) {
  $scope.show = true;
  $scope.show = false;
  //searching for recipes by filter and type
  $scope.search = function(query, type){
  	$scope.status = "Searching...";
    $scope.show = true;
  	Workout.ExerciseSearch.get({query : query, type : type}, function(data){
      if(data.results.length == 0){
        $scope.status = "Sorry you're search returned no result!";
      }else{
        $scope.show = false;
      }

  	}, function(data){
  		$scope.status = "There was an unexpected error";
  	});
  }
});
