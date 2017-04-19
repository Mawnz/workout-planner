projectTrainingApp.controller('SearchCtrl', function ($scope, Workout, $mdDialog, $mdToast, $sce) {
  
  var init = function(){
    Workout.setDisplayExer(Workout.getExercises());
    $scope.exercises = Workout.getDisplayExer();
  }
  init();
/*
  //setting up categories and musclegroups
  Workout.getEquipment.get({}, function(data){
    Workout.equipment = data.results;
  });
  Workout.getCategories.get({}, function(data){
    Workout.categories = data.results;
  });
  //end of setting up
*/
/*
//init exercises that will be used in application
  $scope.init = function () {
    Workout.emptyList();
    Workout.ExerciseSearch.get({language : 2, status : 2, limit : 1000}, function(data){
      Workout.addExerciseToList(data.results);
      images();
      //fetchImage(0, Workout.getExercises());
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
      Workout.setDisplayExer(Workout.getExercises());
      $scope.exercises = Workout.getDisplayExer();
      $scope.show = true;
    });
  }
 */
  //function for adding exercise to the menu
  $scope.addExercise = function(id){
    //here the exercise is added
    Workout.addToMyList(id);
    //show notification that the exercise has been added
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
    //$sce needed to get rid of them <p> tags in the string
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
