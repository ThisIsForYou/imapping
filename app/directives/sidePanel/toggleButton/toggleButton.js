angular.module('imapsNgApp')
  .directive('toggleButton', function ($window) {
    return {
      templateUrl: 'directives/sidePanel/toggleButton/toggleButton.html',
      restrict: 'E',
      controller: function ($scope, $rootScope) {
        $scope.toggleSidePanel = function () {
          $rootScope.checked = !$rootScope.checked;
        };
      }, link: function (scope, element, attr) {
        var w = angular.element($window);
        var moveToggle = function (newValue) {
          scope.toggleTop = newValue.h / 2;
        };
        scope.getWindowDimensions = function () {
          return {
            'h': w.height(),
            'w': w.width()
          };
        };
        scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
          moveToggle(newValue);

        }, true);

        w.bind('resize', function () {
          scope.$apply();
        });
      }
    }
  });
