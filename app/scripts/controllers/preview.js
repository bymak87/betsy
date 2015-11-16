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
    $scope.options = {
      availableColors: [
        {id: '1', name: 'Red', hex: '#c30016'},
        {id: '2', name: 'Blue', hex:'#0D253D'},
        {id: '3', name: 'White', hex:'white'},
        {id: '4', name: 'Black', hex:'black'}
      ],
      availableFonts: [
        {id: '1', name: 'Arial'},
        {id: '2', name: 'Times New Roman'},
        {id: '3', name: 'Tahoma'}
      ]
    };
  });
