angular.module('homeModule').config(['$stateProvider', function($stateProvider) {
	var homeStates = [
		{
			state : "home",
			config : {
				url : "",
				templateUrl : "app/modules/home/home.html",
				controller : 'homeCtrl',
				resolve : {},
				abstract:true
			}
		}];
	homeStates.forEach(function(state) {
		$stateProvider.state(state.state, state.config);
	});

}]);