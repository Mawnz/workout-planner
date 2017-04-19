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

.controller('RightCtrl', function ($scope, Workout, $timeout, $mdSidenav, $log, $mdDialog) {
    //getting some of them variables that are used for the filters

    //this is set to be not readonly
    $scope.readonly = false;

    $scope.onChange = function(cbState) {
      $scope.message = cbState;
    };

    $scope.search = function (cat,eq) {
      if(cat == 0){cat = null;}
      if(eq == 0){eq = null;}
      Workout.filterExercises(cat,eq);

      //code to do search stuff goes here
      // $mdSidenav('right').close();
    };
})

.controller('RightClose', function ($scope, $mdSidenav) {
    $scope.close = function () {
      $mdSidenav('right').close()
    };
});
