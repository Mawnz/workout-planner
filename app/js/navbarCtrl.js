projectTrainingApp.controller('NavbarCtrl', function ($scope, Workout, $timeout, $mdSidenav, $log) {
    $scope.toggleLeft = buildDelayedToggler('left');
    $scope.toggleRight = buildToggler('right');
    $scope.isOpenRight = function(){
      return $mdSidenav('right').isOpen();
    };
    $scope.isOpenLeft = function(){
      return $mdSidenav('left').isOpen();
    };

    //Checkout function
    $scope.checkout = function(){

    }


    /**
     * Supplies a function that will continue to operate until the
     * time is up.
     */
    function debounce(func, wait, context) {
      var timer;

      return function debounced() {
        var context = $scope,
            args = Array.prototype.slice.call(arguments);
        $timeout.cancel(timer);
        timer = $timeout(function() {
          timer = undefined;
          func.apply(context, args);
        }, wait || 10);
      };
    }

    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildDelayedToggler(navID) {
      return debounce(function() {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            console.log("toggle " + navID + " is done");
          });
      }, 200);
    }

    function buildToggler(navID) {
      return function() {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            console.log("toggle " + navID + " is done");
          });
      };
    }
  })
.controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav('left').close()
        .then(function () {
          console.log("close LEFT is done");
        });

    };
  })
.controller('RightCtrl', function ($scope, Workout, $timeout, $mdSidenav, $log) {
    //getting some of them variables that are used for the filters
    $scope.str = 1;
    $scope.flex = 1;
    $scope.cardio = 1;
    //this will contain a list of queries so you can search for multiple queries getting more results
    $scope.searchQuery = [];

    //this is set to be not readonly
    $scope.readonly = false;

    //code to do search stuff goes here
    $scope.search = function(searchQuery){


      $scope.show = false;
      Workout.ExerciseSearch.get({category : searchQuery}, function(data){
        Workout.addToSearched(data.results);
        console.log(data.results);
        $scope.exercises = data.results;
        console.log($scope.exercises[6].name);
        Workout.getExerciseId


        $scope.show = true;
      });

      $mdSidenav('right').close();
    };
})
.controller('RightClose', function ($scope, $mdSidenav) {
    $scope.close = function () {
      $mdSidenav('right').close()
    };
});
