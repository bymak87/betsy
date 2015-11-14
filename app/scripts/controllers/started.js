'use strict';

/**
 * @ngdoc function
 * @name keystokeApp.controller:StartedCtrl
 * @description
 * # StartedCtrl
 * Controller of the keystokeApp
 */
angular.module('keystokeApp')
  .controller('StartedCtrl', function ($scope, Data) {
    $scope.data = Data.data;

    $scope.updateData = function (data){
      Data.update(data);
    }
  });
