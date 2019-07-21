angular.module('enneagramResultModule').config(['$stateProvider', function($stateProvider) {
    var enneagramResultStates = [
        {
            name: "home.detection.exams.enneagramExam.enneagramResult",
            url: "/enneagramResult/?possibleGroups?resultGroups",
            templateUrl: "app/modules/detection/exams/enneagramExam/enneagramResult/enneagramResult.html",
            controller: 'enneagramResultCtrl'
        }];
    enneagramResultStates.forEach(function(state) {
        $stateProvider.state(state);
    });

}]);