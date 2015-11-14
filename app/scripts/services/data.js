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

    var data = {
      appName: "",
      shopifyLink: "",
      logoUrl: "",
      appIconUrl: "",
      facebookLogo: "",
      googleLogo: "",
      logoTitle: "",
      logoSubtitle: "",
      headerFont: "",
      bodyFont: "",
      headerColor: "",
      bodyColor: "",
      backgroundColor: "",
      barColor: "",
      buttonColor: "",
      email: ""
    };

    // Public API here
    return {
      getData: function () {
        return data;
      },
      updateData: function () {
        $scope.data = Data.data;
      }
    };
  });
