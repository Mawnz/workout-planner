projectTrainingApp.controller('SearchCtrl', function ($scope,Workout, $mdDialog) {
  $scope.exercises = [];
  $scope.images = [];
  $scope.show = true;

  $scope.search = function(){
    //first get all images
    $scope.show = false;
    Workout.ExerciseImages.get({}, function(data){
      console.log(data.results);
      $scope.images = data.results;
      $scope.show = true;
      return;
    });
    /*
    //then get all exercises
    Workout.ExerciseSearch.get({status : '2', language : '2', limit : "1000"}, function(data){
      $scope.exercises = data.results;
      console.log($scope.exercises);
      return;

    }, function(){
      $scope.status = "There was an unexpected error";
    });*/
  }

  $scope.openInfo = function(event){
    console.log("you opened");

    $mdDialog.show({
      controller : DialogController,
      templateUrl : 'partials/resultMoreInfo.html',
      parent : angular.element(document.body),
      targetEvent : event,
      clickOutsideToClose : true
    });
  }

  function DialogController($scope, $mdDialog){
    $scope.hide = function(){
      $mdDialog.hide();
    }

    $scope.cancel = function(){
      $mdDialog.cancel();
    }
  };
});

