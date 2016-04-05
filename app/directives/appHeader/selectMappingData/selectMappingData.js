angular.module('imapsNgApp')
.directive('selectMappingData', function () {
	return {
		templateUrl: 'directives/appHeader/selectMappingData/selectMappingData.html',
		restrict: 'E',
		controller: function ($scope, $rootScope, $http) {
      $scope.feedbackText = "";
      var closeForm = function () {
        $scope.feedbackText = "";
        $scope.feedbackEmail = "";
        $("select-mapping-data .modal").modal('hide');
      };
      $scope.selectMappingData = function (email, text) {
        $http({url: 'http://maps.raleighnc.gov/php/mail.php',
        method: 'GET',
        type: 'jsonp',
        params: {
          fromEmail: email,
          toEmail: 'gis@raleighnc.gov,iMAPSHelpdesk@wakegov.com',
          subject: 'iMAPS 3.0 Beta Feedback',
          message: text,
          from: '',
          to: ''
        }}).success(closeForm).error(closeForm);
      };
		}
	}
});
