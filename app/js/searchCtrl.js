projectTrainingApp.controller('SearchCtrl', function ($scope, Workout, $mdDialog, $mdToast, $interval) {
  $scope.show = Workout.getShow(); 
  //$scope.showError = Workout.getShowMsg();
  //very stupid and inefficient but alas we found no other way of doing it before deadline
  $interval(function(){
    $scope.exercises = Workout.getDisplayExer();
    $scope.show = Workout.getShow();    
    $scope.errorMsg = Workout.getMessage();
    $scope.showError = Workout.getShowMsg();
  });



  //function for adding exercise to the menu
  $scope.addExercise = function(id){
    //first check if it already exists in the workout
    if(Workout.getExerciseFromMyList(id).length == 0){
      //here the exercise is added
      Workout.addToMyList(id, true);

      //show notification that the exercise has been added
      addedToast("Exercise added!");
    }else{
      //notification that you already have said exercise in your menu
      addedToast("You already have that exercise in your menu!");
    }
  }

  function addedToast(message){
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
        .textContent(message)
        .position("top")
        .hideDelay(500)
    );
  }

  //Section for opening up additional information regarding chosen exercise
  $scope.openInfo = function(event, id){
    $mdDialog.show({
      controller : DialogController,
      templateUrl : 'partials/resultMoreInfo.html',
      parent : angular.element(document.body),
      targetEvent : event,
      clickOutsideToClose : true,
      locals : {id : id}
    });
  }
  //this is the controller for the dialog window above
  function DialogController($scope, $mdDialog, id){
    $scope.e = Workout.getExercise(id);

    $scope.hide = function(){
      $mdDialog.hide();
    }
    //this closes down the dialog window
    $scope.cancel = function(){
      $mdDialog.cancel();
    }
  };
});
