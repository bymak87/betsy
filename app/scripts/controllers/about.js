'use strict';

/**
 * @ngdoc function
 * @name keystokeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the keystokeApp
 */
angular.module('keystokeApp')
  .controller('AboutCtrl', function ($scope, Data) {
    $scope.data = Data.data;
  });
