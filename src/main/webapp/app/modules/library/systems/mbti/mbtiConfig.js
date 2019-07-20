angular.module('mbtiModule').config(['$stateProvider', function($stateProvider) {
    var mbtiStates = [
        {
            name: "home.library.systems.mbti",
            url: "/mbti",
            templateUrl: "app/modules/library/systems/mbti/mbti.html",
            controller: 'mbtiCtrl'
        }];
    mbtiStates.forEach(function(state) {
        $stateProvider.state(state);
    });

}]);