angular.module('imapsNgApp')
  .directive('appHeader', function () {
    return {
      templateUrl: 'directives/appHeader/appHeader.html',
      restrict: 'E',
      controller: function ($scope, $rootScope) {
        $("app-header").appendTo('body');
        $rootScope.checked = true;
        $rootScope.$watch('config', function (config) {
          if (config) {
            $scope.title = config.title;
          }

        });

        //方法：选择制图数据
        var selectMappingData = function () {
          $("select-mapping-data .modal").modal('show');
        };

        var openAbout = function () {
          $("about .modal").modal('show');
        };

        var openDisclaimer = function () {
          $("disclaimer .modal").modal('show');
        };

        $scope.headerClick = function (item) {
          if (item.click) {
            switch (item.label) {
              case '选择数据':
                selectMappingData();
                break;
              case '符号样式':
                openAbout();
                break;
              case '地图导出':
                openDisclaimer();
                break;
            }
          }
        };

        $scope.btnClick = function () {
          $rootScope.checked = !$rootScope.checked;
          /*				if (!$rootScope.checked) {
           $("base-map-panel").css('right', 0);
           } else {
           $("base-map-panel").css('right', 300);
           }*/

        };
        $scope.titleClick = function () {
          this.title = this.$root.config.title;
        };

      }
    }
  });
