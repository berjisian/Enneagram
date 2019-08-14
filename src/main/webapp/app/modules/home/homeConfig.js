angular.module('homeModule').config(['$stateProvider', function($stateProvider) {
	var homeStates = [
		{
		    name: "home",
            url : "?possibleGroups?enneagramResultGroups?discResultGroups?mbtiResultGroup?bigResultGroups",
            templateUrl : "app/modules/home/home.html",
            controller : 'homeCtrl'
        }];
	homeStates.forEach(function(state) {
		$stateProvider.state(state);
	});

}]);