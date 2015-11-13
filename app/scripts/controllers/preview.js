'use strict';

/**
 * @ngdoc function
 * @name keystokeApp.controller:PreviewCtrl
 * @description
 * # PreviewCtrl
 * Controller of the keystokeApp
 */
angular.module('keystokeApp')
  .controller('PreviewCtrl', function ($scope, Data) {
    $scope.data = Data.data;
  });
