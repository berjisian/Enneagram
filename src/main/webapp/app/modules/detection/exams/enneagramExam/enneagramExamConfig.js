angular.module('enneagramExamModule').config(['$stateProvider', function($stateProvider) {
    var enneagramExamStates = [
        {
            name: "home.detection.exams.enneagramExam",
            url: "/enneagramExam/",
            templateUrl: "app/modules/detection/exams/enneagramExam/enneagramExam.html",
            controller: 'enneagramExamCtrl'
        }];
    enneagramExamStates.forEach(function(state) {
        $stateProvider.state(state);
    });

}]);