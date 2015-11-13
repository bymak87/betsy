'use strict';

/**
 * @ngdoc function
 * @name keystokeApp.controller:EmailCtrl
 * @description
 * # EmailCtrl
 * Controller of the keystokeApp
 */
angular.module('keystokeApp')
  .controller('EmailCtrl', function ($scope, Data) {
    $scope.data = Data.data;
  });
