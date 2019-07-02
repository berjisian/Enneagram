angular.module('comparisonModule').config(['$stateProvider', function($stateProvider) {
    const detectionStates = [
        {
            name: "home.comparison",
            url: "/comparison",
            templateUrl : "app/modules/comparison/comparison.html",
            controller : 'comparisonCtrl'
        }];
    detectionStates.forEach(function(state) {
        $stateProvider.state(state);
    });

}]);