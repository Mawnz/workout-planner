projectTrainingApp.controller('SearchCtrl', function ($scope, Workout, $mdDialog, $mdToast, $sce) {
<<<<<<< HEAD

  $scope.exercises = Workout.getDisplayExer();
  $scope.show = true;

  //setting up categories and musclegroups
  Workout.getEquipment.get({}, function(data){
    Workout.equipment = data.results;
  });
  Workout.getCategories.get({}, function(data){
    Workout.categories = data.results;
  });
  //end of setting up

//init exercises that will be used in application
  var init = function () {
    // Workout.emptyList();

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
      // Workout.addToDisplayExer(Workout.getExercises());
      // $scope.exercises = Workout.getDisplayExer();
      $scope.show = true;
    });
  }

  // and fire it after definition
  init();


  //function for adding exercise to the menu
  $scope.addExercise = function(id){
    Workout.addToMyList(id);
    //show notification that the exercise has been added
    addedToast();
=======
  $scope.show = Workout.getShow();
  $scope.exercises = Workout.getDisplayExer();
 
/*
  $scope.$watchCollection('Workout', function(){
    console.log("model updated");
    $scope.show = Workout.getShow();
    $scope.exercises = Workout.getDisplayExer();
  });
*/
  //function for adding exercise to the menu
  $scope.addExercise = function(id){
    //first check if it already exists in the workout
    if(Workout.getExerciseFromMyList(id).length == 0){
      //here the exercise is added
      Workout.addToMyList(id);
      //show notification that the exercise has been added
      addedToast("Exercise added!");
    }else{
      //notification that you already have said exercise in your menu
      addedToast("You already have that exercise in your menu!");
    }
>>>>>>> 7f5ff0c2bdbf2672b48fe8ee2e1feefb8f755719
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

<<<<<<< HEAD
  $scope.openInfo = function(event, id){

=======
  //Section for opening up additional information regarding chosen exercise
  $scope.openInfo = function(event, id){
    
>>>>>>> 7f5ff0c2bdbf2672b48fe8ee2e1feefb8f755719
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
<<<<<<< HEAD
=======
    //$sce needed to get rid of them <p> tags in the string
>>>>>>> 7f5ff0c2bdbf2672b48fe8ee2e1feefb8f755719
    $scope.description = $sce.trustAsHtml($scope.e.description);
    $scope.hide = function(){
      $mdDialog.hide();
    }
    //this closes down the dialog window
    $scope.cancel = function(){
      $mdDialog.cancel();
    }
  };
});
