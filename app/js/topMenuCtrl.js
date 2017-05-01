projectTrainingApp.controller('TopMenuCtrl', function ($scope, $location, $rootScope, $firebaseObject) {
	$scope.$on('$routeChangeSuccess', function(){
	    $scope.currentNavItem = $location.$$path;
	 });
  	$scope.currentNavItem = "home";

  	//some user info

	const rootRef = firebase.database().ref().child('workouts');
	$scope.data = $firebaseObject(rootRef);

	$scope.add = function(one, two){
		//firebase.database().ref('users/' + usrID + '/workouts/' + one).set(two);
		
	}
});
