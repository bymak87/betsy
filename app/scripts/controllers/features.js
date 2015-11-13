'use strict';

/**
 * @ngdoc function
 * @name keystokeApp.controller:FeaturesCtrl
 * @description
 * # FeaturesCtrl
 * Controller of the keystokeApp
 */
angular.module('keystokeApp')
  .controller('FeaturesCtrl', function ($scope, Data) {
    $scope.data = Data.data;
  });
