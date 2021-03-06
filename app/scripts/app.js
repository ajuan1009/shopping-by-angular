'use strict';

/**
 * @ngdoc overview
 * @name shoppingByAngularApp
 * @description
 * # shoppingByAngularApp
 *
 * Main module of the application.
 */
angular
  .module('shoppingByAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
