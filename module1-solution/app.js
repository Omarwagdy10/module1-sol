(function () {
  'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.checkLunch = function () {
      if (!$scope.lunchItems) {
        $scope.message = 'Please enter data first!';
        return;
      }

      var lunchItemsArray = $scope.lunchItems.split(',');
      var itemCount = lunchItemsArray.filter(function (item) {
        return item.trim() !== '';
      }).length;

      if (itemCount <= 3) {
        $scope.message = 'Enjoy!';
      } else {
        $scope.message = 'Too much!';
      }
    };
  }
})();
