angular.module('discModule').config(['$stateProvider', function($stateProvider) {
    var discStates = [
        {
            name: "home.library.systems.disc",
            url: "/disc",
            templateUrl: "app/modules/library/systems/disc/disc.html",
            controller: 'discCtrl'
        }];
    discStates.forEach(function(state) {
        $stateProvider.state(state);
    });

}]);