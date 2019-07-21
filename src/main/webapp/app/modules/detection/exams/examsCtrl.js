angular.module('examsModule').controller('examsCtrl', function ($scope, $state, examsSrvc) {

    $scope.Data = {};

    $scope.Func = {
        goToEnneagramExam: function () {
            $state.go('home.detection.exams.enneagramExam', {possibleGroups: $state.params.possibleGroups});
        }
    };

    let Run = function () {};

    Run();
});
