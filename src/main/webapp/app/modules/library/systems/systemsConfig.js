angular.module('systemsModule').config(['$stateProvider', function($stateProvider) {
    var systemsStates = [
        {
            name: "home.library.systems",
            url: "/systems",
            templateUrl: "app/modules/library/systems/systems.html",
            controller: 'systemsCtrl'
        }];
    systemsStates.forEach(function(state) {
        $stateProvider.state(state);
    });

}]);