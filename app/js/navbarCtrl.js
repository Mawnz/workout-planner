projectTrainingApp.controller('NavbarCtrl', function ($scope, Workout, $timeout, $mdSidenav, $log) {
    $scope.toggleLeft = buildDelayedToggler('left');
    $scope.toggleRight = buildToggler('right');
    $scope.isOpenRight = function(){
      return $mdSidenav('right').isOpen();
    };
    $scope.isOpenLeft = function(){
      return $mdSidenav('left').isOpen();
    };




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
.controller('LeftCtrl', function (Workout, $scope, $timeout, $mdSidenav, $log, $element) {
    $scope.myExercises = Workout.getMyWorkout();
    $scope.show = false;
    $scope.s = 1;
    $scope.r = 1;

    $scope.close = function () {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav('left').close()
        .then(function () {
          console.log("close LEFT is done");
        });
    };

    $scope.reps = function(myExercise, value){
      Workout.setReps(myExercise, value);
    }

    $scope.set = function(myExercise, value){
      Workout.setSet(myExercise, value);
    }

    $scope.removeExercise = function(id){
      Workout.removeFromMyList(id);
    }
    //very cool function to flip cards to show more cool info
    $scope.flip = function($event, str){
      //console.log(this);
      $event.preventDefault();
      if(str == "back"){
        var front = $($event.currentTarget).closest("#papa").find("#front");
        var back = $($event.currentTarget).closest("#papa").find("#back");

        //console.log("switching to front");     
        front.attr("class", "flip flipFront");
        back.attr("class", "flip");
        //also set the variable
        front.attr("isUp", "true");
        back.attr("isUp", "false"); 
      }else{
        var allFront = $("#menuList").find(".flipFront");
        allFront.each(function(){
          if($(this).attr("isUp") == "false"){ 
            var front = $(this);
            var back = $($(this).siblings()[0]);
            front.attr("class", "flip");
            back.attr("class", "flip");
            //also set the variable
            front.attr("isUp", "true");
            back.attr("isUp", "false"); 
          }
        });
        //phew
        var front = $($event.currentTarget).closest("#papa").find("#front");
        var back = $($event.currentTarget).closest("#papa").find("#back");
       // console.log("switching to back");
        front.attr("class", "flip flipFront flip-back");
        back.attr("class", "flip flip-front");
        //also set the variable
        front.attr("isUp", "false");
        back.attr("isUp", "true");
      }     
    }

  })
.controller('RightCtrl', function ($scope, Workout, $timeout, $mdSidenav, $log, $route) {
    //getting some of them variables that are used for the filters
    //this will contain a list of queries so you can search for multiple queries getting more results
    $scope.searchQuery = [];
    $scope.category = 0;
    $scope.equipment = 0;
    $scope.images = false;
    //this is set to be not readonly
    $scope.readonly = false;
    $scope.search = function () {
      Workout.filterExercises($scope.category, $scope.equipment);
      //$route.reload();
    };

})
.controller('RightClose', function ($scope, $mdSidenav) {
    $scope.close = function () {
      $mdSidenav('right').close()
    };
});