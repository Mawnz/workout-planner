projectTrainingApp.controller('IndexCtrl', function ($scope, Workout) {
  //store this scope so we can use the $scope.show variable in the results.html
  //Scopes.store('IndexCtrl', $scope);
  var images = [];
  Workout.setShow(false);


//init exercises that will be used in application
  $scope.init = function () {
    //first we get all the exercises that is later used in the app, searching, filtering etc etc.
    //We get all the exercises because there weren't that many exercises to begin with so
    //we opted for a little longer waiting time at the boot-up for the app and quicker filtering
    Workout.emptyList();
    Workout.ExerciseSearch.get({language : 2, status : 2, limit : 1000}, function(data){
      Workout.addExerciseToList(data.results);
      images();
      return;
    }, function(){
      //not really working m8 but we're only making one call when you load the page so
      Workout.setMessage("Error getting data, check your Internet connection!");
      Workout.setShow(false);
      console.log("something went wrong");
    });
  };

  var images = function(){
    Workout.ExerciseImages.get({ismain : "True", limit : 1000}, function(data){
      for (var i in data.results){
        Workout.addImageToList(data.results[i]);
      }
      Workout.setDisplayExer(Workout.getExercises());
      Workout.setShow(true);

      var catFilter = Workout.getCatFilter();
      var eqFilter = Workout.getEqFilter();
      Workout.filterExercises(catFilter, eqFilter);

      //set up myWorkout
      var myWorkoutIds = Workout.getMyCookieWorkout();
      for(var i in myWorkoutIds){
        Workout.addToMyList(myWorkoutIds[i], false)
      }

      //Workout.setDisplayExer(Workout.getExercises());
      //filters the items based on whats in the cookie for the used, nothing? Good then all is displayed
      Workout.filterExercises(Workout.getCatFilter(), Workout.getEqFilter());

      Workout.setShow(true);

    }, function(data){
      //not really working m8 but we're only making one call when you load the page so
      Workout.setMessage("Error getting data, check your Internet connection!");
      Workout.setShow(false);
      console.log("something went wrong");
    });
  }
});
