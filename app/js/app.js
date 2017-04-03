var projectTrainingApp = angular.module('projectTraining', ['ngRoute','ngResource', 'ngCookies']);

projectTrainingApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/home.html'
      }).
      when('/search', {
        templateUrl: 'partials/search.html',
        controller: 'SearchCtrl'  
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);
