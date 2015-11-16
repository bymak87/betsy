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
    $scope.options = {
      availableColors: [
        {id: "1", name: "Red"},
        {id: "2", name: "Blue"},
        {id: "3", name: "White"},
        {id: "4", name: "Black"}
      ],
      availableFonts: [
        {id: "1", name: "Arial"},
        {id: "2", name: "Times New Roman"},
        {id: "3", name: "Tahoma"}
      ]
    };
  });
