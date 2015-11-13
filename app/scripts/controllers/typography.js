'use strict';

/**
 * @ngdoc function
 * @name keystokeApp.controller:TypographyCtrl
 * @description
 * # TypographyCtrl
 * Controller of the keystokeApp
 */
angular.module('keystokeApp')
  .controller('TypographyCtrl', function ($scope, Data) {
    $scope.data = Data.data;
  });
