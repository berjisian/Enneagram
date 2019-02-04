angular.module('detectionModule').controller('detectionCtrl', function ($scope, $uibModal) {

    $scope.Data = {
        mode: "none",
        groups: [],
        probableGroups: []
    };

    $scope.Func = {
        prepareGroups: function () {
            for (let i = 1; i < 10; i++)
                $scope.Data.groups.push({
                    value: i,
                    active: false
                });
        },
        onOpenExplanationClick: function () {
            $uibModal.open({
                templateUrl: 'app/modules/detection/explanationModal/explanationModal.html',
                controller: 'explanationModalCtrl',
                windowClass : 'show',
                size: 'lg',
                animation: true,
                resolve: {}
            }).result.then(function () {
                $scope.Data.mode = "selectProbableGroups";
            }, function () {
                $scope.Data.mode = "selectProbableGroups";
            });
        },
        onCancelExplanationClick: function () {
            $(".pre-explanation").slideUp("slow");
        },
        onGroupClick: function (group) {
            let omitted = false;
            for (let i = 0; i < $scope.Data.probableGroups.length; i++) {
                if ($scope.Data.probableGroups[i] === group) {
                    $scope.Data.probableGroups.splice(i, 1);
                    omitted = true;
                }
            }
            if (!omitted)
                $scope.Data.probableGroups.push(group);
            $scope.Data.groups[group - 1].active = !$scope.Data.groups[group - 1].active;
        }
    };

    const Run = function () {
        $scope.Func.prepareGroups();
    };

    Run();
});
