angular.module('otherExamsModule').config(['$stateProvider', function($stateProvider) {
    var otherExamsStates = [
        {
            name: "home.detection.exams.bigExam",
            url: "/bigExam/",
            templateUrl: "app/modules/detection/exams/otherExams/otherExams.html",
            controller: 'otherExamsCtrl'
        },{
            name: "home.detection.exams.discExam",
            url: "/discExam/",
            templateUrl: "app/modules/detection/exams/otherExams/otherExams.html",
            controller: 'otherExamsCtrl'
        },{
            name: "home.detection.exams.mbtiExam",
            url: "/mbtiExam/",
            templateUrl: "app/modules/detection/exams/otherExams/otherExams.html",
            controller: 'otherExamsCtrl'
        }
    ];
    otherExamsStates.forEach(function(state) {
        $stateProvider.state(state);
    });

}]);