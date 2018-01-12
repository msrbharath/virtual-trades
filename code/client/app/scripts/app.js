'use strict';

/**
 * @ngdoc overview
 * @name archeTradesApp
 * @description
 * # archeTradesApp
 *
 * Main module of the application.
 */
angular
  .module('archeTradesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/signup', {
        templateUrl: 'views/SignUp.html',
        controller: 'SignUpCtrl',
        controllerAs: 'signctrl'
      })
      .when('/products', {
        templateUrl: 'views/products.html',
        controller: 'productsCtrl',
        controllerAs: 'productsctrl'
      })
      .when('/signin', {
        templateUrl: 'views/signin.html',
        controller: 'signInCtrl',
        controllerAs: 'signInCtrl'
      })

      .when('/furniture', {
        templateUrl: 'views/furniture.html',
        controller: 'furnitureCtrl',
        controllerAs: 'fctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
