angular.module('enterExamResultsModule').config(['$stateProvider', function($stateProvider) {
    var enterExamResultsStates = [
        {
            name: "home.detection.exams.enterExamResults",
            url: "/enterExamResults",
            templateUrl: "app/modules/detection/exams/enterExamResults/enterExamResults.html",
            controller: 'enterExamResultsCtrl'
        }];
    enterExamResultsStates.forEach(function(state) {
        $stateProvider.state(state);
    });

}]);