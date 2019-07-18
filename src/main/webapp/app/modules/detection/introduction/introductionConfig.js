angular.module('introductionModule').config(['$stateProvider', function($stateProvider) {
    var introductionStates = [
        {
            name: "home.detection.introduction",
            url: "/introduction",
            templateUrl: "app/modules/detection/introduction/introduction.html",
            controller: 'introductionCtrl'
        }];
    introductionStates.forEach(function(state) {
        $stateProvider.state(state);
    });

}]);