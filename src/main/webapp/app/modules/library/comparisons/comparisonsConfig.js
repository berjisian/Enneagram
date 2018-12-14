angular.module('comparisonsModule').config(['$stateProvider', function($stateProvider) {
    var comparisonsStates = [
        {
            name: "home.library.comparisons",
            url: "/comparisons",
            templateUrl: "app/modules/library/comparisons/comparisons.html",
            controller: 'comparisonsCtrl'
        }];
    comparisonsStates.forEach(function(state) {
        $stateProvider.state(state);
    });

}]);