'use strict';

/**
 * @ngdoc overview
 * @name keystokeApp
 * @description
 * # keystokeApp
 *
 * Main module of the application.
 */
angular
  .module('keystokeApp', [
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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/started', {
        templateUrl: 'views/started.html',
        controller: 'StartedCtrl',
        controllerAs: 'started'
      })
      .when('/features', {
        templateUrl: 'views/features.html',
        controller: 'FeaturesCtrl',
        controllerAs: 'feautures'
      })
      .when('/typography', {
        templateUrl: 'views/typography.html',
        controller: 'TypographyCtrl',
        controllerAs: 'typography'
      })
      .when('/styling', {
        templateUrl: 'views/styling.html',
        controller: 'StylingCtrl',
        controllerAs: 'styling'
      })
      .when('/email', {
        templateUrl: 'views/email.html',
        controller: 'EmailCtrl',
        controllerAs: 'email'
      })
      .when('/preview', {
        templateUrl: 'views/preview.html',
        controller: 'PreviewCtrl',
        controllerAs: 'preview'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
