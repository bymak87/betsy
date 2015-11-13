'use strict';

/**
 * @ngdoc function
 * @name keystokeApp.controller:StylingCtrl
 * @description
 * # StylingCtrl
 * Controller of the keystokeApp
 */
angular.module('keystokeApp')
  .controller('StylingCtrl', function ($scope, Data) {
    $scope.data = Data.data;
  });
