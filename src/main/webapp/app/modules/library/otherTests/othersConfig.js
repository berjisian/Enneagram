angular.module('othersModule').config(['$stateProvider', function($stateProvider) {
    var basicsStates = [
        {
            name: "home.library.others",
            url: "/others",
            templateUrl: "app/modules/library/otherTests/others.html",
            controller: 'othersCtrl'
        }];
    basicsStates.forEach(function(state) {
        $stateProvider.state(state);
    });

}]);