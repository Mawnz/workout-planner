projectTrainingApp.controller('SearchCtrl', function ($scope, Workout, $mdDialog, $mdToast) {
  $scope.exercises = [];
  $scope.images = [];
  $scope.show = true;
  $scope.exercise;

  //setting up categories and musclegroups
  Workout.getEquipment.get({}, function(data){
    Workout.equipment = data.results;
  });
  Workout.getCategories.get({}, function(data){
    Workout.categories = data.results;
  });
  //end of setting up

  $scope.search = function(){
    //first get all images
    $scope.show = false;
    Workout.ExerciseImages.get({}, function(data){
      $scope.images = data.results;
      return;
    });

    Workout.ExerciseSearch.get({}, function(data){
      $scope.exercises = data.results;
      $scope.show = true;
      for(var i in data.results){
        //first get the string of both what categories and equipment, muscles etc etc instead of numbers
        var ex = {
          "id" : data.results[i].id,
          "name" : data.results[i].name,
          "description" : data.results[i].description,
          "category" : "abs",
          "equipment" : "body"
        }
        Workout.exercises.push(ex);
      }
      return;
    });


  }
  //just calls the search function, should maybe be renamed?
  $scope.search();

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

  //function for adding exercise to the menu
  $scope.addExercise = function(event){
    //here the exercise is added

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



    $scope.cancel = function(){
      $mdDialog.cancel();
    }
  };
});
