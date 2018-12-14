angular.module('detectionModule').config(['$stateProvider', function($stateProvider) {
    var detectionStates = [
        {
            name: "home.detection",
            url: "/detection",
            templateUrl : "app/modules/detection/detection.html",
            controller : 'detectionCtrl'
        }];
    detectionStates.forEach(function(state) {
        $stateProvider.state(state);
    });

}]);