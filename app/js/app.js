var projectTrainingApp = angular.module('projectTraining', ['ngMaterial', 'ngRoute','ngResource', 'ngCookies']);

projectTrainingApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/home.html'
      }).
      when('/app', {
        templateUrl: 'partials/appMain.html'
      }).
      when('/about', {
        templateUrl: 'partials/about.html'
      }).
      when('/search', {
        templateUrl: 'partials/search.html',
        controller: 'SearchCtrl'  
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);
