angular.module('examsModule').config(['$stateProvider', function($stateProvider) {
    var examsStates = [
        {
            name: "home.detection.exams",
            url: "/exams",
            templateUrl: "app/modules/detection/exams/exams.html",
            controller: 'examsCtrl'
        }];
    examsStates.forEach(function(state) {
        $stateProvider.state(state);
    });

}]);