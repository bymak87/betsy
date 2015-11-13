'use strict';

/**
 * @ngdoc function
 * @name keystokeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the keystokeApp
 */
angular.module('keystokeApp')
  .controller('MainCtrl', function ($scope, $location) {

    $scope.isActive = function(viewLocation) {
      return viewLocation === $location.path();
    };
  });
