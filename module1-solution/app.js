(function () {
  'use strict';

  angular.module('MsgApp', [])
    .controller('MsgController', MsgController);

  MsgController.$inject = ['$scope'];
  function MsgController($scope) {
    $scope.food = "";
    $scope.message = "";



    $scope.checkIfTooMuch = function () {
      if ($scope.food.split(',').length > 3) {
        $scope.message = 'Too Much!'
      } else {
        $scope.message = 'Enjoy!'

      }
    };
  }

})();
