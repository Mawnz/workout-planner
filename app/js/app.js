var projectTrainingApp = angular.module('projectTraining', ['ngMaterial', 'ngRoute','ngResource', 'ngCookies']);

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
