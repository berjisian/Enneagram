angular.module('comparisonModule').config(['$stateProvider', function($stateProvider) {
    const comparisonStates = [
        {
            name: "home.detection.exams.enterExamResults.comparison",
            url: "/comparison",
            templateUrl : "app/modules/detection/exams/enterExamResults/comparison/comparison.html",
            controller : 'comparisonCtrl'
        },{
            name: "home.detection.exams.enterExamResults.comparison.interpretation",
            url: "/comparison/interpretation",
            templateUrl : "app/modules/detection/exams/enterExamResults/comparison/interpretation.html",
            controller : 'comparisonCtrl'
        }
    ];
    comparisonStates.forEach(function(state) {
        $stateProvider.state(state);
    });

}]);