angular.module('systemsModule').config(['$stateProvider', function($stateProvider) {
    var basicsStates = [
        {
            name: "home.library.systems",
            url: "/systems",
            templateUrl: "app/modules/library/systems/systems.html",
            controller: 'systemsCtrl'
        }];
    basicsStates.forEach(function(state) {
        $stateProvider.state(state);
    });

}]);