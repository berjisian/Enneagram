angular.module('comparisonModule').config(['$stateProvider', function($stateProvider) {
    const detectionStates = [
        {
            name: "home.detection.exams.enterExamResults.comparison",
            url: "/comparison",
            templateUrl : "app/modules/detection/exams/enterExamResults/comparison/comparison.html",
            controller : 'comparisonCtrl'
        }];
    detectionStates.forEach(function(state) {
        $stateProvider.state(state);
    });

}]);