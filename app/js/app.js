var projectTrainingApp = angular.module('projectTraining', ['ngMaterial', 'ngRoute','ngResource', 'ngCookies', 'firebase']);

      // Initialize Firebase
      var config = {
        apiKey: "AIzaSyAuAk_mndKfstj3YpQZFK6N5YwcP-jfRfI",
        authDomain: "workoutplanner-50643.firebaseapp.com",
        databaseURL: "https://workoutplanner-50643.firebaseio.com",
        projectId: "workoutplanner-50643",
        storageBucket: "workoutplanner-50643.appspot.com",
        messagingSenderId: "237123581298"
      };
      firebase.initializeApp(config);


projectTrainingApp.controller('serverCtrl', function($firebaseObject){

});


projectTrainingApp.config(['$routeProvider',
  function($routeProvider) {  
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/home.html'
      }).
      when('/app', {
        templateUrl: 'partials/appMain.html',
        controller: 'NavbarCtrl'
      }).
      when('/app/checkout', {
        templateUrl: 'partials/checkout.html',
        controller: "CheckoutCtrl"
      }).
      when('/app/workout', {
        templateUrl: 'partials/workoutView.html',
        controller: "WorkoutCtrl"
      }).
      when('/about', {
        templateUrl: 'partials/about.html'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);


//to trust html tags in descriptions
projectTrainingApp.filter('trusted', ['$sce', function($sce){
  return function(html) {
    return $sce.trustAsHtml(html);
  };
}]);

/*
//need this to have access to scopes over different controllers, only used for one thing at the moment
projectTrainingApp.factory('Scopes', function($rootScope){
  var mem = {};

  return {
    store: function(key, value){
      mem[key] = value;
    },
    get: function(key){
      return mem[key];
    }
  };
});
*/
//to prevent reloading the result-view
/*
projectTrainingApp.run(['$route', '$rootScope', '$location', function($route, $rootScope, $location){
  var original = $location.path;
  $location.path = function(path, reload){
    if (reload === false){
      var lastRoute = $route.current;
      var un  = $rootScope.$on('$locationChangeSuccess', function(){
        $route.current = lastRoute;
        un();
      });
    }
    return original.apply($location, [path]);
  }
}]);
*/
