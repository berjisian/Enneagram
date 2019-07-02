angular.module('personalityModule').config(['$stateProvider', function($stateProvider) {
    var personalityStates = [
        {
            name: "home.library.personality",
            url: "/personality",
            templateUrl: "app/modules/library/personality/personality.html",
            controller: 'personalityCtrl'
        }];
    personalityStates.forEach(function(state) {
        $stateProvider.state(state);
    });

}]);