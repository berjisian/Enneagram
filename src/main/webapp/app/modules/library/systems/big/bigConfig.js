angular.module('bigModule').config(['$stateProvider', function($stateProvider) {
    var bigStates = [
        {
            name: "home.library.systems.big",
            url: "/big",
            templateUrl: "app/modules/library/systems/big/big.html",
            controller: 'bigCtrl'
        }];
    bigStates.forEach(function(state) {
        $stateProvider.state(state);
    });

}]);