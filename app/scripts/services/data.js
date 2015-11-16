'use strict';

/**
 * @ngdoc service
 * @name keystokeApp.Data
 * @description
 * # Data
 * Factory in the keystokeApp.
 */
angular.module('keystokeApp')
  .factory('Data', function () {
    // Service logic
    // ...
return {
   data: {
      appName: '',
      shopifyLink: '',
      logoUrl: '',
      appIconUrl: '',
      facebookLogo: '',
      googleLogo: '',
      logoTitle: '',
      logoSubtitle: '',
      headerFont: '',
      bodyFont: '',
      headerColor: '',
      bodyColor: '',
      backgroundColor: '',
      barColor: '',
      buttonColor: '',
      email: ''
    },
    availableColors: [
      {id: '1', name: 'Red'},
      {id: '2', name: 'Blue'},
      {id: '3', name: 'White'},
      {id: '4', name: 'Black'}
    ],
    availableFonts: [
      {id: '1', name: 'Arial'},
      {id: '2', name: 'Times New Roman'},
      {id: '3', name: 'Tahoma'}
    ]

    // Public API here
    // return {
    //   getData: function () {
    //     return data;
    //   },
    //   updateData: function () {
    //     $scope.data = Data.data;
    //   },
    //   saveStarted: function (appName, shopifyLink, logoUrl, app) {
    //     $scope.data.appName = Data.data.appName;
    //     $scope.data.shopifyLink = Data.data.shopifyLink;
    //     $scope.data.logoUrl = Data.data.logoUrl;
    //     $scope.data.appIconUrl = Data.data.appIconUrl;
    //   }
    };
  });
