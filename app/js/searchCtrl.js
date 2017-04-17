projectTrainingApp.controller('SearchCtrl', function ($scope, Workout, $mdDialog, $mdToast) {
  $scope.exercises = [];
  $scope.images = [];
  $scope.show = true;

  $scope.search = function(){

  //first get all images
  $scope.show = false;
  Workout.ExerciseImages.get({}, function(data){
    // console.log(data.results);
    $scope.images = data.results;
    $scope.show = true;
    return;
  });
}

    //first get all images
    $scope.show = false;
    $scope.test = 'test';
    Workout.ExerciseSearch.get({}, function(data){
      //just an example for ng-repeat, the scope exercises is found as a variable for the ng-repeat
      $scope.exercises = data.results;
      $scope.test = 'test';
      $scope.show = true;
    });


  $scope.search();

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

  $scope.addExercise = function(event){
    addedToast();

  }

  function addedToast(){
    //position of toast except for on small screens where it's always bottom
    var pos = {
      bottom : false,
      top : true,
      left : true,
      right : false
    };
    var pin = angular.extend({}, pos);
    $mdToast.show(
      $mdToast.simple()
        .textContent("Exercise added!")
        .position("top")
        .hideDelay(500)
    );
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
