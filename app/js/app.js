<<<<<<< HEAD
var projectTrainingApp = angular.module('projectTraining', ['ngRoute','ngResource']);
=======
var projectTrainingApp = angular.module('projectTraining', ['ngMaterial', 'ngRoute','ngResource', 'ngCookies']);
>>>>>>> origin/master

projectTrainingApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/home.html'
      }).
<<<<<<< HEAD
      when('/search', {
        templateUrl: 'partials/search.html',
        controller: 'SearchCtrl'
=======
      when('/app', {
        templateUrl: 'partials/appMain.html'
      }).
      when('/app/checkout', {
        templateUrl: 'partials/checkout.html'
      }).
      when('/about', {
        templateUrl: 'partials/about.html'
>>>>>>> origin/master
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);
