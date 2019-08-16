angular.module('examsModule').controller('examsCtrl', function ($scope, $state, examsSrvc) {

    $scope.Data = {};

    $scope.Func = {
        goToEnterResultsPage: function () {
            $state.go('home.detection.exams.enterExamResults', {
                possibleGroups: $state.params.possibleGroups,
                enneagramResultGroups: $state.params.enneagramResultGroups
            });
        }
    };

    let Run = function () {};

    Run();
});
