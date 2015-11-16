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
    $scope.options = {
      availableColors: [
        {id: "1", name: "Red"},
        {id: "2", name: "Blue"},
        {id: "3", name: "White"},
        {id: "4", name: "Black"}
      ]
    };
  });
